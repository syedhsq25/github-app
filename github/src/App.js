import { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import Users from "./Components/Users";
import "./App.css"
import Search from "./Components/Search";

import axios from "axios";
function App() {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get("https://api.github.com/users",
          {
            auth: {
              username: "syedhsq25",
              password: "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"
            }
          })
        setUsers(data);

      } catch (error) {
        console.log(error)
      }


    }
    getData();

  }, [])

  const searchUsers = async (username) => {
    try {
      const { data } = await axios.get(`https://api.github.com/search/users?q=${username}`)
      setUsers(data.items)
      console.log(data.items)
    }
    catch (error) {
      console.log(error);
    }
  }
  return (<>
    <NavBar />

    <Search searchUsers={searchUsers} />
    <div className="container">
      <Users users={users} />
    </div>
  </>
  )
}

export default App;
