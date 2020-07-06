
import React from 'react'
import styled from 'styled-components'
import media from "styled-media-query";
import myImage from "../assets/images/images.png";
import triviaChannels from "../configs/triviaChannels.json"

const CardsLayout = styled.div`
    grid-area: cards;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background:#25262B; 
`;

const CardLayout = styled.div`
    border-radius: 25px;
    display:grid;
    grid-template-rows: 4fr 1fr;
    ${media.lessThan("medium")`
        width: 400px;
        height: 400px;
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

export default class GameCard extends React.Component {
   
    handleChange(e){
        
        const value = e.target.id;
        console.log(e.target);
        this.props.update(value);
    }

    render() {
        return(
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
            );
        };
};

//{this.props.name.map(Cards)}

