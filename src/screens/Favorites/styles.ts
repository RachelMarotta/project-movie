import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#1E1E1E",
    },
    moviesEmpty: {
      height: "70%",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    moviesEmptyImage: {
      width: 76,
      height: 76,
    },
    header: {
      paddingTop: 30,
      height: 115,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
    },
    headerText: {
      color: "#fff",
      fontWeight: "700",
      fontSize: 18,
    },
    contentMyList: {
      width: "100%",
      padding: 20,
      gap: 25,
      marginBottom: 25,
    },
    card: {
      width: 250,
      marginBottom: 20,
      flexDirection: "row",
      alignItems: "center",
      gap: 15,
    },
    cardImage: {
      width: 110,
      height: 160,
      borderRadius: 16,
    },
    cardInfo: {
      width: 150,
      gap: 10,
    },
    cardInfoTitle: {
      color: "#Fff",
      lineHeight: 24,
      fontSize: 16,
    },
    cardInfoInfoMovie: {
      flexDirection: "column",
      alignItems: "flex-start",
      gap: 10,
    },
    cardInfoInfoMovieContent: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },
    cardInfoInfoMovieContentText: {
      color: "#FFF",
    },
    cardInfoInfoMovieContentText2: {
      color: "#FF8700",
      fontWeight: "700",
    },
    moviesEmptyTitle: {
      color: "#EBEBEF",
      fontWeight: "600",
      fontSize: 16,
      marginTop: 10,
      letterSpacing: 0.12,
      lineHeight: 35,
    },
    moviesEmptyText: {
      color: "#92929D",
      letterSpacing: 0.12,
      lineHeight: 35,
    },
  });