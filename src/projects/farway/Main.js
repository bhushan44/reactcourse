import react from "react";
import "./Main.css";
import { useState } from "react";
// import { useActionData } from "react-router-dom";
export default function Main() {
  const [list, updatelist] = useState([]);
  const [packed, setpacked] = useState(false);
  function delete1(id) {
    updatelist(list.filter((item) => item.id !== id));
  }
  function handlecheck(id) {
    console.log(list);
    updatelist(
      list.map((item) => {
        // console.log(packed);
        // setpacked((packed) => !packed);
        // console.log(packed);
        return item.id === id ? { ...item, packed: !item.packed } : item;
      })
    );
    // console.log(a);
  }

  return (
    <div className="main">
      <Top></Top>
      <Form
        list={list}
        updatelist={updatelist}
        packed={packed}
        setpacked={setpacked}
      ></Form>
      <List
        list={list}
        updatelist={updatelist}
        onhandlecheck={handlecheck}
        delete1={delete1}
      ></List>
      <Footer list={list}></Footer>
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
      {/* <h1></h1> */}
    </>
  );
}
function Form({ list, updatelist, packed, setpacked }) {
  const [description, setdes] = useState();
  const [quantity, setq] = useState(1);
  // const [list, updatelist] = useState([]);
  // const [packed, updatepack] = useState(true);
  const [id, setid] = useState(1);
  function handleForm(e) {
    e.preventDefault();
  }
  // function
  function add(e) {
    // let a = [{}];
    if (!description) {
      return;
    }
    setid((id) => (id = id + 1));
    let items = { description, quantity, id, packed: false };
    console.log(list);
    updatelist((list) => {
      return [...list, items];
    });
    console.log(list);
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
              setq(Number(e.target.value));
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
function List({ list, updatelist, onhandlecheck, delete1 }) {
  const [sortby, updatesortby] = useState("input");
  // cons [sorteditems,setsorted]=useState([])
  let sorteditems;
  function onClear() {
    let confirm = window.confirm("are you sure want to delete all items?");
    if (confirm) updatelist([]);
  }

  console.log(sortby);
  if (sortby === "input") sorteditems = list;
  // return;
  // console.log(items);
  if (sortby === "quantity") {
    console.log("before", list);
    sorteditems = list.slice().sort((a, b) => a.quantity - b.quantity);

    // console.log(items);}
    console.log("after", sorteditems);
  } else if (sortby === "packed") console.log(list.packed);
  sorteditems = list
    .slice()
    .sort((a, b) => Number(a.packed) - Number(b.packed));
  // console.log(items);

  return (
    <>
      <div className="list">
        <ul className="listitems">
          {sorteditems.map((items) => {
            return (
              <div
                className="items"
                key={items.id}
                style={items.packed ? { textDecoration: "line-through" } : {}}
              >
                {/* <h1>{items.packed}</h1> */}

                <input
                  type="checkbox"
                  value={items.packed}
                  onChange={() => onhandlecheck(items.id)}
                ></input>

                <span>{items.quantity}</span>
                <span>{items.description}</span>
                {/* <span>{items.id}</span> */}
                <button
                  onClick={() => {
                    delete1(items.id);
                  }}
                >
                  {" "}
                  delete
                </button>
              </div>
            );
          })}
        </ul>
        <select
          value={sortby}
          onChange={(e) => {
            updatesortby(e.target.value);
          }}
        >
          <option value="input">sortby input</option>
          <option value=" packed">sortby packed</option>
          <option value="quantity">sortby quantity</option>
        </select>
        <button onClick={onClear}>clear list</button>
      </div>
    </>
  );
}
function Footer({ list }) {
  let length = list.length;
  let packeditems = list.filter((item) => item.packed).length;
  let percentage = Math.round((packeditems / length) * 100);

  console.log(packeditems);
  console.log(length);
  return (
    <>
      <div className="footer">
        {percentage === 100
          ? "you got all items and ready to go "
          : length === 0
          ? "you have no items in list"
          : `you have ${length} item in your list and you have already packed ${packeditems} (${percentage}%)`}
      </div>
    </>
  );
}
