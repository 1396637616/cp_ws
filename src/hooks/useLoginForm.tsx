import { useLoginMutation } from '@/apollo/client/graphql/login.generated';
import { useEffect } from 'react';
export default function useLoginForm() {
  const [Login, LoginResult] = useLoginMutation();

  useEffect(() => {
    if (LoginResult.data) {
      console.log('LoginResult.data');
    }
  }, [LoginResult]);
  const onSubmit = async (values) => {
    const { data } = await Login({
      variables: {
        data: {
          username: values.username,
          password: values.password,
        },
      },
    });
    console.log(data);
  };
  return {
    onSubmit,
  };
}
