import {
    CHANGE_FAVORITE,
    DELETE_FAVORITE,
    ADD_FAVORITE
} from '../actions/ProjectsActions';

const INITIAL_STATE = {
    projects : []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_FAVORITE:
            return {
                projects : [...state.projects, action.payload]
            };
        case DELETE_FAVORITE:
            const filterProjects = state.projects.filter(({id}) => id !== action.payload)
            return {
                projects : [...filterProjects]
            };
        case ADD_FAVORITE:
            return {
                    projects : [...action.payload]
                };
        default:
            return state;
    }
}