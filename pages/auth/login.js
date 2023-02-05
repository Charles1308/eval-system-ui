import React from "react";
import axios from 'axios';
import Cookies from 'js-cookie';
import useUserStore from '../../hooks/store/useUserStore';
import useNotifStore from '../../hooks/store/useNotifStore';
import { useRouter } from "next/router";

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
import Auth from "../../layouts/Auth.js";

function Login() {
  const router = useRouter();
  const [form, setForm] = React.useState({});
  const setUser = useUserStore(state => state.setUser);
  const { setNotifs } = useNotifStore(state => state);

  const handleFillUp = (fieldName) => (e) => {
    setForm(form => ({
      ...form,
      [fieldName]: e.target.value,
    }));
  }

  const handleSignIn = async (e) => {
    e.preventDefault();
    const URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/sign-in`;

    await axios.post(URL, form)
      .then(res => {
        const { token, type, user, message } = res.data;

        setUser('email', user.firstName);
        setUser('firstName', user.firstName);
        setUser('middleName', user.firstName);
        setUser('lastName', user.firstName);
        setUser('course', user.course);
        setUser('office', user.office);

        Cookies.set('token', token);
        Cookies.set('type', type);

        setNotifs({ message });

        router.push('/admin/dashboard');
      })
      .catch(err => {
        console.log(err);
        setNotifs({
          type: 'danger',
          message: err?.response?.data
        });
      });
  }


  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          {/* <CardHeader className="bg-transparent pb-5">
            <div className="text-muted text-center mt-2 mb-3">
              <small>Sign in with</small>
            </div>
            <div className="btn-wrapper text-center">
              <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={require("assets/img/icons/common/github.svg")}
                  />
                </span>
                <span className="btn-inner--text">Github</span>
              </Button>
              <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={require("assets/img/icons/common/google.svg")}
                  />
                </span>
                <span className="btn-inner--text">Google</span>
              </Button>
            </div>
          </CardHeader> */}
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              Login
            </div>
            <Form role="form" onSubmit={handleSignIn}>
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    onChange={handleFillUp('email')}
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    onChange={handleFillUp('password')}
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                  />
                </InputGroup>
              </FormGroup>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id="customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor="customCheckLogin"
                >
                  <span className="text-muted">Remember me</span>
                </label>
              </div>
              <div className="text-center">
                <Button onClick={handleSignIn} className="my-4" color="primary" type="submit">
                  Sign in
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            {/* <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Forgot password?</small>
            </a> */}
          </Col>
          <Col className="text-right" xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Create new account?</small>
            </a>
          </Col>
        </Row>
      </Col>
    </>
  );
}

Login.layout = Auth;

export default Login;
