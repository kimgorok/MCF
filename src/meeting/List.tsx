import styled from "styled-components";
import tw from "tailwind-styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
  width: 390px;
  background-color: white;
`;

const Header = styled.div`
  padding: 20px;
  border-bottom: 1px solid #d8d8d8;
`;

const MeetingList = styled.div``;

export default function List() {
  return (
    <Wrapper>
      <Header>모집 중인 미팅</Header>
      <div className="p-4 bg-slate-500">
        <div>서초구에서 술 드실 분</div>
      </div>
    </Wrapper>
  );
}
