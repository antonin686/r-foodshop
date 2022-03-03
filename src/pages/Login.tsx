import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import { Form, Input } from "../components/FormGroup";

function Login() {
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="flex md:h-screen-75 mt-10 md:m-0 ">
      <div className="m-auto px-10 py-16 shadow-md rounded-lg w-128 ">
        <h1 className="text-center text-4xl mb-6">Login</h1>
        <Form onSubmit={onSubmit} submitBtn="Login">
          <Input name="username" className="c-input" />
          <Input name="password" className="c-input" type="password" />
        </Form>
        <div className="relative">
          <div className="flex gap-4 absolute justify-center w-full top-11">
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="login-icon bg-blue-500"
            >
              <FaFacebookF />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="login-icon bg-red-500"
            >
              <FaGoogle />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="login-icon bg-cyan-500"
            >
              <FaTwitter />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
