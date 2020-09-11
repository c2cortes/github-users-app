import { SEARCH_REPOSITORY } from './actions';

const initialState = {
    
};

export const searchData = (state = initialState, action: any) => {
    const { type, payload } = action;

    switch (type) {
        case SEARCH_REPOSITORY:
            return {
                ...state,
                repositories: payload.data
            };
        default:
            return state;
    }
}