import React from 'react'
import styled from 'styled-components'
import MyNavTest  from './components/MyNav';
import ImageUploader from 'react-images-upload';
import styles from './styles/Modal.css'; 

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



const TextLayout = styled.div`
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

export default class ViewTeam extends React.Component {
    constructor(props) {
        super(props);
         this.state = { pictures: [] };
         this.onDrop = this.onDrop.bind(this);
    }

    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }

    render() {
        
        return(
        <div>
            <MyNavTest>Alexa's Social Qs</MyNavTest>
            <AppLayout>
            <Banner>Create</Banner>
            <TextLayout><Text>Photo</Text>
            <ImageUploader
                withIcon={true}
                withLabel={false}
                fileContainerStyle = {{"margin-left": "auto","margin-right": "auto","width": "50%","background-color": "#9f9fa1"}}
                buttonText='Choose photo'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
            </TextLayout>
            <TextLayout><Text>Alexa Code</Text><SubText>#43243</SubText></TextLayout>
            <TextLayout><Text>Title</Text><SubText>Pokemon</SubText></TextLayout>
            <TextLayout><Text>Category</Text><SubText>Entertainment</SubText></TextLayout>
            <TextLayout><Text>Sub-Category</Text><SubText>TV</SubText></TextLayout>
            <TextLayout><Text>Visiblity</Text><SubText>Public</SubText></TextLayout>
            
            <TextLayout><Text>Questions</Text><SubText>.</SubText></TextLayout>
            </AppLayout>
        </div>
         );
        };
};
