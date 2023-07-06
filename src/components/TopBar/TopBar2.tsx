import styled from "styled-components";
import { MyTopBar } from "./TopBar1";
import { ArrowBackIcon } from "../Icon/Icons";

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
      <ArrowBackIcon />
      <MeetingInformationTitle>미팅 정보</MeetingInformationTitle>
    </MyTopBar>
  );
};
