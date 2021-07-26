import styled from 'styled-components';

export const container = styled.div`
    background: #abab;
    word-wrap: break-word;
    display: flex;
    justify-content: center;
`
export const Text = styled.h1`
    margin: 0.1em;
    background: gray;
    padding: 0.2em;
    border-radius: 12px;
    width:100px;
    height: auto;
    font-size: 12px;
    vertical-align: middle;
    text-align: center;

    ${({width}) => width && `
        width: ${width}
        `}
`

export const DataField = styled.div`
    display: flex;
    flex-direction: column;
    background: #abab;
    margin: 0.3em;
    padding: 0.3em;
    border-radius: 12px;
`

export const RegisterForm = styled.section`
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const Title = styled.h1`
    text-align:center;
`

export const Home = styled.section`
    background: #abab;
    width: auto;
    height: 100vh;
    margin: 0em;
    padding: 0em;
    text-align:center;
`

export const Main = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 100px;
`