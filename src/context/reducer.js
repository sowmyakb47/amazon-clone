export const initialState={
    basket:[],
    user:null
};

const reducer=(state,action)=>{
    console.log(state,action);
    switch (action.type){
        case "ADD_TO_BASKET" :
             return {...state,basket:[...state.basket,action.item]};
        case "REMOVE_FROM_BASKET":
            const index=state.basket.findIndex(item=>item.id === action.id)
            let newbasket=[...state.basket];
            if(index >= 0){
                newbasket.splice(index,1)
            }else{
                console.warn(`cannot remove {id:${action.id} as it's not in basket}`)
            }
            return {...state,basket:newbasket}
        case "SET_USER":
            return{...state,user:action.user}
        default:
            return state;
    }
};

export default reducer;
