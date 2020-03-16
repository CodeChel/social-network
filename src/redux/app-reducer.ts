import { actionType, initiallizedSuccessType } from './../ts/types';
import { getAuthThunk } from "./auth-reducer";



export const INITIALIZED_SUCCESS = 'app-reducer/INITIALIZED_SUCCESS';


const initialState = {
    initialized: false as boolean
}



const appReducer = (state = initialState, action: actionType): typeof initialState => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default: return state;
    }

}

export const initiallizedSuccess = (): initiallizedSuccessType => ({ type: INITIALIZED_SUCCESS })

export const initializeAppThunk = () => async (dispatch: Function) => {

    const promise = dispatch(getAuthThunk())

    await Promise.all([promise])

    await dispatch(initiallizedSuccess())

}







export default appReducer