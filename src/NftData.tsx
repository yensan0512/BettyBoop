import React from "react";
import styled from "styled-components";
import NftAllData from "./nft.json";
import userData from "./users.json";
import JsonData from "./data";
import newData from "./NewData.json";

function NftData()
{
// {userData && userData.users && userData.users.map(user => <div>{user.name}</div>)}
// {NftAllData && NftAllData.data && NftAllData.users.map(user => <div>{user.name}</div>)}
        {JsonData.map((data) => {
            return (
            //   <div key={data.rank}>
                <div>
                  <span>key={data.rank}</span>
                  <span>name={data.name}</span>
                  <span>gmeUrl={data.gmeUrl}</span>
                  <span>ipfsUrl={data.ipfsUrl}</span>
                  <span>imgUrl={data.imgUrl}</span>
                  <span>score={data.score}</span>
                  <span>rank={data.rank}</span>
                  </div>
            //   </div>
            );
            })};
}

export default NftData



