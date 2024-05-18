import React, { useRef, useState } from "react";
import './styles/App.css'
import Post from './components/Post'
import ButtonYARS from "./components/ui/button/Button";
import InputYARS from "./components/ui/input/Input";


function App() {

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
      <form>
        <InputYARS ref={inputTitleRef} type='text' placeholder="Post title" />
        <InputYARS ref={inputDescrRef} type='text' placeholder="Post description" />
        <ButtonYARS onClick={createPost}> Create post</ButtonYARS>
      </form>
      <Post posts={posts} title="dd" />
    </div >
  );
}

export default App;

