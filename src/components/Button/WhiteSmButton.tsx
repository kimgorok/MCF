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
`;

const Text = styled.span`
  display: inline-flex;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  border: 1px solid var(--grey-grey-100, #dedbd9);
  background: #fff;
`;

interface ButtonProps {
  text: string;
}

export const WhiteSmButton: React.FC<ButtonProps> = ({ text }) => {
  return (
    <MyWhiteSmButton>
      <Text>{text}</Text>
    </MyWhiteSmButton>
  );
};
