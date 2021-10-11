import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import Logo from '../../public/svgs/navbar-logo';

const Navbar = () => {
    return (
        <Bar>
            <BarLogo>
                <Link href="/">
                    {Logo}
                </Link>
            </BarLogo>
        </Bar>
    )
}

export default Navbar;

const Bar = styled.div`
    background-color: #e6e6e6;
    height: 10vh;
    width: 100%;
    display: flex;
    align-items: center;
`
const BarLogo = styled.div`
    margin-left: 1rem;
    padding-top: 0.25rem;
    cursor: pointer;
    transition: transform .1s;
    &:hover {
        transform: scale(0.98);
    }
`