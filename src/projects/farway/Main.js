import react from "react";
import "./Main.css";
import { useState } from "react";
// import { useActionData } from "react-router-dom";
export default function Main() {
  return (
    <div className="main">
      <Top></Top>
      <Form></Form>
      <List></List>
      <Footer></Footer>
    </div>
  );
}
function Top() {
  return (
    <>
      <div className="top">
        <span>🌴</span>
        <span> FAR AWAY</span>
        <span>💼</span>
      </div>
    </>
  );
}
function Form() {
  const [description, setdes] = useState("0");
  const [quantity, setq] = useState(1);
  function handleForm(e) {
    e.preventDefault();
  }
  function add(e) {
    let a = [{}];
    a = [...a, { quantity, description }];
    console.log(a);
    setdes("");
    setq(1);
  }
  return (
    <>
      <div className="form">
        <form className="form1" onSubmit={handleForm}>
          <h1>what do you need for your 😘 trip</h1>
          <select
            value={quantity}
            onChange={(e) => {
              console.log(e.target.value);
              setq(e.target.value);
            }}
          >
            {Array.from({ length: 20 }, (_, index) => {
              return (index = index + 1);
            }).map((item) => {
              return <option>{item}</option>;
            })}
          </select>
          <input
            type="text"
            placeholder="items.."
            value={description}
            onChange={(e) => {
              setdes(e.target.value);
            }}
          />
          <button onClick={add}>Add</button>
        </form>
      </div>
    </>
  );
}
function List() {
  return (
    <>
      <div className="list"></div>
    </>
  );
}
function Footer() {
  return (
    <>
      <div className="footer"></div>
    </>
  );
}
