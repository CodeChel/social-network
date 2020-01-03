import { getAuthThunk } from "./auth-reducer";



export const INITIALIZED_SUCCESS = 'app-reducer/INITIALIZED_SUCCESS';


const initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default: return state;

    }

}

export const initiallizedSuccess = () => ({ type: INITIALIZED_SUCCESS });

export const initializeAppThunk = () => async (dispatch) => {
    
    const promise = dispatch(getAuthThunk())
    
       await Promise.all([promise])
       
       await dispatch(initiallizedSuccess()) 
        
    }
    
    





export default appReducer;