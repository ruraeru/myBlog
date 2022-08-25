import { useState } from "react";
import styled from "styled-components";
import Contents from "./Contents";

const TagHeader = () => {
    const [select, setSelect] = useState("");
    const onClick = (e) => {
        setSelect(e.target.textContent);
        e.target.className = "hide";
    }
    // console.log(select);
    return (
        <>
            <HeaderDiv>
                <ul className="tags">
                    <li onClick={onClick}>#TS</li>
                    <li onClick={onClick}>#JS</li>
                    <li onClick={onClick}>#Dev</li>
                    <li onClick={onClick}>#PJ</li>
                </ul>
            </HeaderDiv>
            <Contents selectTags={select} />
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