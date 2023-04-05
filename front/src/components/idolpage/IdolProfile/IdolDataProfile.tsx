import IdolDataProfileSns from './IdolDataProfileSns';
import styled from "styled-components";
import { useParams } from 'react-router';

interface ImageType {
  backgroundImg: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0.5;
  width: 100%;
  padding: 30px;
`;

const ProfileImg = styled.div<ImageType>`
  border-radius: 100px;
  width: 200px;
  height: 200px;
  background-image: url(${props => props.backgroundImg});
  background-color: aqua;
  background-size: cover;
  background-position: center;
  margin: 30px;
`;

function IdolDataProfile () {
  // const params = useParams();
  // const idolName:string = params.idolName || "";
  const idolName:string = "세븐틴"
  const DOMAIN = process.env.REACT_APP_BASE_URL
  return (
    <Wrapper>
      {/* <ProfileImg backgroundImg= { `${DOMAIN}/img/${idolName}.webp`} /> */}
      <ProfileImg backgroundImg= { `https://j8a507.p.ssafy.io/img/${idolName}.webp`} />
      <IdolDataProfileSns />
    </Wrapper>
  )
}

export default IdolDataProfile;