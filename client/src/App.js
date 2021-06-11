import BookList from "./components/BookList";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

// set up ApolloClient
const client = new ApolloClient({
    uri: "http://localhost:4000/graphql", // endpoint where we make requests
});

// running the app
function App() {
    return (
        <ApolloProvider client={client}>
            <div id="main">
                <h1>Nhinh's reading list</h1>
                <BookList />
            </div>
        </ApolloProvider>
    );
}

export default App;
