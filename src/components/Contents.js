import { Link } from "react-router-dom";
import styled from "styled-components";
import ContentsCard from "./ContentsCard";

const Contents = () => {
    return (
        <CardList>
            <Link to="/development-studying-ts">
                <ContentsCard
                    Imgurl="https://velog.velcdn.com/images/cjh951114/post/dcedbd85-a3ef-4add-8280-136c6a3d35b5/typescript_logo.png"
                    title="타입스크립트 입문"
                    description="타입스크립트를 배우며 생각한 것들..."
                    tags={["TS", "Dev", "JS", "PJ"]}
                />
            </Link>
            <ContentsCard Imgurl="https://images.unsplash.com/photo-1660196663918-79b5279c20fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />
            <ContentsCard Imgurl="https://images.unsplash.com/photo-1660196663918-79b5279c20fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />
            <ContentsCard Imgurl="https://images.unsplash.com/photo-1660196663918-79b5279c20fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />
            {/* <ContentsCard Imgurl="https://images.unsplash.com/photo-1660041128546-bbb424728221?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80" /> */}
            {/* <ContentsCard Imgurl="https://images.unsplash.com/photo-1660089285757-9314caffcf31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60" /> */}
        </CardList>
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
`;

export default Contents;