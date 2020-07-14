import React from 'react';
import styled from 'styled-components'
import media from "styled-media-query";
import ChannelHeader from './components/ChannelHeader';
import CategoryWheel from './components/CategoryWheel';
import Channels from './components/Channels';
import GameCard  from './components/GameCard';
import Questions  from './components/Question';
import MyNavTest  from './components/MyNav';
import Media from "react-media";
import ReactModal from "react-modal";
import styles from './styles/Modal.css'; 


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
        showMenuModal: false,
        ScrollIndex: 0,
        Game: null,
        SelectedGameObject: null,
    };
    //this.games = [ { game: 'game1', questions: ['What is my name']}, { game: 'game2', questions: ['good', 'test']} ]
    //Array.prototype.forEach.call(this.games, game => this.state[game] = false )
    this.getGames.bind(this)
    this.getGames()
    this.handleOpenModal  = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);  
    this.closeMenuModal  = this.closeMenuModal.bind(this);
    this.changeGame = this.changeGame.bind(this);
    this.updatedSelectedGame = this.updatedSelectedGame.bind(this);

  }
  
  changeChannel(Channel){
    this.setState({Channel:Channel})
    //this.setState({ showMenuModal: false });
  }

  updatedSelectedGame(SelectedGameObject)
  {
    this.setState({SelectedGameObject:SelectedGameObject})
  };

  changeGame(Game){
    this.setState({Game:Game})

    //this.setState({SelectedGameObject:this.state.Games[0]})
    this.state.Games.map((item) => {
      if (item['game']===Game) {
        this.updatedSelectedGame(item)
      } 
    });
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
  
  openMenuModal () {
    this.setState({ showMenuModal: true });
  }

  closeMenuModal () {
    this.setState({ showMenuModal: false });
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
          <Questions handleClose={this.handleCloseModal} Game={this.state.SelectedGameObject}></Questions>
        </ReactModal>
        <ReactModal 
          isOpen={this.state.showMenuModal}
          contentLabel="Minimal Modal Example"
          className="MenuModal"
          overlayClassName="MenuOverlay"
          disableAutoFocus={true}
        >
          <Channels handleClose={this.closeMenuModal} update={this.changeChannel.bind(this)}></Channels>)
        </ReactModal>
        <GridLayout >
          <MyNavTest update={this.openMenuModal.bind(this)} >Alexa's Social Qs</MyNavTest>
          <Media query="(min-width: 768px)" render={() => (<Channels update={this.changeChannel.bind(this)}></Channels>)}/>
          <ChannelHeader Title={this.state.Channel}></ChannelHeader>
          <CategoryWheel updateScrollIndex={this.changeScrollIndex.bind(this)} Channel={this.state.Channel}></CategoryWheel>
          <GameCard focusIndex={this.state.ScrollIndex}  Games={this.state.Games} update={this.changeGame}></GameCard>
          <Space></Space>
        </GridLayout>
      </div>
      
    );
  };
};

//{this.state.ScrollIndex}
//<CategoryWheel focusIndex={this.state.ScrollIndex}  Channel={this.state.Channel}></CategoryWheel>
//          <GameCard focusIndex={0} updateScrollIndex={this.changeScrollIndex.bind(this)} Games={this.state.Games} update={this.changeGame.bind(this)}></GameCard>
          