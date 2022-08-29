import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import NftData from "./NftData";


const Wrapper = styled.div``;

interface NftData {
  key: number;
  name: string;
  gmeUrl : number;
  ipfsUrl : string;
  imgUrl:string;
  score:number;
  rank:number;
}
type Props = { data: NftData[] };

function App(props:Props
//   { key, name, gmeUrl,ipfsUrl,imgUrl,score,rank}: {
//   key: string,
//   name: string,
//   gmeUrl: string,
//   ipfsUrl:string,
//   imgUrl:string,
//   score:number,
//   rank:number
// }
) {
  return props.data.map(item => (
  <Wrapper>
     <NftData key={item.key}
        name={item.name}
        gmeUrl={item.gmeUrl}
        ipfsUrl={item.ipfsUrl}
        imgUrl={item.imgUrl}
        score={item.score}
        rank={item.rank}
      />
    
    {/* <NftData key={key} name={name} ipfsUrl={Props} gmeUrl={gmeUrl} imgUrl={imgUrl} score={score} rank={rank} /> */}
  </Wrapper>
  ));
}

export default App;
