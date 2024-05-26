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
