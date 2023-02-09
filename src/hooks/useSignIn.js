const { useMutation } = require("@apollo/client");
const { SIGN_IN } = require("../graphql/mutations");

const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN);

  const signIn = async ({ username, password }) => {
    return mutate({ variables: { username, password } });
  };

  return [signIn, result];
};

export default useSignIn;
