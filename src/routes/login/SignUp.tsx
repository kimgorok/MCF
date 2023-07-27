import styled from "styled-components";

import { Wrapper } from "./Login";
import { TopBar3 } from "../../components/TopBars";

const Title = styled.div`
  color: var(--grey-grey-800, #2f2a28);

  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;

  top: 112px;
  bottom: 744px;
  left: 24px;
  right: 104px;

  position: absolute;
`;

function SignUp() {
  return (
    <Wrapper>
      <TopBar3 />
      <Title>대학교 이메일을 입력해 주세요</Title>
    </Wrapper>
  );
}

export default SignUp;
