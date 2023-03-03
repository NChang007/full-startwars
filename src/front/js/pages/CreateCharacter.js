import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";

const CreateCharacter = () => {
  const [address, setAddress] = useState("");
  const [website, setWebsite] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [schedule, setSchedule] = useState("");
  const [type, setType] = useState("");
  const { store, actions } = useContext(Context);
 
  

  function handleClick(e) {
    e.preventDefault();
    actions.createResource(name, schedule, website, phone, address);
  }
  console.log(type);
  return (
    <div className="createCont">
        <form className="createForm">
          <h1>Create Something Awesome!!!</h1>
          <div className="createTypeCont">
            <div>
              <label></label>
              <input type='radio' name='createType' />
            </div>
          </div>
          <div className="createInputCont">

          </div>
        </form>
    </div>
  );
};

export default CreateCharacter;
