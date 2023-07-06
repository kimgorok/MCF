import React from "react";
import styled from "styled-components";

const MyOrangeSmButton = styled.button`
  display: inline-flex;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  background: var(--gd, linear-gradient(135deg, #ffbf7b 0%, #ff7152 100%));

  position: relative;

  // 텍스트
  color: var(--grey-grey-00, #fff);
  text-align: center;

  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: -0.12px;
`;

interface ButtonProps {
  text: string;
}

export const OrangeSmButton: React.FC<ButtonProps> = ({ text }) => {
  return <MyOrangeSmButton>{text}</MyOrangeSmButton>;
};
