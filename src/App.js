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

  const inputTitleRef = useRef();
  const inputDescrRef = useRef();
  const inputImageRef = useRef();
  const inputPriceRef = useRef();

  const createPost = (event) => {
    event.preventDefault();
    let title = inputTitleRef.current.value;
    let description = inputDescrRef.current.value;
    let imageUrl = inputImageRef.current.value;
    let price = inputPriceRef.current.value;

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
        <NavbarYars />
        <form>
          <InputYars ref={inputTitleRef} type='text' placeholder="Post title" />
          <InputYars ref={inputDescrRef} type='text' placeholder="Post description" />
          <InputYars ref={inputImageRef} type='text' placeholder="Image URL" />
          <InputYars ref={inputPriceRef} type='text' placeholder="Price" />
          <ButtonYars onClick={createPost}>Create post</ButtonYars>
        </form>
        <PostYars posts={posts} title="Products" />
      </div>
  );
}

export default App;
