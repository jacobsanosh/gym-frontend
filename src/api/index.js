import axios from "axios";
const token = btoa("user1@gmail.com:password");
const client = axios.create({
  baseURL: "http://localhost:5000/",
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
  }
  return response;
}

async function registeruser(
  email,
  password,
  age,
  height,
  weight,
  need,
  profileImageUrl
) {
  // console.log("res user")
  const response = await client.post("/user/register", {
    name: email.split("@")[0],
    email,
    heightInCm: height,
    password,
    weightInKg: weight,
    profileImageUrl,
    need,
    age,
  });
  console.log("respose at index",response)
  if (response.status === 200) {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  }
  return response;
}
async function registertrainer(
  email,
  password,
  gymname,
  place,
  phone,
  specialization,
  profileImageUrl
) {
  const response = await client.post("/trainer/register", {
    name: email.split("@")[0],
    email,
    password,
    gymname,
    place,
    phone,
    specialization,
    profileImageUrl,
  });
  if (response.status === 200) {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  }
}
export { getTrainers, login, registeruser,registertrainer };
