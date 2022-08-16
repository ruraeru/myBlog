import styled from "styled-components";

const TagHeader = () => {
    return (
        <HeaderDiv>
            <ul className="tags">
                <li>#TypeScript</li>
                <li>#JavaScript</li>
                <li>#Dev</li>
                <li>#ProJect</li>
            </ul>
        </HeaderDiv>
    );
};

const HeaderDiv = styled.div`
   display: flex;
   align-items: center;
   
   height: 70px;

   list-style: none;
   /* background-color: #FBCB43; */
   background-color: #fab005;
`;

export default TagHeader;