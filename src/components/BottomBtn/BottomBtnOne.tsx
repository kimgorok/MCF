import styled from "styled-components";

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

interface ButtonProps {
  text: string;
}

export const ButtonOne: React.FC<ButtonProps> = ({ text }) => {
  return (
    <ButtonOneBox>
      <MyButtonOne>{text}</MyButtonOne>
    </ButtonOneBox>
  );
};
