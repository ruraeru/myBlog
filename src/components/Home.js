import styled from 'styled-components';
import Contents from "./Contents";
import Header from "./Header";
import TagHeader from './TagHeader';

const Home = () => {
    return (
        <>
            <Header />
            <TagHeader />
            <Contents />
            <Contents />
            <Footer>
                @ruraeru, Built with React
            </Footer>
        </>
    )
};

const Footer = styled.footer`
   display: flex;
   justify-content: center;
   align-items: center;
   margin-top: 56px;
   height: 112px;
   background-color: rgb(240, 240, 240);
`;


export default Home;