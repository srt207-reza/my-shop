"use client";
import loadingAnimation from "@/../public/loading.svg";
import Image from "next/image";

const Loading: React.FC = () => {
  return (
    <Image
      style={{ position: "absolute", top: "35%", left: "45%" }}
      alt="test"
      src={loadingAnimation}
    />
  );
};

export default Loading;
