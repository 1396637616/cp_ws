import * as Types from './__types__';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export type LoginMutation = {
  __typename?: 'Mutation';
  createAskingTask: { __typename?: 'Task'; id: string };
};
export type LoginMutationVariables = Types.Exact<{
  data: Types.LoginInput;
}>;
export const LoginDocument = gql`
  mutation Login($data: LoginInput!) {
    login(data: $data) {
      username
      password
    }
  }
`;
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    options,
  );
}
