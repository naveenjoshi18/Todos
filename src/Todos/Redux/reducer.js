import { ADDLIST,FETCHLIST,DELETELIST, DELETEALL, EDITLIST } from './actionTypes' 

const initialState = {
    listTodo: [],
    editText: '',
    editID: '',
    editFlag: false
}

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDLIST:
            const { payloaddata, payloadid } = action;
            let idCheck = state.listTodo.find(item => item.id == payloadid);
           
            if (idCheck != undefined) {
                for(const i in state.listTodo){
                    if(state.listTodo[i].id === payloadid){
                        state.listTodo[i].title = payloaddata
                    }
                }
                state.editID = '';
                return state
            } else {
                return {
                    listTodo: [
                        ...state.listTodo,
                        {
                            id: new Date().getTime().toString(),
                            title: payloaddata
                        }]
                }
            }
            break;
        case FETCHLIST:
            for(const i in action.payload){
                state.listTodo.push({id: action.payload[i].id, title:action.payload[i].title})   
            }
            return {
                listTodo:[
                    ...state.listTodo
                ]
            }
            break;
        case DELETELIST:
            return {
                listTodo: state.listTodo.filter(item => item.id !== action.payload)
            }
            break;
        case EDITLIST:
            return {
                ...state,
                editText: action.payload.title,
                editID: action.payload.id,
                editFlag: true
            }
            break;
        case DELETEALL:
            return {
                listTodo : []
            }
            break;    
        default:
            return state;
            break;
    }
}

export default listReducer