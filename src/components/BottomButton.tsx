import styled from "styled-components";

// 가로로 긴 오렌지 색 채팅방 입장 버튼
const ButtonOneBox = styled.div`
  display: flex;
  width: 416px;
  padding: 16px 16px 24px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  background: var(--grey-scale-coolgrey-00, #fff);

  /* Bottom btn shadow */
  box-shadow: 0px -2px 4px 0px rgba(18, 22, 26, 0.04);
`;

const MyButtonOne = styled.button`
  display: flex;
  padding: 16px 12px;
  justify-content: center;
  align-items: center;
  align-self: stretch;

  border-radius: 8px;
  background: var(--gd, linear-gradient(135deg, #ffbf7b 0%, #ff7152 100%));

  // 텍스트
  color: var(--grey-grey-00, #fff);
  text-align: center;

  /* F14/Md */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.224px;
`;

interface ButtonOneProps {
  text: string;
}

export const BottomButtonOne: React.FC<ButtonOneProps> = ({ text }) => {
  return (
    <ButtonOneBox>
      <MyButtonOne>{text}</MyButtonOne>
    </ButtonOneBox>
  );
};

// 두가지 선택하는 채팅방 입장 버튼
const ButtonTwoBox = styled(ButtonOneBox)`
  flex-direction: row;
`;

const LeftButton = styled.button`
  display: flex;
  padding: 16px 12px;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;

  border-radius: 8px;
  border: 1px solid var(--grey-grey-100, #dedbd9);
  background: #fff;

  // 텍스트
  color: var(--grey-grey-500, #767170);
  text-align: center;

  /* F14/Md */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.224px;
`;

const RightButton = styled(LeftButton)`
  background: var(--gd, linear-gradient(135deg, #ffbf7b 0%, #ff7152 100%));

  color: var(--grey-grey-00, #fff);
`;

interface ButtonTwoProps {
  text1: string;
  text2: string;
}

export const BottomButtonTwo: React.FC<ButtonTwoProps> = ({ text1, text2 }) => {
  return (
    <ButtonTwoBox>
      <LeftButton>{text1}</LeftButton>
      <RightButton>{text2}</RightButton>
    </ButtonTwoBox>
  );
};
