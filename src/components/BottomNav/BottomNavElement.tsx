import styled from "styled-components";
import { HomeFocusedIcon, HomeIcon } from "./BotNavIcon";

const BotNavEleOffWrapper = styled.button`
  display: flex;
  width: 98px;
  height: 64px;
  padding: 8px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
  flex-shrink: 0;

  border-radius: 8px;
  background: var(--grey-grey-00, #fff);
`;

// 이거 크기 조절이 안됨
const BigHomeIcon = styled(HomeIcon)`
  width: 32px;
  height: 32px;
`;

const BigHomeFocusedIcon = styled(HomeFocusedIcon)`
  width: 32px;
  height: 32px;
`;

export const BottomNavElementOff = () => {
  return (
    <BotNavEleOffWrapper>
      <BigHomeIcon />
    </BotNavEleOffWrapper>
  );
};

export const BottomNavElementOn = () => {
  return (
    <BotNavEleOffWrapper>
      <BigHomeFocusedIcon />
    </BotNavEleOffWrapper>
  );
};
