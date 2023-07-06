import styled from "styled-components";

export const MyTopBar = styled.div`
  display: flex;
  width: 416px;
  padding: 16px 24px;
  align-items: flex-start;
  gap: 16px;

  background: var(--grey-grey-00, #fff);

  top: 32px;
  position: absolute;
`;

const TopBar1Text = styled.span`
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

export const TopBar1 = () => {
  return (
    <MyTopBar>
      <TopBar1Text>모집 중인 미팅</TopBar1Text>
    </MyTopBar>
  );
};
