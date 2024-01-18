import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Appointee from "./Appointee";
import Assignments from "./Assignments";

function Define() {
  const generateItems = () => {
    for (let i = 0; i < 5; i++) {
      return <li> {i} </li>;
    }
  };

  let specialPriv = ["CO", "SO", "Sec"];

  const getLocalStorage = () => {
    let savedList = localStorage.getItem("users");
    if (savedList) {
      return JSON.parse(localStorage.getItem("users"));
    } else {
      return [];
    }
  };

  const [personels, setPersonels] = useState(getLocalStorage());
  const [selectedPerson, setSelectedPerson] = useState([]);

  const [name, setName] = useState("");
  const [privelege, setPrivelege] = useState("");

  const addPerson = () => {
    let ID = personels.length + 1;
    if (name && privelege) {
      const newperson = {
        id: ID,
        name: name,
        priv: privelege,
      };

      setPersonels([...personels, newperson]);
      setName("");
      setPrivelege("");
    }
  };

  const selectRan = () => {
    if (personels.length > 0) {
      let ranNum = Math.floor(Math.random() * personels.length);
      let ranPer = personels[ranNum];
      setSelectedPerson([ranPer]);

      let newList = personels.filter((person, i) => {
        if (i != ranNum) {
          return person;
        }
      });

      setPersonels(newList);
    } else {
      alert("Kindly create a list first");
    }
  };

  const removeAppointee = (id) => {
    let newList = personels.filter((person) => person.id != id);
    setPersonels(newList);
  };

  const saveList = () => {
    let nameOfList = prompt("Enter the name of the List");
    localStorage.setItem(nameOfList, JSON.stringify(personels));
  };

  useEffect(() => {}, []);

  /* WORK ON ADDING SPECIAL PRIVELLEGE FUNCTIONALITY  */

  return (
    <>
      <div className="justify-center my-2 items-center">
        <h2 className="text-2xl md:text-3xl md:my-2 text-center ">
          Customize your Random Generator{" "}
        </h2>

        <div className="">
          <div className="block md:flex">
            {/* <form action=""> */}
            <div className="my-4">
              <input
                className="px-2 py-4 w-[45] outline rounded m-2 outline-slate-300 placeholder:text-lg md:placeholder:text-xl"
                type="text"
                placeholder="Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
              />

              <input
                className="px-2 py-4 w-[45] outline rounded m-2 outline-slate-300 placeholder:text-lg md:placeholder:text-xl"
                type="text"
                placeholder="Privelege "
                onChange={(e) => {
                  setPrivelege(e.target.value);
                }}
                value={privelege}
              />
              <input
                className="bg-green-300 px-8 py-4 rounded text-xl text-blue-600"
                type="submit"
                value="Add"
                onClick={addPerson}
              />
            </div>
            {/* WORK ON ADDING SPECIAL PRIVELLEGE FUNCTIONALITY  */}
            {/* <select name="" id="" onChange={(e) => {
              set
            }}>
              {priv.map((p, i) => {
                return <option value={p}></option>;
              })}

              
            </select> */}

            <div>
              <button className="py-4 mr-4 rounded" onClick={selectRan}>
                Generate
              </button>

              {personels.length > 0 && (
                <button onClick={saveList} className="py-4">
                  Save List
                </button>
              )}
            </div>

            {/* </form> */}
          </div>

          <div className="flex">
            <div className="w-2/3 grid grid-cols-3 p-4">
              {personels.length > 0 &&
                personels.map((person, i) => {
                  // return <li> {person.id + person.name} </li>;
                  return (
                    <Appointee
                      key={i}
                      {...person}
                      removeAppointee={removeAppointee}
                    />
                  );
                })}
            </div>

            <div className="w-1/3">
              {selectedPerson.length > 0 ? selectedPerson[0].name : " "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Define;
