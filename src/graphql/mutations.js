/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTrainer = /* GraphQL */ `
  mutation CreateTrainer(
    $input: CreateTrainerInput!
    $condition: ModelTrainerConditionInput
  ) {
    createTrainer(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTrainer = /* GraphQL */ `
  mutation UpdateTrainer(
    $input: UpdateTrainerInput!
    $condition: ModelTrainerConditionInput
  ) {
    updateTrainer(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTrainer = /* GraphQL */ `
  mutation DeleteTrainer(
    $input: DeleteTrainerInput!
    $condition: ModelTrainerConditionInput
  ) {
    deleteTrainer(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createExercise = /* GraphQL */ `
  mutation CreateExercise(
    $input: CreateExerciseInput!
    $condition: ModelExerciseConditionInput
  ) {
    createExercise(input: $input, condition: $condition) {
      id
      name
      description
      muscleGroup
      createdAt
      updatedAt
    }
  }
`;
export const updateExercise = /* GraphQL */ `
  mutation UpdateExercise(
    $input: UpdateExerciseInput!
    $condition: ModelExerciseConditionInput
  ) {
    updateExercise(input: $input, condition: $condition) {
      id
      name
      description
      muscleGroup
      createdAt
      updatedAt
    }
  }
`;
export const deleteExercise = /* GraphQL */ `
  mutation DeleteExercise(
    $input: DeleteExerciseInput!
    $condition: ModelExerciseConditionInput
  ) {
    deleteExercise(input: $input, condition: $condition) {
      id
      name
      description
      muscleGroup
      createdAt
      updatedAt
    }
  }
`;
