import { StyleSheet, View } from "react-native";
import theme from "../theme";

const ItemSeparator = () => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.white,
      padding: 20,
    },
    separator: {
      height: 10,
    },
  });

  <View style={styles.separator} />;
};

export default ItemSeparator;
