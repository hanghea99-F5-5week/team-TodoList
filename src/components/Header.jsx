import React from 'react'
import { Link } from 'react-router-dom';

import styled from 'styled-components'
import { FcHome } from "react-icons/fc";

const Header = () => {

    return (
        <Container>
            <Link to="/">HO<FcHome className='homeIcon' />ME</Link>
            <h1>Today's Comment</h1>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-width: 300px;
    width:50%;
    margin: auto;
    height: 45px;
    box-shadow: 3px 5px 5px 1px gray;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-color: #FDC676;
    padding: 10px;
    display:flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    .homeIcon{
        font-size: 20px;
        cursor: pointer;
    }
    h1{
        text-decoration: underline;
        text-underline-position:under;
    }
`