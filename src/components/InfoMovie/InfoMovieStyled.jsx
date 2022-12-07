import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export const Wrapp = styled.section`
    padding-left: ${p => p.theme.space[4]}px;
    padding-right: ${p => p.theme.space[4]}px;
`;

export const BtnLink = styled(Link)`
    display: flex;
    gap: ${p => p.theme.space[2]}px;
    width: 105px;
    padding: ${p => p.theme.space[3]}px;
    background-color: ${p => p.theme.colors.secondary};
    border: none;
    color: ${p => p.theme.colors.baseWhite};
    border-radius: ${p => p.theme.radii.average};
    margin-bottom: ${p => p.theme.space[4]}px;
    align-items: center;
    text-decoration: none;
`;

export const ItemWrapp = styled.div`
    display: flex;
    gap: ${p => p.theme.space[4]}px;
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.3);
`;

export const Image = styled.img`
    display: block;
    height: 300px;
`;

export const HeadTitle = styled.h2`
    margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Description = styled.p`
    margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Text = styled.p`
    display: flex;
    gap: ${p => p.theme.space[3]}px;
`;

export const Info = styled.div`
    padding: ${p => p.theme.space[3]}px;
`;

export const Titel = styled.h3`
    margin-bottom: ${p => p.theme.space[2]}px;
`;

export const Nav = styled.nav`
    display: flex;
    gap: ${p => p.theme.space[4]}px;
`;

export const NavItem = styled(NavLink)`
    text-decoration: none;
    color: ${p => p.theme.colors.text};
`;