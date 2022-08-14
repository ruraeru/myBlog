import styled from "styled-components";

const TagHeader = () => {
    return (
        <HeaderDiv>
            <label class="tag">
                #태그
            </label>
        </HeaderDiv>
    );
};

const HeaderDiv = styled.div`
   display: flex;
   align-items: center;
   
   height: 56px;
   padding: 20px;

   /* background-color: #FBCB43; */
   background-color: gray;

   .tag {
    text-align: left;
    margin-left: 20px;
    border: solid 2px #FBCB43;
    border-radius: 12px;
    padding: 0px 5px 0px 5px;
    font-size: 14px;
    background-color: white;
   }
`;

export default TagHeader;