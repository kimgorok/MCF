import styled from "styled-components";
import { MyTopBar } from "./TopBar1";
import { ArrowBackIcon, HamburgerIcon } from "../Icon/Icons";

const MeetingTitle = styled.span`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;

  color: var(--grey-grey-800, #2f2a28);

  /* Font/F16/Md */
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.32px;
`;

interface TitleProps {
  title: string;
}

export const TopBar4: React.FC<TitleProps> = ({ title }) => {
  return (
    <MyTopBar>
      <ArrowBackIcon />
      <MeetingTitle>{title}</MeetingTitle>
      <HamburgerIcon />
    </MyTopBar>
  );
};
