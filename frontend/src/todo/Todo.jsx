import React from 'react'



//Componentes Filhos
import PageHeader from '../template/PageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

//
//Constante para a conexão com o banco de dados
const URL = 'http://localhost:3003/api/todos'

export default function Todo () {
    return (
        <div>
            <PageHeader name="Tarefas" small="Cadastro"/>
            <TodoForm />
            <TodoList/>
            
            
        </div>
    )
}
    
