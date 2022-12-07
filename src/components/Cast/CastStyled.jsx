import styled from "styled-components";

export const Wrapp = styled.section`
    width: 100%;
    padding: ${p => p.theme.space[4]}px;
`;

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 53.5px;
`;

export const Image = styled.img`
    display: block;
    width: 150px;
`;
export const Text = styled.p`
    width: 150px;
`;