import styled from "styled-components";

const ContentsCard = ({ Imgurl, title, description, tags }) => {
    return (
        <Div>
            <div className="solid">
                <div>
                    <Img src={Imgurl} />
                </div>
                <div id="contentsText">
                    <Daydiv>
                        <ul className="tags">
                            {/* {tags.map((item, index) => {
                                return (
                                    <li id={index}>#{item}</li>
                                )
                            })} */}
                            <li>#TS</li>
                            <li>#Dev</li>
                            <li>#JS</li>
                            <li>#PJ</li>
                        </ul>
                        <div>
                            <p>2022-08-11</p>
                        </div>
                    </Daydiv>
                    <div id="title">
                        <div>
                            <h1>{title ? title : "제목"}</h1>
                        </div>
                        <div className="description">
                            <h4>
                                {description ? description : "요약"}
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </Div>
    );
};

const Img = styled.img`
   width: 100%;
   border-radius: 20px 20px 0px 0px;
   /* height: 204px; */
   min-height: 100%;
   max-height: 204px;
`;

const Div = styled.div`
   margin: 56px 40px 0px 40px;
   display: flex;
   .solid {
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
   }
   max-width: 312px;
   width: 312px;
   height: 100%;
   text-align: center;
   border-radius: 20px;
   #title {
    height: 100px;
    text-align: left;
    margin-top: 10px;
    margin-left: 20px;
    .description {
        margin-top: 10px;
        color: #adb5bd;
        font-size: 14px;
    }
   }
   #contentsText {
   }
`;

const Daydiv = styled.div`
   display: flex;
   justify-content: space-around;
   font-size: 12px;
   margin-top: 3px;
   .tags {
    padding: 0;
   }
   li {
    font-weight: bold;
    font-size: 10px;
    border: solid 3px #FBCB43;
   }
`

export default ContentsCard;