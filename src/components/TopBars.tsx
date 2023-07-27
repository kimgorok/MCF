import styled from "styled-components";
import { ArrowBackIcon, HamburgerIcon, SettingIcon } from "./Icon/Icons";

const MyTopBar = styled.div`
  display: flex;
  width: 416px;
  padding: 16px 24px;
  align-items: flex-start;
  gap: 16px;

  background: var(--grey-grey-00, #fff);

  top: 32px;
  position: absolute;
`;

const TopBarTitle = styled.span`
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
// ★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆
// ★☆★☆★☆★☆★☆TopBar1★☆★☆★☆★☆★☆
// ★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆

export const TopBar1: React.FC<TitleProps> = ({ title }) => {
  return (
    <MyTopBar>
      <TopBarTitle>{title}</TopBarTitle>
    </MyTopBar>
  );
};

// ★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆
// ★☆★☆★☆★☆★☆TopBar2★☆★☆★☆★☆★☆
// ★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆

export const TopBar2: React.FC<TitleProps> = ({ title }) => {
  return (
    <MyTopBar>
      <ArrowBackIcon />
      <TopBarTitle>{title}</TopBarTitle>
    </MyTopBar>
  );
};

// ★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆
// ★☆★☆★☆★☆★☆TopBar3★☆★☆★☆★☆★☆
// ★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆

export const TopBar3 = () => {
  return (
    <MyTopBar>
      <ArrowBackIcon />
    </MyTopBar>
  );
};

// ★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆
// ★☆★☆★☆★☆★☆TopBar4★☆★☆★☆★☆★☆
// ★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆

export const TopBar4: React.FC<TitleProps> = ({ title }) => {
  return (
    <MyTopBar>
      <ArrowBackIcon />
      <TopBarTitle>{title}</TopBarTitle>
      <HamburgerIcon />
    </MyTopBar>
  );
};

// ★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆
// ★☆★☆★☆★☆★☆TopBar5★☆★☆★☆★☆★☆
// ★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆

export const TopBar5: React.FC<TitleProps> = ({ title }) => {
  return (
    <MyTopBar>
      <TopBarTitle>{title}</TopBarTitle>
      <SettingIcon />
    </MyTopBar>
  );
};
