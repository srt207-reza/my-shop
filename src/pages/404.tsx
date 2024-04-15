import { Player } from "@lottiefiles/react-lottie-player";
import { NextPage } from "next";
import animation from "@/../public/assets/images/404.json";

const Custom404: NextPage = () => {
  return (
    <Player
      src={animation}
      style={{ width: "50rem", textAlign: "center", marginTop: "5rem" }}
      className="player"
      loop
      autoplay
    />
  );
};

export default Custom404;
