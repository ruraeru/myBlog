import styled from "styled-components";
import Header from "./Header";

const Posting = () => {
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
                    <h1>타입스크립트의 특징</h1>
                    <p>
                        <h3>컴파일 언어, 정적 타입 언어</h3>
                        자바스크립트는 동적 타입의 인터프리터 언어로 런타임에서 오류를 발견할 수 있습니다. 이에 반해 타입스크립트는 정적 타입의 컴파일 언어이며 타입스크립트 컴파일러 또는 바벨(Babel)을 통해 자바스크립트 코드로 변환됩니다. 코드 작성 단계에서 타입을 체크해 오류를 확인할 수 있고 미리 타입을 결정하기 때문에 실행 속도가 매우 빠르다는 장점이 있습니다. 하지만 코드 작성 시 매번 타입을 결정해야 하기 때문에 번거롭고 코드량이 증가하며 컴파일 시간이 오래 걸린다는 단점이 있습니다.
                    </p>
                    <p>
                        <h3>자바스크립트 슈퍼셋(Superset)</h3>
                        타입스크립트는 자바스크립트의 슈퍼셋, 즉 자바스크립트 기본 문법에 타입스크립의 문법을 추가한 언어입니다. 따라서 유효한 자바스크립트로 작성한 코드는 확장자를 .js에서 .ts로 변경하고 타입스크립트로 컴파일해 변환할 수 있습니다.
                    </p>
                    <p>
                        <h3>객체 지향 프로그래밍 지원</h3>
                        타입스크립트는 ES6(ECMAScript 6)에서 새롭게 사용된 문법을 포함하고 있으며 클래스, 인터페이스, 상속, 모듈 등과 같은 객체 지향 프로그래밍 패턴을 제공합니다.
                    </p>
                    <h1>타입스크립트 사용을 고려해야 하는 이유</h1>
                    <p>
                        <h3>높은 수준의 코드 탐색과 디버깅</h3>
                        타입스크립트는 코드에 목적을 명시하고 목적에 맞지 않는 타입의 변수나 함수들에서 에러를 발생시켜 버그를 사전에 제거합니다. 또한 코드 자동완성이나 실행 전 피드백을 제공하여 작업과 동시에 디버깅이 가능해 생산성을 높일 수 있습니다. 실제로 한 연구에 따르면 모든 자바스크립트 버그의 15%가 사전에 타입스크립트로 감지할 수 있다고 합니다.
                    </p>
                    <p>
                        <h3>자바스크립트 호환</h3>
                        타입스크립트는 자바스크립트와 100% 호환됩니다. 따라서 프론트엔드 또는 백엔드 어디든 자바스크립트를 사용할 수 있는 곳이라면 타입스크립트도 쓸 수 있습니다. 타입스크립트는 앱과 웹을 구현하는 자바스크립트와 동일한 용도로 사용 가능하며 서버 단에서 개발이 이루어지는 복잡한 대형 프로젝트에서도 빛을 발합니다.
                    </p>
                    <p>
                        <h3>강력한 생태계</h3>
                        기존의 자바스크립트 프로젝트를 타입스크립트로 전환하는데 부담이 있다면 추가 기능이나 특정 기능에만 타입스크립트를 도입함으로써 프로젝트를 점진적으로 전환할 수 있습니다. 자바스크립트에 주석을 추가하는 것에서부터 시작해 시간이 지남에 따라 코드베이스가 완전이 바뀌도록 준비 기간을 가질 수 있습니다.
                        <p>
                            하지만, 새로운 프로그래밍 언어에 대한 러닝 커브(Learning Curve), 상대적으로 낮은 가독성, 코드량 증가 등의 이유로 타입스크립트 사용을 망설이는 개발자가 많습니다. 프로젝트 성격에 따라 타입스크립트를 사용할지 결정하면 됩니다. 프로젝트의 규모가 크고 복잡할수록, 유지보수가 중요한 장기 프로젝트일수록 타입스크립트의 이점이 부각될 것입니다.
                        </p>
                    </p>
                    <h1>프론트엔드 프레임워크와 타입스크립트</h1>
                    <p>
                        <h3>리액트(React)</h3>
                        리액트와 타입스크립트의 호환성은 비교적 좋은 편입니다. 최근 들어 많은 개발자들이 리액트와 타입스크립트 조합을 선택하고 있습니다. 리액트 공식 홈페이지에서는 타입스크립트를 사용하기 위한 가이드를 제시하고 있습니다. 페이스북에서 공식적으로 배포하는 리액트 웹 개발용 보일러 플레이트(Boilerplate, 구조·설정 작업을 자동으로 진행해주는 도구이자 명령어)인 Create React App은 간단한 옵션 추가만으로 타입스크립트를 사용할 수 있도록 지원합니다.
                    </p>
                    <p>
                        <h3>뷰(Vue.js)</h3>
                        뷰 2.0에서는 타입스크립트를 사용할 수 있지만 몇몇 라이브러리의 도움을 받아야 하거나 구현 자체가 안 되는 문제도 다수 있었습니다. 다행스럽게도 최근 릴리즈된 뷰 3.0부터는 타입스크립트를 공식 지원합니다. 뷰 3.0 CLI(Command Line Interface)는 타입스크립트 도구화 지원을 기본으로 제공합니다.
                    </p>
                    <p>
                        <h3>앵귤러(Angular)</h3>
                        자바스크립트 기반인 앵귤러 버전 1과 달리 버전 2부터는 타입스크립트 기반으로 만들어졌고 타입스크립트를 권장하고 있습니다.
                    </p>
                    <h1>출처</h1>
                    <p>
                        <code><a href="https://www.samsungsds.com/kr/insights/typescript.html">SAMSUNG SDS</a></code>
                    </p>
                    <img src="https://images.unsplash.com/photo-1551847609-5aaf21a58ebc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGFsa2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="talking" />
                </Content>
            </Div>
        </>
    );
};

