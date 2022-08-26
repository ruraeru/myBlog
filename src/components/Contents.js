import { Link } from "react-router-dom";
import styled from "styled-components";
import ContentsCard from "./ContentsCard";

const Contents = ({ selectTags }) => {
    // console.log(selectTags);
    return (///development-studying-ts
        <ContentsCard select={selectTags} />
        // <CardList>
        // </CardList>
    );
};

const CardList = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   a {
    text-decoration: none;
    color: black;
   }
   flex-wrap: wrap;

    .hide {
    display: none;
   }
`;

export default Contents;