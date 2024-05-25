import React, { useRef, useState } from "react";
import './styles/App.css'
import PostYars from './components/PostYars'
import PostBrandsYars from './components/PostBrandsYars'
import NavbarYars from "./components/ui/navbar/NavbarYars";


function App() {

  const [catalog, setCatalog] = useState(false);

  const [posts, setPosts] = useState([
    { id: 1, imageUrl: 'https://lh6.googleusercontent.com/proxy/y9JlQWhTbIVhyne7wkIZfan48yxRYjtSV2m5EidyZe_IsKygJQL9YANMA-MfChQIEQeXCBhBbyxiEGokVMHR0omo0NOfSUxpMmKXdRBZf9G0nPFzujhY6jY', title: "Ford Mustang", description: "Ford Mustang Shelby - это легендарный американский спортивный автомобиль, созданный на основе модели Ford Mustang и модифицированный тюнинговой компанией Shelby American. Этот автомобиль прославился своей агрессивной внешностью и высокой производительностью.", price: "2 000 000" },
    { id: 2, imageUrl: 'https://i.gaw.to/content/photos/59/18/591875-dodge-challenger-srt-hellcat-redeye-jailbreak-2023-que-du-muscle.jpeg?1024x640', title: "Dodge Challenger", description: "Dodge Challenger - это американский спортивный автомобиль, который производится компанией Dodge, подразделением Chrysler Group LLC. Представленный в 1970 году, Challenger стал одним из самых узнаваемых и иконичных автомобилей того времени.", price: "3 000 000" },
    { id: 3, imageUrl: 'https://avatars.mds.yandex.net/get-verba/216201/2a000001673c67e5a251c78daaa2ad46bcc7/cattouchretcr', title: "Chevrolet Camaro", description: "Chevrolet Camaro - знаменитый американский автомобиль, выпускаемый компанией Chevrolet, подразделением General Motors. Первоначально представленный в 1966 году в ответ на появление Ford Mustang, Camaro стал символом американской мощи и стиля.", price: "3 000 000" },
    {id: 4, imageUrl: 'https://avatars.mds.yandex.net/get-vertis-journal/4466156/DodgeChargerDaytonaSRTConcept.jpeg_1693303890982/orig', title: "Dodge Charger", description: "Dodge Charger - это еще один легендарный американский автомобиль, выпускаемый компанией Dodge, подразделением Chrysler Group LLC. Первоначально представленный в 1966 году, Charger стал одним из наиболее узнаваемых икон автомобильной индустрии.\n" +
        "\n", price: "2 000 000"}
  ]);

    const [dodgeCars] = useState([
        {
            id: 1,
            imageUrl: 'https://i.gaw.to/content/photos/59/18/591875-dodge-challenger-srt-hellcat-redeye-jailbreak-2023-que-du-muscle.jpeg?1024x640',
            title: "Dodge Challenger",
            description: "Dodge Challenger - это американский спортивный автомобиль, который производится компанией Dodge, подразделением Chrysler Group LLC. Представленный в 1970 году, Challenger стал одним из самых узнаваемых и иконичных автомобилей того времени.",
            price: "3 000 000" },
        {
            id: 2,
            imageUrl: 'https://avatars.mds.yandex.net/get-vertis-journal/4466156/DodgeChargerDaytonaSRTConcept.jpeg_1693303890982/orig',
            title: "Dodge Charger",
            description: "Dodge Charger - это еще один легендарный американский автомобиль, выпускаемый компанией Dodge, подразделением Chrysler Group LLC. Первоначально представленный в 1966 году, Charger стал одним из наиболее узнаваемых икон автомобильной индустрии.",
            price: "2 000 000"},
        {
            id: 3,
            imageUrl: 'https://a.d-cd.net/39fa82es-960.jpg',
            title: "Dodge Neon",
            description: "Dodge Neon - это компактный автомобиль, производимый компанией Dodge с 1994 по 2005 год. Он известен своей экономичностью и хорошими ходовыми качествами, что делает его отличным выбором для городских поездок, а спортивный дизайн не оставит никого равнодушным.",
            price: "500 000"
        },
        {
            id: 4,
            imageUrl: 'https://quatrorodas.abril.com.br/wp-content/uploads/2019/01/rm019_016th68cjscejkgrm5e9t54fj1t8fnt.jpg?quality=70&strip=info&w=720&crop=1',
            title: "Dodge Ram 1500",
            description: "Dodge Ram 1500 - это полноразмерный пикап, который известен своей надежностью и мощью. Он идеально подходит для тяжелых работ и обеспечивает высокий уровень комфорта для водителя и пассажиров. Этот пикап является одним из лидеров в своем сегменте.",
            price: "5 000 000"
        }
    ]);

    const [fordCars] = useState([
        {
            id: 1,
            imageUrl: 'https://lh6.googleusercontent.com/proxy/y9JlQWhTbIVhyne7wkIZfan48yxRYjtSV2m5EidyZe_IsKygJQL9YANMA-MfChQIEQeXCBhBbyxiEGokVMHR0omo0NOfSUxpMmKXdRBZf9G0nPFzujhY6jY',
            title: "Ford Mustang",
            description: "Ford Mustang Shelby - это легендарный американский спортивный автомобиль, созданный на основе модели Ford Mustang и модифицированный тюнинговой компанией Shelby American. Этот автомобиль прославился своей агрессивной внешностью и высокой производительностью.",
            price: "2 000 000"
        },
        {
            id: 2,
            imageUrl: 'https://www.ixbt.com/img/n1/news/2024/1/4/2025-ford-explorer-platinum_large.jpg',
            title: "Ford Explorer",
            description: "Ford Explorer - это среднеразмерный кроссовер, известный своей вместительностью и комфортом. Обладая современными технологиями и мощным двигателем, Explorer идеально подходит для семейных поездок и активного отдыха.",
            price: "3 500 000"
        },
        {
            id: 3,
            imageUrl: 'https://www.jonathanmotorcars.com/imagetag/1680/main/l/Used-2017-Ford-Fusion-V6-Sport-1693599293.jpg',
            title: "Ford Fusion Sport",
            description: "Ford Fusion Sport - это спортивный седан, который сочетает в себе мощность и стиль. Он оснащен 2.7-литровым V6 EcoBoost двигателем, обеспечивающим отличные характеристики производительности и динамики, а спортивный дизайн понравится любителям скорости",
            price: "3 000 000"
        },
        {
            id: 4,
            imageUrl: 'https://s2-autoesporte.glbimg.com/7B_09zM6dhpyauFR0Xmh56kZPLQ=/0x0:620x413/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/o/o/3fmIAIQHa3gTgTTREzRA/2020-06-17-ford-mustang-2021-mach-1-dianteira-estatica.jpeg',
            title: "Ford Mustang Mach 1",
            description: "Ford Mustang Mach 1 - это современный спортивный автомобиль, который сочетает в себе классический стиль и передовые технологии. Мощный двигатель и улучшеная аэродинамика предоставляют удивительный и захватывающий опыт вождения.",
            price: "4 000 000"
        }
    ]);


    const [mazdaCars] = useState([
        {
            id: 1,
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Mazda_RX-8_on_freeway.jpg/640px-Mazda_RX-8_on_freeway.jpg',
            title: "Mazda RX-8",
            description: "Mazda RX-8 - это спортивный автомобиль, производимый компанией Mazda. Известен своим роторным двигателем и отличной управляемостью, RX-8 стал иконой среди спортивных автомобилей с момента своего дебюта в 1978 году.",
            price: "2 500 000"
        },
        {
            id: 2,
            imageUrl: 'https://ireland.apollo.olxcdn.com/v1/files/a9itaw0db8w43-UA/image;s=1813x1360',
            title: "Mazda Miata",
            description: "Mazda Miata, также известная как MX-5, - это легкий родстер, выпускаемый компанией Mazda. С момента своего дебюта в 1989 году, Miata завоевала сердца автолюбителей благодаря своему спортивному характеру, маневренности и доступной цене.",
            price: "1 800 000"
        },
        {
            id: 3,
            imageUrl: 'https://avatars.mds.yandex.net/get-verba/937147/2a00000165001b8fc0a08aba06c1f273c787/cattouchret',
            title: "Mazda 6",
            description: "Mazda 6 - это среднеразмерный седан, который сочетает в себе стиль, комфорт и производительность. Обновленный дизайн и передовые технологии делают Mazda 6 отличным выбором для тех, кто ищет надежный и элегантный автомобиль.",
            price: "2 200 000"
        },
        {
            id: 4,
            imageUrl: 'https://wroom.ru/i/cars2/mazda_3_1.jpg',
            title: "Mazda 3",
            description: "Mazda 3 - это компактный автомобиль, известный своей динамичностью и стильным дизайном. Mazda 3 предлагает отличное сочетание экономичности и удовольствия от вождения, что делает его популярным выбором среди автолюбителей.",
            price: "1 500 000"
        }
    ]);

  const [brands] = useState([
    { id: 1, imageUrl: 'https://www.carlogos.org/car-logos/tesla-logo-2007-full-640.png', title: "Tesla" },
    { id: 2, imageUrl: 'https://www.carlogos.org/car-logos/dodge-logo-2010-640.png', title: "Dodge" },
    { id: 3, imageUrl: 'https://media.chevrolet.com/dld/content/dam/Media/images/INTL/chevrolet/logos/historical-logos/Chevrolet-Logo-269771.jpg', title: "Chevrolet" },
    { id: 4, imageUrl: 'https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/fff43905f01200a393a6c1611666f603/large.jpg', title: "Mazda" },
    { id: 5, imageUrl: 'https://fbi.cults3d.com/uploaders/22595999/illustration-file/934f0682-ddfb-4c79-a36a-b7d3b8a937e9/Mercedes-1.jpg', title: "Mercedes-Benz" },
    { id: 6, imageUrl: 'https://www.carlogos.org/car-logos/audi-logo-2016-640.png', title: "Audi" },
    { id: 7, imageUrl: 'https://www.carlogos.org/car-logos/ford-logo-2017-640.png', title: "Ford" },
    { id: 8, imageUrl: 'https://mms.businesswire.com/media/20211201006234/en/932313/5/Nissan_brand_white_background_%284%29.jpg', title: "Nissan" },
    { id: 9, imageUrl: 'https://www.carlogos.org/car-logos/ferrari-logo-2002-640.png', title: "Ferrari" },
    { id: 10, imageUrl: 'https://fbi.cults3d.com/uploaders/15233766/illustration-file/8cbcecd1-d261-4b0e-9f07-6e200a06cfa0/1.jpg', title: "Land-Rover" },
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

  const Catalog = () => {
    return (
      <div className="catalog">
        <div className="catalogBlock">
          <PostYars posts={dodgeCars} title="DODGE" />
        </div>
        <div className="blankCl"></div>
        <div className="catalogBlock catalogSecond">
          <PostYars posts={fordCars} title="FORD" />
        </div>
        <div className="blankCl"></div>
        <div className="catalogBlock catalogThird">
          <PostYars posts={mazdaCars} title="MAZDA" />
        </div>
        <div className="blankCl"></div>
      </div>
    )
  }

  const startPage = () => {
    return (
      <div className="main">
        <div className="imageBlock">
          <h1 className="topimageBlock">Yars cars store </h1>
          <p className="topimageBlock">Yars cars store - это место переплетения шедевров, где каждый может найти и подобрать то самое счастье, которое будет с ним всегда </p>
        </div>
          <div className="blankCl"></div>
        <div className="imageBlock second">
          <PostYars posts={posts} title="CARS" />
        </div>
          <div className="blankCl"></div>
        <div className="imageBlock third">
          <PostBrandsYars posts={brands} title="BRANDS" />
        </div>
          <div className="blankCl"></div>
      </div>
    );
  }

  const display = () => {
    console.log(catalog)
    if (catalog) {
      return Catalog();
    } else {
      return startPage();
    }
  }

  return (
    <div className="App">
      <NavbarYars inputFieldRef={inputFieldRef} setCatalog={setCatalog} createPost={createPost} />
      {display()}

    </div >
  );
}

export default App;
