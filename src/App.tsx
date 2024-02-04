import { Route, Routes } from "react-router";
import "./App.css";
import { Dashboard } from "./components/Dashboard";
import { NotFound } from "./components/NotFound";
import { Vault } from "./components/Vault";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Dashboard />}></Route>
        <Route path="vaults/:vaultId" element={<Vault />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
