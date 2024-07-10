
import { useParams } from "react-router-dom";
function UserPage() {
    const { username } = useParams();
    console.log(username)
    return (<>
        <h1>hello</h1>
    </>)
}
export default UserPage;