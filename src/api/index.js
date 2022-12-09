import axios from "axios";
const token=btoa("user1@gmail.com:password")
const client=axios.create({
    baseURL:'https://gym-backend-dbms.onrender.com/',
    headers:{
        Authorization:`Basic ${token}`
    }
})
const getTrainers=async()=>{
    console.log("demo")
    const response=await client.get('/user/trainer');
    console.log(response.data.trainers)
    return response.data.trainers;
}
export {getTrainers}
