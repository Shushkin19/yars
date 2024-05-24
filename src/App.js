import React, { useRef, useState } from "react";
import './styles/App.css'
import PostYars from './components/PostYars'
import NavbarYars from "./components/ui/navbar/NavbarYars";


function App() {
  const [posts, setPosts] = useState([
    { id: 1, imageUrl: 'https://lh6.googleusercontent.com/proxy/y9JlQWhTbIVhyne7wkIZfan48yxRYjtSV2m5EidyZe_IsKygJQL9YANMA-MfChQIEQeXCBhBbyxiEGokVMHR0omo0NOfSUxpMmKXdRBZf9G0nPFzujhY6jY', title: "Ford Mustang", description: "Ford Mustang Shelby - это легендарный американский спортивный автомобиль, созданный на основе базовой модели Ford Mustang и модифицированный тюнинговой компанией Shelby American. Этот автомобиль прославился благодаря своей агрессивной внешности и высокой производительности.", price: "2 000 000" },
    { id: 2, imageUrl: 'https://i.gaw.to/content/photos/59/18/591875-dodge-challenger-srt-hellcat-redeye-jailbreak-2023-que-du-muscle.jpeg?1024x640', title: "Dodge Challenger", description: "Dodge Challenger - это американский спортивный автомобиль, который производится компанией Dodge, подразделением Chrysler Group LLC. Представленный в 1970 году, Challenger стал одним из самых узнаваемых и иконичных автомобилей того времени.", price: "3 000 000" },
    { id: 3, imageUrl: 'https://avatars.mds.yandex.net/get-verba/216201/2a000001673c67e5a251c78daaa2ad46bcc7/cattouchretcr', title: "Chevrolet Camaro", description: "Chevrolet Camaro - знаменитый американский автомобиль, выпускаемый компанией Chevrolet, подразделением General Motors. Первоначально представленный в 1966 году в ответ на появление Ford Mustang, Camaro стал символом американской мощи и стиля.", price: "3 000 000" },
    { id: 4, imageUrl: 'https://avatars.mds.yandex.net/get-vertis-journal/4466156/DodgeChargerDaytonaSRTConcept.jpeg_1693303890982/orig', title: "Dodge Charger", description: "Dodge Charger - это еще один легендарный американский автомобиль, выпускаемый компанией Dodge, подразделением Chrysler Group LLC. Первоначально представленный в 1966 году, Charger стал одним из наиболее узнаваемых икон автомобильной индустрии.\n" +
          "\n", price: "2 000 000" }
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
      <PostYars posts={posts} title="Наши автомобили" />
    </div>
  );
}

export default App;
