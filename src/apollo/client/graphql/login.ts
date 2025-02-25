export const LOGIN = gql`
  mutation Login($data: AskingTaskInput!) {
    login(data: $data) {
      username
      password
    }
  }
`;
