import styled from "styled-components";

// 작은 인증 버튼
const SmallOrangeBtn = styled.button`
  display: inline-flex;
  padding: 4px 8px;
  align-items: flex-start;

  border-radius: 100px;
  border: 1px solid var(--primary-orangered-800, #ff7152);
`;

const SmallOrangeBtnText = styled.span`
  color: var(--primary-orangered-800, #ff7152);

  /* F14/Md */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 114.286% */
  letter-spacing: -0.224px;
`;

interface IButtonText {
  text: string;
}

export const SmallOrangeButton: React.FC<IButtonText> = ({ text }) => {
  return (
    <SmallOrangeBtn>
      <SmallOrangeBtnText>{text}</SmallOrangeBtnText>
    </SmallOrangeBtn>
  );
};

// 인풋박스 공용으로 들어가는 뤠펄
const Wrapper = styled.div`
  display: flex;
  width: 368px;
  height: 48px;
  padding: 10px 8px 11px 8px;
  align-items: center;
  flex-shrink: 0;

  border-bottom: 1px solid var(--grey-grey-300, #c9c5c5);
  opacity: 0.8999999761581421;
`;

// 인풋박스의 인풋부분, placeholder, focused 등등 수정이 많이 필요
const MyInput = styled.input`
  flex: 1 0 0;

  color: var(--grey-grey-300, #c9c5c5);

  /* F16/Rg */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
  letter-spacing: -0.32px;
`;

// 레이블과 버튼이 달린 인풋 박스
interface IInputBoxLabelAndButton {
  lable: string;
  Myplaceholder: string;
}

const BigWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

const MyLable = styled.span`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const InputBoxLabelAndButton: React.FC<IInputBoxLabelAndButton> = ({
  lable,
  Myplaceholder,
}) => {
  return (
    <BigWrapper>
      <MyLable>{lable}</MyLable>
      <Wrapper>
        <MyInput placeholder={Myplaceholder} />
        <SmallOrangeButton text="인증" />
      </Wrapper>
    </BigWrapper>
  );
};

// InputElement 1번. 인증 버튼이 있음
interface IInputElementButton {
  Myplaceholder: string;
}

export const InputElementButton: React.FC<IInputElementButton> = ({
  Myplaceholder,
}) => {
  return (
    <Wrapper>
      <MyInput placeholder={Myplaceholder} />
      <SmallOrangeButton text="인증" />
    </Wrapper>
  );
};

// InputElement 2번. 아무것도 없음
export const InputElement: React.FC<IInputElementButton> = ({
  Myplaceholder,
}) => {
  return (
    <Wrapper>
      <MyInput placeholder={Myplaceholder} />
    </Wrapper>
  );
};
