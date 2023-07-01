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
  color: #666666;
`;

const DayLocationPerson = styled.div`
  padding: 10px;
  border-bottom: solid 2px #e9e9e9;
`;

const Input = styled.input`
  display: inline-block;
  border-bottom: solid 2px #e9e9e9;
  width: 350px;
  margin-bottom: 10px;
  padding: 10px;
  ::placeholder {
    font-size: 0.75rem;
  }
`;

const Input2 = styled.input`
  display: inline-block;
  border-bottom: solid 2px #e9e9e9;
  width: 350px;
  padding: 10px;
  ::placeholder {
    font-size: 0.75rem;
  }
`;

const MorePerson = styled.div`
  border-top: solid 6px #e9e9e9;
  padding-bottom: 100px;
  border-bottom: solid 2px #e9e9e9;
`;

export const Button = styled.div`
  background: linear-gradient(to right, #ffc3b5, #ff7152);
  border-radius: 5px;

  color: white;
  text-align: center;
  position: absolute;
  bottom: 20px;
  width: 350px;
`;

export default function MakeMeetingDetail() {
  const navigate = useNavigate();
  const goBack = () => navigate("/meeting/new");

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
      </Header>

      <div>
        <Title className="py-3 text-xs">미팅 날짜</Title>
        <DayLocationPerson className="flex items-center justify-between">
          <div className="text-gray-300">만날 날짜</div>
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-400"
          >
            <path d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" />
          </svg>
        </DayLocationPerson>
        <Title className="py-3 text-xs">미팅 설명</Title>
        <DayLocationPerson className="flex items-center justify-between">
          <div className="text-gray-300">만날 장소</div>
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-400"
          >
            <path d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" />
          </svg>
        </DayLocationPerson>
        <Title className="py-3 text-xs">미팅 인원</Title>
        <DayLocationPerson className="flex items-center justify-between">
          <div className="text-gray-300">본인 포함 최대 4명</div>
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-400"
          >
            <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
          </svg>
        </DayLocationPerson>
      </div>
      <MorePerson className="mt-8">
        <Title className="py-3 text-xs">이메일로 참여자 추가(선택 입력)</Title>
        <Input placeholder="두 번째 참여자 이메일(선택 입력)" />
        <Input placeholder="세 번째 참여자 이메일(선택 입력)" />
        <Input2 placeholder="네 번째 참여자 이메일(선택 입력)" />
      </MorePerson>

      <Button className="p-4 ">미팅 등록</Button>
    </Wrapper>
  );
}
