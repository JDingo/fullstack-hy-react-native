import { Pressable, StyleSheet } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

const AppBarTab = ({ text }) => {
  return (
    <Pressable style={styles.container} onPress={onPressFunction}>
      <Text color={"white"} fontSize={"subheading"} fontWeight={"bold"}>
        {text}
      </Text>
    </Pressable>
  );
};

const onPressFunction = (event) => {
  console.log(`Event press: ${event}`);
};

export default AppBarTab;
