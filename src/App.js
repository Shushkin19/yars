import React, { useRef, useState } from "react";
import './styles/App.css'
import PostYars from './components/PostYars'
import ButtonYars from "./components/ui/button/ButtonYars";
import InputYars from "./components/ui/input/InputYars";
import NavbarYars from "./components/ui/navbar/NavbarYars";


function App() {
  const [posts, setPosts] = useState([
    { id: 1, imageUrl: 'https://lh6.googleusercontent.com/proxy/y9JlQWhTbIVhyne7wkIZfan48yxRYjtSV2m5EidyZe_IsKygJQL9YANMA-MfChQIEQeXCBhBbyxiEGokVMHR0omo0NOfSUxpMmKXdRBZf9G0nPFzujhY6jY', title: "Ford Mustang", description: "For Yulia", price: "0 (for Yulia)" },
    { id: 2, imageUrl: 'https://images.drive.ru/i/0/5848140aec05c4d675000013.jpg', title: "Dodge Challenger", description: "For Roman", price: "0 (for Roman)" },
    { id: 3, imageUrl: 'https://logowik.com/content/uploads/images/731_java.jpg', title: "Java", description: "pupupup for Temiiiiiiiik", price: "0" },
    { id: 4, imageUrl: 'https://img.freepik.com/premium-photo/a-free-photo-of-3d-cute-cat-cartoon-character-design_916107-3043.jpg', title: "111", description: "teetetete", price: "0" }
  ]);

  const inputFieldRef = {
    inputTitleRef: useRef(),
    inputDescrRef: useRef(),
    inputImageRef: useRef(),
    inputPriceRef: useRef()
  }

  const createPost = (event) => {
    event.preventDefault();
    let title = inputFieldRef.inputTitleRef.current.value;
    let description = inputFieldRef.inputDescrRef.current.value;
    let imageUrl = inputFieldRef.inputImageRef.current.value;
    let price = inputFieldRef.inputPriceRef.current.value;

    const newPost = {
      id: Date.now(),
      imageUrl,
      title,
      description,
      price,
    };

    setPosts([...posts, newPost]);
  };

  return (
    <div className="App">
      <NavbarYars inputFieldRef={inputFieldRef} createPost={createPost} />
      <PostYars posts={posts} title="Products" />
    </div>
  );
}

export default App;
