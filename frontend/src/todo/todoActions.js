import axios from 'axios'

const urlBanco = 'http://localhost:3003/api/todos'

export const valorInputMudou = (event)=>({
    type : 'DESCRIPTION_CHANGE',
    Dado : event.target.value
})

export const search = () => {

    return (dispatch,getState) => {
        const description = getState().todo.description
        const search = description ? `&description__regex=/${description}/ `:''
    
        const request = axios.get(`${urlBanco}?sort=-createdAt${search}`)
        .then(resp => dispatch({type: 'TODO_SEARCHED', payload: resp.data}))
    }

    
}

// export const addTodo = (description) => {
//         const request = axios.post(urlBanco,{description})
//         return [
//             { type : 'TODO_ADD', payload : request },
//             carregarLista()
//         ]
// }



export const addTodo = (description) => {
    return dispatch => {
        axios.post(urlBanco,{ description }).then( resp => dispatch({ type: 'TODO_ADD', payload : resp.data}))
        .then( resp => dispatch(search()))
    }
}

export const tarefaConcluida = (todo) => {
    return dispatch => {
        axios.put(`${urlBanco}/${todo._id}`, {...todo , done : true})
        .then(resp => dispatch ({ type: 'TODO_FEITO' , payload : resp.data} ))
        .then(resp => dispatch(search()))
    }
}
export const voltarTarefa = (todo) => {
    return dispatch => {
        axios.put(`${urlBanco}/${todo._id}`, {...todo, done : false})
        .then(resp => dispatch ({ type: 'TODO_RETORNO', payload : resp.data}))
        .then(resp => dispatch(search()))
    }
}

export const removerTarefa = (todo) => {
    return dispatch => {
        axios.delete(`${urlBanco}/${todo._id}`)
        .then(resp => dispatch ({type: 'TODO_REMOVIDO' , payload : resp.data}))
        .then(resp => dispatch(search()))
    }
}
export const Limpar = () => {
    return [
        {type: 'TODO_LIMPAR'},
        search()
    ]
          
    
}
