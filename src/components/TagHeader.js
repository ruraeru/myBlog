import { useState } from "react";
import styled from "styled-components";
import Contents from "./Contents";

const TagHeader = () => {
    const [select, setSelect] = useState([]);
    const onClick = (e) => {
        select.map((item) => (e.target.textContent === item ? null : setSelect(currentArray => [e.target.textContent, ...currentArray])))
        console.log(e.target.textContent, select);
    }
    console.log(select);
    return (
        <>
            <HeaderDiv>
                <ul className="tags">
                    <li onClick={onClick}>#TypeScript</li>
                    <li onClick={onClick}>#JavaScript</li>
                    <li onClick={onClick}>#Dev</li>
                    <li onClick={onClick}>#ProJect</li>
                </ul>
            </HeaderDiv>
            <Contents />
        </>
    );
};

const HeaderDiv = styled.div`
   display: flex;
   align-items: center;
   justify-content: flex-start;
   height: 70px;

   list-style: none;
   /* background-color: #FBCB43; */
   background-color: #fab005;
   .tags > li{
    padding: 2px 4px 2px 4px;
    font-size: 14px;
   }
`;

export default TagHeader;