import React from 'react'
import styled from 'styled-components'
import menuImage from "../assets/images/menu.png";
import media from "styled-media-query";

const Text = styled.div`
  font-size: 15px;
  color: white;
  padding-left:5px;

`; 

const NavLayout = styled.div`
    grid-area: nav;
    grid-column: 1/3;
    grid-row: 1;
    background: #353A3E;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    color: white;
    order: 1;
    display:flex;
    wrap:nowrap;
    padding: 20px;
    ${media.lessThan("medium")`
        grid-column: 1/2;
  `}

`;

const Logo = styled.img`
    padding: 4px;
    display: none;
    cursor: pointer;
    ${media.lessThan("medium")`
        display: block;
  `}
`

export default class MyNavTest extends React.Component {
    handleChange(e){
        this.props.update();
    }

    render() {
        return(
            <NavLayout>
            <Logo src={menuImage} onClick={this.handleChange.bind(this)}></Logo>
            <Text>Alexa's Social Qs</Text>
            </NavLayout>
            );
        };
};
//