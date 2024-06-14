import { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getUserInfo } from "../../lib/api/auth";

const Navbar = styled.nav`
  background-color: #1f2937;
  color: white;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
`;

const NavItem = styled(Link)`
  color: white;
  margin: 0 15px;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s;

  &:hover {
    color: #f3f4f6;
  }
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
`;

const Useravatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  border: 2px solid #ffffff33;
`;

const UserName = styled.span`
  color: white;
  margin-right: 20px;
  font-weight: 500;
`;

const LogoutButton = styled.button`
  padding: 8px 16px;
  background-color: #ef4444;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #dc2626;
  }
`;

const PageContainer = styled.div`
  padding: 100px 20px;
  min-height: 100vh;
  margin-top: 60px;
`;

const Logo = styled.h1`
  font-size: 24px;
  margin: 0;
  font-weight: 700;
  letter-spacing: 1px;
  color: #f3f4f6;
`;

/* 
    Layout 컴포넌트가 렌더링될 때 마다 엑세스 토큰 체크하고
    토큰만료가 되었는지도 체크해서 유저도 매번 업데이트 시킨다.
*/
export default function Layout({ user, setUser }) {
  const navigate = useNavigate();

  /*
    새로고침 대응

    새로고침하면 user state값은 null이지만,
    getUserInfo로 회원가입 정보를 엑세스 토큰 기반으로 하여
    응답받은 데이터를 받아와서 setUser로 state를 업데이트한다.

    기대효과: 새로고침을 하더라도 로그인된 유저정보가 뜨게 된다.
  */

  useEffect(() => {
    getUserInfo().then((res) => {
      if (res) {
        setUser({
          userId: res.id,
          nickname: res.nickname,
          avatar: res.avatar,
        });
      }
      else{ // 토큰이 유효하지 않을 시 로그아웃 처리
        handleLogout();
      }
    });
  }, []);

  const handleLogout = () => {
    setUser(null);
    navigate("/sign-in");
    localStorage.clear();
  }

  return (
    <>
       <Navbar>
        <NavItems>
          <NavItem to="/">HOME</NavItem>
          <NavItem to="/profile">내 프로필</NavItem>
        </NavItems>
        <UserProfile>
          {user && ( // user가 있을 때만.
            <>
              <Useravatar src={user.avatar} alt="User avatar" />
              <UserName>{user.nickname}</UserName>
              <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
            </>
          )}
        </UserProfile>
      </Navbar>
      <PageContainer>
        <Outlet />
      </PageContainer>
    </>
  );
}
