import { UseQueryResult, useQuery } from '@tanstack/react-query'
import z from 'zod'

enum Grade {
  membre = 1,
  admin = 2
}
const UserSchema = z.object({
  name: z.string(),
  age: z.number(),
  email: z.string().email(),
  address: z.string(),
  phone: z.string().regex(/^[0-9]{10}$/),
  grade: z.nativeEnum(Grade)
});
export type User = z.infer<typeof UserSchema>;

const fakeApi = async (): Promise<User> => {
  try {
    const response = {
      name: 'Tan',
      age: 20,
      email: "tan@yopmail.com",
      address: "Bangkok",
      phone: "0123456789",
      grade: 1
    };

    const parsedResponse = UserSchema.parse(response);
    return parsedResponse;
  } catch (error) {
    throw new Error("Les données de l'API ne sont pas valides.");
  }
};

const fetchUser = (): UseQueryResult<User, Error> => {
  return useQuery<User, Error>({
    queryKey: ["user"],
    queryFn: fakeApi
  });
}

export const App = () => {
  const { data, error } = fetchUser();

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      {Boolean(data?.grade === Grade.membre) && <div>membre</div>}
    </>
  )
}

