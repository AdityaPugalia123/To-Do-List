import React from "react";

function ToDoLists(props) {
  return (
    <div>
      <table cellSpacing={0}>
        <thead>
          <tr>
            <th className="sno">S.No</th>
            <th className="list">To-do</th>
            <th className="status">status</th>
          </tr>
          {JSON.parse(localStorage.getItem("list")) != null &&
            JSON.parse(localStorage.getItem("list")).map((value, index) => {
              return (
                <tr key={index} className="data">
                  <td className="sno">{index + 1}</td>
                  <td className={props.isChecked(value)}>{value}</td>
                  <td className="status">
                    <input
                      className="checkbox"
                      value={value}
                      type="checkbox"
                      onChange={(e) => {
                        props.checkbox(e);
                      }}
                      checked={props.isTicked(value)}
                    ></input>
                    <img
                      src="./delete.png"
                      className="delete"
                      onClick={() => {
                        props.deleteItems(index, value);
                      }}
                    />
                  </td>
                </tr>
              );
            })}
        </thead>
      </table>
    </div>
  );
}

export default ToDoLists;
