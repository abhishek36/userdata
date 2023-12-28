import React, { useContext, useEffect } from "react";
import UserContext from "../context/UserContext";
import { Fetchsingleuser } from "../context/UserAction";
import { useParams } from "react-router-dom";

const User = () => {
  const { dispatch, singleuser } = useContext(UserContext);
  const params = useParams();

  const getuser = async (id) => {
    const data = await Fetchsingleuser(id);
    dispatch({
      type: "GET_USER",
      payload: data,
    });
  };
  useEffect(() => {
    getuser(params.id);
  }, []);

  if (!singleuser) {
    return <h1 className="loading">loading</h1>;
  }
  return (
    <div>
      <div className="loading">welcome {singleuser.name}</div>
    </div>
  );
};

export default User;
