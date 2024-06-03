import { useState } from "react";
function Search({ searchUsers, clearUsers, showAlert }) {
    const [username, setUsername] = useState("")
    const onChangeHandler = (e) => {
        setUsername(e.target.value)
    }
    const onSubmitHandler = (ev) => {
        ev.preventDefault();
        if(username===''){
            showAlert({msg:"username cant be empty" , type:"danger" });
        }else{
       searchUsers(username);
        setUsername("");
        }
    
    }
    return (
        <>
            <form className="form" onSubmit={onSubmitHandler}>
                <input
                    type="text"
                    name="fname"
                    placeholder="Search your github user"
                    onChange={onChangeHandler}
                    value={username}
                    autoComplete="off"
                />
                <input type="submit" value="Search User" className="button btn-dark btn-block" />
                <button className="button btn-light btn-block" onClick={() => clearUsers()}>Clear Users</button>
            </form>
        </>
    )
}
export default Search;