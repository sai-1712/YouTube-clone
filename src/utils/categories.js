import { HiOutlineMusicalNote } from "react-icons/hi2";
import { BsLaptop } from "react-icons/bs";
import { BsEmojiLaughing } from "react-icons/bs";
import { TiCodeOutline } from "react-icons/ti";
import { IoFastFoodSharp } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { HiMusicalNote } from "react-icons/hi2";
import { TiCode } from "react-icons/ti";
import { BsFillEmojiLaughingFill } from "react-icons/bs";
import { BsLaptopFill } from "react-icons/bs";
import { IoFastFoodOutline } from "react-icons/io5";
import { IoGameController } from "react-icons/io5";
import { IoGameControllerOutline } from "react-icons/io5";
import { BsStar } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
// import {SiYoutubegaming} from "react-icons/si";
 
const categories = [
  {
    id: 1,
    name: "Home",
    link: "Home",
    icon: <AiOutlineHome style={{ height: "22px", width: "30px" }} />,
    active: <AiFillHome style={{ height: "22px", width: "30px" }} />,
  },
  {
    id: 2,
    name: "Coding",
    link: "React JS",
    icon: <TiCodeOutline style={{ height: "22px", width: "30px" }} />,
    active: <TiCode style={{ height: "22px", width: "30px" }} />,
  },
  {
    id: 3,
    name: "Music",
    link: "Trending Telugu Music",
    icon: <HiOutlineMusicalNote style={{ height: "22px", width: "30px" }} />,
    active: <HiMusicalNote style={{ height: "22px", width: "30px" }} />,
  },
  {
    id: 4,
    name: "Comedy",
    link: "Comedy",
    icon: <BsEmojiLaughing style={{ height: "22px", width: "30px" }} />,
    active: (
      <BsFillEmojiLaughingFill style={{ height: "22px", width: "30px" }} />
    ),
  },
  {
    id: 5,
    name: "Technology",
    link: "Technology",
    icon: <BsLaptop style={{ height: "22px", width: "30px" }} />,
    active: <BsLaptopFill style={{ height: "22px", width: "30px" }} />,
  },
  {
    id: 6,
    name: "Food",
    link: "Food",
    icon: <IoFastFoodOutline style={{ height: "22px", width: "30px" }} />,
    active: <IoFastFoodSharp style={{ height: "22px", width: "30px" }} />,
  },
  {
    id: 7,
    name: "Gaming",
    link: "Gaming",
    icon: <IoGameControllerOutline style={{ height: "22px", width: "30px" }} />,
    active: <IoGameController style={{ height: "22px", width: "30px" }} />,
  },
  {
    id: 8,
    name: "Travis Scott",
    link: "Travis Scott",
    icon: <BsStar style={{ height: "22px", width: "30px" }} />,
    active: <BsStarFill style={{ height: "22px", width: "30px" }} />,
  },
];
export default categories;
