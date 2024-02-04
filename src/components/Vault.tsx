import { useParams } from "react-router";

export const Vault = () => {
  const { vaultId } = useParams();
  return <h1>Vault {vaultId}</h1>;
};
