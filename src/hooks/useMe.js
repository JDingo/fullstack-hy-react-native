import { useQuery } from "@apollo/client";
import { GET_ME } from "../graphql/queries";

const useMe = () => {
  const { data, error, loading, refetch } = useQuery(GET_ME);

  console.log("Me", data);

  return { me: data?.me, error, loading, refetch };
};

export default useMe;
