import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = ({ repositoryId }) => {
  const { data, error, loading, refetch } = useQuery(GET_REPOSITORY, {
    variables: { repositoryId },
  });

  return { repository: data?.repository, error, loading, refetch };
};

export default useRepository;
