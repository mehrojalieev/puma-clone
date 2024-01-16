import { styled } from "styled-components";

const Container: any = styled.div`
max-width: 1600px;
width: 100%;
margin: 0px auto;
padding: 0px 20px;
`


const ShopButton = styled.button`
    color: var(--light-color);
    background-color: var(--dark-color);
    border: none;
    font-size: 15px;
    font-weight: 700;
    padding: 8px 25px;
    letter-spacing: 0.3px;
`


export {Container, ShopButton}