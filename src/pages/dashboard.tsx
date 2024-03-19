import { NextPage } from "next";

import { Container } from "@mui/material";

import Header from "@/theme/layouts/header/header";
import Main from "@/theme/layouts/main/main";
import Footer from "@/theme/layouts/footer/footer";

interface Props {}

const Dashboard: NextPage<Props> = () => {
  return (
    <>
      <Header />
      <Container>
        <Main />
      </Container>
      <div className="custom-divider-bottom">
        <Container>
          <Footer />
        </Container>
      </div>
    </>
  );
};

export default Dashboard;
