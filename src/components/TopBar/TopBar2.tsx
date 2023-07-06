import styled from "styled-components";
import { MyTopBar } from "./TopBar1";

export const Back = styled.svg`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;

const MeetingInformationTitle = styled.span`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;

  color: var(--grey-grey-800, #2f2a28);

  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.32px;
`;

export const TopBar2 = () => {
  return (
    <MyTopBar>
      <Back>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M11 5L4.70711 11.2929C4.31658 11.6834 4.31658 12.3166 4.70711 12.7071L11 19M4.5 12H18.5"
            stroke="#2F2A28"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </Back>
      <MeetingInformationTitle>미팅 정보</MeetingInformationTitle>
    </MyTopBar>
  );
};
