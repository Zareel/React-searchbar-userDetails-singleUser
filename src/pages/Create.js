import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import { Link } from "react-router-dom";
import UndoIcon from "@mui/icons-material/Undo";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { userList, setUserList } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    let id = userList[userList.length - 1].id + 1;
    e.preventDefault();
    let newUserList = [...userList, { id, firstName, lastName, email, phone }];
    setUserList(newUserList);
    navigate("/");
  };
  return (
    <div className="bg-[#111111] text-gray-300 min-h-screen flex flex-col justify-start pt-24 items-center">
      <h1 className="text-5xl font-semibold pb-10">Add A User</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 justify-center items-center relative"
      >
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="first name"
          className="w-[400px] px-4 py-2 rounded-md bg-gray-800 border-none outline-none"
          required
        />
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="last name"
          className="w-[400px] px-4 py-2 rounded-md bg-gray-800 border-none outline-none"
          required
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          className="w-[400px] px-4 py-2 rounded-md bg-gray-800 border-none outline-none"
          required
        />
        <input
          type="text"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="phone"
          className="w-[400px] px-4 py-2 rounded-md bg-gray-800 border-none outline-none"
          required
        />
        <Link to="/" className="absolute top-60 left-8">
          <UndoIcon />{" "}
          <span className="text-xs font-thin hover:text-white">back home</span>
        </Link>
        <button
          className="bg-sky-800 hover:bg-sky-700 text-lg text-white px-6 py-2 rounded-md"
          type="submit"
        >
          submit
        </button>
      </form>
      {firstName}
    </div>
  );
};

export default Create;
