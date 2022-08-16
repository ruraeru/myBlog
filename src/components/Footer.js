import styled from "styled-components";

const Footer = () => {
    return (
        <Foot>
            @ruraeru, Built with React
        </Foot>
    );
};


const Foot = styled.footer`
   display: flex;
   justify-content: center;
   align-items: center;
   
   height: 112px;
   
   font-weight: bold;

   margin-top: 56px;
   background-color: rgb(240, 240, 240);
`;

export default Footer;



