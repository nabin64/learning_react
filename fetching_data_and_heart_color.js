import "./styles.css";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
const Card = (props) => {

  const [islike,setIsLike] = useState(false)
  const handleClick = ()=>{
    if (islike === false) {
      setIsLike(true)
    }
    else {
      setIsLike(false)
    }
    
  }

  return (
    <div className="Card">
      <FaHeart color = {islike ? "red": "black"} onClick = {handleClick} />
      <br />
      <h1>{props.item.productName}</h1>
      <br />
      <img src={props.item.image} width={50} height={50} />
      <br />

      {props.item.price}
    </div>
  );
};

const App = () => {
  const fetchedProducts = [
    {
      productName: "Cooker",
      image:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/514M+UZ5bhL._SL1500_.jpg",
      price: 30,
      isFavorite: false,
      cartCart: 0
    },
    {
      productName: "Kettle",
      image:
        "https://media.istockphoto.com/id/891596906/photo/kettle.jpg?s=612x612&w=0&k=20&c=jFqBzmaKQXRPMa46eyLMaPuzG-1TVys6p-uLZ0zfFHc=",
      price: 120,
      isFavorite: false,
      cartCart: 0
    },
    {
      productName: "TV",
      image:
        "https://www.shutterstock.com/image-photo/tv-flat-screen-lcd-plasma-260nw-314401364.jpg",
      price: 20,
      isFavorite: false,
      cartCart: 0
    }
  ];
  return (
    <div>
      {fetchedProducts.map((item) => {
        return <Card item={item} />;
      })}
    </div>
  );
};

export default App;
