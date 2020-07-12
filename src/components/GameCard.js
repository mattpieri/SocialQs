
import React from 'react'
import styled from 'styled-components'
import media from "styled-media-query";
import myImage from "../assets/images/images.png";
import triviaChannels from "../configs/triviaChannels.json"
import ReactDOM from 'react-dom';

const CardsLayout = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background:#25262B; 
    height:2000px;
    
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
        };
        //this._fireOnScroll = this.fireOnScroll.bind(this);
        this.scrollerRef = React.createRef();
      }
    /*
    fireOnScroll(e) {
        for(var i=0;i < this.state.Categoies;i++)
        {
            let Bottom = i/this.state.Categoies-.05;
            let Top    =  i/this.state.Categoies+.05;
            let x = e.target.scrollLeft/e.target.scrollWidth;
            if( Bottom < x && x < Top)
                this.state.OverScrollIndex = i;
        }
        //this.props.updateScrollIndex(this.state.OverScrollIndex+1 );

        //console.log('Scroll ' + ScrollIndex)

        //console.log(e.target.scrollLeft);
        //console.log(e.target.scrollWidth);
        //console.log(e.target.scrollLeft/e.target.scrollWidth);
        //console.log(this.state.OverScrollIndex);
    }
    //scrollWidth
    componentDidMount() {
        const elem = ReactDOM.findDOMNode(this.refs.elementToFire);
        elem.addEventListener('scroll', this._fireOnScroll, true);
    }
    
    componentWillUnmount() {
        const elem = ReactDOM.findDOMNode(this.refs.elementToFire);
        elem.removeEventListener('scroll', this._fireOnScroll);
    }*/

    handleChange(e){
        
        const value = e.target.id;
        console.log(e.target);
        this.props.update(value);
    }

    handleScroll(e){
        
        //const value = e.target.id;
        console.log("asdfa");
        //this.props.update(value);
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
    }

    render() {
        return(
            <Slider ref="elementToFire" ref={this.scrollerRef} id={this.state.Categoies} >
                <CardsLayout >
                    {this.props.Games.map(({game, questions})=> 
                        <CardLayout id={game} onClick={this.handleChange.bind(this)}>
                            <TopImage id={game}>
                            <Top id={game}>
                                <Space id={game}></Space>
                                <CardTitle id={game}>{game}</CardTitle>
                                <CardDetailsLayout id={game}>
                                    <CardDetail id={game}>Plays 2.2M</CardDetail>
                                    <CardDetail id={game}>Q's 23</CardDetail>
                                    <CardDetail id={game}>Like 23k</CardDetail>
                                    <CardDetail id={game}>#12321</CardDetail>
                                </CardDetailsLayout >
                            </Top>
                            </TopImage>
                            <Botton id={game}>Explore #{game} Trivia</Botton>
                        </CardLayout>
                    )}
                </CardsLayout>
                <CardsLayout>
                    {this.props.Games.map(({game, questions})=> 
                        <CardLayout id={game} onClick={this.handleChange.bind(this)}>
                            <TopImage id={game}>
                            <Top id={game}>
                                <Space id={game}></Space>
                                <CardTitle id={game}>{game}</CardTitle>
                                <CardDetailsLayout id={game}>
                                    <CardDetail id={game}>Plays 2.2M</CardDetail>
                                    <CardDetail id={game}>Q's 23</CardDetail>
                                    <CardDetail id={game}>Like 23k</CardDetail>
                                    <CardDetail id={game}>#12321</CardDetail>
                                </CardDetailsLayout >
                            </Top>
                            </TopImage>
                            <Botton id={game}>Explore #{game} Trivia</Botton>
                        </CardLayout>
                    )}
                </CardsLayout>
                <CardsLayout>
                    {this.props.Games.map(({game, questions})=> 
                        <CardLayout id={game} onClick={this.handleChange.bind(this)}>
                            <TopImage id={game}>
                            <Top id={game}>
                                <Space id={game}></Space>
                                <CardTitle id={game}>{game}</CardTitle>
                                <CardDetailsLayout id={game}>
                                    <CardDetail id={game}>Plays 2.2M</CardDetail>
                                    <CardDetail id={game}>Q's 23</CardDetail>
                                    <CardDetail id={game}>Like 23k</CardDetail>
                                    <CardDetail id={game}>#12321</CardDetail>
                                </CardDetailsLayout >
                            </Top>
                            </TopImage>
                            <Botton id={game}>Explore #{game} Trivia</Botton>
                        </CardLayout>
                    )}
                </CardsLayout>
            </Slider>
            );
        };
};

//{this.props.name.map(Cards)}

