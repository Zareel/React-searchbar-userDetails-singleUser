import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import { Link, useParams } from "react-router-dom";

const SingleUser = () => {
  const { userList } = useContext(UserContext);
  const { userId } = useParams();
  //console.log(userList);
  //console.log(userId);

  const user = userList.find((item) => item.id == userId);
  console.log(user);
  const {firstName, lastName, email, phone} = user

  return (
    <div>
      <h1>{userId}</h1>
      <h1>{firstName}</h1>
      <h1>{lastName}</h1>
      <h1>{email}</h1>
      <h1>{phone}</h1>
      <Link to="/">Back to Homepage</Link>
    </div>
  );
};

export default SingleUser;
