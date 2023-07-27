import styled from "styled-components";

const MyDialog = styled.div`
  display: flex;
  width: 352px;
  padding: 24px 16px 16px 16px;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  border-radius: 12px;
  background: var(--grey-scale-coolgrey-00, #fff);
`;

const DialogTitle = styled.span`
  display: flex;
  flex-direction: column;
  align-self: stretch;

  color: var(--grey-grey-800, #2f2a28);
  text-align: center;

  /* F16/Bd */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.32px;
`;

const DialogContents = styled.span`
  display: flex;
  flex-direction: column;
  align-self: stretch;

  color: var(--grey-grey-700, #56504f);
  text-align: center;

  /* F14/Rg */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.224px;
`;

const DialogButtonBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`;

const DialogLeftBtn = styled.button`
  display: flex;
  padding: 16px 12px;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;

  border-radius: 8px;
  border: 1px solid var(--grey-grey-100, #dedbd9);
  background: #fff;

  color: var(--grey-grey-500, #767170);
  text-align: center;

  /* F14/Md */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.224px;
`;

const DialogRightBtn = styled.button`
  display: flex;
  padding: 16px 12px;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;

  border-radius: 8px;
  background: var(--gd, linear-gradient(135deg, #ffbf7b 0%, #ff7152 100%));

  color: var(--grey-grey-00, #fff);
  text-align: center;

  /* F14/Md */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.224px;
`;

interface DialogProps {
  title: string;
  contents: string;
  leftmessage: string;
  rightmessage: string;
}

export const Dialog: React.FC<DialogProps> = ({
  title,
  contents,
  leftmessage,
  rightmessage,
}) => {
  return (
    <MyDialog>
      <DialogTitle>{title}</DialogTitle>
      <DialogContents>{contents}</DialogContents>
      <DialogButtonBox>
        <DialogLeftBtn>{leftmessage}</DialogLeftBtn>
        <DialogRightBtn>{rightmessage}</DialogRightBtn>
      </DialogButtonBox>
    </MyDialog>
  );
};
