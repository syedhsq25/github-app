import { useState, useEffect } from "react";
import "./App.css"
import axios from "axios";
import NavBar from "./Components/NavBar";
import Users from "./Components/Users";
import Search from "./Components/Search";
import Loading from "./Components/Loading";
import Alert from "./Components/Alert";
function App() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert,setalert]=useState([])
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("https://api.github.com/users",

          {
            auth: {
              username: "syedhsq25",
              password: "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"
            }
          });
        setLoading(false);
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
      setLoading(false);
      setUsers(data.items)
    }
    catch (error) {
      console.log(error);
    }
  }

  const clearUsers = () => {
    setUsers([]);
  }
  return (<>
    <NavBar />
    {loading && <Loading />}
    <div className="container">
      <Alert />
      <Search searchUsers={searchUsers} clearUsers={clearUsers} />
      <Users users={users} />
    </div>
  </>
  )
}

export default App;
