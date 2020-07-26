import React, {useContext, useState} from 'react';
import styled from 'styled-components'
import MyNavTest  from '../components/MyNav';
import ImageUploader from 'react-images-upload';
import {Link} from 'react-router-dom';
import styles from '../styles/Modal.css'; 
//import DataProvider from '../contexts/DataProvider'
import SimpleTextInput from './Test';
import {CreateContext} from '../contexts/CreateContext'

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
    height: 100vh;
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

const QuestionLink = styled(Link)`
    border-radius:25px;
    border: 1px solid #353A3E;
    margin-top:5px;
    margin-bottom:5px;
    padding: 10px;
    padding-left:15px;
    font-size: 13px;
    color: #9f9fa1;
`;

const Create = props => {
    const [picture, setPicture ] = useState([]);
    const [details, setDetails] = useContext(CreateContext);

    const onDrop = picture => {
        console.log(picture);
        //setPicture({...prevPic
        //    pictures: this.state.pictures.concat(picture),
        //});
    }

    const NavDirector = ( f ) => {
        console.log(f)
        switch( f ){
        case "AlexaCode":
            return( {pathname:'/text', state: {field:f, display: "Alexa Code"}});
        
        case "Title":
            return( {pathname:'/edit', state: {field:f, display: "Title"}});
        
        case "Category":
            return( {pathname:'/drop', state: {field:"Category", display: "Category"}});
                
        case "SubCategory":
            return( {pathname:'/drop', state: {field:f, display: "Sub Category"}});
        
        case "Visiblity":
            return( {pathname:'/simpdrop', state: {field:f, display: "Visiblity"}});
        
        }
    }

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
            onChange={onDrop}
            imgExtension={['.jpg', '.gif', '.png', '.gif']}
            maxFileSize={5242880}
        />
        </TextLayout>

        <TextLayout to={{pathname:'/text', state: {field:"AlexaCode", display: "Alexa Code"}}}><Text>Alexa Code</Text><SubText>{details.AlexaCode}</SubText></TextLayout>
        <TextLayout to={{pathname:'/edit', state: {field:"Title", display: "Title"}}}><Text>Title</Text><SubText>{details.Title}</SubText></TextLayout>
        <TextLayout to={{pathname:'/drop', state: {field:"Category", display: "Category"}}}><Text>Category</Text><SubText>{details.Category}</SubText></TextLayout>
        <TextLayout to={{pathname:'/drop', state: {field:"SubCategory", display: "Sub Category"}}}><Text>Sub-Category</Text><SubText>{details.SubCategory}</SubText></TextLayout>
        <TextLayout to={{pathname:'/simpdrop', state: {field:"Visibility", display: "Visibility"}}}><Text>Visiblity</Text><SubText>{details.Visibility}</SubText></TextLayout>
        
        <TextLayout><Text>Questions</Text>
            <Questionlayout>
                <QuestionLink to={{pathname:'/question', state: {field:"Visibility", display: "Visibility"}}}>+ Add Question</QuestionLink>
                {
                details.Questions.map((question)=> 
                    <Question id={question.questionId}>{question.question}</Question>
                )
                }
            </Questionlayout>
        </TextLayout>
        </AppLayout>
    </Background>
    );
};

export default Create