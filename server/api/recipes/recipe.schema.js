//Core
const graphql = require('graphql');
//Models
const Ricepes = require('./recipe.model');

const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const { GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLBoolean } = graphql;
