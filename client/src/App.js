import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import Trip from "./pages/Trip";
import Trips from "./pages/Trips";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Navbar />
          <ChatBox />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/add-pet" element={<AddPet />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
