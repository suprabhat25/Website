import React from "react";

const Avatarlist = (props) => {
  return (
    <div className="avatarstyle ma3 pa4 grow shagow-4 bg-light-purple dib tc">
      <img src={`https://joeschmoe.io/api/v1/${props.name}`} />
      <h1 className="avatarstyle"> {props.name}</h1>
      <p> {props.work}</p>
    </div>
  );
};

export default Avatarlist;
