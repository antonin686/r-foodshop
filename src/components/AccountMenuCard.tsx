import { Link } from "react-router-dom";

interface Iprops {
  title: string;
  Icon: Function;
  path: string;
}
function AccountMenuCard({ title, Icon, path }: Iprops) {
  return (
    <Link
      to={path}
      className="flex flex-col border justify-center rounded-lg items-center shadow-md 
        md:p-8 p-4 gap-4 w-60 hover:border hover:border-theme cursor-pointer"
    >
      <div className="rounded-full p-2 bg-theme-light">
        <Icon className="text-theme text-2xl" />
      </div>
      {title}
    </Link>
  );
}

export default AccountMenuCard;
