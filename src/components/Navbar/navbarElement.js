import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
    background : #000;
    height : 75px;
    display : flex;
    justify-content : flex-start;
    padding : 0.5rem calc((100vh-1000px)/2);
    z-index : 10;

    

`

export const NavLink = styled(Link)`
    color : white;
    display : flex;
    align-items : center;
    text-decoration : none;
    padding : 0 2rem;
    height : 100%;
    cursor : pointer;
    font-size : 1.82rem;
    font-weight : bold;

    span{
        color : #239ce2;
        font-size: 2.17rem;
        font-weight: bold;
        letter-spacing:0.1rem;
        margin-bottom: 0.15rem;

    }
`

export const Bars = styled(FaBars)`
    display : None;
    color : #fff;
    
    @media screen and (max-width: 768px) {
        display : block;
        position : absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size : 1.8rem;
        cursor : pointer;

    }
`

export const NavMenu = styled.div`
    display : flex;
    align-items : center;
    margin-right : -24px;
    margin-left : -40px;

    width : 100vh;
    white-space : nowrap;
    @media screen and (max-width: 768px) {
        display : none;
    }
`

export const NavBtn = styled.nav`
    display : flex;
    align-items : center;
    margin-right : 24px;
    justify-content : flex-end;
    width : 100vh;

    @media screen and (max-width: 768px) {
        display : none;

    }
`

export const NavBtnLink = styled(Link)`
    border-radius : 4px;
    text-align : center;
    background-color : #1369b9;
    padding : 6px 12px;
    color : #fff;
    border : none;
    outline : none;
    cursor : pointer;
    transition: all 0.15s ease-in-out;
    text-decoration : none;
    font-size : 0.9rem;
    font-weight : 600;
    letter-spacing : 0.025rem;

    &:hover{
        transition: all 0.15s ease-in-out;
        background : #fff;
        color : #010606;
        font-size : 0.9rem;
        font-weight : 600;
        letter-spacing : 0.025rem;
    }
`