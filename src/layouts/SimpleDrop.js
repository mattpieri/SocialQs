import React, {useContext, useRef} from 'react';
import {CreateContext} from '../contexts/CreateContext'
import styled from 'styled-components'
import backwardarrow from "../assets/images/backwardarrow.png";
import triviaChannels from '../configs/triviaChannels.json'

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

const Text = styled.select`
    font-size: 40px;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    outline: none;
    color: palevioletred;
    background-color: #25262B
`;

const ComplexDrop = props => {
    const [details, setDetails] = useContext(CreateContext);
    const inputEl = useRef(null);

    const goBack = e => {
        setDetails({...details,["SubCategory"]:inputEl.current.value});
        props.history.goBack();
    }
    const handleChange = e => {
        setDetails({...details,["Category"]:e.target.value});
    }
    
    const handleSubChange = e => {
        console.log(details);
        setDetails({...details,["SubCategory"]:e.target.value});
    }

    return (
        <Background>
            <Image onClick={goBack} src={backwardarrow} ></Image>
            <Banner>Category</Banner>
            <Text onChange={handleChange}>
                {
                triviaChannels.Categories.map((channel)=> 
                    <option value={channel}>{channel}</option>
                )
                }
            </Text>
            <Banner>Sub Category</Banner>
            <Text onChange={handleSubChange} ref={inputEl}>
                {
                triviaChannels[details.Category].map((channel)=> 
                    <option value={channel}>{channel}</option>
                )
                }
            </Text>
        </Background>
    )
};

const SimpleDrop = props => {
    const [details, setDetails] = useContext(CreateContext);
    const goBack = e => {
        props.history.goBack();
    }
    const handleChange = e => {
        setDetails({...details,["Visibility"]:e.target.value});
    }
    
    return (
        <Background>
            <Image onClick={goBack} src={backwardarrow} ></Image>
            <Banner>Visibility</Banner>
            <Text onChange={handleChange}>
                {
                triviaChannels.Visiblity.map((channel)=> 
                    <option value={channel}>{channel}</option>
                )
                }
            </Text>
        </Background>
    )
};

export{ ComplexDrop, SimpleDrop }

