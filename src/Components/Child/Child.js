import React from "react";
// import "./Child2.css";

const Child2 = (info) => {
  return (
    <div className="card">
      <img src={info.g} alt="" />
      <p> {info.n} </p>
      <p>{info.a} $</p>
    </div>
  );
};

export default Child2;
