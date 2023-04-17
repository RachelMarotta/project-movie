import { ActivityIndicator, FlatList, Text, TextInput, View } from 'react-native';
import { api } from '../../Service/api'
import { MagnifyingGlass } from 'phosphor-react-native';
import { MovieCard } from '../../Components/MovieCard';
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';


interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}

export function Home() {
  const navigation = useNavigation();
  const initialPage = 1
  const nextPage = 1
  const characters = 2

  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(initialPage);
  const [loading, setLoading] = useState(false);

  const [searchResultMovie, setSearchResultMovie] = useState<Movie[]>([]);
  const [search, setSearch] = useState('');
  const [noResult, setNoResult] = useState(false);


  useEffect(() => {
    loadMoreData();
  }, []);

  const loadMoreData = async () => {
    setLoading(true);
    const response = await api.get('/movie/popular', {
      params: {
        page
      }
    });
    setMovies([...movies, ...response.data.results]);
    setPage(page + nextPage);
    setLoading(false);
  }

  const searchMovie = async (query: string) => {
    setLoading(true);
    const response = await api.get('/search/movie', {
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
    setLoading(false);
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

      {loading && <ActivityIndicator size={50} color='#0296e5' />}

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
        onEndReached={() => loadMoreData()}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
}
