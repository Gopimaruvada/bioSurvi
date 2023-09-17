interface Action{
    type:string;
    payload?:any;
}

function createReducer(initialState:any, handlers : {[id:string]:any}) : any {
    return function reducer(state = initialState, action:Action){
        if(action && Object.prototype.hasOwnProperty.call(handlers, action.type)){
            return handlers[action.type](state, action.payload);
        }
        return state;
    }
}

export default createReducer;