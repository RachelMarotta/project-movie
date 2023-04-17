import { api } from "../../Service/api";
import { ActivityIndicator, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { CalendarBlank, CaretLeft, Clock, DotsThreeVertical, Star } from "phosphor-react-native";
import { styles } from "./styles"
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";

type MovieDetails = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  runtime: string;
  release_date: string;
  vote_average: number;
};

type RouterProps = {
  movieId: number;
};

export function Details() {
  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);
  const [loading, setLoading] = useState(false);

  const route = useRoute();
  const { movieId } = route.params as RouterProps;
  const { goBack } = useNavigation();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        const response = await api.get(`/movie/${movieId}`);
        setMovieDetails(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  function getYear(data: string) {
    const ano = new Date(data).getFullYear();
    return ano;
  }

  if (!movieDetails) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => goBack()}>
          <CaretLeft color="#fff" size={32} weight='regular' />
        </TouchableOpacity>
        <Text style={styles.headerText}>Detalhes</Text>
      </View>
      {loading && <ActivityIndicator size={50} color="#0296E5" />}
      {!loading && (
        <ScrollView>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`,
            }}
            style={styles.detailsImage}
          />
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`,
            }}
            style={styles.detailsPosterImage}
          />
          <Text style={styles.stars}>{movieDetails.title}</Text>

          <View style={styles.description}>
            <View style={styles.descriptionGroup}>
              <CalendarBlank color="#92929D" size={25} weight="thin" />
              <Text style={styles.descriptionText}>
                {getYear(movieDetails.release_date)}
              </Text>
            </View>
            <DotsThreeVertical color="#92929D" size={32} weight="duotone" />
            <View style={styles.descriptionGroup}>
              <Clock color="#92929D" size={25} weight="thin" />
              <Text style={styles.descriptionText}>
                {movieDetails.runtime} Minutos
              </Text>
            </View>
            <DotsThreeVertical color="#92929D" size={32} weight="duotone" />
            <View style={styles.descriptionGroup}>
              <Star
                color={
                  movieDetails.vote_average.toFixed(2) >= "7"
                    ? "#FF8700"
                    : "#92929D"
                }
                size={25}
                weight={
                  movieDetails.vote_average.toFixed(2) >= "7"
                    ? "duotone"
                    : "thin"
                }
              />
              <Text
                style={[
                  movieDetails.vote_average.toFixed(2) >= "7"
                    ? styles.descriptionText1
                    : styles.descriptionText,
                ]}
              >
                {movieDetails.vote_average.toFixed(1)}
              </Text>
            </View>
          </View>

          <View style={styles.about}>
            <Text style={styles.aboutText}>
              {movieDetails.overview === ""
                ? 'Ops! Parece que esse filme ainda não tem sinopse'
                : movieDetails.overview}
            </Text>
          </View>
        </ScrollView>
      )}
    </View>
  );
}
