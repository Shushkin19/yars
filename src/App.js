import React, { useRef, useState } from "react";
import './styles/App.css'
import PostYars from './components/PostYars'
import NavbarYars from "./components/ui/navbar/NavbarYars";



function App() {
  const [posts, setPosts] = useState([
    { id: 1, imageUrl: 'https://lh6.googleusercontent.com/proxy/y9JlQWhTbIVhyne7wkIZfan48yxRYjtSV2m5EidyZe_IsKygJQL9YANMA-MfChQIEQeXCBhBbyxiEGokVMHR0omo0NOfSUxpMmKXdRBZf9G0nPFzujhY6jY', title: "Ford Mustang", description: "Ford Mustang Shelby - это легендарный американский спортивный автомобиль, созданный на основе базовой модели Ford Mustang и модифицированный тюнинговой компанией Shelby American. Этот автомобиль прославился благодаря своей агрессивной внешности и высокой производительности.", price: "2 000 000" },
    { id: 2, imageUrl: 'https://i.gaw.to/content/photos/59/18/591875-dodge-challenger-srt-hellcat-redeye-jailbreak-2023-que-du-muscle.jpeg?1024x640', title: "Dodge Challenger", description: "Dodge Challenger - это американский спортивный автомобиль, который производится компанией Dodge, подразделением Chrysler Group LLC. Представленный в 1970 году, Challenger стал одним из самых узнаваемых и иконичных автомобилей того времени.", price: "3 000 000" },
    { id: 3, imageUrl: 'https://avatars.mds.yandex.net/get-verba/216201/2a000001673c67e5a251c78daaa2ad46bcc7/cattouchretcr', title: "Chevrolet Camaro", description: "Chevrolet Camaro - знаменитый американский автомобиль, выпускаемый компанией Chevrolet, подразделением General Motors. Первоначально представленный в 1966 году в ответ на появление Ford Mustang, Camaro стал символом американской мощи и стиля.", price: "3 000 000" },
    {
      id: 4, imageUrl: 'https://avatars.mds.yandex.net/get-vertis-journal/4466156/DodgeChargerDaytonaSRTConcept.jpeg_1693303890982/orig', title: "Dodge Charger", description: "Dodge Charger - это еще один легендарный американский автомобиль, выпускаемый компанией Dodge, подразделением Chrysler Group LLC. Первоначально представленный в 1966 году, Charger стал одним из наиболее узнаваемых икон автомобильной индустрии.\n" +
        "\n", price: "2 000 000"
    }
  ]);

  const [brands, setBrands] = useState([
    { id: 1, imageUrl: 'https://www.carlogos.org/car-logos/tesla-logo-2007-full-640.png', title: "Tesla" },
    { id: 2, imageUrl: 'https://www.carlogos.org/car-logos/dodge-logo-2010-640.png', title: "Dodge" },
    { id: 3, imageUrl: 'https://www.carlogos.org/logo/Chevrolet-logo-2013-640x281.jpg', title: "Chevrolet" },
    { id: 4, imageUrl: 'https://www.carlogos.org/car-logos/mazda-logo-2018-vertical-640.png', title: "Mazda" },
    { id: 5, imageUrl: 'https://www.carlogos.org/logo/Mercedes-Benz-logo-2011-640x369.jpg', title: "Mercedes-Benz" },
    { id: 6, imageUrl: 'https://www.carlogos.org/car-logos/audi-logo-2016-640.png', title: "Audi" },
    { id: 7, imageUrl: 'https://www.carlogos.org/car-logos/ford-logo-2017-640.png', title: "Ford" },
    { id: 8, imageUrl: 'https://www.carlogos.org/car-logos/nissan-logo-2020-black-show.png', title: "Nissan" },
    { id: 9, imageUrl: 'https://www.carlogos.org/car-logos/ferrari-logo-2002-640.png', title: "Ferrari" },
    { id: 10, imageUrl: 'https://www.carlogos.org/logo/Land-Rover-logo-2011-640x335.jpg', title: "Land-Rover" },
  ])

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
      <div className="imageBlock">
        <h1 className="topimageBlock">Yars cars store </h1>
        <p className="topimageBlock">Yars cars store - это место переплетения шедевров, где каждый может найти и подобрать то самое счастье, которое будет с ним всегда </p>
        <a className="topimageBlock" href="#">Learn more</a>
      </div>
      <div class="blank"></div>
      <div className="imageBlock second">
        <PostYars posts={posts} title="Наши автомобили" />
      </div>
      <div class="blank"></div>
      <div className="imageBlock third">
        <PostYars posts={brands} title="BRANDS" />
      </div>
      <div class="blank"></div>

    </div >
  );
}

export default App;
