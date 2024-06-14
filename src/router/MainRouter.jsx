import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
<<<<<<< HEAD

function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/sign-in" element={<SignIn />} />
=======
import { useEffect, useState } from "react";
import { getUserInfo } from "../lib/api/auth";
import Layout from "../components/Layout/Layout";
import Profile from "../pages/Profile";

function MainRouter() {
  const [user, setUser] = useState(null);

  /*
    새로고침 대응

    새로고침하면 user state값은 null이지만,
    getUserInfo로 회원가입 정보를 엑세스 토큰 기반으로 하여
    응답받은 데이터를 받아와서 setUser로 state를 업데이트한다.

    기대효과: 새로고침을 하더라도 로그인된 유저정보가 뜨게 된다.
  */

  useEffect(() => {
    getUserInfo().then((res) => {
      console.log("현재 로그인된 유저 정보 ::", res);
      setUser({
        userId: res.id,
        nickname: res.nickname,
        avater: res.avater,
      });
    });
  }, []);

  console.log("로그인된 유저 정보 ::", user);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout user={user} setUser={setUser} />}>
          <Route index element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Route>

        <Route path="/profile" element={<Profile user={user} setUser={setUser} />} />
        <Route path="/sign-in" element={<SignIn setUser={setUser} />} />
>>>>>>> dev
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
