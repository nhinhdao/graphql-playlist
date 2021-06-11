const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require("mongoose");

const app = express();

// connect to MongoDB
// using connection string taken from Mongo Atlas (formerly mLab)
mongoose.connect('mongodb+srv://ndao:ndao12345@nd-graphql.otew5.mongodb.net/gql-playlist?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to database through Mongoose');
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

app.listen(4000, () => {
    console.log('Now listening to requests on port 4000!');
})