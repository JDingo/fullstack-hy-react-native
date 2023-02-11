import { FlatList } from "react-native";
import useMe from "../hooks/useMe";
import ItemSeparator from "./ItemSeparator";
import MyReviewItem from "./MyReviewItem";

const MyReviews = () => {
  const queryResult = useMe({ includeReviews: true });

  const reviewNodes = queryResult?.me?.reviews
    ? queryResult.me.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <MyReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default MyReviews;
