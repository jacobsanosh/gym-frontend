import axios from "axios";
const token = btoa("user1@gmail.com:password");
const client = axios.create({
  baseURL: "https://gym-backend-dbms.onrender.com/",
  headers: {
    Authorization: `Basic ${token}`,
  },
});
const getTrainers = async () => {
  // console.log("demo")
  const response = await client.get("/user/trainer");
  // console.log(response.data.trainers)
  return response.data.trainers;
};

async function login(email, password, type) {
  if (!(type === "trainer" || type === "user")) {
    console.log("INVALID TYPE");
    return;
  }
  const response = await client.post(`/${type}/login`, {
    email,
    password,
  });
  console.log(response);

  if (response.status === 200) {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("loginType", type);
  }
  return response;
}

export { getTrainers, login };
