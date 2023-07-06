import React from "react";
import styled from "styled-components";

const MyOrangeButton = styled.button`
  display: flex;
  width: 384px;
  padding: 16px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: var(--gd, linear-gradient(135deg, #ffbf7b 0%, #ff7152 100%));

  position: relative;

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

// 나중에 상속하면서 텍스트 부분 줄이기 해야됨

interface ButtonProps {
  text: string;
}

export const OrangeButton: React.FC<ButtonProps> = ({ text }) => {
  return <MyOrangeButton>{text}</MyOrangeButton>;
};
