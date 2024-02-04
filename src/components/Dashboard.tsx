import { Link } from "react-router-dom";

export const Dashboard = () => {
  const pages = ["vault 1", "vault 2", "vault 3"];

  return (
    <>
      <h1>Dashboard</h1>
      {pages.map((e) => (
        <Link to={"/vaults/" + e}>
          <h3>{e}</h3>
        </Link>
      ))}
    </>
  );
};
