
import React from 'react'
import styled from 'styled-components'
import media from "styled-media-query";
import myImage from "../assets/images/images.png";
import triviaChannels from "../configs/triviaChannels.json"
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const CardsLayout = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background:#25262B; 
    max-width: 1500px;
    margin: 0 auto;
`;

const CardLayoutLink = styled(Link)`
    border-radius: 25px;
    display:grid;
    grid-template-rows: 4fr 1fr;
    ${media.lessThan("medium")`
        width: 325px;
        height: 325px;
    `}
    ${media.greaterThan("medium")`
        width: 270px;
        height: 270px;
    `}
    margin: 20px;
    box-shadow: 0 8px 12px 0 black, 0 10px 25px 0 black;
`;

//${media.lessThan("medium")`
//        scroll-snap-align: center;
//`}
////////////////////FIX HEIGHT HACK
const CardLayout = styled.div`
    border-radius: 25px;
    display:grid;
    grid-template-rows: 4fr 1fr;
    ${media.lessThan("medium")`
        width: 325px;
        height: 325px;
    `}
    ${media.greaterThan("medium")`
        width: 270px;
        height: 270px;
    `}
    margin: 20px;
    box-shadow: 0 8px 12px 0 black, 0 10px 25px 0 black;
`;
//background-color: #f1f1f1;

const Top = styled.div`
    border-radius: 25px 25px 0px 0px;
    background: linear-gradient(transparent,transparent, black);
    color: white;
    display:grid;
    grid-template-rows: 4fr 1fr 1fr
`;

const Botton = styled.div`
    border-radius: 0px 0px 25px 25px;
    background-color: #353A3E;
    padding: 5px;
    color: white;
    text-align: center;
`;

const CardTitle = styled.div`
    color: white;
    font-family: Arial;
    font-weight: bold;
    font-size: 20px;
    padding-left:10px;
`;

const Space = styled.div`
`;

const CardDetailsLayout = styled.div`
    flex-wrap: nowrap;
    justify-content: center;
    display:flex;
`;
//grid-template-columns: 1fr 1fr 1fr 1fr;

const CardDetail = styled.div`
    font-family: Arial;
    font-size: 13px;
    font-weight: bold;
    padding-top: 3px;
    padding-left: 8px;
    padding-right: 7px;
`;

const TopImage = styled.div`
    border-radius: 25px 25px 0px 0px;
    background-color: blue;
    background-image: url(${myImage});
    display:grid;
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
`;
//background-image: url(${myImage});


const Cards = ({game, questions}) => (
    <CardLayout>
        <TopImage>
        <Top>
            <Space></Space>
            <CardTitle>{game}</CardTitle>
            <CardDetailsLayout>
                <CardDetail>Plays 2.2M</CardDetail>
                <CardDetail>Q's 23</CardDetail>
                <CardDetail>Like 23k</CardDetail>
                <CardDetail>#12321</CardDetail>
            </CardDetailsLayout>
        </Top>
        </TopImage>
        <Botton>Explore #{game} Trivia</Botton>
    </CardLayout>
);
/*
const AppLayout = styled.div`
    grid-area: categorywheel;
    background-color: #25262B; 
    display: flex;
    flex-wrap: nowrap;
    overflow-x:scroll;
    ${media.lessThan("medium")`
        justify-content: flex-start;
    `}
    ${media.greaterThan("medium")`
        justify-content: center;
    `}
    &::-webkit-scrollbar {
        width: 0px;
     }
`;*/

const Slider = styled.div`
    grid-area: cards;   
    background:#25262B;
    display: flex;
    flex-wrap: nowrap;
    overflow-x:hidden;
    padding: 5px;
    justify-content: flex-start;
    &::-webkit-scrollbar {
        width: 0px;
     }
`;
//scroll-snap-type: x mandatory;

