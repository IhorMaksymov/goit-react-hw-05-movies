import styled from "styled-components";
import { Form, Field } from "formik";

export const Wrapp = styled.section`
    margin-bottom: ${p => p.theme.space[5]}px;
`;

export const FieldForm = styled(Form)`
    display: flex;
    gap: 12px;
`;

export const Input = styled(Field)`
    width: 250px;
    padding: ${p => p.theme.space[3]}px;
`;

export const Button = styled.button`
    display: flex;
    width: 38px;
    border: none;
    border-radius: ${p => p.theme.radii.average};
    color: ${p => p.theme.colors.baseWhite};
    background-color: ${p => p.theme.colors.secondary};
    justify-content: center;
    align-items: center;
`;