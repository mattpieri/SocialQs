import React from 'react';
import styled from 'styled-components'
import media from "styled-media-query";
import ChannelHeader from './components/ChannelHeader';
import CategoryWheel from './components/CategoryWheel';
import Channels from './components/Channels';
import GameCard  from './components/GameCard';
import Questions  from './components/Question';
import Media from "react-media";
import ReactModal from "react-modal";
import styles from './styles/Modal.css'; 

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
const Space = styled.div` 
  grid-area: space;
  background: #25262B;
  
`; 
const GridLayout = styled.div`
  height: 100vh;
  display: grid;
  background-color: #25262B;
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
///change background color of gridlayout for debugging

export default class ViewTeam extends React.Component {

  constructor() {
    super();
    this.apiTransactions = 'https://rcbnv6ut12.execute-api.us-east-1.amazonaws.com/test/transactions';
    this.state = {
        Games: [],// { game: 'game1', questions: ['What is my name']}, { game: 'game2', questions: ['good', 'test']} ]
        Channel: 'General',
        showModal: false,
        Game: null,
        ScrollIndex: 0,
    };
    //this.games = [ { game: 'game1', questions: ['What is my name']}, { game: 'game2', questions: ['good', 'test']} ]
    //Array.prototype.forEach.call(this.games, game => this.state[game] = false )
    this.getGames.bind(this)
    this.getGames()
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);          
  }
  
  changeChannel(Channel){
    this.setState({Channel:Channel})
  }

  changeGame(Game){
    this.setState({Game:Game})
    this.handleOpenModal()
  }
  
  changeScrollIndex(ScrollIndex){
    this.setState({ScrollIndex:ScrollIndex})
    //console.log('Scroll ' + ScrollIndex)
  }

  getGames = async () => {
    fetch( 'https://rcbnv6ut12.execute-api.us-east-1.amazonaws.com/test/games')
    .then(res=>res.json())
    .then(res => this.setState({Games:res}));
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render() {
    return(
      <div> 
        <ReactModal 
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
          className="Modal"
          overlayClassName="Overlay"
          disableAutoFocus={true}
        >
          <Questions handleClose={this.handleCloseModal} Games={this.state.Games} Game={this.state.Game}></Questions>
        </ReactModal>
        <GridLayout >
          <MyNav>Alexa's Social Qs</MyNav>
          <Media query="(min-width: 768px)" render={() =>
                (<Channels update={this.changeChannel.bind(this)}></Channels>)}/>
          <ChannelHeader Title={this.state.Channel}></ChannelHeader>
          <CategoryWheel focusIndex={this.state.ScrollIndex}  Channel={this.state.Channel}></CategoryWheel>
          <GameCard updateScrollIndex={this.changeScrollIndex.bind(this)} Games={this.state.Games} update={this.changeGame.bind(this)}></GameCard>
          <Space></Space>
        </GridLayout>
      </div>
      
    );
  };
};

//{this.state.ScrollIndex}
