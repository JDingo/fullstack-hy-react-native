import { StatusBar } from "expo-status-bar";
import { NativeRouter } from "react-router-native";

import Main from "./src/components/Main";

const App = () => {
  return (
    <>
      <NativeRouter>
        <Main></Main>
      </NativeRouter>
      <StatusBar style="auto"></StatusBar>
    </>
  );
};

export default App;
