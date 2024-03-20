"use client"
import { Box, Typography } from "@mui/material";
import { Player } from "@lottiefiles/react-lottie-player";

interface Props {
  animation: object;
  isSecond?: boolean;
}

const Intro: React.FC<Props> = ({ animation, isSecond }) => {
  const styleBox: object = {
    display: "flex",
    alignItems: "center",
    flexDirection: { xs: "column", md: isSecond ? "row-reverse" : "row" },
    justifyContent: "space-between",
  };

  return (
    <Box sx={styleBox}>
      <Player src={animation} className="player" loop autoplay />

      <Typography variant="subtitle1" sx={{ maxWidth: "40rem", mx: 2 }}>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
        داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان
        رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات
        پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم
      </Typography>
    </Box>
  );
};

export default Intro;
