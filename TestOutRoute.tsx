import { connect } from 'react-redux';
import { useEffect } from "react";

export function TestOutRoute(props) {
  const { isLoading, movies } = props;

  useEffect(() => {
    updateListMovies();
  }, []);

  const updateListMovies = () => {
    // let newPage = initialPage + nextPage
    console.log('TESTE',props, isLoading, movies)
  }

  return (
    <view></view>
  );
}

const mapStateToProps = (state: MovieState) => ({
  isLoading: state.isLoading,
  movies: state.movies
});

export default connect(mapStateToProps)(TestOutRoute);