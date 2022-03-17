import { MdBook, MdChromeReaderMode } from "react-icons/md";
import { FaUserAlt, FaLock } from "react-icons/fa";
import AccountMenuCard from "../../components/AccountMenuCard";

interface Idata {
  title: string;
  icon: Function;
  path: string;
}

function Account() {
  const data = [
    {
      title: "Orders",
      icon: MdChromeReaderMode,
      path: "orders",
    },
    {
      title: "Edit Profile",
      icon: FaUserAlt,
      path: "profile",
    },
    {
      title: "Change Password",
      icon: FaLock,
      path: "change-password",
    },
    {
      title: "Addresses",
      icon: MdBook,
      path: "addresses",
    },
  ];

  

  return (
    <div className="flex flex-wrap gap-4 justify-center mb-4">
      {data.map((d: Idata, index: number) => (
        <AccountMenuCard key={index} title={d.title} Icon={d.icon} path={d.path} />
      ))}
    </div>
  );
}

export default Account;
