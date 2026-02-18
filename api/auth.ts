import { gql } from "@apollo/client"

export const LOGIN_MUTATION = gql`
mutation Login ($username: Stirng!, $password: String!) {
  login(username: $username, password: $password){
    success
    message
    token
    usuario{
      username
      email
      persona {
        id
        activo
        apellidos
      }
    }
  }
}`