import { NavLink } from "react-router-dom";

import styled from "styled-components";

export const Header = styled.header`
    background-color: ${p => p.theme.colors.primary};
    width: 100%;
    padding: ${p => p.theme.space[4]}px;
    margin-bottom: ${p => p.theme.space[5]}px;
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.3);
`;

export const Nav = styled.nav`
    display: flex;
    gap: ${p => p.theme.space[4]}px;
`;

export const NavItem = styled(NavLink)`
    font-size: ${p => p.theme.fontSizes.l};
    color: ${p => p.theme.colors.baseWhite};
    text-decoration: none;
    padding-top: ${p => p.theme.space[2]}px;
    padding-left: ${p => p.theme.space[3]}px;
    padding-right: ${p => p.theme.space[3]}px;
    padding-bottom: ${p => p.theme.space[2]}px;
    border-radius: ${p => p.theme.radii.average};
    &.active {
        background-color: ${p => p.theme.colors.secondary};
    }
`;