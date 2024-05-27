
import PropTypes from 'prop-types';

function UserItems({ user }) {
    return (
        <div className="card text-center">
            <img src={user.avatar_url} alt="avatar" style={{ width: "120px" }} />
            <h3>{user.login}</h3>
        </div>
    )
}

UserItems.defaultProps = {
    users: {
        avatar_url0: "https://avatars.githubusercontent.com/u/34?v=4",
        login: "syedhsq25",
        html_url: "https://github.com/syedhsq25"
    }
}
UserItems.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItems;
