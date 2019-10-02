const INITIAL_STATE = {
    description : '',
        list: []
}

export default  (state= INITIAL_STATE , action)=>{
    switch (action.type) {
        case 'DESCRIPTION_CHANGE':
            return {...state , description: action.Dado}
        case 'TODO_SEARCHED' :
            return {...state , list : action.payload}
        case 'TODO_ADD' :
            return {...state , description:''}
        case 'TODO_LIMPAR':
            return {...state, description : ''}
        
        default:
            return state
    }
}