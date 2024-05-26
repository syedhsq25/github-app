import { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import Users from "./Components/Users";
import "./App.css"

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
  return (<>
    <NavBar />
    <div className="container">
      <Users users={users}  />
    </div>
  </>
  )
}

export default App;
