import IdolKeywordRank from "../idolpage/idolkeyword/IdolKeywordRank";
import IdolKeywordWordCloud from "../idolpage/idolkeyword/IdolKeywordWordCloud";
import styled from "styled-components";
import { useState } from "react";

const ComponentDiv = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  height: 100%;
  //justify-content: space-between;
`;

function TrendKeyword() {
  const [chooseKeyword, setChooseKeyword] = useState<number>(0);

  // 멋지게 10초마다 선택한 키워드 변경하고 싶었음..
  // useEffect(() => {
  //   const ChangeKeyword = setTimeout(() => {
  //     setChooseKeyword(prev => (prev + 1) % 5);
  //   }, 10000)
  //   return () => {clearTimeout(ChangeKeyword)}
  // }, [chooseKeyword])

  return (
    <ComponentDiv>
      <IdolKeywordRank setChooseKeyword={setChooseKeyword} chooseKeyword={chooseKeyword} />
      <IdolKeywordWordCloud chooseKeyword={chooseKeyword} />
    </ComponentDiv>
  );
}

export default TrendKeyword;
