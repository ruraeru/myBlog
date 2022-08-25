import { useEffect } from "react";
import styled from "styled-components";

const ContentsCard = ({ Imgurl, title, description, tags, select }) => {
    // console.log(tags, tags.indexOf(select), select);

    if (select) {
        if (tags.indexOf(select) !== -1) {
            const div = document.querySelectorAll('.card');
            for (let i = 0; i < div.length; i++) {
                if (div[i].className.indexOf("hide") === -1) {
                    div[i].classList.add("hide");
                }
            }
            console.log(div);
        }
    }
    return (
        <Div className="card">
            <div className="solid">
                <div>
                    <Img src={Imgurl} />
                </div>
                <div id="contentsText">
                    <Daydiv>
                        <ul className="tags">
                            {tags && tags.map((item, index) => {
                                return (
                                    <li key={index}>{item}</li>
                                )
                            })}
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
   /* min-height: 100%; */
   /* min-height: 312px; */
   /* height: 204px; */
   min-height: 164px;
   max-height: 204px;

   border-radius: 20px 20px 0px 0px;
`;

const Div = styled.div`
   .hide {
    display: none;
   }
   display: flex;
   border: 1px solid hsla(0,0%,0%,0.07);
   margin: 56px 40px 0px 40px;
   .solid {
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
   }
   width: 312px;
   max-width: 312px;
   
   /* height: 100%; */
   min-height: 300px;
   max-height: 300px;
   text-align: center;
   
   border-radius: 20px;
   
   #title {
    height: 100px;
    
    margin-top: 10px;
    margin-left: 20px;
    
    text-align: left;
    
    .description {
        margin-top: 10px;

        font-size: 14px;
        color: #adb5bd;
        }
    }
   #contentsText {

   }
`;

const Daydiv = styled.div`
   display: flex;
   justify-content: space-around;
   
   margin-top: 3px;
   
   font-size: 12px;
   
   .tags {
    padding: 0;
   }

   li {
    font-size: 10px;
    font-weight: bold;
    
    border: solid 3px #FBCB43;
   }
`

export default ContentsCard;