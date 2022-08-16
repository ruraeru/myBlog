import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
    const onClick = (e) => {
        console.log(e);
    }
    return (
        <HeaderDiv>
            <div className="logo">
                <h1><Link to="/">RDever.dev</Link></h1>
            </div>
            <div className="link">
                <p>Share</p>
                <p>About</p>
                <div className="dark-mode">
                    <button onClick={onClick}>W/D</button>
                </div>
            </div>
        </HeaderDiv >
    );
}

const HeaderDiv = styled.header`
   display: flex;
   text-align: center;
   align-items: center;
   justify-content: space-between;

   height: 56px;
   padding: 20px;
   background-color: white;
   box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
   
   a {
    text-decoration: none;
    color: #fab005;
   }
   
   .logo {
    /* flex: 1; */
    text-align: left;
    margin-left: 20px;  
    font-family: Ubuntu;
    color: #fab005;
   }

   .title {
    display: flex;
    justify-content: center;
    align-items: center;
   }

   .link {
    display: flex;
    }

   .link > p {
    margin-right: 20px;
   }
`;

export default Header;