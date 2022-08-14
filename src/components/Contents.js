import styled from "styled-components";
import ContentsCard from "./ContentsCard";

const Contents = () => {
    return (
        <CardList>
            {/* <ContentsCard Imgurl="https://images.unsplash.com/photo-1660041128546-bbb424728221?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80" /> */}
            <ContentsCard Imgurl="https://images.unsplash.com/photo-1660196663918-79b5279c20fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />
            <ContentsCard Imgurl="https://images.unsplash.com/photo-1660196663918-79b5279c20fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />
            <ContentsCard Imgurl="https://images.unsplash.com/photo-1660196663918-79b5279c20fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />
            <ContentsCard Imgurl="https://images.unsplash.com/photo-1660196663918-79b5279c20fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />
            {/* <ContentsCard Imgurl="https://images.unsplash.com/photo-1660089285757-9314caffcf31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60" /> */}
        </CardList>
    );
};

const CardList = styled.div`
   display: flex;
`;

export default Contents;