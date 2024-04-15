import { NextPage } from "next";
import { useState } from "react";

import { Box } from "@mui/material";
import { useCookies } from "react-cookie";

import Input from "@/components/input";
import callApi from "@/auth/service";
import Toast from "@/components/sweetalert";

const Login: NextPage = () => {
  const [, setCookie] = useCookies(["userToken"]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const successLogin = async (token: string) => {
    location.replace("/")
    setCookie("userToken", token, {
      maxAge: 3600 * 24,
      domain: "localhost",
      path: "/",
    });
    await Toast.fire({
      icon: "success",
      title: "لاگین با موفقیت انجام شد",
    });
  };

  const errorLogin = async () => {
    await Toast.fire({
      icon: "error",
      title: "کاربر یافت نشد",
    });
    setUsername("");
    setPassword("");
  };

  const submit = async (e: any) => {
    e.preventDefault();
    if (username && password) {
      try {
        const res = await callApi().post("auth/login", { username, password });
        if (res.status == 200) {
          // not secure for xxs atack !!!
          successLogin(res.data.token);
        }
      } catch {
        errorLogin();
      }
    }
  };

  return (
    <Box className="login-box" sx={loginBoxStyle}>
      <p>Top Dev</p>
      <form>
        <Input name="Username" label="نام کاربری" value={username} change={setUsername} />
        <Input
          name="Password"
          value={password}
          label="پسورد"
          change={setPassword}
          type="password"
        />
        <a onClick={submit}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          ورود
        </a>
      </form>
    </Box>
  );
};

const loginBoxStyle = {
  width: { xs: "100%", md: "400px" },
  height: { xs: "100%", md: "auto" },
  padding: { xs: "15rem 2rem", md: "3rem" },
};

export default Login;
