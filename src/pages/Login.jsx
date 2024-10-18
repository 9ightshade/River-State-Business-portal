import Nav from "../components/nav";
import SignIn from "../components/signIn";
import { AuthProvider } from "../context/userAuth";

function Login() {

    return (

        <div className="login-page  " >
            
            <AuthProvider>
                <Nav />
                <SignIn />
            </AuthProvider>

        </div>


    )

}

export default Login;