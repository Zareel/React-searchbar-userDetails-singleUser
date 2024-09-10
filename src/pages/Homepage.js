import React from "react";
import { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import Search from "../components/Search";

import { Link } from "react-router-dom";
import Users from "./Users";
// import { Modal } from "antd";
// import Update from "./Update";
const Homepage = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const { userList, setUserList } = useContext(UserContext);
  //console.log(userList);

  //console.log(searchTerm);
  const deleteUser = (id) => {
    let newList = userList.filter((item) => {
      return item.id !== id;
    });
    setUserList(newList);
  };

 
  return (
    <div className="bg-[#111111] text-gray-300 min-h-screen pt-10 px-2 lg:px-10">
      <div className="flex justify-between">
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Link
          to="/create"
          className="bg-cyan-500 text-black font-semibold tracking-wider rounded-md px-4 py-2 "
        >
          Create User
        </Link>
      </div>
     
      <table className="w-full  p-6 text-xs text-left whitespace-nowrap">
        <thead>
          <tr className="text-xs font-thin lg:text-lg text-lime-400">
            <th className="p-0 lg:p-3">id</th>
            <th className="p-0 lg:p-3">First Name</th>
            <th className="p-0 lg:p-3">Last Name</th>

            <th className="p-0 lg:p-3">Email</th>
            <th className="p-0 lg:p-3">Phone</th>
          </tr>
        </thead>
        {userList &&
          userList.filter((item)=>{
            return searchTerm.toLowerCase() ===  "" ? item : item.firstName.toLowerCase().includes(searchTerm)
          })
          .map((item) => {
              return (
               <Users deleteUser={deleteUser} item={item}/>
              );
            })}
      </table>

    </div>
  );
};

export default Homepage;
