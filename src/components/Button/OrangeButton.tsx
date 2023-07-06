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
`;

const Text = styled.span`
  color: var(--grey-grey-00, #fff);
  text-align: center;

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

export const OrangeButton: React.FC<ButtonProps> = ({ text }) => {
  return (
    <MyOrangeButton>
      <Text>{text}</Text>
    </MyOrangeButton>
  );
};
