import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query Query($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection) {
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

export const GET_ME = gql`
  {
    me {
      id
      username
    }
  }
`;

export const GET_REPOSITORY = gql`
  query Query($repositoryId: ID!) {
    repository(id: $repositoryId) {
      ownerAvatarUrl
      id
      fullName
      description
      forksCount
      ratingAverage
      reviewCount
      stargazersCount
      url
      language
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              username
              id
            }
          }
        }
      }
    }
  }
`;
