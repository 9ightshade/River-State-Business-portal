import Nav from "../components/nav";
import SignIn from "../components/signIn";
import { AuthProvider } from "../context/userAuth";

function Login() {

    return (

        <div className="login-page  " >
            <Nav />
            <AuthProvider>
                <SignIn />
            </AuthProvider>

        </div>


    )

}

export default Login;