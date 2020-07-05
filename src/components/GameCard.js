
import React from 'react'
import styled from 'styled-components'
import media from "styled-media-query";

const CardLayout = styled.div`
    grid-area: cards;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background:#25262B; 
`;


//grid-row:4;
//grid-column:2;
const Card = styled.div`
    border-radius: 25px;
    background-color: #f1f1f1;
    
    ${media.lessThan("medium")`
        width: 400px;
        height: 400px;
    `}
    ${media.greaterThan("medium")`
        width: 270px;
        height: 270px;
    `}
    margin: 20px;
    text-align: center;
    line-height: 75px;
    font-size: 30px;
    box-shadow: 0 8px 12px 0 black, 0 10px 25px 0 black;
`;

export const GameCard = () => (
    
    <CardLayout>
        <Card>1</Card>
        <Card>2</Card>
        <Card>3</Card>  
        <Card>4</Card>
        <Card>5</Card>
        <Card>6</Card>  
        <Card>7</Card>
        <Card>8</Card>
    </CardLayout>

)

