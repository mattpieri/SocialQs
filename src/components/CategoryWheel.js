
import React from 'react'
import styled from 'styled-components'
import media from "styled-media-query";
import triviaChannels from '../configs/triviaChannels.json'

const AppLayout = styled.div`
    grid-area: categorywheel;
    background-color: #25262B; 
    display: flex;
    flex-wrap: nowrap;
    overflow-x:scroll;
    div:nth-child(${props =>props.focusIndex}) {
        color: palevioletred;
        font-weight: bold;
    } 
    ${media.lessThan("medium")`
        justify-content: flex-start;
    `}
    ${media.greaterThan("medium")`
        justify-content: center;
    `}
    &::-webkit-scrollbar {
        width: 0px;
     }
     margin-left:20px; 
     margin-right:20px; 
     border-bottom: 1px solid white;
     
`;
 
const Text = styled.div`

    font-size: 2em;
    color: white;
    font-family: Arial; 
    text-align: center;
    padding: 20px;
    color: "white";
`;

const Button = styled.button`
`;
 //;
export default class CategoryWheel extends React.Component {
    constructor(props) {
        super(props);
        this.scroll = this.scroll.bind(this);
      }

    scroll( e, prevIndex, newIndex, channels ) {
        let element = e.refs.child1;
        
        let x = element.scrollWidth/channels.length;

        /*let change = x;
        if( prevIndex >  newIndex){
            change = -1 * x;
        } */
        let duration = 300;
        let destition = newIndex * ( x + 10 );
        let change =  ( destition - element.scrollLeft ) - x;

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
            this.scroll(this, prevProps.focusIndex, this.props.focusIndex, this.props.Channel);
        }
      }
    
    render() {
        return(
            <AppLayout ref='child1' focusIndex = {this.props.focusIndex}>
                {triviaChannels[this.props.Channel].map((station)=> 
                    <Text
                        id={station}
                    >{station}</Text>
                )}                
            </AppLayout>
            );
        };
};