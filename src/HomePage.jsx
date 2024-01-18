import React from "react";
import { useState } from "react";
import "./index.css";
import Appointees from "./Appointees";
import { assignments, personnels } from "./data";
import Assignments from "./Assignments";
import { Link } from "react-router-dom";
import AddPersonel from "./AddPersonel";

function HomePage() {
  let congPeople = personnels;
  let [appointeed, setAppointeed] = useState(congPeople);
  let [selectedAppointee, setSelectedAppointee] = useState("");
  let [numberOfAppointees, setNumberOfAppointees] = useState(
    appointeed.length - 1
  );
  let [target, setTarget] = useState(0);
  let [parts, setParts] = useState(assignments);
  let [filValue, setFilValue] = useState("");

  const randomAppointee = () => {
    let randomNumber = Math.floor(Math.random() * numberOfAppointees);
    let selected = appointeed[randomNumber];

    let updatedList = appointeed.filter((sel, i) => {
      // console.log(i);
      // console.log(sel.id);
      if (i != randomNumber ) {
        return sel;
      }
    });

    setAppointeed(updatedList);
    setNumberOfAppointees(updatedList.length);
    setSelectedAppointee(selected.name);
  };

  const setNextTarget = (target) => {
    if (target == assignments.length) {
      setTarget(1);
    } else {
      setTarget(target + 1);
    }
  };

  const handleFilter = (e) => {
    // e.preventDefault();
    let filOption = e.target.value;
    console.log(filOption);

    if (filOption != "all") {
      let filteredAppointee = congPeople.filter((filApp) => {
        if (filOption == filApp.priv) {
          return filApp;
        }
      });

      setAppointeed(filteredAppointee);
    } else {
      setAppointeed(congPeople);
    }
  };

  // console.log(filValue);

  // console.log(randomAppointee());
  // const selected = randomAppointee();

  const removeAppointee = (id) => {
    let newList = appointeed.filter((person) => person.id != id);
    setAppointeed(newList);
  };

  return (
    <>
      <div className="w-full">
        <div className="heading">
          <h1 className="text-2xl text-center sm:text-4xl">
            Random Assignment Placement{" "}
          </h1>
        </div>
        <div className="w-full flex flex-col ">
          <div className="flex justify-around my-2">
            <button
              onClick={() => {
                randomAppointee();
                // setTarget(target + 1);
                setNextTarget(target);
              }}
            >
              Next
            </button>{" "}
            <button
              onClick={() => {
                setTarget(target + 1);
                setSelectedAppointee("");
              }}
            >
              Skip
            </button>
            <button
              onClick={() => {
                setAppointeed(congPeople);
                setSelectedAppointee("");
                setTarget(0);
              }}
            >
              Reset
            </button>
          </div>
          <div className="flex justify-around mx-8 my-2">
            <Link to={"define"}>Define</Link>
            <Link to={"add-personel"}>Add New Personel</Link>
          </div>
        </div>

        {/* <AddPersonel /> */}

        <div className="flex w-full flex-col-reverse sm:flex-row">
          <div className="w-full sm:w-2/3 bg-slate-400 rounded mx-2 my-4">
            <div className="filter">
              <select
                value={filValue}
                onChange={(e) => {
                  setFilValue(e.target.value);
                  handleFilter(e);
                }}
                name="filter"
                id="filter"
              >
                <option value="all">All</option>
                <option value="Elder">Elders Only</option>
                <option value="MS">Ministerial Servants</option>
              </select>
            </div>
            <Appointees
              appointeed={appointeed}
              removeAppointee={removeAppointee}
            />
          </div>

          <div className="w-full bg-blue-300 rounded-sm sm:w-1/3">
            <Assignments
              target={target}
              parts={parts}
              selectedAppointee={selectedAppointee}
            />
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
