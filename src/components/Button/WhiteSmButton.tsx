import React from "react";
import styled from "styled-components";

const MyWhiteSmButton = styled.button`
  display: inline-flex;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  border: 1px solid var(--grey-grey-100, #dedbd9);
  background: #fff;

  position: relative;

  // 텍스트
  color: var(--grey-grey-500, #767170);
  text-align: center;

  /* F12/Md */
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

export const WhiteSmButton: React.FC<ButtonProps> = ({ text }) => {
  return <MyWhiteSmButton>{text}</MyWhiteSmButton>;
};
