import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <>
      <div className="text-center my-5">
        <h1 className="text-white">Welcome To My Website</h1>
        <p className="text-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
          dolorem dolores veritatis eaque corporis distinctio libero ipsam
          repellendus neque praesentium! Pariatur quaerat, alias non officiis
          iusto doloremque dolor facere quod.
        </p>
        <button className="btn btn-primary" onClick={() => navigate("/add")}>
          Add Contact
        </button>
      </div>
    </>
  );
}

export default Header;
