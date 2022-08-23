import { useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

const Post = () => {
    return (
        <>
            <Header />
            <Div>
                <PostingHeader>
                    <h1>타입스크립트를 배워보자!</h1>
                    <p>2022년 8월 15일</p>
                    <ul className="tags">
                        <li>#Dev</li>
                        <li>#TypeScript</li>
                    </ul>
                </PostingHeader>
                <Content>
                    {/* 
                    <h1>제목</h1>
                    <p>
                        <h3>소제목</h3>
                        텍스트
                    </p>
                    */}
                    <figure>
                        <span>
                            <img src="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="coding" />
                        </span>
                        <figcaption>
                            Photo by Safar Safarov on Unsplash
                        </figcaption>
                    </figure>
                    <p>
                        <code>development-study-ts</code>
                    </p>
                    <div>
                        <h1>타입스크립트의 특징</h1>
                        <h3>컴파일 언어, 정적 타입 언어</h3>
                        <p>자바스크립트는 동적 타입의 인터프리터 언어로 런타임에서 오류를 발견할 수 있습니다. 이에 반해 타입스크립트는 정적 타입의 컴파일 언어이며 타입스크립트 컴파일러 또는 바벨(Babel)을 통해 자바스크립트 코드로 변환됩니다. 코드 작성 단계에서 타입을 체크해 오류를 확인할 수 있고 미리 타입을 결정하기 때문에 실행 속도가 매우 빠르다는 장점이 있습니다. 하지만 코드 작성 시 매번 타입을 결정해야 하기 때문에 번거롭고 코드량이 증가하며 컴파일 시간이 오래 걸린다는 단점이 있습니다.</p>
                        <h3>자바스크립트 슈퍼셋(Superset)</h3>
                        <p>타입스크립트는 자바스크립트의 슈퍼셋, 즉 자바스크립트 기본 문법에 타입스크립의 문법을 추가한 언어입니다. 따라서 유효한 자바스크립트로 작성한 코드는 확장자를 .js에서 .ts로 변경하고 타입스크립트로 컴파일해 변환할 수 있습니다.</p>
                        <h3>객체 지향 프로그래밍 지원</h3>
                        <p>타입스크립트는 ES6(ECMAScript 6)에서 새롭게 사용된 문법을 포함하고 있으며 클래스, 인터페이스, 상속, 모듈 등과 같은 객체 지향 프로그래밍 패턴을 제공합니다.</p>
                    </div>
                    <div>
                        <h1>타입스크립트 사용을 고려해야 하는 이유</h1>
                        <h3>높은 수준의 코드 탐색과 디버깅</h3>
                        <p>타입스크립트는 코드에 목적을 명시하고 목적에 맞지 않는 타입의 변수나 함수들에서 에러를 발생시켜 버그를 사전에 제거합니다. 또한 코드 자동완성이나 실행 전 피드백을 제공하여 작업과 동시에 디버깅이 가능해 생산성을 높일 수 있습니다. 실제로 한 연구에 따르면 모든 자바스크립트 버그의 15%가 사전에 타입스크립트로 감지할 수 있다고 합니다.</p>
                        <h3>자바스크립트 호환</h3>
                        <p>타입스크립트는 자바스크립트와 100% 호환됩니다. 따라서 프론트엔드 또는 백엔드 어디든 자바스크립트를 사용할 수 있는 곳이라면 타입스크립트도 쓸 수 있습니다. 타입스크립트는 앱과 웹을 구현하는 자바스크립트와 동일한 용도로 사용 가능하며 서버 단에서 개발이 이루어지는 복잡한 대형 프로젝트에서도 빛을 발합니다.</p>
                        <h3>강력한 생태계</h3>
                        <p>기존의 자바스크립트 프로젝트를 타입스크립트로 전환하는데 부담이 있다면 추가 기능이나 특정 기능에만 타입스크립트를 도입함으로써 프로젝트를 점진적으로 전환할 수 있습니다. 자바스크립트에 주석을 추가하는 것에서부터 시작해 시간이 지남에 따라 코드베이스가 완전이 바뀌도록 준비 기간을 가질 수 있습니다.</p>
                        <p>하지만, 새로운 프로그래밍 언어에 대한 러닝 커브(Learning Curve), 상대적으로 낮은 가독성, 코드량 증가 등의 이유로 타입스크립트 사용을 망설이는 개발자가 많습니다. 프로젝트 성격에 따라 타입스크립트를 사용할지 결정하면 됩니다. 프로젝트의 규모가 크고 복잡할수록, 유지보수가 중요한 장기 프로젝트일수록 타입스크립트의 이점이 부각될 것입니다.</p>
                    </div>
                    <div>
                        <h1>프론트엔드 프레임워크와 타입스크립트</h1>
                        <h3>리액트(React)</h3>
                        <p>리액트와 타입스크립트의 호환성은 비교적 좋은 편입니다. 최근 들어 많은 개발자들이 리액트와 타입스크립트 조합을 선택하고 있습니다. 리액트 공식 홈페이지에서는 타입스크립트를 사용하기 위한 가이드를 제시하고 있습니다. 페이스북에서 공식적으로 배포하는 리액트 웹 개발용 보일러 플레이트(Boilerplate, 구조·설정 작업을 자동으로 진행해주는 도구이자 명령어)인 Create React App은 간단한 옵션 추가만으로 타입스크립트를 사용할 수 있도록 지원합니다.</p>
                        <h3>뷰(Vue.js)</h3>
                        <p>뷰 2.0에서는 타입스크립트를 사용할 수 있지만 몇몇 라이브러리의 도움을 받아야 하거나 구현 자체가 안 되는 문제도 다수 있었습니다. 다행스럽게도 최근 릴리즈된 뷰 3.0부터는 타입스크립트를 공식 지원합니다. 뷰 3.0 CLI(Command Line Interface)는 타입스크립트 도구화 지원을 기본으로 제공합니다.</p>
                        <h3>앵귤러(Angular)</h3>
                        <p>자바스크립트 기반인 앵귤러 버전 1과 달리 버전 2부터는 타입스크립트 기반으로 만들어졌고 타입스크립트를 권장하고 있습니다.</p>
                    </div>
                    <h1>출처</h1>
                    <figure>
                        <span>
                            <img src="https://image.samsungsds.com/kr/insights/typescript_top_img.jpg?queryString=20220721035459" alt="samsungSDS-TS" />
                        </span>
                        <figcaption>
                            <a href="https://www.samsungsds.com/kr/insights/typescript.html">SAMSUNG SDS</a>
                            {/* <code>
                            </code> */}
                        </figcaption>
                    </figure>
                </Content>
            </Div>
            <Footer />
        </>
    );
};

const Div = styled.div`
   margin: 0 auto;
   max-width: 700px;
`;

const PostingHeader = styled.div`
   display: flex;
   flex-direction: column;
   /* width: 700px; */
   max-width: 700px;
   height: 150px;
   
   margin: 0 auto;
   margin-top: 39px;
   margin-bottom: 2rem;
   
   border-bottom-style: solid;
   border-bottom-width: 1px;
   border-image: linear-gradient(to right, rgb(68, 112, 255), rgb(138, 83, 255)) 1 / 1 / 0 stretch;
   p {
    font-size: 14px;
   }
    .tags {
    margin-top: 10px;
    padding: 0;
   }
`;

const Content = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;

   font-size: 16px;
   font-weight: bold;
   text-align: left;

   figure {
    margin: 0;
    padding: 0;
    margin-bottom: 0.8125rem;
    figcaption {
        font-size: 12px;
        text-align: center;
        color: rgb(119, 119, 119);
        margin-top: -20px;
        }
    }
   code {
    font-size: 18px;
    /* font-weight: inherit; */
    font-weight: bold;
    
    padding: 1.5px 4px;
    
    border-radius: 4px;
    background-color: rgba(68, 112, 255, 0.4);
    }
   h1 {
    /* width: 700px; */
    
    margin: 0;
    margin-top: 2.4375rem;
    margin-bottom: 19.5px;
    
    padding: 0;
    padding-bottom: calc(0.40625rem - 1px);
    
    border-bottom: 1px solid hsla(0, 0%, 0%, 0.07);
    
    font-size: 32px;
    font-family: Gothic A1;
    font-weight: 800;
    
    line-height: 1.3;
   }

   p, span {
    /* display: block; */
    width: 100%;
    
    margin-bottom: 13px;
    margin-block-start: 16px;
    margin-block-end: 16px;
    
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    
    font-weight: 500;
    line-height: 1.7;
    /* font-kerning: normal; */
   }    
   img {
    /* width: 700px; */
    max-width: 700px;
    width: 100%;
    
    margin-bottom: 20px;
    }
`;

export default Post;