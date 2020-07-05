import React from 'react';
import styled from 'styled-components'
import media from "styled-media-query";
//import Channels from './components/Channels';
import {ChannelHeader} from './components/ChannelHeader';
import {CategoryWheel} from './components/CategoryWheel';
import {Channels} from './components/Channels';
import {GameCard}  from './components/GameCard';
import Media from "react-media";
const MyNav = styled.div`
  font-size: 2em;
  grid-area: nav;
  grid-column: 1/4;
  grid-row: 1;
  background: #353A3E;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 20px;
  color: white;
  order: 1;
`;  
//order: 1;

const Space = styled.div` 
  grid-area: space;
  background: #25262B;
  
`; 

const GridLayout = styled.div`
  height: 100vh;
  display: grid;
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    grid-template-areas:
      "nav nav"
      "channelheader channelheader"
      "categorywheel categorywheel"
      "cards cards";
    grid-template-rows:  1fr 4fr 100px 15fr;
    grid-template-columns: 1fr 1000fr;
  `}
  ${media.greaterThan("medium")`
    /* screen width is greater than 1170px (large) */
    grid-template-areas:
      "nav nav nav"
      "channels channelheader space"
      "channels categorywheel space"
      "channels cards space";
    grid-template-rows:  1fr 4fr 100px 15fr;
    grid-template-columns: 1fr 4fr 1fr;
  `}
`;


export const ViewTeam = ()  => (
<div> 
    <GridLayout >
    <MyNav>Alexa's Social Qs</MyNav>
    <Media query="(min-width: 768px)" render={() =>
          (
            <Channels></Channels>
          )}
    />
    <ChannelHeader></ChannelHeader>
    <CategoryWheel></CategoryWheel>
    <GameCard></GameCard>
    <Space></Space>
          </GridLayout>
  </div> 
);


