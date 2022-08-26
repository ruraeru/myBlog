import { useEffect, useState } from "react";
import styled from "styled-components";
import Contents from "./Contents";
import Data from "../Contents-json";

const TagHeader = () => {
    const [select, setSelect] = useState("");
    const [list, setList] = useState([]);
    useEffect(() => {
        setList(Data);
    }, []);
    const onClick = (e) => {
        setSelect(e.target.value);
    }
    // console.log(select);
    return (
        <>
            <HeaderDiv>
                <ul className="tags">
                    {list.map((data) => (
                        data.tags.map((tag, index) => (
                            <button key={index} onClick={onClick} value={tag}>#{tag}</button>
                        ))
                    ))}
                </ul>
                {/* <ul className="tags">

                    <li onClick={onClick}>#TS</li>
                    <li onClick={onClick}>#JS</li>
                    <li onClick={onClick}>#Dev</li>
                    <li onClick={onClick}>#PJ</li>
                </ul> */}
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
   .tags > button {
    padding: 2px 4px 2px 4px;
    font-size: 14px;

    &:hover {
        background-color: red;
    }
   }
`;

export default TagHeader;