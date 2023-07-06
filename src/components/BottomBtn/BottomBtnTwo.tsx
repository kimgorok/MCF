import styled from "styled-components";

const ButtonTwoBox = styled.div`
  display: flex;
  width: 416px;
  padding: 16px 16px 24px 16px;
  align-items: flex-start;
  gap: 10px;

  background: var(--grey-scale-coolgrey-00, #fff);

  /* Bottom btn shadow */
  box-shadow: 0px -2px 4px 0px rgba(18, 22, 26, 0.04);
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
`;

const LeftText = styled.span`
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

const RightButton = styled.button`
  display: flex;
  padding: 16px 12px;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;

  border-radius: 8px;
  background: var(--gd, linear-gradient(135deg, #ffbf7b 0%, #ff7152 100%));
`;

const RightText = styled.span`
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

interface ButtonProps {
  text1: string;
  text2: string;
}

export const ButtonTwo: React.FC<ButtonProps> = ({ text1, text2 }) => {
  return (
    <ButtonTwoBox>
      <LeftButton>
        <LeftText>{text1}</LeftText>
      </LeftButton>
      <RightButton>
        <RightText>{text2}</RightText>
      </RightButton>
    </ButtonTwoBox>
  );
};
