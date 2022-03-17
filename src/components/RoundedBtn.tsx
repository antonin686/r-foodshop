import { motion } from "framer-motion";

interface Iprops {
  Icon: Function;
  title: string;
  sub?: string;
  className?: string;
  href?: string;
  onClick?: React.MouseEventHandler;
}

function RoundedBtn({ Icon, title, sub, href, className, onClick }: Iprops) {
  const BtnInside = () => {
    return (
      <>
        <div className="flex items-center gap-2">
          <div>
            <Icon className=" text-white text-2xl" />
          </div>
          <div className="border-l border-white">
            . <br /> .
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center text-white">
          <p className="text-lg">{title}</p>
          {sub && <p className="text-sm">{sub}</p>}
        </div>
      </>
    );
  };
  return (
    <>
      {href ? (
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={
            "flex items-center border border-theme rounded-full p-5 gap-2 hover:bg-gray-900 " +
            className
          }
          href={href}
        >
          <BtnInside />
        </motion.a>
      ) : (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={
            "flex items-center border border-theme rounded-full p-5 gap-2 hover:bg-gray-900 " +
            className
          }
          onClick={onClick}
        >
          <BtnInside />
        </motion.button>
      )}
    </>
  );
}

export default RoundedBtn;
