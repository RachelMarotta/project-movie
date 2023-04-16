import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#1E1E1E",
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
    detailsImage: {
      position: "absolute",
      width: "100%",
      height: 210,
    },
    detailsPosterImage: {
      width: 100,
      height: 160,
      borderRadius: 16,
      left: 29,
      right: 251,
      top: 140,
    },
    stars: {
      position: "absolute",
      height: 50,
      left: 140,
      right: 32,
      top: 240,
      color: "#fff",
      fontSize: 18,
      lineHeight: 27,
      fontWeight: "700",
    },
  
    description: {
      width: "100%",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center",
      marginTop: 170,
    },
  
    descriptionText: {
      marginLeft: 10,
      color: "#92929D",
    },
  
    descriptionText1: {
      marginLeft: 10,
      color: "#FF8700",
    },
  
    descriptionGroup: {
      flexDirection: "row",
      alignItems: "center",
      gap: 2,
    },
    aboutMovie: {
      width: "100%",
      alignContent: "center",
      flexDirection: "row",
      justifyContent: "space-around",
      paddingTop: 20,
      paddingHorizontal: 20,
    },
    aboutMovieText: {
      color: "#fff",
      fontSize: 14,
      lineHeight: 21,
      fontWeight: "500",
    },
    about: {
      padding: 20,
    },
    aboutText: {
      color: "#fff",
      textAlign: "justify",
    },
  });