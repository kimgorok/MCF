import React from "react";
import styled from "styled-components";

const OrangeButton = styled.button`
  display: flex;
  width: 384px;
  padding: 16px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: var(--gd, linear-gradient(135deg, #ffbf7b 0%, #ff7152 100%));

  position: relative;
`;

const Text = styled.p`
  color: var(--grey-grey-00, #fff);
  text-align: center;
  /* F16/Md */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.32px;
`;

interface ButtonProps {
  text: string;
}

export const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <OrangeButton>
      <Text>{text}</Text>
    </OrangeButton>
  );
};
