import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { apiUrl, filterData } from "./data";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";


const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  // 1. method
  // useEffect(() => {
  //   const fetchData = async() => {
  //     try{
  //       const res = await fetch(apiUrl);
  //       const output = await res.json();

  //       setCourses(output);
  //     }
  //     catch (error){
  //       toast.error("something went wrong");
  //     }
  //   }
  //   fetchData();
  // },[]);

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      // output
      setCourses(output.data);
    }
    catch (error) {
      toast.error("Something went wrong");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Navbar />
      </div>

      <div className=" bg-bgDark2">
        <div>
          <Filter
            filterData={filterData}
            category = {category}
            setCategory = {setCategory}
          />
        </div>

        <div className="w-11/12 max-w-[1200px] flex flex-wrap space-x-4 gap-y-4 mx-auto min-h-[50vh] justify-center">
          {loading ? (<Spinner />) : (<Cards courses={courses}  category={category}/>)}
        </div>
      </div>
    </div>);
};

export default App;
