import React from "react";
import styled from "styled-components";
import { Flex,Text } from "parsec-swap-uikit";
import SubNav from "components/Menu/SubNav";
import Settings from "components/Settings";
import { AlignJustify } from "react-feather";

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 41px 16px;
  min-height: calc(100vh - 64px);
  // background-color: ${({ theme }) => (theme.isDark ? "#141c23" : "#cfcfcf")};
  background-size: 150%;
  // background: black;
  background: ${({ theme }) => (theme.isDark ? "#030923" : "#E5E5E5")};
`;
const Div = styled.div`
  position: relative;
  max-width: 639px;
  width: 100%;
  background-color: ${({ theme }) => (theme.isDark ? "#141436" : "#141436")};
  box-shadow: rgb(0 0 0 / 1%) 0px 0px 1px, rgb(0 0 0 / 4%) 0px 4px 8px,
    rgb(0 0 0 / 4%) 0px 16px 24px, rgb(0 0 0 / 1%) 0px 24px 32px;
  border-radius: 32px;
  padding: 1rem;
  padding-top: 30px;
  // margin-top: 130px;
  // margin-bottom: 100px;

  // border: ${({ theme }) =>
    theme.isDark ? "1px solid white" : "1px solid #6c4b00"};
`;
const SDiv = styled.div`
display:flex;
align-items:center;
flex-direction:row;
width: 100%;
max-width:642px;
height: 102px;
flex-grow: 0;
margin: 18px 0 0;
padding: 2vw 2vw 2vw 2vw;
object-fit: contain;
border-radius: 32px;
-webkit-backdrop-filter: blur(24px);
backdrop-filter: blur(24px);
border: solid 0.5px #fff;
background-color: #312c47;
`;


const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;



const Page: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...props
}) => {
  return (
    <StyledPage {...props}>
     <StyledDiv>
       <Text fontSize="35px" color="#fff">Make a Swap with &nbsp;</Text> 
       <Text style={{"alignSelf":"center"}} fontSize="35px" color="#d4307a">Parsec</Text>
       </StyledDiv>
       <Text fontSize="16px" color="#d9d9d9" style ={{margin:"1vw 4vw 3vw 6vw"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
      <Div>
        <Settings>
          <SubNav />
          {children}
        </Settings>
      </Div>
      <SDiv>  
        <img src="/diamond.png" alt="diamond" style ={{zIndex:"4",width:"105px",height:"107px",marginTop:"-30px"}} />
      <StyledDiv style={{paddingLeft:"64px"}}>
       <Text fontSize="20px" color="#fff">Lorem ipsum lorem &nbsp;</Text> 
       <Text fontSize="20px" color="#d4307a">Parsec</Text>
       </StyledDiv>
      </SDiv>
      <Flex flexGrow={1} />
    </StyledPage>
  );
};

export default Page;
