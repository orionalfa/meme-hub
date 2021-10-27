import axios from "axios";

// https://api.giphy.com/v1/gifs/random?api_key=NFfUoGfMwps9eKi8S0Sbr9wkQH19jG5s&tag=&rating=g

export async function getRandomGif() {
  return axios({
    method: "GET",
    //   url: `${process.env.REACT_APP_URL}users/get-email/${email}`,
    url: `https://api.giphy.com/v1/gifs/random?api_key=NFfUoGfMwps9eKi8S0Sbr9wkQH19jG5s&tag=&rating=g`,
  });
}
