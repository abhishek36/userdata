import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ user }) => {
  return (
    <>
      <div className="card">
        <h1>{user.name}</h1>
        <p>{user.email}</p>
        <button>
          <Link to={`users/${user.id}`}>get user</Link>
        </button>
      </div>
    </>
  );
};

export default Cards;
