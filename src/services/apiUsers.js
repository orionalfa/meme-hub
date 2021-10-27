import axios from "axios";

export async function registerInApi(userData, uid) {
  return axios({
    method: "POST",
    url: `${process.env.REACT_APP_URL}users/register`,
    data: {
      firebase_id: uid,
      ...userData,
    },
    // headers: {
    //   Authorization: `Bearer ${userToken}`,
    // },
  });
}

export async function getByEmail(email) {
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_URL}users/get-email/${email}`,
  });
}


