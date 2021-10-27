import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

import HomeImg from "../../components/HomeImg";
import { getRandomGif } from "../../services/apiGiphy";

//Hoc Authorization

//Components

function Home() {
  const [gifsLoading, setGifsLoaded] = useState(true);
  const [gifsArray, setGifsArray] = useState([]);

  async function gifSeed() {
    let gifsResponse = [];
    for (let i = 0; i < 12; i++) {
      let { data } = await getRandomGif();
      gifsResponse.push(data);
    }
    return gifsResponse;
  }
  useEffect(() => {
    gifSeed(gifsArray).then((gifsResponse) => {
      setGifsArray(gifsResponse);
      console.log(gifsResponse);
      setGifsLoaded(false);
    });
  }, []);

  return gifsLoading ? (
    <>
      <main>
        <h1>loading gifs...</h1>
      </main>
    </>
  ) : (
    <>
      <main>
        <h1>The Random 12</h1>
        <Row>
          {gifsArray.map((gif, index) => {
            return (
              <Col key={index}>
                <HomeImg
                  imgUrl={gif.data.image_original_url}
                  title={gif.data.title}
                />
              </Col>
            );
          })}
        </Row>
      </main>
    </>
  );
}

export default Home;
