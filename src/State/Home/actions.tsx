import { api } from '../../service/api'
import {
  REQUEST_MOVIES_STARTED,
  RECEIVE_SUCCESSFUL,
  REQUEST_FAILED
} from '../types'

function requestStarted() {
  return {
    type: REQUEST_MOVIES_STARTED
  };
}

function requestSuccessful(movies: IMovie[]) {
  return {
    type: RECEIVE_SUCCESSFUL,
    data: movies
  };
}

function requestFailed(error: string = '') {
  return {
    type: REQUEST_FAILED,
    data: error
  };
}

export const fetchMovies = () => {
  console.log('ENTROU NO FETCHMOVIE')
  return async (dispatch: DispatchType) => {
    dispatch(requestStarted());
    console.log('INICIOU O DISPATCH')
    // console.log('PASSOU PELO REQUESTSTART')
    // try {
    //   const response = await api.get("/movie/popular", { params: 1 })
    //   console.log('RESPOSTA', response)

    //   dispatch(requestSuccessful(response.data.results))
    // } catch (error: any) {
    //   dispatch(requestFailed(error))
    // }
  }
}