import { Image, ScrollView, Text, TouchableOpacity, View, } from "react-native";
import { CalendarBlank, CaretLeft, Clock, Star } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
import { MovieContext } from "../../context/MovieContext";
import { useContext } from "react";
import { styles } from "./styles"

export function Favorites() {
  const { allFavoriteMovies } = useContext(MovieContext);
  const { goBack, navigate } = useNavigation();

  function getYear(data: string) {
    const ano = new Date(data).getFullYear();
    return ano;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => goBack()}>
          <CaretLeft color="#fff" size={32} weight="thin" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Minha Lista</Text>
        <View
          style={{
            width: 30,
            height: 30,
          }}
        />
      </View>

      {allFavoriteMovies.length > 0 && (
        <ScrollView style={styles.contentMyList}>
          {allFavoriteMovies.map((movie) => (
            <TouchableOpacity
              onPress={() => navigate('Details', { movieId: movie.id })}
              key={movie.id}
              style={styles.card}
            >
              <Image
                style={styles.cardImage}
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                }}
              />
              <View style={styles.cardInfo}>
                <Text style={styles.cardInfoTitle}>{movie.title}</Text>
                <View style={styles.cardInfoInfoMovie}>
                  <View style={styles.cardInfoInfoMovieContent}>
                    <Star
                      color={
                        movie.vote_average.toFixed(1) > "7" ? "#FF8700" : "#fff"
                      }
                      size={25}
                      weight={
                        movie.vote_average.toFixed(1) > "7"
                          ? "duotone"
                          : "light"
                      }
                    />
                    <Text
                      style={[
                        movie.vote_average.toFixed(1) > "7"
                          ? styles.cardInfoInfoMovieContentText2
                          : styles.cardInfoInfoMovieContentText,
                      ]}
                    >
                      {movie.vote_average.toFixed(1)}
                    </Text>
                  </View>
                  <View style={styles.cardInfoInfoMovieContent}>
                    <CalendarBlank color="#FFF" size={25} weight="thin" />
                    <Text style={styles.cardInfoInfoMovieContentText}>
                      {getYear(movie.release_date)}
                    </Text>
                  </View>
                  <View style={styles.cardInfoInfoMovieContent}>folder
                    <Clock color="#FFF" size={25} weight="thin" />
                    <Text style={styles.cardInfoInfoMovieContentText}>
                      {movie.runtime} Minutos
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
      {allFavoriteMovies.length <= 0 && (
        <View style={styles.moviesEmpty}>
          {/* <Image style={styles.moviesEmptyImage} source={favicon} /> */}
          <Text style={styles.moviesEmptyTitle}>
            Ainda não há filmes na lista
          </Text>
          <Text style={styles.moviesEmptyText}>
            Encontre o seu filme favorito para adicionar na lista
          </Text>
        </View>
      )}
    </View>
  );
}