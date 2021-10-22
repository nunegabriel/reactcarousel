import React from "react";
// import img from "../img/img.webp";
import './App.css';
import { Carousel } from 'react-carousel-minimal';

// import Work from './Works';
// import Contact from './Contact';

function Home() {
     const data = [

      {
        image: "https://user-images.githubusercontent.com/42734825/138477432-2d388cc3-37c9-4ffb-b6b6-c763c57c2a9b.jpg",
        caption: ""
      },
      {
        image: "https://user-images.githubusercontent.com/42734825/138477408-d20823b2-2510-4f4b-96b4-bdb197ef3c7d.png",
        caption: ""
      },
      {
        image: "https://user-images.githubusercontent.com/42734825/138517362-54df6047-eb9b-47f7-8ec0-a5c4c6445cc2.jpg",
        caption: ""
      },
       {
         image: "https://user-images.githubusercontent.com/42734825/138517344-100d9001-16bb-4c71-bfe1-5410febcfe8c.png",
         caption: ""
       },
       
       {
         image: "https://user-images.githubusercontent.com/42734825/138477354-785335c5-2873-4469-925c-2314830bf6e6.png",
         caption: ""
       },
       {
         image: "https://user-images.githubusercontent.com/42734825/138517357-eda609a8-a374-4f02-8ee1-8e49ab85fc52.jpg",
         caption: ""
       },
       {
         image: "https://user-images.githubusercontent.com/42734825/138517362-54df6047-eb9b-47f7-8ec0-a5c4c6445cc2.jpg",
         caption: ""
       },
      //  {
      //    image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
      //    caption: "Scotland"
      //  },
      //  {
      //    image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
      //    caption: "Darjeeling"
      //  }
     ];
   
     const captionStyle = {
       fontSize: '2em',
       fontWeight: 'bold',
     }
     const slideNumberStyle = {
       fontSize: '20px',
       fontWeight: 'bold',
     }

  
  return (
    <div className="App">
    <div style={{ textAlign: "center" }}>
      <h2>3D WORKS</h2>
      <div style={{
        padding: "0 20px"
      }}>
        <Carousel
          data={data}
          time={4000}
          width="850px"
          height="500px"
          captionStyle={captionStyle}
          radius="10px"
          slideNumber={true}
          slideNumberStyle={slideNumberStyle}
          captionPosition="bottom"
          automatic={true}
          dots={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="false"
          slideImageFit="cover"
          thumbnails={true}
          thumbnailWidth="100px"
          style={{
            textAlign: "center",
            maxWidth: "850px",
            maxHeight: "500px",
            margin: "40px auto",
          }}
        />
      </div>
    </div>
  </div>
);
}
export default Home;
