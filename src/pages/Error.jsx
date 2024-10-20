import axios from "axios";


function Error() {

    const userId = localStorage.getItem('_id')

    console.log(userId);
    
    const data = {
        email: 'owaiowai30@gmail.com',
        password:'Good123'
    };
    const fetchApplicationURL = "https://portal.rsubs.org/api/applications";


    const startUrl = `https://portal.rsubs.org/api/application/:${userId}/start`;


    const handleClick = async () => {
        console.log('clicked');
       try {
           const response = await axios.get(startUrl)
           
           console.log(response.data);
           
       } catch (error) {
        console.log(error);
        
       }
    }

    return (

        <div>
            <h1 className="text-center text-blue-700 text-[2rem] " onClick={() => {
                handleClick()
            }} >
                Error page
            </h1>

        </div>


    )

}



export default Error;

