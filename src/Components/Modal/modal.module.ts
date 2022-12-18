import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ImageUser = styled.div`
    width: 58px;
    height: 58px;
    border-radius: 50%;
    margin-bottom: 20px;
    background: #27272A;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        object-fit: cover;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(1.1);
        }
    }
`;

export const InfoUserContaier = styled.div`
    
    p {
        margin: 1rem 0;
        font-size: 1rem;
        line-height: 1.6rem;
        color: var(--background-02);
    }
`;
