import { useState } from "react";
import styled from "styled-components";

const Header = () => {
    const [WD, setWD] = useState(true);
    const onClick = (e) => {

    }
    return (
        <HeaderDiv>
            <div class="logo">
                <img src="https://cdn-icons-png.flaticon.com/512/731/731985.png" alt="logo" />
            </div>
            <div></div>
            <div class="link">
                <p>About</p>
                <p>Share</p>
            </div>
            <div class="dark-mode">
                <button value={WD} onClick={onClick}>W/D</button>
            </div>
        </HeaderDiv>
    );
}

const HeaderDiv = styled.div`
   display: flex;
   text-align: center;
   align-items: center;
   height: 56px;
   
   padding: 20px;
   background-color: white;

   .logo {
    flex: 1;
    text-align: left;
    margin-left: 20px;
    img {
        width: 30px;
    }
   }

   .link {
    display: flex;
   }

   .link > p {
    margin-right: 20px;
   }
`;

export default Header;