import { useId } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  width: 400px;
  background-color: white;
  border-radius: 15px;
  padding: 30px 40px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #333;
`;

const Input = styled.input`
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  &:focus {
    border-color: #6e8efb;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

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

const FormInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export default function Login() {
  const userId = useId();
  const passwordId = useId();
  const nameId = useId();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Wrap>
      <Form onSubmit={handleSubmit}>
        <Title>회원가입</Title>

        <FormInfoBox className="user__form__info">
          <Label htmlFor={userId}>아이디</Label>
          <Input id={userId} type="text" placeholder="아이디" />
        </FormInfoBox>

        <FormInfoBox className="user__form__info">
          <Label htmlFor={passwordId}>비밀번호</Label>
          <Input id={passwordId} type="password" placeholder="비밀번호" />
        </FormInfoBox>

        <FormInfoBox className="user__form__info">
          <Label htmlFor={nameId}>닉네임</Label>
          <Input id={nameId} type="text" placeholder="닉네임" />
        </FormInfoBox>

        <ButtonContainer>
          <StyledLink to="/login">로그인</StyledLink>
          <StyledLink to="/join">회원가입</StyledLink>
        </ButtonContainer>
      </Form>
    </Wrap>
  );
}
