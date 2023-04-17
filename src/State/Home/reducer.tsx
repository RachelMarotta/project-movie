import { 
  REQUEST_MOVIES_STARTED, 
  RECEIVE_SUCCESSFUL, REQUEST_FAILED 
} from '../types'

const INITIAL_STATE = {
  isLoading: true,
  movies: [],
  errorMessage: ''
};

const HomeReducer = (
  state: MovieState = INITIAL_STATE, 
  action: MovieAction
  ) => {
  switch (action.type) {
    case REQUEST_MOVIES_STARTED:
      return {
        ...state,
        isLoading: true
      };

    case RECEIVE_SUCCESSFUL:
      return {
        ...state,
        isLoading: false,
        movies: [...state.movies, ...action.data],
        errorMessage: ''
      };

    case REQUEST_FAILED:
      return {
        ...state,
        isLoading: false,
        movies: [],
        errorMessage: ''
      };

    default:
      return state;
  }
}


export default HomeReducer;