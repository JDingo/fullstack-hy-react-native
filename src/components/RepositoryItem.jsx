import { StyleSheet, View } from "react-native";
import RepositoryItemHeading from "./RepositoryItemHeading";
import RepositoryItemStats from "./RepositoryItemStats";
import theme from "../theme";

const style = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    padding: 20,
  },
});

const RepositoryItem = ({ repository }) => {
  return (
    <View testID="repositoryItem" style={style.container}>
      <RepositoryItemHeading repository={repository}></RepositoryItemHeading>
      <RepositoryItemStats repository={repository}></RepositoryItemStats>
    </View>
  );
};

export default RepositoryItem;
