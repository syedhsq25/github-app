import { useState, useEffect } from "react";
import "./App.css"
import axios from "axios";
import NavBar from "./Components/NavBar";
import Users from "./Components/Users";
import Search from "./Components/Search";
import Loading from "./Components/Loading";
import Alert from "./Components/Alert";
import Contact from "./Components/Contact";
import About from "./Components/About";
// import UserPage from "./Components/UserPage";
//Routes logic
import { Routes, Route } from "react-router-dom";
function App() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
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
  };

  //Giving Alerts

  const showAlert = (alert) => {
    setAlert(alert);
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  return (<>
    <NavBar />
    <Routes>

      <Route path="/" element={(
        <>
          <div className="container">

            <Alert alert={alert} />
            <Search searchUsers={searchUsers} clearUsers={clearUsers} showAlert={showAlert} />

            {loading && <Loading />}
            <Users users={users} />

          </div>

        </>
      )}>

      </Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/about" element={<About />}></Route>

    </Routes>
  </>
  )
}

export default App;
