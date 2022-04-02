import React from "react";
// import ApolloClient from 'apollo-boost';
// import { ApolloProvider } from  'react-apollo';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

import LessonList from "./components/LessonList";
import TeacherList from "./components/TeacherList";
import AddLesson from "./components/AddLesson";
import AddTeacher from "./components/AddTeacher";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <LessonList />
        <TeacherList />
        <AddLesson />
        <AddTeacher />
      </div>
    </ApolloProvider>
  );
}

export default App;
