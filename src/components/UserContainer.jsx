import React, { useContext, useEffect } from "react";
import UserContext from "../context/UserContext";
import Cards from "./Cards";
import { Fetchuser } from "../context/UserAction";

const UserContainer = () => {
  const { users, dispatch } = useContext(UserContext);
  const getdata = async () => {
    const data = await Fetchuser();
    dispatch({
      type: "GET_DATA",
      payload: data,
    });
  };
  useEffect(() => {
    getdata();
  }, []);
  if (!users) {
    return <h1 className="loading"> loading users data </h1>;
  }
  return (
    <>
      <div className="container">
        {users.map((user) => (
          <Cards key={user.id} user={user} />
        ))}
      </div>
    </>
  );
};

export default UserContainer;
