function reduceFunctiontoupdate(state, action)
{
    switch(action.type){
        case"INC":{
            return state+action.payload;
        }
        case"DIC":{
            return state-action.payload;
        }
        default:{
            return action.payload;
        }
    }
}
export default reduceFunctiontoupdate;