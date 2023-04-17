import { ActivityIndicator, FlatList, Text, TextInput, View  } from "react-native";
import { api } from "../../service/api"
import { connect } from 'react-redux';
import { fetchMovies } from "../../State/Home/actions";
import { MagnifyingGlass } from "phosphor-react-native";
import { MovieCard } from "../../components/MovieCard";
import { styles } from "./styles"
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}

interface PropsFromDispatch {
  fetchMovies: () => void;
}

type Props = PropsFromDispatch & MovieState;

export function Home(props: Props) {
  const navigation = useNavigation();
  const initialPage = 1
  const nextPage = 1
  const characters = 2

  const { isLoading, movies } = props;

  const [searchResultMovie, setSearchResultMovie] = useState<Movie[]>([]);
  const [search, setSearch] = useState('');
  const [noResult, setNoResult] = useState(false);


  useEffect(() => {
    updateListMovies();
  }, []);

  const updateListMovies = () => {
    // let newPage = initialPage + nextPage
    fetchMovies()
    console.log(props, isLoading, movies)
  }

  const searchMovie = async (query: string) => {
    // setLoading(true);
    const response = await api.get("/search/movie", {
      params: {
        query
      }
    });

    if (response.data.results.length === 0) {
      setNoResult(true)
      setSearchResultMovie([])
    } else {
      setSearchResultMovie(response.data.results)
    }
    // setLoading(false);
  };

  const handleSearch = (text: string) => {
    setSearch(text)
    if (text.length > characters) {
      searchMovie(text);
    } else {
      setSearchResultMovie([])
    }
  }

  const renderMovieItem = ({ item }: { item: Movie }) => (
    <MovieCard
      data={item}
      onPress={() => {
        navigation.navigate('Details', { movieId: item.id });
      }}
    />
  );

  const movieData = search.length > characters ? searchResultMovie : movies

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>O que você quer assistir hoje?</Text>
        <View style={styles.containerInput}>
          <TextInput
            placeholder='Buscar'
            placeholderTextColor='#FFF'
            style={styles.input}
            onChangeText={handleSearch}
            value={search} />

          <MagnifyingGlass color='#FFF' size={25} weight='light' />
        </View>

        {
          noResult && (
            <Text style={styles.noResultText}>
              Nenhum filme encontrado com o nome '{search}'
            </Text>
          )
        }
      </View>

      {isLoading && <ActivityIndicator size={50} color='#0296e5' />}

      <FlatList
        data={movieData}
        numColumns={3}
        renderItem={renderMovieItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{
          paddingLeft: 48,
          paddingBottom: 80
        }}
        onEndReached={() => updateListMovies()}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
}

const mapStateToProps = (state: MovieState) => ({
  isLoading: state.isLoading,
  movies: state.movies
});

const mapDispatchToProps = {
  fetchMovies
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);