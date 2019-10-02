import React from 'react'
import IconButton from '../template/IconButton'
import {connect}from 'react-redux'
import {bindActionCreators} from 'redux'
import {tarefaConcluida, voltarTarefa, removerTarefa} from './todoActions'


const TodoList = props =>{
    //Função que rederinza as linhas da tabela
    const renderRows= () =>{
        const list = props.list || []
    
        return list.map( todo => (
            <tr key={todo._id}>
                <td className={ todo.done ? ' markedAsDone' :  ''}>{todo.description}</td>
                <td>
                    <IconButton style="success" icon="check" hide={todo.done} onClick={ ()=> props.tarefaConcluida(todo) }></IconButton>
                    <IconButton style = "warning" icon="undo" hide={!todo.done} onClick={()=>props.voltarTarefa(todo)}></IconButton>
                    <IconButton style='danger' icon="trash-o" hide={!todo.done}
                    onClick={()=>props.removerTarefa(todo)}></IconButton>
                    
                </td>
            </tr>
        ))    
        
    }
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}
const mapStateToProps = state => ({
    list:state.todo.list
});
const mapDispatchToProps = dispatch => 
    bindActionCreators ({tarefaConcluida, voltarTarefa, removerTarefa}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)