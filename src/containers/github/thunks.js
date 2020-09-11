import { dispatchSearchRepository } from './actions';
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