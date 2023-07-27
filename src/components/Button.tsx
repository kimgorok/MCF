import React from "react";
import styled from "styled-components";

// 작은 오렌지색 버튼
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

export const OrangeSmButton: React.FC<ButtonProps> = ({ text }) => {
  return <MyOrangeSmButton>{text}</MyOrangeSmButton>;
};

// 기본으로 가로로 긴 오렌지 버튼
const MyOrangeButton = styled(MyOrangeSmButton)`
  display: flex;
  width: 384px;
  padding: 16px 12px;

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

// 작은 흰색 버튼
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

export const WhiteSmButton: React.FC<ButtonProps> = ({ text }) => {
  return <MyWhiteSmButton>{text}</MyWhiteSmButton>;
};

// 가로로 긴 흰색 버튼
const MyWhiteButton = styled(MyWhiteSmButton)`
  display: flex;
  width: 384px;
  padding: 16px 12px;

  line-height: 16px;
  letter-spacing: -0.224px;
`;

export const WhiteButton: React.FC<ButtonProps> = ({ text }) => {
  return <MyWhiteButton>{text}</MyWhiteButton>;
};

// 스낵바
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

export const SnackBar: React.FC<ButtonProps> = ({ text }) => {
  return <MySnackBar>{text}</MySnackBar>;
};