const Div = styled.div`
   margin: 0 auto;
   width: 700px;

`;

const PostingHeader = styled.div`
   p {
    font-size: 14px;
   }
   * {
       /* border: solid red 1px; */
       /* padding: 5px; */
    }
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 39px;
    max-width: 700px;
    width: 700px;
    height: 150px;
    
    border-image: linear-gradient(to right, rgb(68, 112, 255), rgb(138, 83, 255)) 1 / 1 / 0 stretch;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    margin-bottom: 2rem;
   .tags {
    margin-top: 10px;
    padding: 0;
   }
`;

const Content = styled.div`
   text-align: left;
   figure {
    margin: 0;
    padding: 0;
    margin-bottom: 0.8125rem;
    
    figcaption {

        margin-top: -20px;
        text-align: center;
        color: rgb(119, 119, 119);
        font-size: 12px;
    }
   }
   font-size: 16px;
   font-weight: bold;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   code {
    font-weight: inherit;
    font-size: 16px;
    border-radius: 4px;
    padding: 1.5px 4px;
    background-color: rgba(68, 112, 255, 0.4);
   }
   h1 {
       width: 700px;
       margin: 0;
       margin-top: 2.4375rem;
       padding-bottom: calc(0.40625rem - 1px);
       padding: 0;
       margin-bottom: 19.5px;
       font-family: Gothic A1;
       font-weight: 800;
       font-size: 32px;
       line-height: 1.3;
       border-bottom: 1px solid hsla(0,0%,0%,0.07);
    }
    p {
        margin-bottom: 0.8125rem;
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        /* font-kerning: normal; */
        line-height: 1.7;
        width: 700px;
        font-weight: 500;
    }
   img {
    /* width: 700px; */
    margin-bottom: 20px;
   }
`;

export default Posting;