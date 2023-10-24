import { useQuery } from "@tanstack/react-query";
import { getFirstPerson } from "@/services/StarWars/StarWarsService/StarWarsService.ts";
import { IFirstPersonError, IFirstPersonResponse } from "@/services/StarWars/StarWarsService/StarWars";

export const useGetFirstPerson = () => {
  const {
    data,
    error,
    refetch
  } = useQuery<IFirstPersonResponse, IFirstPersonError>({
    queryKey: ['first_person_data'],
    queryFn: () => getFirstPerson()
  });

  return { data, error, refetch};
}
