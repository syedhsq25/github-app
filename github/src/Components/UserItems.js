

function UserItems({ user }) {
    return (
        <div className="card text-center">
            <img src={user.avatar_url} alt="avatar" style={{ width: "120px" }} />
            <h3>{user.login}</h3>
        </div>
    )
}

export default UserItems;
