import { useState } from "react";
function Search({ searchUsers }) {
    const [username, setUsername] = useState("")
    const onChangeHandler = (e) => {
        setUsername(e.target.value)
    }
    const onSubmitHandler = (ev) => {
        ev.preventDefault();
        searchUsers(username);
    }
    return (
        <>
            <form className="form" onSubmit={onSubmitHandler}>
                <input
                    type="text"
                    name="fname"
                    placeholder="Search your github user"
                    onChange={onChangeHandler}
                />
                <input type="submit" value="Search User" className="button btn-dark btn-block" />
            </form>
        </>
    )
}
export default Search;