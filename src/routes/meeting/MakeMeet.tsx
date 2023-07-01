import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  min-height: 100vh;
  width: 390px;
  background-color: white;
  padding: 20px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.div`
  color: #a7a7a7;
`;

const Input = styled.input`
  display: inline-block;
  border-bottom: solid 2px #e9e9e9;
  width: 350px;
  margin-bottom: 10px;
`;

const Input2 = styled.input`
  display: inline-block;
  border-bottom: solid 2px #e9e9e9;
  width: 350px;
`;

export default function MakeMeet() {
  const navigate = useNavigate();
  const goBack = () => navigate("/meeting");

  const goNext = () => navigate("/meeting/new/detail");
  return (
    <Wrapper>
      <Header>
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 mr-4"
          onClick={goBack}
        >
          <path d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" />
        </svg>
        미팅 만들기
        <button
          onClick={goNext}
          className="border-2 font-bold p-1 ml-auto rounded-xl border-[#FF7152] text-[#FF7152]"
        >
          다음
        </button>
      </Header>
      <Title className="py-3 text-xs">미팅 제목</Title>
      <Input />
      <Title className="py-3 text-xs">미팅 설명</Title>
      <Input2 />
    </Wrapper>
  );
}
