// import React, { useEffect } from "react";
import React from "react";
// import { toast } from "react-toastify";
// import { apiUrl, filterData } from "../data";

const Filter = (props) => {
    let filterData = props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;

    function filterHandler(title) {
        setCategory(title);

    }

    // useEffect(() => {
    //     const fetchData = async() => {
    //         try{
    //             const res = await fetch(apiUrl);
    //             const data = await res.json();
    //             // Save data into a variable 
    //             console.log(data);
    //         }
    //         catch(error){
    //             toast.error("Something went wrong");
    //         }
    //     }
    //     fetchData();
    // },[]);

    return (
        <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
            {filterData.map((data) => (
                (<button className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 transition-all duration-300 border-2
                ${category === data.title ?  "bg-opacity-60 border-white " : "bg-opacity-40 border-transparent" } `} key={data.id} onClick={() => filterHandler(data.title)}>
                {data.title}
            </button>
            )
            ))}
        </div>
    )
};

export default Filter; 