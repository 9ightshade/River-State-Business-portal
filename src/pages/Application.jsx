import Nav from "../components/nav";
import RsbApplication from "../components/rsbApplication";
import { AuthProvider } from "../context/userAuth";
function Application() {

    return (

        <div>
            <Nav />
            <AuthProvider>
                <RsbApplication/>
            </AuthProvider>
        </div>


    )


}


export default Application;