import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 400px;
  background-color: white;
  border-radius: 15px;
  padding: 30px 40px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #333;
`;

export const Input = styled.input`
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

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;


export const FormInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;