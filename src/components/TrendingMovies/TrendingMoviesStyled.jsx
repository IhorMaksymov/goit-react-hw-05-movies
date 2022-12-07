import styled from "styled-components";

export const Wrapp = styled.section`
    width: 100%;
    padding-left: ${p => p.theme.space[4]}px;
    padding-right: ${p => p.theme.space[4]}px;
`;

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 59px;
`;

export const Item = styled.li`
    position: relative
`;

export const Image = styled.img`
    display: block;
    width: 350px;
    border-radius: ${p => p.theme.radii.large};
`;

export const Text = styled.p`
    position: absolute;
    left: 5px;
    bottom: 5px;
    margin: 0;
    padding: ${p => p.theme.space[2]}px;
    background-color: rgba(255, 255, 255, 0.5);
    color: ${p => p.theme.colors.text};
    border-radius: ${p => p.theme.radii.large};
`;