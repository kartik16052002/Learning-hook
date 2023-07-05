import { useState } from "react";
import GithubUser from "./GithubUser";

const FindUser = () => {
    const [userName, setUserName] = useState("");
    return (
        <div className="find-user">
            <h1>Find User</h1>

            <div className="form-user">
                <form>
                    <label htmlFor="user-name">Enter Username: </label>
                    <input
                        type="text"
                        id="user-name"
                        onChange={(event) => setUserName(event.target.value)}
                    ></input>
                </form>
            </div>

            <div className="result">
                {
                    userName ? <GithubUser name={userName} /> : <p>Please enter username</p>
                }
            </div>
        </div>
    );
};

export default FindUser;
