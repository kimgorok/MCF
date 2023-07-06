import { useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 416px;
  height: 886px;
  background-color: white;
  position: relative;
`;

const Header = styled.div`
  width: 390px;
  position: fixed;
  padding: 20px;
  border-bottom: 1px solid #d8d8d8;
  background-color: white;
`;

const MeetingListBox = styled.div`
  margin-top: 60px;
  margin-bottom: 50px;
`;

const MeetingList = styled.div`
  border-bottom: 4px solid #d8d8d8;
`;

const MakeMeetBtn = styled.div`
  position: fixed;
  top: auto;
  bottom: 0;
  left: auto;
  right: 0;
  margin-right: 20px;
  margin-bottom: 50px;
`;

const Footer = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-around;
  padding: 2px;
  position: fixed;
  top: auto;
  bottom: 0;
  width: 390px;
`;

export default function List() {
  const navigate = useNavigate();

  const onMeetingClick = () => navigate("/meeting/detail");
  const match = useMatch("/meeting");

  const onMakeMeetClick = () => navigate("/meeting/new");

  return (
    <Wrapper className="p-[0.1px]">
      <Header>모집 중인 미팅</Header>

      <MeetingListBox>
        {[1, 2, 3, 4, 5, 6, 7].map((_, i) => (
          <MeetingList
            key={i}
            className="p-5 space-y-2 last:border-none bottom-5 "
            onClick={onMeetingClick}
          >
            <div className="flex justify-between items-center ">
              <div className="font-bold text-[1.05rem]">
                서초구에서 술 드실 분
              </div>
              <div className="text-sm text-gray-300">2022. 3. 24.(금)</div>
            </div>
            <div className="text-xs">남/여 상관 없음 친구 구해요~</div>
            <div className="flex justify-between ">
              <div className="flex items-center text-gray-400 text-xs">
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                >
                  <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>
                </svg>
                <div>선릉역 수인분당선</div>
              </div>
              <div className="flex items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                >
                  <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <div className="text-sm pl-2"> 3 / 4</div>
              </div>
            </div>
          </MeetingList>
        ))}
      </MeetingListBox>

      <MakeMeetBtn
        onClick={onMakeMeetClick}
        className="bg-[#FF7152] w-4 h-4 rounded-full p-6 flex items-center justify-center text-white
        font-bold text-xl"
      >
        +
      </MakeMeetBtn>
      <Footer>
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-8 h-8" ${match ? "text-black" : "text-gray-400"}`}
        >
          <path d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" />
        </svg>
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-8 h-8" ${!match ? "text-black" : "text-gray-400"}`}
        >
          <path d="M2 10c0-3.967 3.69-7 8-7 4.31 0 8 3.033 8 7s-3.69 7-8 7a9.165 9.165 0 01-1.504-.123 5.976 5.976 0 01-3.935 1.107.75.75 0 01-.584-1.143 3.478 3.478 0 00.522-1.756C2.979 13.825 2 12.025 2 10z" />
        </svg>
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-8 h-8" ${!match ? "text-black" : "text-gray-400"}`}
        >
          <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
        </svg>
      </Footer>
    </Wrapper>
  );
}
