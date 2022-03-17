import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { Link, UNSAFE_NavigationContext, useLocation } from "react-router-dom";
import { BrowserHistory } from "history";

interface Iprops {
  start: string;
}

interface Icrumb {
  title: string | Element;
  to?: string;
}
function Breadcrumb({ start }: Iprops) {
  const [crumbs, setCrumbs] = useState<Icrumb[]>([]);

  const navigation = useContext(UNSAFE_NavigationContext).navigator as BrowserHistory;
  useLayoutEffect(() => {
    if (navigation) {
      navigation.listen((locationListener) => {
        let pathname = locationListener.location.pathname;
        let path = pathname.replace(start, "");
        let splited: any = path.split("/").filter(Boolean);
        if (splited) {
          let newCrumb: Icrumb[] = [];
          let currPath = start;
          splited.forEach((item: string, index: number) => {
            if (index == splited.length - 1) {
              newCrumb.push({ title: item });
            } else {
              currPath = currPath + "/" + item;
              newCrumb.push({ title: item, to: currPath });
            }
          });
          setCrumbs(newCrumb);
          //console.log(splited);
        }
      });
    }
  }, [navigation]);

  return (
    <div className="text-lg flex gap-1 items-center h-4">
      <Link className="flex items-center gap-1" to={start}>
        <p className="text-theme hover:underline">
          <FaHome />
        </p>
      </Link>
      {crumbs.map((item: any, index: number) => (
        <div className="flex capitalize" key={index}>
          <>
            <span className="mx-2">/</span>
            {item?.to ? (
              <Link className="flex items-center " to={item.to}>
                <p className="text-theme hover:underline">
                  {item.title.replace("-", " ")}
                </p>
              </Link>
            ) : (
              <div className="flex text-gray-500 items-center">
                {item.title.replace("-", " ")}
              </div>
            )}
          </>
        </div>
      ))}
    </div>
  );
}

export default Breadcrumb;
