import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    ApolloClient,
    InMemoryCache,
    gql
} from "@apollo/client";

const client = new ApolloClient({
    uri: 'http://localhost:8080/graphql',
    cache: new InMemoryCache()
});

client
.query({
    query: gql`
        query Trip {
            trip(id: "1") {
                __typename
                ... on Trip {
                    id
                    name
                    place
                    description
                    pricePln
                    owner {
                        __typename
                        ... on User {
                            firstName
                            surname
                            gender
                            age
                            email
                        }
                    }
                    participants(limit: 10) {
                        id
                        firstName
                        surname
                        gender
                        age
                        email
                    }
                }
                ... on TripNotFound {
                    notFoundId: id
                }
            }
        }
    `
})
.then(result => console.log(result));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
