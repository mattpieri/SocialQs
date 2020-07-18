import React from 'react'
import styled from 'styled-components'
import MyNavTest  from '../components/MyNav';
import ImageUploader from 'react-images-upload';
import {Link} from 'react-router-dom';
import styles from '../styles/Modal.css'; 

const Logo = styled.div`
    
`;

const Banner = styled.div`
    color: white;
    text-align: center;
    padding: 5px;
    font-size: 20px;


`;

const Text = styled.div`
font-size: 1em;
color: white;
`;
const SubText = styled.div`
    font-size: 13px;
    color: #9f9fa1;

`;

const Background = styled.div`
    background-color: #25262B; 
    height:100vh;
`;


const TextLayout = styled(Link)`
    padding-top: 5px;
    padding-bottom: 5px;
    border-bottom:    1px solid  #353A3E;
    margin-left: 10px;
    margin-right: 10px;
`;

const AppLayout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    background-color: #25262B; 
`;

const Questionlayout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin-left:10px;
    margin-right:10px;
`;

const Question = styled.div`
    border-radius:25px;
    border: 1px solid #353A3E;
    margin-top:5px;
    margin-bottom:5px;
    padding: 10px;
    padding-left:15px;
    font-size: 13px;
    color: #9f9fa1;
`;

export default class ViewTeam extends React.Component {
    constructor(props) {
        super(props);
         this.state = { pictures: [] };
         this.onDrop = this.onDrop.bind(this);
         this.passStat = this.passStat.bind(this);
    }

    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }

    passStat(f, v) {
        return( {pathname:'/edit', state: {field:f, value:v}});
    }

    render() {
        
        return(
        <Background>
            <MyNavTest>Alexa's Social Qs</MyNavTest>
            <AppLayout>
            <Banner>Add Game</Banner>
            <TextLayout>
            <ImageUploader
                withIcon={true}
                withLabel={false}
                fileContainerStyle = {{"font-color":"white","margin-left": "auto","margin-right": "auto","width": "50%","background-color": "#353A3E"}}
                buttonStyles = {{"color":"#4B4B4C","background-color":"#353A3E","border":"1px solid #4B4B4C"}}
                buttonText='Choose photo'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
            </TextLayout>
            <TextLayout to={this.passStat("Alexa Code")}><Text>Alexa Code</Text><SubText>#43243</SubText></TextLayout>
            <TextLayout to={this.passStat("Title","Pokemon")}><Text>Title</Text><SubText>Pokemon</SubText></TextLayout>
            <TextLayout to={this.passStat("Category","Entertainment")}><Text>Category</Text><SubText>Entertainment</SubText></TextLayout>
            <TextLayout to={this.passStat("Sub-Category","TV")}><Text>Sub-Category</Text><SubText>TV</SubText></TextLayout>
            <TextLayout to={this.passStat("Visiblity","Public")}><Text>Visiblity</Text><SubText>Public</SubText></TextLayout>
            
            <TextLayout><Text>Questions</Text>
                <Questionlayout>
                    <Question>+ Add Question</Question>
                    <Question>Test</Question>
                    <Question>Test</Question>
                </Questionlayout>
            </TextLayout>
            </AppLayout>
        </Background>
         );
        };
};
