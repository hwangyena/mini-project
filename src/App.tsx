import { ApolloProvider } from "@apollo/client";
import { lazy, Suspense } from "react";
import { Route, Routes, useOutletContext } from "react-router-dom";
import client from "./apis/client";
import LayoutContainer, { useOpen } from "./components/layout";
import "./styles/global.css";

const HomePage = lazy(() => import("./pages/home"));
const UserPage = lazy(() => import("./pages/user"));
const FramperPage = lazy(() => import("./pages/framer"));

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path="/" element={<LayoutContainer />}>
          <Route index element={<HomePage />} />
          <Route path="user" element={<UserPage />} />
          <Route path="framer" element={<FramperPage />} />
        </Route>
      </Routes>
    </ApolloProvider>
  );
}

export default App;
