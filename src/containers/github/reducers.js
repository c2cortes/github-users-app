import { SEARCH_REPOSITORY, SORT_REPOSITORIES, UPDATE_SELECTED_ITEMS } from './actions';

const initialState = {
    repositories: [],
    selectedItems: []
};

export const searchData = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SEARCH_REPOSITORY:
            return {
                ...state,
                repositories: payload.data
            };
        case SORT_REPOSITORIES:
            return {
                ...state,
                repositories: payload
            };
        case UPDATE_SELECTED_ITEMS:
            return {
                ...state,
                selectedItems: payload
            };
        default:
            return state;
    }
}