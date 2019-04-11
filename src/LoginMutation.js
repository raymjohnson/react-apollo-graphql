import gql from "graphql-tag";

export default gql`
  mutation loginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      __typename

      ...SuccessfulLoginResult
      ...FailedLoginResult
    }
  }

  fragment SuccessfulLoginResult on SuccessfulLoginResult {
    token
    email
  }

  fragment ErrorLoginResult on ErrorLoginResult {
    error
  }
`;
