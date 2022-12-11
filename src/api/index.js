import axios from "axios";
const email = localStorage.getItem("email");
const password = localStorage.getItem("password");
const token = btoa(`${email}:${password}`);
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
    localStorage.setItem("loginType", type);
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
  console.log("respose at index", response);
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
  return response;
}

async function getWorkout(email) {
  const response = await client.get("/user/workout");
  return response;
}

async function complete_workout(id) {
  //user/workout.work-id
  const response = await client.post(`/user/workout/${id}`);
  return response;
}
async function getDiet(email) {
  const response = await client.get("/user/diet");
  return response;
}
async function complete_diet(id) {
  const response = await client.post(`/user/diet/${id}`);
  return response;
}

async function getUserProfile(email) {
  const response = await client.get("/user");
  return response;
}

async function delete_trainer() {
  const respose = await client.delete("/user/trainer");
  return respose;
}
async function choose_trainer(email) {
  const response = await client.post(`/user/trainer/${email}`);
  return response;
}

async function getCreatedWorkouts() {
  const response = await client.get("/trainer/workout");
  return response;
}

async function addWorkout(workoutName, partOfBody, description) {
  const response = await client.post("/trainer/workout", {
    workoutName,
    partOfBody,
    description,
  });
  return response;
}
export {
  getTrainers,
  login,
  registeruser,
  registertrainer,
  getWorkout,
  complete_workout,
  getDiet,
  complete_diet,
  getUserProfile,
  delete_trainer,
  choose_trainer,
  getCreatedWorkouts,
  addWorkout,
};
