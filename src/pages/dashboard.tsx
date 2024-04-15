import { NextPage } from "next";

import { Container } from "@mui/material";

import Header from "@/theme/layouts/header/header";
import Main from "@/theme/layouts/main/main";
import Footer from "@/theme/layouts/footer/footer";
import { useAppSelector } from "@/redux/hook";
import { selectToggleHandler } from "@/redux/store/products";
import Loading from "@/components/loading";
import { useEffect } from "react";

const Dashboard: NextPage = () => {
  const isLoading = useAppSelector(selectToggleHandler);

  useEffect(() => {}, [isLoading]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
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
      )}
    </>
  );
};

export default Dashboard;
