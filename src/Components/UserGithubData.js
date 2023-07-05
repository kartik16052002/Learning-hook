import { useState,useEffect } from "react";

const UserGithubData = (username) => {
    const [userInfo,setUserInfo] = useState(null);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async() => {
            try{
                setLoading(true);
            const response = await fetch(`https://api.github.com/users/${username}`);
            const responseData = await response.json();
            setUserInfo(responseData);
            setLoading(false);
            }catch(e){
                setError(e);
                setLoading(false);
            }
        }
        fetchData();
    },[username])

    return {userInfo,error,loading};
}

export default UserGithubData;


