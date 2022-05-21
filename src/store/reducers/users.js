const initialState = []

const users = (state = initialState, action) => {
    switch(action.type){
        case "ADD_NEW_USER": {
            let { user } = action.payload;
            let newState = state;
            newState.unshift(user);
            return [
                ...newState
            ];
        }
        case "EDIT_USER":{
            let { id, user } = action.payload;
            
            let newState = state.filter(user => user.id !== id);
            newState.unshift(user);
            return [
                ...newState
            ];
        }
        case "DELETE_USER": {
            let { id } = action.payload;
            let newState = state.filter(user => user.id !== id);
            return [
                ...newState
            ];
        }
        default: 
            return state;
    }
}

export default users;