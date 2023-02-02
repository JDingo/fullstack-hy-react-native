import { Formik } from "formik";
import SignInForm from "./SignInForm";

const initialValues = {
  username: "",
  password: "",
};

const SignIn = () => {
  const onSubmit = (values) => {
    const username = values.username;
    const password = values.password;

    console.log("Submitted:", username, password);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit}></SignInForm>}
    </Formik>
  );
};

export default SignIn;
