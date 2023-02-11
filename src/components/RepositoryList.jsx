import useRepositories from "../hooks/useRepositories";
import { FlatList, View, StyleSheet, Pressable } from "react-native";
import RepositoryItem from "./RepositoryItem";
import { useNavigate } from "react-router-native";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  sortingTab: {
    margin: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, order, setOrder }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const navigate = useNavigate();

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={
        <View>
          <Picker
            selectedValue={order}
            onValueChange={(itemValue) => setOrder(itemValue)}
            style={styles.sortingTab}
          >
            <Picker.Item
              label="Latest repositories"
              value="CREATED_AT"
            ></Picker.Item>
            <Picker.Item
              label="Highest rated repositories"
              value="RATING_DESC"
            ></Picker.Item>
            <Picker.Item
              label="Lowest rated repositories"
              value="RATING_ASC"
            ></Picker.Item>
          </Picker>
        </View>
      }
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            navigate(`/${item.id}`);
          }}
        >
          <RepositoryItem repository={item}></RepositoryItem>
        </Pressable>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

const RepositoryList = () => {
  const [order, setOrder] = useState("CREATED_AT");
  const { repositories } = useRepositories(order);

  return (
    <RepositoryListContainer
      repositories={repositories}
      order={order}
      setOrder={setOrder}
    ></RepositoryListContainer>
  );
};

export default RepositoryList;
