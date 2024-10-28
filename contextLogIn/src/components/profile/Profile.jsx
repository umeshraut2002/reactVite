import { useContext } from "react";
import UserContext from "../../context/UserContext";

const Profile = () => {

    const {user} = useContext(UserContext);

            if(!user) return <div>Please Log In</div>

            return <div>Welcome: {user.username}</div>

}

export default Profile;