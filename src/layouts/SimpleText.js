import React, {useContext} from 'react';
import {CreateContext} from '../contexts/CreateContext'
import styled from 'styled-components'
import backwardarrow from "../assets/images/backwardarrow.png";

const Image = styled.img`
position: absolute;
margin: 20px;

`
const Banner = styled.div`
    color: white;
    text-align: center;
    padding: 5px;
    font-size: 20px;
    margin: 10px;

`;

const Background = styled.div`
    background-color: #25262B; 
    height:100vh;
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: start;
`;

const Text = styled.div`
    font-size: 40px;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    outline: none;
    color: palevioletred;
    background-color: #25262B
`;

const SimpleText = props => {
    const [details, setDetails] = useContext(CreateContext);

    const goBack = e => {
        console.log("TEST")
        props.history.goBack();
    }
    return (
        <Background>
            <Image onClick={goBack} src={backwardarrow} ></Image>
            <Banner>{props.location.state.display}</Banner>
            <Text>{details[ props.location.state.field ]}</Text>
        </Background>
    )
}

export default SimpleText