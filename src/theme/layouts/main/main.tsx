import { NextPage } from "next";
import Intro from "@/components/intro/intro";

import firstAnimation from "@/../public/assets/images/Animation.json";
import secondAnimation from "@/../public/assets/images/Animation4.json";
import Products from "@/components/products/products";

interface Props {}

const Main: NextPage<Props> = ({}) => {
  return (
    <>
      <Intro animation={firstAnimation} />
      <Intro animation={secondAnimation} isSecond={true} />
      <Products/>
    </>
  );
};

export default Main;
