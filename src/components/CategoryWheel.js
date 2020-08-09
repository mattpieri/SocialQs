
import React from 'react'
import styled from 'styled-components'
import media from "styled-media-query";
import triviaChannels from '../configs/triviaChannels.json'
import ReactDOM from 'react-dom'

const AppLayout = styled.div`
    grid-area: categorywheel;
    background-color: #25262B; 
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
    margin: 0 auto;
    max-width: 60vw;
    height: fit-content;
    div:nth-child(${props =>props.focusIndex}) {
        color: palevioletred;
    } 
    ${media.lessThan("medium")`
        max-width: 80vw;
    `}
    // ${media.greaterThan("medium")`
    //     justify-content: flex-start;
    // `}
    &::-webkit-scrollbar {
        width: 0px;
     }
     justify-content: space-between;
     user-select: none;
     border-bottom: 3px solid rgba(255,255,255,.1);
`;
 //
const Text = styled.div`

    font-size: 2em;
    color: white;
    font-family: Arial; 
    text-align: center;
    padding: 0 20px;
    color: "white";
    cursor: pointer;
`;

const Button = styled.button`
`;
 //;
export default class CategoryWheel extends React.Component {
    constructor(props) {
        super(props);
        this.scroll = this.scroll.bind(this);
        this.changeFocus = this.changeFocus.bind(this);
        this.state = {
            focusIndex: 1,
            Categories: [],
        };
        this.parentRef = React.createRef();
      }

    scroll( newIndex ) {
        let element = this.parentRef.current;
        //let element = ReactDOM.findDOMNode(e.target).parentNode;
        //console.log( element.innerHTML)
        let x = element.scrollWidth/element.id; //channels.length;
        let duration = 300;
        let destition = newIndex * x ;
        let change =  ( destition - element.scrollLeft ) - ( x * 2 - 60 );

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
        //if (this.props.focusIndex !== prevProps.focusIndex) {
            //this.scroll(this, prevProps.focusIndex, this.props.focusIndex, this.props.Channel);
        //}
        if (this.props.Channel !== prevProps.Channel) {
            
            //this.scroll(this, prevProps.focusIndex, this.props.focusIndex, this.props.Channel);
        }
      }
    
    changeFocus(focusIndex){
        this.setState({focusIndex:focusIndex})
    }

    // changeFocus(focusIndex){
    //     this.setState({focusIndex:focusIndex})
    // }
    
    handleChange(e){
        const value = e.target.id;
        this.changeFocus(value);
        this.props.updateScrollIndex(value);
        this.scroll(value);
    }

    render() {
        return(
            <AppLayout ref={this.parentRef} 
                    focusIndex ={this.state.focusIndex}
                    id={triviaChannels[this.props.Channel].length}
                >
                {triviaChannels[this.props.Channel].map((station, index)=> 
                    <Text 
                        onClick={this.handleChange.bind(this)}
                        id={index+1}
                    >{station}</Text>
                )}                
            </AppLayout>
            );
        };
};