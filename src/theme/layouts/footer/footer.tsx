import { Box, CardMedia } from "@mui/material";
import { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <div className="container-footer" id="about">
      <h2>ضمانت تاپ دو برای کلیه محصولات</h2>

      <p className="paragraph">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
        خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
        داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
        رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
        پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
      </p>

      <div className="links">
        <ul className="list">
          <li className="list-items hr lable-green">فروشگاه</li>
          <li className="list-items hr">ارتباط با ما</li>
          <li className="list-items">درباره ما</li>
        </ul>
        <ul className="list">
          <li className="list-items hr">مقالات</li>
          <li className="list-items hr">قوانین و مقررات</li>
          <li className="list-items lable-red">آموزش پایتون</li>
        </ul>
        <Box className="work-paragraph" sx={boxStyle}>
          <p className="work-time-header">ساعات کاری :</p>
          <p className="work-time">
            شنبه تا چهارشنبه 8 صبح تا 18 عصر پنج شنبه‌ها ساعت 8 صبح تا 12 ظهر
          </p>
        </Box>
        <Box className="call-us" sx={boxStyle}>
          <p className="title">ارتباط با ما :</p>
          <p className="email">
            ایمیل :<a>test@gmail.com</a>
          </p>
          <p className="phone">شماره تماس : 09334008385</p>
        </Box>
        <CardMedia
          component="img"
          sx={{ objectFit: "fill" , ...boxStyle }}
          image="https://codenight.ir/assets/images/zarinpal.svg"
          alt="img"
        />
      </div>
      <div className="footer-primary pull-left">
        <div className="copyright">
          کلیه حقوق برای {String.fromCodePoint(0x00a9)}{" "}
          <strong className="copyright-footer">تاپ دو</strong> محفوظ است 1402
        </div>
      </div>
    </div>
  );
};

const boxStyle = {
  display: { xs: "none", md: "flex" },
  flexDirection: "column",
};

export default Footer;
