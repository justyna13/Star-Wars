import { axiosClient } from "@/services/axiosClients.ts";

export const getFirstPerson = async ()=>
  axiosClient
    .get('people/1/')
    .then((res) => res.data);

