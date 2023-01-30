import axios from "axios";
import { InitialState } from "./types";

const initialState: InitialState = {
    example: {}
}
// constants
const EXAMPLE = 'my-app/common/example';
// reducer
export default function commoReducer (state = initialState, action){
    switch(action.type){
        case EXAMPLE:
            return {...state, example: action.payload}
        default:
            return state
    }
}
// actions
export const exampleAction = () => async (dispatch, getState) => {
    try {
        const result = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
        console.log(result, 'aaa')
        dispatch({
            type: EXAMPLE,
            payload: result.data
        })
    } catch (error){
        console.log(error)
    }
}