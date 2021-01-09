/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTrainer = /* GraphQL */ `
  query GetTrainer($id: ID!) {
    getTrainer(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTrainers = /* GraphQL */ `
  query ListTrainers(
    $filter: ModelTrainerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTrainers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getExercise = /* GraphQL */ `
  query GetExercise($id: ID!) {
    getExercise(id: $id) {
      id
      name
      description
      muscleGroup
      createdAt
      updatedAt
    }
  }
`;
export const listExercises = /* GraphQL */ `
  query ListExercises(
    $filter: ModelExerciseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExercises(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        muscleGroup
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
