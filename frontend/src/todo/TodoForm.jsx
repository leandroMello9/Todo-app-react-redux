import React, {Component} from 'react'
import Grid from '../template/Grid'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import IconButton from '../template/IconButton'
import  {valorInputMudou,addTodo,Limpar,search} from './todoActions'

class TodoForm extends Component {
    constructor (props) {
        super (props)
        this.keyHandler = this.keyHandler.bind(this)
    }
    keyHandler (e) {
        const {addTodo, search , description} = this.props

        if( e.key === 'Enter') {
            e.shiftKey ? search() : addTodo(description)
        } else if (e.key === 'Escape'){
            this.props.Limpar()
        }
    }
    
    componentWillMount () {
        //Ao atualizar a lista será atualizada.
        this.props.search()
    }
    render () {
        const {addTodo, search , description} = this.props
        return (
            <div role='form' className='todoForm'>
            <Grid cols='12 9 10'>
                <input id='description' className='form-control'
                    placeholder='Adicione uma tarefa' onChange={this.props.valorInputMudou} value={this.props.description}
                    onKeyUp={this.keyHandle}></input>
            </Grid>
            <Grid cols='12 3 2'>
                <IconButton style='primary' icon='plus'
                onClick={() => addTodo(description)}></IconButton>
                <IconButton style='info' icon='search' onClick={search}></IconButton>
                <IconButton style='default' icon='close' onClick={this.props.Limpar}></IconButton>
              
            </Grid>
        </div>
        )
    }
}


const mapStateToProps = state => ({
    description : state.todo.description
});
//Dispath - é o responsavel por disparar a ação que séra realizada a ação sera changeDescription "Valor Mudou"
const mapDispatchToProps = dispatch =>
  bindActionCreators( {valorInputMudou,  addTodo , Limpar , search} , dispatch);

export default connect(mapStateToProps , mapDispatchToProps)(TodoForm)