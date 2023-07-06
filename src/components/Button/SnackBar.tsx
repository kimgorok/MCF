import styled from "styled-components";

const MySnackBar = styled.div`
  display: flex;
  width: 328px;
  padding: 16px;
  align-items: center;
  gap: 8px;

  border-radius: 8px;
  background: var(--scrim-scrim-1, rgba(18, 22, 26, 0.72));

  flex-direction: column;
  flex: 1 0 0;

  // 텍스트
  color: var(--grey-scale-coolgrey-00, #fff);
  text-align: center;

  /* F12/Md */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: -0.12px;
`;

interface SnackBarProps {
  text: string;
}

export const SnackBar: React.FC<SnackBarProps> = ({ text }) => {
  return <MySnackBar>{text}</MySnackBar>;
};
