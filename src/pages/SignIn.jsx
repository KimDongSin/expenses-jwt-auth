import { useId, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  ButtonContainer,
  Form,
  FormInfoBox,
  Input,
  Label,
  Title,
  Wrap,
} from "../components/UI/styled/login.styled";
import { login } from "../lib/api/auth";

const StyledLink = styled(Link)`
  width: 48%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #6e8efb;
  color: white;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #5a77d4;
  }
`;

export default function SignIn({ setUser }) {
  const [id, SetId] = useState("");
  const [Pwd, setPwd] = useState("");
  const formId = useId();
  const formPwd = useId();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSignIn = async () => {
    const { userId, nickname, avatar } = await login({ id: id, password: Pwd });

    setUser({ userId, nickname, avatar });

    console.log("로그인 API 응답값 :", userId, nickname, avatar);
  };

  return (
    <Wrap>
      <Form onSubmit={handleSubmit}>
        <Title>로그인</Title>

        <FormInfoBox className="user__form__info">
          <Label htmlFor={formId}>아이디</Label>
          <Input
            id={formId}
            type="text"
            placeholder="아이디"
            onChange={(e) => SetId(e.target.value)}
          />
        </FormInfoBox>

        <FormInfoBox className="user__form__info">
          <Label htmlFor={formPwd}>비밀번호</Label>
          <Input
            id={formPwd}
            type="password"
            placeholder="비밀번호"
            onChange={(e) => setPwd(e.target.value)}
          />
        </FormInfoBox>

        <ButtonContainer>
          <StyledLink onClick={handleSignIn}>로그인</StyledLink>
          <StyledLink to="/sign-up">회원가입</StyledLink>
        </ButtonContainer>
      </Form>
    </Wrap>
  );
}
