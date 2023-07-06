// Login.tsx
import React from "react";
import { Button } from "../../components/Button";
import { InputBox } from "../../components/loginComponenets/InputBox";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const Wrapper = styled.div`
  width: 416px;
  height: 886px;
  background-color: var(--grey-grey-00, #fff);

  position: relative;
`;

const Miti = styled.div`
  position: absolute;
  top: 79px;
  bottom: 783px;
  left: 24px;
  right: 320px;

  color: var(--primary-orangered-800, #ff7152);
  font-family: Sandoll Geobok;
  font-size: 24px;
  font-style: normal;
  font-weight: 900;
  line-height: 24px;
  letter-spacing: -0.48px;
`;

const InputBoxBox = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;
`;

const ButtonBox = styled.div`
  position: absolute;
  top: 407px;
  left: 16px;
  bottom: 427px;
`;

const Frame = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 27px;
  position: absolute;

  top: 491px;
  left: 88px;
  right: 88px;
  bottom: 379px;
`;

const MiniText = styled.div`
  color: var(--grey-grey-500, #767170);
  text-align: center;

  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.224px;
`;

interface LoginForm {
  userEmail: string;
  passWord: string;
}

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginForm>({
    mode: "onSubmit",
  });

  const onValid = (data: LoginForm) => {
    console.log("로그인 성공했을 때 실행 함수");
  };
  const onInvalid = () => {
    setError("passWord", { message: "로그인 실패메시지" });
  };
  return (
    <Wrapper>
      <Miti>MITI</Miti>
      <form onSubmit={handleSubmit(onValid, onInvalid)}>
        <InputBoxBox>
          <InputBox
            {...register("userEmail", {
              required: "",
              validate: {
                onlyGachon: (value) => value.includes("@gachon.ac.kr"),
              },
            })}
            Mylable="대학교 이메일"
            Myplaceholder="miti_001@university.ac.kr"
          />
          <InputBox
            {...register("passWord", {
              required: "",
            })}
            Mylable="비밀번호"
            Myplaceholder="비밀번호 입력"
          />
        </InputBoxBox>

        <ButtonBox>
          <Button text="로그인" />
        </ButtonBox>
        {errors.passWord?.message}
      </form>

      <Frame>
        <MiniText>아이디 찾기</MiniText>
        <MiniText>비밀번호 찾기</MiniText>
        <MiniText>회원가입</MiniText>
      </Frame>
    </Wrapper>
  );
}

export default Login;
