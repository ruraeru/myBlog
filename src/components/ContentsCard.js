import styled from "styled-components";

const ContentsCard = ({ Imgurl }) => {
    return (
        <Div>
            <div className="solid">
                <div>
                    {/* img */}
                    <Img src={Imgurl} />
                </div>
                <div id="contentsText">
                    <Daydiv>
                        <div>
                            <label>#태그</label>
                        </div>
                        <div>
                            <p>2022-08-11</p>
                        </div>
                    </Daydiv>
                    <div id="title">
                        <div>
                            <h1>타입스크립트 입문</h1>
                        </div>
                        <div className="description">
                            <h4>
                                타입스크립트를 배우며 생각한 것들...
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
   height: 204px;
`;

const Div = styled.div`
   margin: 56px 0px 8% 80px;
   .solid {
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
   }
   min-width: 312px;
   height: 204px;
   div {
    /* border: solid red 1px; */
   }
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
   label {
    border: solid 2px #FBCB43;
    border-radius: 12px;
    padding: 0px 3px 0px 3px;
   }
`

export default ContentsCard;