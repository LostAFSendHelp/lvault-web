import { Route, Routes } from "react-router";
import "./App.css";
import { NotFound } from "./components/NotFound";
import { Vault } from "./components/Vault";
import { AuthProvider } from "./components/AuthProvider";
import { Homepage } from "./components/Homepage";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <GoogleOAuthProvider clientId="114782663173-6pehk02klroh7np5vkujdgvv8g2fhtlk.apps.googleusercontent.com">
      <AuthProvider>
        <Routes>
          <Route path="/">
            <Route index element={<Homepage />}></Route>
            <Route path="vaults/:vaultId" element={<Vault />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
