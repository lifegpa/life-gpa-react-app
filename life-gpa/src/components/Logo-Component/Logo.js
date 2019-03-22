import React from 'react'; 
import logo from './logo.png';
import styled from 'styled-components'; 

const LogoStyled = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

const ImgStyled = styled.img`
width: 50%;
height: 50%;`;

const Logo = () => {

return (
    <LogoStyled>
            <ImgStyled src={logo} alt="logo" />
            </LogoStyled>
)
} 

export default Logo; 