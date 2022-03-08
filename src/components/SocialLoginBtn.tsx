import { motion } from "framer-motion";

interface Iprops {
  cStyles: string;
  Icon: Function;
}
function SocialLoginBtn({ cStyles, Icon }: Iprops) {
  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      className={"login-icon " + cStyles}
    >
      <Icon />
    </motion.button>
  );
}

export default SocialLoginBtn;
