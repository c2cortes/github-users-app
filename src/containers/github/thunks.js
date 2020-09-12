import { dispatchSearchRepository, dispatchSortRepositories } from './actions';
import Http from '../../api/HttpRequest';

export const searchRepository = (searchQuery) => async (dispatch) => {
    if(searchQuery.length > 3) {
    const endpoint = `https://api.github.com/search/repositories?q=${searchQuery}`;
    await Http.get(endpoint)
            .then(response => {
                dispatch(dispatchSearchRepository(response.data));
            }).catch(error => alert(error));
    }
}

export const sortRepository = () => async (dispatch, getState) => {
    const items = getState().searchData.repositories.items.slice().sort(function (a,b){
        var dateA = new Date(a.created_at);
        var dateB = new Date(b.created_at);
        return Date.parse(dateA) - Date.parse(dateB);
    });
    const repositoriesSorted = { items }
    dispatch(dispatchSortRepositories(repositoriesSorted));
} 