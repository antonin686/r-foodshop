import axios from "axios";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import { Form, Input, InputPass } from "../components/FormGroup";
import SocialLoginBtn from "../components/SocialLoginBtn";
import { registerUrl } from "../helpers/apiLinks";
import { useNavigate } from "react-router-dom";
import { timedModal } from "../helpers/SweetAlert";

function Register() {
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    axios.defaults.withCredentials = true;
    axios.post(registerUrl, data).then((res) => {
      timedModal.fire({
        icon: "success",
        title: "Successfully Registered",
      }).then(() => {
        navigate("/login");
      })
    });
  };

  return (
    <div className="flex my-10 ">
      <div className="m-auto px-10 py-16 shadow-md rounded-lg w-128 bg-gray-50">
        <h1 className="text-center text-4xl mb-6">Register</h1>
        <Form onSubmit={onSubmit} submitBtn="Register">
          <Input name="first_name" label={"First Name"} />
          <Input name="last_name" label={"Last Name"}/>
          <Input name="username" />
          <InputPass name="password" />
          <Input name="phone" />
          <Input name="email" />
        </Form>
        <div className="relative">
          <div className="flex gap-4 absolute justify-center w-full top-11">
            <SocialLoginBtn cStyles="bg-blue-500" Icon={FaFacebookF} />
            <SocialLoginBtn cStyles="bg-red-500" Icon={FaGoogle} />
            <SocialLoginBtn cStyles="bg-cyan-500" Icon={FaTwitter} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
