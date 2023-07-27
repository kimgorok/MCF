import styled from "styled-components";
import { Location1pxIcon, Person1pxIcon } from "./Icon/Icons";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  width: 416px;
  padding: 16px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  border-bottom: 1px solid var(--grey-grey-40, #f2f0ef);
  background: #fff;
`;

// ★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆
// ★☆★☆★☆★☆★Meeting List★☆★☆★☆★☆★
// ★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆

// 제목과 날짜 담은 가로 박스
const TitleLayout = styled.div`
  display: flex;
  width: 368px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
`;

// 제목 텍스트
const Title = styled.span`
  color: var(--grey-grey-800, #2f2a28);

  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.32px;
`;

// 날짜 텍스트
const Date = styled.span`
  color: var(--grey-grey-300, #c9c5c5);
  text-align: right;

  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: -0.12px;
`;

// 설명 텍스트
const Comment = styled.span`
  height: 14px;
  align-self: stretch;

  overflow: hidden;
  color: var(--grey-grey-500, #767170);
  text-overflow: ellipsis;
  whitespace: nowrap;

  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: -0.12px;
`;

// 푸터 가로 박스
const FooterLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  border-radius: 4px;
`;

// 장소 박스
const LocationLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

// 이거 어떻게 하지? SVG인데 크기 조정 안됨
const NewLocationIcon = styled(Location1pxIcon)`
  width: 16px;
  height: 16px;
`;

// 푸터 텍스트
const FooterText = styled.span`
  color: var(--grey-grey-700, #56504f);

  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: -0.12px;
`;

// 멤버 담은 박스
const MemberFrame = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

// 프로필 아이콘도 크기조정 어케 해야됨

interface TitleProps {
  title: string;
  date: string;
  comment: string;
  location: string;
  miniMember: string;
  maxMember: string;
}

export const MeetingList: React.FC<TitleProps> = ({
  title,
  date,
  comment,
  location,
  miniMember,
  maxMember,
}) => {
  return (
    <Wrapper>
      <TitleLayout>
        <Title>{title}</Title>
        <Date>{date}</Date>
      </TitleLayout>
      <Comment>{comment}</Comment>
      <FooterLayout>
        <LocationLayout>
          <NewLocationIcon />
          <FooterText>{location}</FooterText>
        </LocationLayout>
        <MemberFrame>
          <Person1pxIcon />
          <FooterText>{miniMember}</FooterText>
          <FooterText>/</FooterText>
          <FooterText>{maxMember}</FooterText>
        </MemberFrame>
      </FooterLayout>
    </Wrapper>
  );
};

// ★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆
// ★☆★☆★☆★☆★Meeting Talk★☆★☆★☆★☆★
// ★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆

const TalkWrapper = styled(Wrapper)`
  gap: 8px;
`;

const TalkBox = styled.div`
  display: flex;
  width: 368px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

// 상단 가로 박스
const TalkLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

// 방제와 멤버
const TalkTitleBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

const TalkTitle = styled.span`
  color: #000;

  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.224px;
`;

const TalkMember = styled.div`
  color: #a7a7a7;

  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.224px;
`;

const TalkTime = styled.span`
  color: #a7a7a7;

  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: -0.1px;
`;

const CommentLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
`;

const TalkText = styled(FooterText)`
  color: #a7a7a7;
`;

const RedAlert = styled.div`
  display: flex;
  padding: 1px 4.5px;
  justify-content: center;
  align-items: center;

  border-radius: 100px;
  background: #ff7152;
`;

const RedAlertText = styled.span`
  color: #fff;

  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: -0.1px;
`;

interface TalkProps {
  title: string;
  miniMember: string;
  time: string;
  talktext: string;
  alert: string;
}

export const MeetingTalk: React.FC<TalkProps> = ({
  title,
  miniMember,
  time,
  talktext,
  alert,
}) => {
  return (
    <TalkWrapper>
      <TalkBox>
        <TalkLayout>
          <TalkTitleBox>
            <TalkTitle>{title}</TalkTitle>
            <TalkMember>{miniMember}</TalkMember>
          </TalkTitleBox>
          <TalkTime>{time}</TalkTime>
        </TalkLayout>
        <CommentLayout>
          <TalkText>{talktext}</TalkText>
          <RedAlert>
            <RedAlertText>{alert}</RedAlertText>
          </RedAlert>
        </CommentLayout>
      </TalkBox>
    </TalkWrapper>
  );
};

// ★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆
// ★☆★☆★☆★☆★Meeting List2★☆★☆★☆★☆★
// ★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆

interface TitleProps2 {
  title: string;
  date: string;

  location: string;
  miniMember: string;
  maxMember: string;
}

export const MeetingList2: React.FC<TitleProps2> = ({
  title,
  date,
  location,
  miniMember,
  maxMember,
}) => {
  return (
    <Wrapper>
      <TitleLayout>
        <Title>{title}</Title>
        <Date>{date}</Date>
      </TitleLayout>
      <FooterLayout>
        <LocationLayout>
          <NewLocationIcon />
          <FooterText>{location}</FooterText>
        </LocationLayout>
        <MemberFrame>
          <Person1pxIcon />
          <FooterText>{miniMember}</FooterText>
          <FooterText>/</FooterText>
          <FooterText>{maxMember}</FooterText>
        </MemberFrame>
      </FooterLayout>
    </Wrapper>
  );
};

// ★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆
// ★☆★☆★☆★☆★참여 요청 목록★☆★☆★☆★☆
// ★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆

const PartiWrapper = styled.div`
  display: flex;
  width: 416px;
  padding: 16px 24px;
  justify-content: space-between;
  align-items: center;
`;

const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex: 1 0 0;
`;

const NickName = styled.span`
  color: var(--grey-grey-800, #2f2a28);

  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.32px;
`;

const SpecBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

const SpacText = styled.span`
  color: var(--grey-grey-500, #767170);

  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.224px;
`;

const SeeProfile = styled.button`
  display: flex;
  align-items: flex-start;
  gap: 10px;

  color: var(--grey-grey-500, #767170);
  text-align: center;

  /* F12/Rg */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px; /* 116.667% */
  letter-spacing: -0.12px;
`;

interface IParti {
  nickname: string;
  age: string;
  gender: string;
  height: string;
  weight: string;
}

export const ParticipationRequestList: React.FC<IParti> = ({
  nickname,
  age,
  gender,
  height,
  weight,
}) => {
  const navigate = useNavigate();

  const seeProfileClick = () => {
    navigate("/");
  };
  return (
    <PartiWrapper>
      <ProfileBox>
        <NickName>{nickname}</NickName>
        <SpecBox>
          <SpacText>{age}</SpacText>
          <SpacText>{gender}</SpacText>
          <SpacText>{height}</SpacText>
          <SpacText>{weight}</SpacText>
        </SpecBox>
      </ProfileBox>
      <SeeProfile onClick={seeProfileClick}>프로필보기</SeeProfile>
    </PartiWrapper>
  );
};
