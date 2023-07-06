import styled from "styled-components";

const BotNavBar = styled.div`
  display: flex;
  width: 416px;
  padding: 0px 12px;
  align-items: flex-start;

  background: var(--grey-grey-00, #fff);

  /* Bottom btn shadow */
  box-shadow: 0px -2px 4px 0px rgba(18, 22, 26, 0.04);
`;

export const BotNavDefault = () => {
  return <BotNavBar></BotNavBar>;
};

// 미완성
