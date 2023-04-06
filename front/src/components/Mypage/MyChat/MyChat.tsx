import { useEffect, useState } from "react";

import Calendar from "./Calendar";
import { Comment } from "../../../_utils/Types";
import MyIdolChat from "./MyIdolChat";
import TitleComponent from "../../idolpage/TitleComponent";
import styled from "styled-components";
import Content from "../../Content";

interface Props {
  userName: string;
  idolChatData: Array<Comment | boolean>;
}

interface Item {
  content: string;
  datetime: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.27;
  width: 100%;
`;

// const ChatFrame = styled.div`
//   display: flex;
//   flex-direction: column;
//   background-color: white;
//   border-radius: 20px;
//   padding: 30px;
//   height: 100%;
// `;


function MyChat({userName, idolChatData}:Props) {
  const [clickIndex, setClickIndex] = useState<number>(0)     // 사실 이 부분도 여기서 바로 댓글 내용을 props로 내려줘도 됨!
  const [item, setItem] = useState<Item | null>(null);

  // 다른 아이돌 클릭하면 채팅과 달력 관련 리셋
  useEffect(() => {
    for (let i = 0; i<14; i++) {
      if (idolChatData[i]) {
        setItem(idolChatData[i] as Item)
      }
    }
    // setItem(null)
  },[idolChatData])
  
  useEffect(() => {
    setItem(idolChatData[clickIndex] as Item);
  },[clickIndex])

  return (
    <Wrapper>
      <TitleComponent blacktxt="나의" purpletxt="응원 댓글" />
      <Content>
        <Calendar setClickIndex={setClickIndex} idolChatData={idolChatData} />
        {item && <MyIdolChat item={item}/>}
      </Content>
    </Wrapper>
  )
}

export default MyChat;
