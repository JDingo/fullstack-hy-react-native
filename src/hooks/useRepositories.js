import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = (order) => {
  const orderObject =
    order === "CREATED_AT"
      ? { orderBy: "CREATED_AT", orderDirection: "DESC" }
      : order === "RATING_DESC"
      ? { orderBy: "RATING_AVERAGE", orderDirection: "DESC" }
      : { orderBy: "RATING_AVERAGE", orderDirection: "ASC" };

  const { data, error, loading, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables: {
      orderBy: orderObject.orderBy,
      orderDirection: orderObject.orderDirection,
    },
  });

  return { repositories: data?.repositories, error, loading, refetch };
};

export default useRepositories;
