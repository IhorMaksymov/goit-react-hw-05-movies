import styled from "styled-components";

export const Wrapp = styled.section`
    width: 100%;
    padding: ${p => p.theme.space[4]}px;
`;

export const Item = styled.li`
    padding: ${p => p.theme.space[2]}px;
    margin-bottom: ${p => p.theme.space[3]}px;
    box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.3);
`;
export const Title = styled.h3`
    padding-left: ${p => p.theme.space[2]}px;
    margin-bottom: ${p => p.theme.space[3]}px;
`;