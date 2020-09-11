export const SEARCH_REPOSITORY = 'SEARCH_REPOSITORY';

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