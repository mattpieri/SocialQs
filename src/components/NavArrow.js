//<Logo src={menuImage} onClick={this.handleChange.bind(this)}></Logo>


import React from 'react'
import styled from 'styled-components'
import backwardarrow from "../assets/images/backwardarrow.png";

const Image = styled.img`
position: absolute;
margin: 20px;

`
//position: absolute;

export default class NavArrow extends React.Component {
    handleChange(e){
        this.props.update();
    }

    render() {
        return(
            <Image src={backwardarrow} ></Image>
            );
        };
};