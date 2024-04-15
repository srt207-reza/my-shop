import { NextPage } from "next";
import Intro from "@/components/intro";

import firstAnimation from "@/../public/assets/images/Animation.json";
import secondAnimation from "@/../public/assets/images/Animation4.json";
import Products from "@/components/products";
import Slider from "@/components/slider";

interface Props {}

const Main: NextPage<Props> = ({}) => {
  return (
    <>
      <Slider />
      <Intro animation={firstAnimation} />
      <Intro animation={secondAnimation} isSecond={true} />
      <Products />
    </>
  );
};

export default Main;
