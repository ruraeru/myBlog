import { Link } from "react-router-dom";
import styled from "styled-components";
import ContentsCard from "./ContentsCard";

const Contents = () => {
    return (
        <CardList>
            <Link to="/development-studying-ts">
                <ContentsCard
                    title="타입스크립트 입문"
                    description="타입스크립트를 배우며 생각한 것들..."
                    tags={["TS", "Dev", "JS", "PJ"]}
                    Imgurl="https://velog.velcdn.com/images/cjh951114/post/dcedbd85-a3ef-4add-8280-136c6a3d35b5/typescript_logo.png"
                />
            </Link>
            <ContentsCard
                title="유튜브"
                description="유튜브유튜브"
                tags={["Media", "tube", "Video"]}
                Imgurl="https://static.vecteezy.com/system/resources/previews/003/206/623/original/youtube-editorial-app-icon-free-vector.jpg"
            />
            <ContentsCard
                title="벨로그"
                description="벨로그벨로그"
                tags={["Blog", "PJ"]}
                Imgurl="https://images.velog.io/images/gsuchoi/post/cc59798c-24b4-473e-82cb-06357cdfafe8/Velog_1.png"
            />
            <ContentsCard
                title="깃허브"
                description="깃허브깃허브"
                tags={["Git", "PJ", "Blog"]}
                Imgurl="https://ko.wizcase.com/wp-content/uploads/2022/03/GitHub-Logo.png"
            />
            <ContentsCard
                title="깃허브"
                description="깃허브깃허브"
                tags={["Git", "PJ", "Blog"]}
                Imgurl="https://ko.wizcase.com/wp-content/uploads/2022/03/GitHub-Logo.png"
            />
            <ContentsCard
                title="깃허브"
                description="깃허브깃허브"
                tags={["Git", "PJ", "Blog"]}
                Imgurl="https://ko.wizcase.com/wp-content/uploads/2022/03/GitHub-Logo.png"
            />
            <ContentsCard
                title="유튜브"
                description="유튜브유튜브"
                tags={["Media", "tube", "Video"]}
                Imgurl="https://static.vecteezy.com/system/resources/previews/003/206/623/original/youtube-editorial-app-icon-free-vector.jpg"
            />
            <ContentsCard
                title="벨로그"
                description="벨로그벨로그"
                tags={["Blog", "PJ"]}
                Imgurl="https://images.velog.io/images/gsuchoi/post/cc59798c-24b4-473e-82cb-06357cdfafe8/Velog_1.png"
            />
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
   flex-wrap: wrap;
`;

export default Contents;