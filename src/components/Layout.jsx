import { Container } from '@mui/material';
import React from 'react'
import styled from 'styled-components';


const Layout = (props) => {
    return (
        <Container fixed>
            <LayoutCss>
                {props.children}
            </LayoutCss>
        </Container>

    )
}



const LayoutCss = styled.div`
    margin: 80px auto;
    max-width: 1200px;
    max-height: 100%;
    height: 800px;
    background-color: #FFE9AD;
    height: 100%;
    width: 60%;
    /* padding-top: 50px; */
    /* box-shadow: 0px 0px 10px #000000; */
`