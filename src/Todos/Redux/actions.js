import { ADDLIST,FETCHLIST,DELETELIST, DELETEALL, EDITLIST } from './actionTypes' 

export const addList = (data,id) =>{
    return {
        type: ADDLIST,
        payloaddata:data,
        payloadid:id
    }
}
export const fetchList = (url) =>  async (dispatch) => { 
        const response = await fetch(url).then(response => response.json())
        .then(data => data.slice(0,5))
        dispatch({type: FETCHLIST ,payload:response})
    
}

export const deleteList = (data) =>{
    return {
        type: DELETELIST,
        payload: data
    }
}
export const editList = (data) =>{
    return {
        type: EDITLIST,
        payload:data
    }
}
export const deleteAll = () =>{
    return {
        type: DELETEALL
    }
}
