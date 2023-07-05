import UserGithubData from "./UserGithubData"

const GithubUser = ({name}) => {
    const {userInfo,error,loading} = UserGithubData(name);
    return(
        <div className="github-user">
            {loading && <p>Loading ... Please Wait</p>}
            {error && <p>{error.message}</p>}
            {
                userInfo && (
                    <ul className="details">
          <li>
            <img src={userInfo.avatar_url} alt={userInfo.login} />
          </li>
          <li>
            <strong>Name:</strong> {userInfo.name}
          </li>
          <li>
            <strong>Bio:</strong> {userInfo.bio ? userInfo.bio : "NA"}
          </li>
          <li>
            <strong>Location:</strong> {userInfo.location ? userInfo.location : "NA"}
          </li>
          <li>
            <strong>Blog or Site:</strong> {userInfo.blog ? userInfo.blog : "NA"}
          </li>
          <li>
            <strong>Public Repos:</strong>{" "}
            {userInfo.public_repos ? userInfo.public_repos : 0}
          </li>
          <li>
            <strong>Followers:</strong> {userInfo.followers ? userInfo.followers : 0}
          </li>
          <li>
            <strong>Following:</strong> {userInfo.following ? userInfo.following : 0}
          </li>
        </ul>
                )
            }
        </div>
    )
}

export default GithubUser;