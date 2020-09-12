export const SEARCH_REPOSITORY = 'SEARCH_REPOSITORY';
export const SORT_REPOSITORIES = 'SORT_REPOSITORIES';
export const UPDATE_SELECTED_ITEMS = 'UPDATE_SELECTED_ITEMS';

export const fetchUserLocation = (currentLocation) => {
	return {
		type: FETCH_USER_LOCATION,
		payload: { currentLocation }	
	}	
}

export const dispatchSearchRepository = (data) => {
	return {
		type: SEARCH_REPOSITORY,
		payload: { data }	
	}	
}

export const dispatchSortRepositories = (payload) => {
	return {
		type: SORT_REPOSITORIES,
		payload
	}
}

export const dispatchUpdateSelectedItems = (payload) => {
	return {
		type: UPDATE_SELECTED_ITEMS,
		payload
	}
}
