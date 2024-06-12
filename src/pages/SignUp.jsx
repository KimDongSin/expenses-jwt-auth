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

export default function SignUp() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const formId = useId();
  const formPwd = useId();
  const formName = useId();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleRegister = () => {
    console.log(id);
    console.log(password);
    console.log(nickname);

    if (id.trim().length < 4 || id.trim().length > 10) {
      alert("아이디는 4글자에서 10글자 이내로만 가능합니다!");
      return;
    }

    if (password.trim().length < 4 || password.trim().length > 15) {
      alert("패스워드 4글자에서 15글자 이내로만 가능합니다!");
      return;
    }

    if (nickname.trim().length < 4 || nickname.trim().length > 10) {
      alert("닉네임은 4글자에서 10글자 이내로만 가능합니다!");
       return;
    }

    console.log("회원가입 API호출!!");
  };

  return (
    <Wrap>
      <Form onSubmit={handleSubmit}>
        <Title>회원가입</Title>

        <FormInfoBox className="user__form__info">
          <Label htmlFor={formId}>아이디</Label>
          <Input
            id={formId}
            type="text"
            placeholder="아이디"
            onChange={(e) => setId(e.target.value)}
          />
        </FormInfoBox>

        <FormInfoBox className="user__form__info">
          <Label htmlFor={formPwd}>비밀번호</Label>
          <Input
            id={formPwd}
            type="password"
            placeholder="비밀번호"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormInfoBox>

        <FormInfoBox className="user__form__info">
          <Label htmlFor={formName}>닉네임</Label>
          <Input
            id={formName}
            type="text"
            placeholder="닉네임"
            onChange={(e) => setNickname(e.target.value)}
          />
        </FormInfoBox>

        <ButtonContainer>
          <StyledLink onClick={handleRegister}>회원가입</StyledLink>
          <StyledLink to="/sign-in">돌아가기</StyledLink>
        </ButtonContainer>
      </Form>
    </Wrap>
  );
}
