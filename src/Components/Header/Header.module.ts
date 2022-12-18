import styled from "styled-components";

export const Conteiner  = styled.div`
    background: var(--background-02);
`

export const Content  = styled.div`
    width: 100%;
    height: 72px;
    display: flex;
    padding: 0.80rem 10.6rem;
    align-items: center;
    justify-content: space-between;
    button{
        width: 3rem;
        height: 3rem;
        border: none;
        border-radius: 50%;
        background: var(--background-03);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: filter 0.2s;

        &:hover {
        cursor: pointer;
        filter: brightness(0.9);
        }
        img {
            width: 2.85rem;
            height: 2.85rem;
            border-radius: 50%;
        }
    }
`

export const ImageLogo = styled.img`
    width: 2.8rem;
    height: 2.5rem;
    padding: 5px 5px;
    border-radius: 8px;
    background: var(--background-03);
    svg {
    width: 1.8rem;
    height: 1.8rem;
    }
`