export default class GameCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            OverScrollIndex: 0,
            Categoies: 3,
            IndexGamesMap: {},
        };
        this.handleCategoryChange  = this.handleCategoryChange.bind(this);
        this.setGames              = this.setGames.bind(this);
        this.scrollerRef = React.createRef();
      }


    setGames = async ( cat, sub, index ) => {
        var getGamesByCategoryAndSubCategory = "getGamesByCategoryAndSubCategory"
        
        fetch( 'https://rcbnv6ut12.execute-api.us-east-1.amazonaws.com/test/transactions', {
        method: 'post',
        headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(
        { 
            category:     cat,
            subCategory:   sub,
            requestType:  getGamesByCategoryAndSubCategory
        })
        }).then(res=>res.json())
        .then(res => {
            let localIndexGamesMap = this.state.IndexGamesMap;
            localIndexGamesMap[index] = res;
            this.setState({IndexGamesMap:localIndexGamesMap})
            console.log(cat)
            console.log(sub)
            console.log(localIndexGamesMap)
        });

    }
      
    handleChange(e){
        
        const value = e.target.id;
        console.log(e.target);
        this.props.update(value);
    }

    handleCategoryChange( cat, subcats ){
        this.setState({Categoies:subcats.length})
        subcats.map( ( subcat, index )  => this.setGames( cat, subcat, index ))
    }

    scroll( newIndex ) {
        let element = this.scrollerRef.current;
        //let element = ReactDOM.findDOMNode(e.target).parentNode;
        //console.log( element.innerHTML)
        //console.log( "Start"+ element.scrollLeft)
        //console.log( "Start"+ element.scrollWidth)
        //console.log( "Start"+ element.id)

        let x = element.scrollWidth/element.id; //channels.length;
        let duration = 300;
        let destition = newIndex * x ;
        let change =  ( destition - element.scrollLeft ) - ( x );

        console.log( element)
        console.log( "Start"+ element.scrollLeft)
        console.log( "Change"+ change)

        var easeInOutQuad = function (t, b, c, d) {
            t /= d/2;
              if (t < 1) return c/2*t*t + b;
              t--;
              return -c/2 * (t*(t-2) - 1) + b;
        };
        var start = element.scrollLeft,
            currentTime = 0,
            increment = 20;
            
        var animateScroll = function(){        
            currentTime += increment;
            var val = easeInOutQuad(currentTime, start, change, duration);
            element.scrollLeft = val;
            if(currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        };
        animateScroll();
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.focusIndex !== prevProps.focusIndex) {
            console.log("NEW SCROLL INDEX"+ this.props.focusIndex )
            this.scroll(this.props.focusIndex);
        }
        if (this.props.category !== prevProps.category) {
            console.log("New Categories "+ this.props.category  );
            console.log("New Sub Categories "+ triviaChannels[this.props.category]  );
            //set new category state size
            this.handleCategoryChange( this.props.category, triviaChannels[this.props.category] )
            //handleCategoryChange()
        }
        
    }

    render() {
        return(
            <Slider ref="elementToFire" ref={this.scrollerRef} id={this.state.Categoies} >
                <CardsLayout >
                    <CardLayoutLink to="/create" id={"addgame"}>
                            <TopImage id={"addgame"}>
                            <Top id={"addgame"}>
                                <Space id={"addgame"}></Space>
                                <CardTitle id={"addgame"}>Add Game</CardTitle>
                                <CardDetailsLayout id={"addgame"}>
                                    <CardDetail id={"addgame"}></CardDetail>
                                    <CardDetail id={"addgame"}></CardDetail>
                                    <CardDetail id={"addgame"}></CardDetail>
                                    <CardDetail id={"addgame"}></CardDetail>
                                </CardDetailsLayout >
                            </Top>
                            </TopImage>
                            <Botton id={"addgame"}>Click to Create Trivia</Botton>
                    </CardLayoutLink>
                    {/*console.log("HELLLLLLOWW")*/}
                    {/*console.log(this.props.Games)*/}
                    {this.props.Games.map((game)=> 
                        
                        <CardLayout id={game} onClick={this.handleChange.bind(this)}>
                            <TopImage id={game}>
                            <Top id={game}>
                                <Space id={game}></Space>
                                <CardTitle id={game}>{game.SK}</CardTitle>
                                <CardDetailsLayout id={game}>
                                    <CardDetail id={game}>Plays {game.ViewCount}</CardDetail>
                                    <CardDetail id={game}>Q's {game.Questions.length}</CardDetail>
                                    <CardDetail id={game}>Likes {game.Likes}</CardDetail>
                                    <CardDetail id={game}>{game.AlexaCode}</CardDetail>
                                </CardDetailsLayout >
                            </Top>
                            </TopImage>
                            <Botton id={game}></Botton>
                        </CardLayout>
                    )}
                </CardsLayout>
                
                
            </Slider>
            );
        };
};

//{this.props.name.map(Cards)}

