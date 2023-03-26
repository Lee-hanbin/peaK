import MenuBar from "../components/LayoutPage/MenuBar";
import Wrapper from "../components/LayoutPage/Wrapper";
import styled from "styled-components";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom left, #FDD8D8 5%, #EBDDF3 90%);
  padding: 20px;
`

const DashboardFrame = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.5);
  
  display: flex;
`;

/** nav바랑 footer를 담는 페이지. 아래 Outlet에 진짜 페이지들이 렌더링됩니다. */
function Layout() {
  return (
    <Background>
      <DashboardFrame>
        <MenuBar />
        <Wrapper />
      </DashboardFrame>
    </Background>
  );
}

export default Layout;