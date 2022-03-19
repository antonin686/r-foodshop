import axios from "axios";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { Form, Input } from "../components/FormGroup";
import SocialLoginBtn from "../components/SocialLoginBtn";
import { loginUrl, userDetailUrl } from "../helpers/apiLinks";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { toast, timedModal } from "../helpers/SweetAlert";
import color from "../helpers/colors";

function Login() {
  const auth = useAuth();
  const navigate = useNavigate();
  const location: any = useLocation();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data: any) => {
    axios
      .post(loginUrl, data)
      .then((res) => {
        axios
          .get(userDetailUrl, {
            headers: {
              Authorization: "JWT " + res.data.access,
            },
          })
          .then((resp) => {
            toast
              .fire({
                icon: "success",
                title: "Credentials Matched",
                position: "bottom",
                background: color.success,
                color: "#fff",
              })
              .then(() => {
                auth.login({
                  token: res.data.access,
                  user: resp.data,
                });
                navigate(from, { replace: true });
              });
          })
          .catch((error) => {
            timedModal.fire({
              icon: "error",
              title: "Credentials Invalid",
            });
          });
      })
      .catch((error) => {
        timedModal.fire({
          icon: "error",
          title: "Credentials Invalid",
        });
      });
  };

  return (
    <div className="flex md:h-screen-75 my-10 md:m-0">
      <div className="m-auto px-10 py-10 shadow-md rounded-lg w-128 bg-gray-50">
        <h1 className="text-center text-4xl mb-6">Login</h1>
        <Form onSubmit={onSubmit} submitBtn="Login">
          <Input name="username" className="c-input" />
          <Input name="password" className="c-input" type="password" />
        </Form>
        <div className="strike mt-4">
          <span>
            <Link className="text-red-700 hover:text-red-900" to="/register">
              Don't have an account?
            </Link>
          </span>
        </div>
        <div className="relative">
          <div className="flex gap-4 absolute justify-center w-full top-5">
            <SocialLoginBtn cStyles="bg-blue-500" Icon={FaFacebookF} />
            <SocialLoginBtn cStyles="bg-red-500" Icon={FaGoogle} />
            <SocialLoginBtn cStyles="bg-cyan-500" Icon={FaTwitter} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
