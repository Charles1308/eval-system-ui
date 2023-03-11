import React from "react";
import axios from "@config/axios";
import useUserStore from '@hooks/store/useUserStore';
import useNotifStore from '@hooks/store/useNotifStore';
import Cookies from 'js-cookie';
import { useRouter } from "next/router";
import PERMISSIONS from "@utils/consts/permissions";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
// layout for this page
import Auth from "layouts/Auth";

function Register() {
  const setUser = useUserStore(state => state.setUser);
  const { setNotifs } = useNotifStore(state => state);
  const router = useRouter();
  const [form, setForm] = React.useState({ roles: 'DEAN', course: 'BSIT' });

  const handleFillUp = (fieldName) => (e) => {
    setForm(form => ({
      ...form,
      [fieldName]: e.target.value,
    }));
  }

  const handleSignUp = async (e) => {
    e.preventDefault();

    const URL = '/v1/auth/sign-up';
    let payload = null;

    if (form.password === form.confirmPassword) {
      payload = { ...form };
      delete payload.confirmPassword;  
    } else {
      return;
    }
    
    await axios.post(URL, payload)
      .then(res => {
        const { token, type, user, message } = res.data;

        setUser('email', user.firstName);
        setUser('firstName', user.firstName);
        setUser('middleName', user.firstName);
        setUser('lastName', user.firstName);
        setUser('course', user.course);
        setUser('roles', user.roles);

        Cookies.set('token', token);
        Cookies.set('type', type);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        setNotifs({ message });
        router.push('/admin/dashboard');
      })
      .catch(err => {
        console.log(err);
        if (err?.response?.data?.errors?.length) {
          err.response.data.errors.foreach(error => {
            setNotifs({
              type: 'danger',
              message: error.message || 'Please try again after some time.',
            });
          })
        } else {
          setNotifs({
            type: 'danger',
            message: err?.response?.data?.message || 'Please try again after some time.',
          });
        }
      });
  }

  return (
    <>
      <Col lg="6" md="8">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              Register
            </div>
            <Form role="form" onSubmit={handleSignUp}>
              {/* first name */}
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="First Name" type="text" onChange={handleFillUp('firstName')}/>
                </InputGroup>
              </FormGroup>

              {/* middle name */}
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Middle Name" type="text" onChange={handleFillUp('middleName')}/>
                </InputGroup>
              </FormGroup>

              {/* last name */}
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Last Name" type="text" onChange={handleFillUp('lastName')}/>
                </InputGroup>
              </FormGroup>

              {/* Email */}
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                    onChange={handleFillUp('email')}
                  />
                </InputGroup>
              </FormGroup>

              {/* Course */}
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-books" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input id="exampleFormControlSelect1" type="select" placeholder="Course" onChange={handleFillUp('course')}>
                    <option> BSIT </option>
                    <option> COMSCI </option>
                  </Input>
                </InputGroup>
              </FormGroup>

              {/* role */}
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-collection" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input id="exampleFormControlSelect1" type="select" onChange={handleFillUp('roles')}>
                    {/* <option> Professor </option>
                    <option> Instructor </option>
                    <option> Guest Lecturer </option>
                    <option> Assistant Professor </option>
                    <option> Associate Professor </option>
                    <option> Administrative Staff </option>
                    <option> Coordinator (Associate Professor/Professor) </option>
                    <option> Coordinator  (Instructor/Assistant Professor) </option> */}
                    {Object.keys(PERMISSIONS).map(key => (
                      <option key={key}>{key}</option>
                    ))}
                  </Input>
                </InputGroup>
              </FormGroup>

              {/* Password */}
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                    onChange={handleFillUp('password')}
                  />
                </InputGroup>
              </FormGroup>

              {/* Confirm Password */}
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Confirm Password"
                    type="password"
                    autoComplete="new-password"
                    onChange={handleFillUp('confirmPassword')}
                  />
                </InputGroup>
              </FormGroup>
              {/* <div className="text-muted font-italic">
                <small>
                  password strength:{" "}
                  <span className="text-success font-weight-700">strong</span>
                </small>
              </div> */}
              {/* <Row className="my-4">
                <Col xs="12">
                  <div className="custom-control custom-control-alternative custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="customCheckRegister"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheckRegister"
                    >
                      <span className="text-muted">
                        I agree with the{" "}
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div>
                </Col>
              </Row> */}
              <div className="text-center">
                <Button onClick={handleSignUp} className="mt-4" color="primary" type="submit">
                  Create account
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}

Register.layout = Auth;

export default Register;
