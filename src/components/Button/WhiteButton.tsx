import React from "react";
import styled from "styled-components";

const MyWhiteButton = styled.button`
  display: flex;
  width: 384px;
  padding: 16px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--grey-grey-100, #dedbd9);
  background: #fff;

  position: relative;
`;

const Text = styled.p`
  color: var(--grey-grey-500, #767170);
  text-align: center;

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

export const WhiteButton: React.FC<ButtonProps> = ({ text }) => {
  return (
    <MyWhiteButton>
      <Text>{text}</Text>
    </MyWhiteButton>
  );
};
