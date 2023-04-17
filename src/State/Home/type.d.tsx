interface IMovie {
  id: number,
  title: string,
  poster_path: string,
  overview: string
}

type MovieState = {
  isLoading: boolean,
  movies: IMovie[],
  errorMessage: string
}

type MovieAction = {
  type: string,
  data: IMovie[]
}

type CreateObjectAction = {
  type: string
}

type DispatchType = (args: CreateObjectAction) => CreateObjectAction
