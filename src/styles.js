import styled from 'styled-components'

import { FcEmptyTrash, FcOk } from "react-icons/fc";


export const Container = styled.div`
    background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ToDoList = styled.div`
    background: white;
    padding: 30px 20px;
    border-radius: 5px;

    ul{
        padding: 0;
        margin-top: 60px;
    }

`
export const Input = styled.input`
    border: 2px solid rgba(209, 211, 212, 0.4);
    border-radius: 5px;
    height: 40px;
    margin-right: 40px;

    width: 342px;

`

export const Button = styled.button`
    background: #8052ec;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    color: white;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;
    height: 40px;
    width: 130px;

    &:hover{
        opacity: 0.7;
    }
    &:active{
        opacity: 0.4;
    }
`

export const ListItem = styled.div` // props --> propriedade, foi criado la no HTML app.jsx
    background: ${props => props.isFinished ? "#E8FF8B" : "#e4e4e4" }; // props, pega todos os itens que estao vindo la do ListItem, ai pequei props (todos itens) porem especifico Finished , o ? significa if, se a info for verdadeira fica verde , caso nao fica cinza
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    height: 60px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    padding: 0 10px;
    width: 500px;

    li{
        list-style: none;
    }
`

export const Trash = styled(FcEmptyTrash)`
    cursor: pointer;
`

export const Check = styled(FcOk)`
    cursor: pointer;
`

export const TextStyled = styled.h3`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #8052ec;
    font-weight: 900;
`