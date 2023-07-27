import styled from "styled-components";

import { SnackBar } from "./components/Button";
import { BottomNavElementOn } from "./components/BottomNav/BottomNavElement";

const Wrapper = styled.div`
  min-height: 100vh;
  width: 390px;
  background-color: white;
`;

function ComponentTest() {
  return (
    <Wrapper>
      <BottomNavElementOn />
    </Wrapper>
  );
}

export default ComponentTest;
