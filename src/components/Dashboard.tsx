import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getVaults, wait } from "../functions/vault-functions";

export const Dashboard = () => {
  const pages = ["vault 1", "vault 2", "vault 3"];

  const query = useQuery({
    queryKey: ["vaults"],
    queryFn: () => getVaults()
  });

  if (query.isLoading) return <h1>Please wait...</h1>

  if (query.isError) return <h1>Error: {query.error.message}</h1>

  return (
    <>
      <h1>Dashboard</h1>
      {query.data?.map((e) => (
        <Link to={"/vaults/" + e}>
          <h3>{e.name}</h3>
        </Link>
      ))}
    </>
  );
};
