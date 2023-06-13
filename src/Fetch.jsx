import "./App.css";
import Header from "./Header";
import { useEffect, useState } from "react";
import React from "react";

function Fetch() {
  let [arr, setArr] = useState([]);
  let [text, setText] = useState("comments");
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${text}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setArr(data);
      });
  }, [text]);
  // console.log(arr);
  // console.log(commentArr.length);
  return (
    <div>
      {/* <Header info="100"></Header>
  <h1>{abc}</h1> */}
      <button
        onClick={() => {
          setText("comments");
        }}
      >
        comment
      </button>
      <button
        onClick={() => {
          setText("posts");
        }}
      >
        posts
      </button>
      <button
        onClick={() => {
          setText("albums");
        }}
      >
        albums
      </button>
      <h1>{text}</h1>
      <div key="comments">
        {text === "comments" &&
          arr.map((value, index) => (
            <div key={index}>
              {text}
              <p>Id: {value.id}</p>
              <p>Name: {value.name}</p>
              <p>Email: {value.email}</p>
            </div>
          ))}
      </div>
      <div key="posts">
        {text === "posts" &&
          arr.map((value, index) => (
            <div key={index}>
              <p>
                {value.id} {value.title}
              </p>
              <p>{value.body}</p>
            </div>
          ))}
      </div>
      <div key="albums">
        {text === "albums" &&
          arr.map((value, index) => (
            <div key={index}>
              <p>
                {value.id} {value.title}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Fetch;
