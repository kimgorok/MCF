import styled from "styled-components";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 25vw;
  padding: 10px;
`;

const BackArrow = styled.div`
  font-size: 1.5rem;
`;

const Title = styled.div`
  margin-top: 30px;
  margin-bottom: 10px;
  line-height: 1.2;
  font-weight: bold;
`;

const Text = styled.div`
  margin-top: 10px;
  font-size: 0.7px;
  color: #3a3a3a;
`;

const ButtonContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: nowrap;
  border: solid 1px #838383;
  border-radius: 5px;
`;

const Button = styled.div`
  padding: 10px;
  font-size: 0.7rem;
  font-weight: bold;
  flex-grow: 1;
  text-align: center;
`;

const Input = styled.input`
  font-size: 0.7rem;
  display: inline-block;
  border: none;
  color: #838383;
  border-bottom: solid 1px #c0c0c0;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 20px;
  z-index: 1;
  ::placeholder {
    color: #c0c0c0;
  }
`;

const InputAndArrowBox = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  border-bottom: solid 1px #c0c0c0;
`;

const HeightWeightInput = styled.input`
  font-size: 0.7rem;
  display: inline-block;
  border: none;
  color: #838383;

  padding: 10px;
  margin-top: 10px;
  ::placeholder {
    color: #c0c0c0;
  }
`;

const ModalArrow = styled.div`
  margin-top: 20px;
`;

const LoginButton = styled.button`
  background: linear-gradient(to right, #ffc3b5, #ff7152);
  border-radius: 5px;
  border: none;
  color: white;
  padding: 10px;
  margin-top: 20px;
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  z-index: 1;
`;

const ModalContainer = styled(motion.div)`
  width: 25vw;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  height: 300px;
  background-color: white;
  padding: 15px;
  z-index: 2;
`;

const ModalTitle = styled.div`
  margin-bottom: 30px;
`;

const Content = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  grid-column-gap: 20px;
  text-align: center;

  font-size: 0.7rem;
`;

const CmList = styled.div``;

function App() {
  /*   const navigate = useNavigate();
  const onClickArrow = () => {
    navigate(`/어딘가`);
  }; */

  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Wrapper>
      {/* <BackArrow onClick={onClickArrow}> &larr;</BackArrow> */}
      <BackArrow> &larr;</BackArrow>
      <Title>
        미티의 친구를 만나기까지 <br /> 얼마 남지 않았어요!
      </Title>
      <Text>닉네임</Text>
      <Input type="text" placeholder="닉네임 입력"></Input>

      <Text>성별</Text>
      <ButtonContainer>
        <Button>여자</Button>
        <Button style={{ borderLeft: "1px solid #838383" }}>남자</Button>
      </ButtonContainer>

      <Text>생년월일</Text>
      <Input placeholder="19990101"></Input>

      <Text>키(cm)</Text>
      <InputAndArrowBox>
        <HeightWeightInput type="text" placeholder="키 선택(10단위)" />
        <ModalArrow onClick={handleOpenModal}>❤</ModalArrow>
      </InputAndArrowBox>
      <AnimatePresence>
        {isModalOpen && (
          <>
            <Overlay
              onClick={handleCloseModal}
              exit={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            />
            <ModalContainer
              initial={{ y: "50%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
            >
              <ModalTitle> 키(cm) 선택</ModalTitle>
              <Content>
                <CmList>120 cm</CmList>
                <CmList>130 cm</CmList>
                <CmList>140 cm</CmList>
                <CmList>150 cm</CmList>
                <CmList>160 cm</CmList>
                <CmList>170 cm</CmList>
                <CmList>180 cm</CmList>
                <CmList>190 cm</CmList>
                <CmList>200 cm</CmList>
                <CmList>210 cm</CmList>
                <CmList>220 cm</CmList>
              </Content>
            </ModalContainer>
          </>
        )}
      </AnimatePresence>

      <Text>몸무게(kg)</Text>
      <InputAndArrowBox>
        <HeightWeightInput type="text" placeholder="몸무게 선택(10단위)" />
        <ModalArrow>❤</ModalArrow>
      </InputAndArrowBox>
      <LoginButton>가입 완료</LoginButton>
    </Wrapper>
  );
}

export default App;
