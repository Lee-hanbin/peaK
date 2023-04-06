import {CreateNickname, CreateTOKEN, CreateUserId} from "../_store/slices/UserSlice";
import { ga } from "react-ga";
import {useDispatch } from "react-redux";

import MenuBar from "../components/LayoutPage/MenuBar";
import RouteChangeTracker from "../_utils/RouteChangeTracker";
import Wrapper from "../components/LayoutPage/Wrapper";
import styled from "styled-components";
import {useAppSelector} from "../_hooks/hooks";
import {useEffect} from "react";
import {useNavigate} from "react-router";
import {useSearchParams} from "react-router-dom";
import axios from "axios";

// const Background = styled.div`
//   width: 100vw;
//   height: 100vh;
// `;

// const DashboardFrame = styled.div`
//   height: 100vh;
//   width: 100vw;
//   border-radius: 30px;
//   background: rgba(255, 255, 255, 0.5);
//
//   display: flex;
// `;

const Frame = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`;
const BASE_URL = process.env.REACT_APP_BASE_URL;

/** nav바랑 footer를 담는 페이지. 아래 Outlet에 진짜 페이지들이 렌더링됩니다. */
function Layout() {
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let userId = useAppSelector(state => state.userInfo.userId);
  let token = useAppSelector(state => state.userInfo.TOKEN);
  let nickname = useAppSelector(state => state.userInfo.nickname)
  useEffect(() => {
    if (query.get('token')) {   // 로그인 후에는 query에 token이 들어있으므로 그 값을 저장하자.
      dispatch(CreateTOKEN(query.get('token')));
      dispatch(CreateUserId(query.get('userId')));
      dispatch(CreateNickname(query.get('nickname')));
      // ReactGA.set({ userId: userId });
      // ga('set', userId, userId); // 사용자 ID 설정
      window.history.pushState({}, "", "/")
    }
    else {
      if (token) {   // 토큰이 있으면 토큰 유효성을 검사하자
        axios.post(`${BASE_URL}/api/user/reissue`, {}, {
          headers: {
            Authorization: token
          }
        })
          .then(response => {
            // console.log(response.data)
            return response.data.token
          })
          .then(token => {
            const TOKEN = `Bearer ${token}`
            dispatch(CreateTOKEN(TOKEN));
            // ga('set', userId, userId); // 사용자 ID 설정
          })
          .catch(error => {
            console.log(error);
            window.localStorage.clear();
            navigate('/intro');
          })
        // ReactGA.set({ userId: userId });
      }
      else {    // 토큰이 없으면 intro로 보내버리자.
        navigate('/intro');
      }
    }
  }, [navigate]);

  useEffect(() => {
    userId.length? ga('set', userId, userId) : navigate('/intro');
    // console.log("userId 변경!");
  }, [userId])

  RouteChangeTracker();

  return (
      <Frame>
        <MenuBar nickname={nickname} />
        <Wrapper />
      </Frame>
  );
}

export default Layout;
