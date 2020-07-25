import React, { Component, useContext } from 'react'
import styled from 'styled-components'
import MyNavTest  from '../components/MyNav';
import {Link} from 'react-router-dom';
import backwardarrow from "../assets/images/backwardarrow.png";
import {CreateContext} from '../contexts/CreateContext'

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

const Editor = styled.input`
    font-size: 40px;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    outline: none;
    color: palevioletred;
    background-color: #25262B
`;

class SimpleTextEdit extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            value: '',
        };
        this.passStat = this.passStat.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.goBack = this.goBack.bind(this);

    }

    goBack(){
        console.log("TEST")
        this.props.history.goBack();
    }

    componentDidMount () {
        this.setState({ value: this.props.location.state.value });

    }
    passStat(param) {
        return( {pathname:'/edit', state: {field:param, value:""}});
    }

    handleChange(event) {
        console.log(this.context)
        this.setState({value: event.target.value});
    }                              

    render() {
        return(

        <Background>
            <Image onClick={this.goBack} src={backwardarrow} ></Image>
            <Banner>{this.props.location.state.field}</Banner>
            <Editor 
                    type="text" 
                    value={this.state.value}
                    onChange={this.handleChange}/>
        </Background>

         );
        };
};

export default SimpleTextEdit