import { ApolloProvider } from "@apollo/client";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import client from "./apis/client";

const MainPage = lazy(() => import("./pages/main"));
const UserPage = lazy(() => import("./pages/user"));

function App() {
  return (
    <ApolloProvider client={client}>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </Suspense>
    </ApolloProvider>
  );
}

export default App;
