import styled from "styled-components";

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 30px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  font-size: 24px;
  margin-bottom: 30px;
  color: #333;
`;

const InputGroup = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    font-size: 18px;
    color: #555;
    margin-bottom: 8px;
  }

  input[type="text"],
  input[type="file"] {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 16px;
    color: #555;
    background-color: #fff;
    transition: border-color 0.3s, box-shadow 0.3s;
    box-sizing: border-box;
    outline: none;

    &:focus {
      border-color: #4caf50;
      box-shadow: 0 0 8px rgba(0, 123, 255, 0.5);
    }
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555;
  }
`;

export default function Profile() {
  return (
    <Container>
      <Title>프로필 수정</Title>
      <InputGroup>
        <label htmlFor="nickname">닉네임</label>
        <input type="text" id="nickname" placeholder="닉네임을 입력하세요" minLength="1" maxLength="10" />
      </InputGroup>
      <InputGroup>
        <label htmlFor="avatar">아바타 이미지 업로드</label>
        <input type="file" id="avatar" accept="image/*" />
      </InputGroup>
      <Button>프로필 업데이트</Button>
    </Container>
  );
}
