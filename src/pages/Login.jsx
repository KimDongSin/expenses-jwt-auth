import { useId } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer, Form, FormInfoBox, Input, Label, Title, Wrap } from "../components/UI/styled/Login.styled";

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

export default function Login() {
  const userId = useId();
  const passwordId = useId();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Wrap>
      <Form onSubmit={handleSubmit}>
        <Title>로그인</Title>

        <FormInfoBox className="user__form__info">
          <Label htmlFor={userId}>아이디</Label>
          <Input id={userId} type="text" placeholder="아이디" />
        </FormInfoBox>

        <FormInfoBox className="user__form__info">
          <Label htmlFor={passwordId}>비밀번호</Label>
          <Input id={passwordId} type="password" placeholder="비밀번호" />
        </FormInfoBox>

        <ButtonContainer>
          <StyledLink to="/login">로그인</StyledLink>
          <StyledLink to="/join">회원가입</StyledLink>
        </ButtonContainer>
      </Form>
    </Wrap>
  );
}
