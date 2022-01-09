import { ApolloProvider } from "@apollo/client";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import client from "./apis/client";
import LayoutContainer from "./components/layout";
import "./styles/global.css";

const MainPage = lazy(() => import("./pages/main"));
const UserPage = lazy(() => import("./pages/user"));
const FramperPage = lazy(() => import("./pages/framer"));

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path="/" element={<LayoutContainer />}>
          <Route path="user" element={<UserPage />} />
          <Route path="framer" element={<FramperPage />} />
        </Route>
      </Routes>
    </ApolloProvider>
  );
}

export default App;
