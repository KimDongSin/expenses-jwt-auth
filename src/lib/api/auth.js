import axios from "axios";

const AUTH_API_HOST = "https://moneyfulpublicpolicy.co.kr";

export const register = async ({ id, password, nickname }) => {
  try {
    const response = await axios.post(`${AUTH_API_HOST}/register`, {
      id: id,
      password: password,
      nickname: nickname,
    }); // 키 값이 겹쳐서 키만 써줘도 되지만 명시적으로 사용.
    return response.data;
  } catch (error) {
    console.log(error?.response?.data?.message);
    alert(error?.response?.data?.message);
  }
};
