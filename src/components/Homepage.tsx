import { useGoogleLogin } from "@react-oauth/google";
import { useAuth } from "./AuthProvider";
import { Dashboard } from "./Dashboard";
import axios from "axios";

export const Homepage = () => {
    const auth = useAuth();

    if (!!auth.user) {
        return <Dashboard />;
    } else {
        const gglLogin = useGoogleLogin({
            onSuccess: response => {
                console.log(response.code)
                axios.post(
                    'http://localhost:8080/login/oauth2/google/code', {
                        authCode: response.code,
                    }
                ).then(response => console.log(response.data))
            },
            flow: 'auth-code'
        });

        return <>
            <h1>Welcome</h1>
            <a href="#" onClick={() => alert("Under construction")}>Login with Github</a>
            <br />
            <a href="#" onClick={() => gglLogin()}>Login with Google</a>
        </>;
    }
}