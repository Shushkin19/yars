import React, { useRef, useState } from "react";
import './styles/App.css'
import Post from './components/PostYars'
import ButtonYars from "./components/ui/button/ButtonYars";
import InputYars from "./components/ui/input/InputYars";
import NavbarYars from "./components/ui/navbar/NavbarYars";

function App() {//qwwwqwqwq

  const [posts, setPosts] = useState([
    { id: 1, title: "C++", description: "Gagaga" },
    { id: 2, title: "C", description: "bebeb" },
    { id: 3, title: "Java", description: "pupupup" },
  ])

  const inputTitleRef = useRef();
  const inputDescrRef = useRef();

  const createPost = (event) => {
    event.preventDefault()
    let title = inputTitleRef.current.value
    let description = inputDescrRef.current.value
    const newPost = {
      id: Date.now(),
      title,
      description,
    }

    setPosts([...posts, newPost])


  }

  return (
    <div className="App">
      <NavbarYars />
      <Post posts={posts} title="dd" />
    </div >
  );
}

export default App;

