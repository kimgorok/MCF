import styled from "styled-components";

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  position: relative;

  top: 206px;
  left: 24px;
`;

const Lable = styled.div`
  color: var(--grey-grey-500, #767170);

  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.224px;
`;

const InputElement = styled.input`
  display: flex;
  width: 368px;
  height: 48px;
  padding: 10px 8px 11px 8px;
  align-items: center;

  border-bottom: 1px solid var(--grey-grey-300, #c9c5c5);
  opacity: 0.8999999761581421;

  ::placeholder {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1 0 0;

    color: var(--grey-grey-300, #c9c5c5);

    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.32px;
  }
`;

interface InputBoxProps {
  Mylable: string;
  Myplaceholder: string;
}

export const InputBox: React.FC<InputBoxProps> = ({
  Mylable,
  Myplaceholder,
}) => {
  return (
    <Wrapper>
      <Box>
        <Lable>{Mylable}</Lable>
        <InputElement placeholder={Myplaceholder} />
      </Box>
    </Wrapper>
  );
};
