import { ApolloProvider } from "@apollo/client";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import client from "./apis/client";

const MainPage = lazy(() => import("./pages/main"));
const UserPage = lazy(() => import("./pages/user"));
const FramperPage = lazy(() => import("./pages/framer"));

function App() {
  return (
    <ApolloProvider client={client}>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/framer" element={<FramperPage />} />
        </Routes>
      </Suspense>
    </ApolloProvider>
  );
}

export default App;
