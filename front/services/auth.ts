import { request, gql } from 'graphql-request'

export async function GetUserByEmail() {
  gql`
    query GetUserByEmail($email: String!) {
      user: nextUser(where: { email: $email }, stage: DRAFT) {
        id
        password
      }
    }
  `;
}

export async function CreateNextUserByEmail() {
  gql`
    mutation CreateNextUserByEmail($email: String!, $password: String!) {
      newUser: createNextUser(data: { email: $email, password: $password }) {
        id
      }
    }
  `;
}
