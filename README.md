# React Query with Zod

## Problem Statement

Interacting with untyped APIs in React can be challenging. Lack of type safety can lead to unexpected errors and bugs in applications. This project addresses this issue by combining the power of Zod for schema validation and React Query for efficient API requests handling.

## How it Works

When data is fetched from an API, Zod is used to validate the schema. If the data does not conform to the specified schema, Zod raises an error. React Query then captures this error and handles it gracefully, returning `undefined` for the `data` property.

## Technologies Used

- **React Query:** React Query simplifies data fetching and state management, providing a robust solution for API interactions in React applications.
- **Zod:** Zod is a TypeScript-first schema declaration and validation library. It ensures that the data received from APIs adheres to a predefined schema, enhancing type safety and reducing errors.