import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface Iprops {
  rating: number;
}

function Rating({ rating }: Iprops) {
  rating = parseInt(rating.toString());
  let fillStar = rating;
  let noStar = 5 - rating;
  return (
    <ul className="flex text-2xl text-star">
      {[...Array(fillStar)].map((e, i) => (
        <li key={i}>
          <AiFillStar />
        </li>
      ))}
      {[...Array(noStar)].map((e, i) => (
        <li key={i}>
          <AiOutlineStar />
        </li>
      ))}
    </ul>
  );
}

export default Rating;
