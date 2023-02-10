import { View } from "react-native";
import { useParams } from "react-router-native";
import useRepository from "../hooks/useRepository";
import RepositoryItem from "./RepositoryItem";

export const RepositoryView = () => {
  const { repositoryId } = useParams();

  const { repository } = useRepository({ repositoryId });

  return repository ? (
    <View>
      <RepositoryItem repository={repository}></RepositoryItem>
    </View>
  ) : (
    <View></View>
  );
};
