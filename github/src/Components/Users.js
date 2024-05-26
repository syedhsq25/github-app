import UserItems from "./UserItems";
function Users({ users }) {
    return (
        <div style={styles}>
            {users.map((user, i) => <UserItems key={i} user={user} />)}
        </div>
    )
}
const styles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
}
export default Users;