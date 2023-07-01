import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
  width: 390px;
  background-color: white;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;

const Title = styled.div`
  padding: 20px;
  padding-bottom: 30px;
  border-bottom: solid 6px #e9e9e9;
`;

const DetailBody = styled.div`
  padding: 20px;
`;

const Participants = styled.div`
  padding: 20px;
  border-top: 2px solid #e9e9e9;
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

export default function MeetingDetail() {
  // 뭐 뒤로 가는 그게 있던데
  const navigate = useNavigate();
  const goBack = () => navigate("/meeting");
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
        미팅 정보
      </Header>

      <Title className="space-y-3">
        <div className="font-bold text-sm">서초구에서 술 드실 분</div>
        <div className="text-xs text-gray-400">
          남/여 상관 없음 친구 구해요~
        </div>
      </Title>

      <DetailBody>
        <div className="pb-5 text-sm ">세부 정보</div>
        <div className="space-y-2 text-sm ">
          <div className="flex items-center ">
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 "
            >
              <path d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" />
            </svg>
            2022. 3. 24.(금)
          </div>
          <div className="flex items-center ">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
            >
              <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            선릉역 수인분당선
          </div>
          <div className="flex items-center">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
            >
              <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            3명/4명
          </div>
        </div>
      </DetailBody>

      <Participants>
        <div className="pb-2 text-sm ">참여자</div>
        {[1, 2, 3].map((_, i) => (
          <div key={i}>
            <div className="flex items-center ">
              <div className="font-bold py-2 text-sm ">쿵야어드벤처</div>
              {i === 0 && (
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 h-4 w-4 text-[#FF7152] "
                >
                  <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                </svg>
              )}
            </div>

            <div className="text-xs text-gray-600 flex space-x-3 mb-1">
              <span>24살</span>
              <span>남자</span>
              <span>170cm</span>
              <span>80kg</span>
            </div>
          </div>
        ))}
      </Participants>
      <Button className="p-5 m-5 ">채팅방 입장</Button>
    </Wrapper>
  );
}
