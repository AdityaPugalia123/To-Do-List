import logo from "./logo.svg";
import "./App.css";
import Header from "./Header.jsx";
import Fetch from "./Fetch.jsx";
import { useEffect, useState } from "react";
import React from "react";
import ToDoLists from "./ToDoLists";
function App() {
  let [str, setStr] = useState("");
  let [arr, setArr] = useState([]);
  let [check, setCheck] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("checked")) {
      check = JSON.parse(localStorage.getItem("checked"));
    } else {
      check = [];
      localStorage.setItem("checked", JSON.stringify(check));
    }
  }, [check]);
  function handle() {
    if (str == "") {
      return;
    }
    if (localStorage.getItem("list") == null) {
      localStorage.setItem("list", JSON.stringify([]));
    }
    if (JSON.parse(localStorage.getItem("list")) != null) {
      // console.log("enterd");
      let temp = JSON.parse(localStorage.getItem("list"));
      arr = temp;
      setArr(arr);
    }
    arr.push(str);
    setArr(arr);
    localStorage.setItem("list", JSON.stringify(arr));
    document.querySelector(".textfield").value = "";
    setStr("");
  }
  function checkbox(e) {
    if (check == null) {
      check = [];
    }
    if (JSON.parse(localStorage.getItem("checked"))) {
      check = JSON.parse(localStorage.getItem("checked"));
    }
    if (check.includes(e.target.value)) {
      let i = check.indexOf(e.target.value);
      check.splice(i, 1);
      localStorage.setItem("checked", JSON.stringify(check));
      setCheck(check);
    } else {
      check.push(e.target.value);
      localStorage.setItem("checked", JSON.stringify(check));
      setCheck(check);
    }
  }
  document.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      document.querySelector(".btn").click();
    }
  });
  function isTicked(value) {
    if (JSON.parse(localStorage.getItem("checked"))) {
      check = JSON.parse(localStorage.getItem("checked"));
    } else {
      check = [];
      localStorage.setItem("checked", JSON.stringify(check));
    }
    // setCheck(check);
    // console.log(check);
    if (check.includes(value)) {
      return true;
    } else {
      return false;
    }
    // setCheck(check);
  }
  function deleteItems(id, value) {
    // console.log(id);

    arr = JSON.parse(localStorage.getItem("list"));
    arr.splice(id, 1);
    setArr(arr);
    if (check.includes(value)) {
      // console.log("here");
      let i = check.indexOf(value);
      check.splice(i, 1);
      localStorage.setItem("checked", JSON.stringify(check));
    }

    localStorage.setItem("list", JSON.stringify(arr));
  }
  function isChecked(index) {
    check = JSON.parse(localStorage.getItem("checked"));
    if (check == null) {
      check = [];
    }
    if (check.includes(index)) {
      return "list cutText";
    } else {
      return "list";
    }
  }
  return (
    <div className="App">
      {/* <Header info="100"></Header>
      <h1>{abc}</h1> */}
      {/* <Fetch></Fetch> */}
      <div className="container">
        <h1 className="title">To-Do-List</h1>
        <input
          onChange={(e) => {
            setStr(e.target.value);
          }}
          type="text"
          placeholder="Enter you task"
          className="textfield"
        ></input>
        <button className="btn" onClick={handle}>
          Submit
        </button>
      </div>
      <hr></hr>
      <ToDoLists
        deleteItems={deleteItems}
        check={check}
        checkbox={checkbox}
        isChecked={isChecked}
        isTicked={isTicked}
      ></ToDoLists>
    </div>
  );
}

export default App;
