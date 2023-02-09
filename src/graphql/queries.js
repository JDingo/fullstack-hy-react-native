import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query Query {
    repositories {
      edges {
        node {
          ownerAvatarUrl
          id
          fullName
          description
          language
          forksCount
          ratingAverage
          reviewCount
          stargazersCount
        }
      }
    }
  }
`;