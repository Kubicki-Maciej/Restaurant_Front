import styled from 'styled-components'

export const ButtonWaiter = styled.button`
    background-color: lightblue;
    width:15rem;
    height:10rem;
    border:solid black 1px;
    margin: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease-in-out;

    @media screen and (max-width: 479px){
        
    }
    &:hover{
        cursor: pointer;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
    }
`

export const TextButtonWaiter = styled.p`
    font-size: 1.5rem;
    /* for Tablets */
    @media screen and (max-width: 479px){
        font-size: 1rem;
    }
    /* for Phones */
`