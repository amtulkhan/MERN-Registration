import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";




function App() {

  const [dataArray, setDataarray] = useState([]);
  const [search,setSearch] = useState("");
  const [searchName,setSearchname] =useState({
    array:dataArray
  });

  const handleChange = (e) =>{
    setSearch(e.target.value);
  }

  const handleData = () => {
    return fetch("https://reqres.in/api/users?page=1").then((response) => response.json()).then((data) => {
      console.log(data.data);
      setDataarray(data.data);
    });
  }
  console.log(dataArray);

  useEffect(() => {
    handleData();
  }, []);


  useEffect(()=>{
    const finalList = dataArray.filter(item=>item.first_name.toString().toLowerCase().includes(search));
    setSearchname({array:finalList});
  },[search])

  console.log(searchName);


  return (
    <div className="App">
      <header className="App-header">
        <input type="text" placeholder="Search Name" value={search} onChange={handleChange}></input>
        <div className="display">
          {searchName.array.map((e,index) => <div key={index}>{e.first_name + " " + e.last_name}</div>)}
        </div>

      </header>
    </div>
  );
}

export default App;
