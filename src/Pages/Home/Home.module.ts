import styled from "styled-components";


export const Conteiner = styled.div`
    height: 100%;
    background: var(--background-01);
`
export const Main = styled.main`
    margin: 0 auto;
    max-width: 75%;
    height: 100%;

    h1 {
        font-size: 1.37rem;
        color: var(--color-text-01);
        margin-top: 9rem;
    }
`

export const Form = styled.form`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 70px;
    column-gap: 31px;
    
    .select_form,
    .input_form {
        display: flex;
        flex-direction: column;
        width: 36.5rem;

        label {
            color: var(--color-text-02);
            font-size: 1rem;
            font-weight: 600;
            line-height: 1.3rem;
        }
        input,
        select {
            padding: 0.7rem 1.2rem;
            background: var(--background-02);
            border: none;
            border-radius: 8px;
            font-size: 1rem;
            color: var(--color-text-01);
            margin-top: 8px;
        }
    }
     
`

export const Section = styled.section`
    width: 100%;
    height: 513px;
    margin-top: 31px;
    margin-bottom: 61px;
    border-radius: 8px;
    background: var(--background-02);

    table {
        width: 100%;
        margin-top: 2rem;
        background-color: var(--background-02);
        border-radius: 8px;
        padding: 1.6rem 3.5rem;


        thead {
            th {
                text-align: initial;
                font-weight: 600;
                font-size: 1em;
                line-height: 1.3rem;
                color: var(--color-text-02);
            }
        }
      
           
        tbody {
            td {
                border-top: 2px solid var(--background-03);
                font-weight: 500;
                font-size: 1rem;
                line-height: 1.6rem;
                color: var(--color-text-01);
                padding: 0.75rem 0;
            }
        
            .btn_action {
                margin-right: 100px;
                padding: 2px 6px;
                border: none;
                line-height: 1.3rem;
                background: var(--background-03);
                color: var(--color-text-01);
                font-weight: 600;
                border-radius: 4px;
                transition: .3s;
                &:hover {
                    cursor: pointer;
                    background: var(--background-01);
                    color: var(--color-text-02);
                }
            }
        }    
    
    
    }
    
`