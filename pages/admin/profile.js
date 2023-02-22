import React from "react";
import Cookies from "js-cookie";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import UserHeader from "@components/Headers/UserHeader.js";
import useUserStore from "@hooks/store/useUserStore";
import axios from "@config/axios";
import useNotifStore from "@hooks/store/useNotifStore";
import PERMISSIONS from "@utils/consts/permissions";

function Profile() {  
  const { 
    setBulk,
    clearUser, 
    firstName,
    middleName,
    lastName,
    fullName,
    course,
    role,
    email,
    setUser,
    updateCount,
  } = useUserStore(state => state);
  const { setNotifs } = useNotifStore(state => state);

  const [confirmPass, setConfirmPass] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');

  // const [oldData, setOldData] = React.useState({});

  const isPasswwordMatched = (confirmPass.length && confirmPass === newPassword);
  // const hasUpdate = updateCount > oldData?.updateCount;

  const payload = {
    firstName,
    middleName,
    lastName,
    fullName,
    course,
    role,
    email,
  };

  // React.useEffect(() => {
  //   setOldData({ ...payload, updateCount });

  //   return () => {
  //     if (hasUpdate) {
  //     }
  //   }
  // }, [hasUpdate]);

  const handleIsPasswordCorrect = async () => {
    const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/password-check`;

    return await axios.post(url, { password })
    .then(res => res.data)
    .catch(err => console.error(err));
  }

  const handleUpdate = async () => {
    if (newPassword.length && isPasswwordMatched) {
      const isPasswordCorrect = await handleIsPasswordCorrect();

      if (!isPasswordCorrect) {
        return setNotifs({
          message: "Password is incorrect!",
          type: "danger",
        });
      } else {
        payload.password = newPassword;
      }
    }

    const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/update`;

    await axios.put(url, payload)
    .then(res => {
      const { user, token, message } = res.data;

      Cookies.set('token', token);
      setBulk(user);

      console.log(message);
      setNotifs({ message });

      setConfirmPass('');
      setNewPassword('');
      setPassword('');
    })
    .catch(err => {
      console.error(err);

      if (err?.response?.data?.errors?.length) {
        err.response.data.errors.forEach(error => {
          setNotifs({ message: err.message || "Please try again", type: "danger" });
        })
      } else {
        setNotifs({ message: "Please try again", type: "danger" });
      }
    })
  }

  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            <Card className="card-profile shadow-lg">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/user-2517433_1280.png")}
                      />
                    </a>
                  </div>
                </Col>
              </Row>
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                <div className="d-flex justify-content-between">
                  {/* <Button
                    className="mr-4"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Connect
                  </Button>
                  <Button
                    className="float-right"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Message
                  </Button> */}
                </div>
              </CardHeader>
              <CardBody className="pt-0 pt-md-4">
                <Row>
                  <div className="col">
                    <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                      {/* <div>
                        <span className="heading">22</span>
                        <span className="description">Friends</span>
                      </div>
                      <div>
                        <span className="heading">10</span>
                        <span className="description">Photos</span>
                      </div>
                      <div>
                        <span className="heading">89</span>
                        <span className="description">Comments</span>
                      </div> */}
                    </div>
                  </div>
                </Row>
                <div className="text-center">
                  <h3>
                    { fullName }
                  </h3>
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin mr-2" />
                    { course }
                  </div>
                  <div className="h5 mt-4">
                    <i className="ni business_briefcase-24 mr-2" />
                    { role }
                  </div>
                  <div>
                    <i className="ni education_hat mr-2" />
                    Batangas State University
                  </div>
                  {/* <hr className="my-4" />
                  <p>
                  </p> */}
                  {/* <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    
                  </a> */}
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">My account</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={handleUpdate}
                      size="sm"
                    >
                      Update
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    User information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Email Address
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={e => setUser('email', e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            First Name
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-first-name"
                            placeholder="First name"
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={e => setUser('firstName', e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-middle-name"
                          >
                            Middle Name
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-middle-name"
                            placeholder="Middle name"
                            type="text"
                            name="middleName"
                            value={middleName}
                            onChange={e => setUser('middleName', e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Last Name
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-last-name"
                            placeholder="Last name"
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={e => setUser('lastName', e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-course"
                          >
                            role
                          </label>
                          <Input id="exampleFormControlSelect1" type="select" onChange={e => setUser('role', e.target.value)}>
                            {Object.keys(PERMISSIONS).map(key => (
                              <option key={key}>{key}</option>
                            ))}
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-course"
                          >
                            Course
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-course"
                            placeholder="Course"
                            type="text"
                            name="course"
                            value={course}
                            onChange={e => setUser('course', e.target.value)}
                          />
                        </FormGroup>
                      </Col>  
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Address */}
                  <h6 className="heading-small text-muted mb-4">
                    Privacy Information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            New Password
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-new-password"
                            placeholder="Enter new password"
                            type="password"
                            name="password"
                            value={newPassword}
                            onChange={e => setNewPassword(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      {!!newPassword.length &&
                        <>
                          <Col md="12">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-confirm-password"
                              >
                                Confirm Password
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-confirm-password"
                                placeholder="Confirm new password"
                                type="password"
                                value={confirmPass}
                                onChange={e => setConfirmPass(e.target.value)}
                              />
                              {!!confirmPass.length && 
                              !isPasswwordMatched && 
                              <small className="text-danger">Doesn't Match</small>}
                            </FormGroup>
                          </Col>
                          <Col md="12">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-verify-password"
                              >
                                Password
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-password"
                                placeholder="Enter password"
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                              />
                            </FormGroup>
                          </Col>
                        </>
                      }
                    </Row>
                  </div>
                  {/* <hr className="my-4" />
                  <h6 className="heading-small text-muted mb-4">About me</h6>
                  <div className="pl-lg-4">
                    <FormGroup>
                      <label>About Me</label>
                      <Input
                        className="form-control-alternative"
                        placeholder="A few words about you ..."
                        rows="4"
                        defaultValue="A beautiful Dashboard for Bootstrap 4. It is Free and
                          Open Source."
                        type="textarea"
                      />
                    </FormGroup>
                  </div> */}
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

Profile.layout = Admin;

export default Profile;
