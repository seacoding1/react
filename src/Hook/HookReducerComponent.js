const myReducer = (state, action) => {
    
    //action은 객체

    // console.log(state);
    // console.log(action);

    if(action.type === "increase") {
        state = {value:state.value+1};

    } else if(action.type === "decrease") {
        state = {value:state.value-1};
    } else if(action.type === "reset") {
        state = {value:0};
    }

    return state; 
    //{value: state.value+1}
}

const nameReducer = (state, action) => {

    state = {...state, [action.name]:action.value};

    return state;
}


//기본 디포트 모형
export {myReducer, nameReducer};