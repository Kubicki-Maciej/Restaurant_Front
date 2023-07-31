import styled from "styled-components";

export const WindowWraper = styled.div`

    background-color: aliceblue;
    border: 1px black solid;
    padding: 4px 4px 4px 4px;
    margin-top: 5px;

`;


export const HeaderWindowOrder = styled.div`
    margin-top: 5px;
    margin-bottom: 5px;
    border: 1px black solid;
    
    background-color: ${props => props.bg};

`;

export const OrderIdText = styled.p`
    font-weight: 600;
    font-size: 14px;
`;

export const StatusText = styled.p`
    font-weight: 600;
    font-size: 14px;
`;
