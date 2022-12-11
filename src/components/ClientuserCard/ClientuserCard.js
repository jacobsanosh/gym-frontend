import { useState, useEffect } from "react";
import img from "../../assets/user.jpg";
import "./ClientuserCard.css";

import Spinner from "../../components/Loader/Spinner";
import Modal from "@mui/material/Modal";
import {
  Autocomplete,
  Box,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { assignDiet, assignWorkout, getCreatedDiets, getCreatedWorkouts } from "../../api";

function ClientuserCard({ data }) {
  // console.log("on client",data)

  // Modal
  const [workoutNames, setWorkoutNames] = useState([]);
  const [dietNames, setDietNames] = useState([]);
  const [workoutOpen, setWorkoutOpen] = useState(false);
  
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [chosenWorkout, setChosenWorkout] = useState("");
  
  const handleWorkoutOpen = () => setWorkoutOpen(true);
  const handleWorkoutClose = () => setWorkoutOpen(false);
  const [workoutLoading, setWorkoutLoading] = useState(true);
  const [assigingWorkoutLoading, setAssigingWorkoutLoading] = useState(false);
  

  const [dietOpen, setDietOpen] = useState(false);
  const [chosenDiet, setChosenDiet] = useState("");
  const handleDietOpen = () => setDietOpen(true);
  const handleDietClose = () => setDietOpen(false);
  const [dietLoading, setDietLoading] = useState(true);
  const [assigingDietLoading, setAssigingDietLoading] = useState(false);
  const [noOfTimes, setNoOfTimes] = useState("");
  const [time, setTime] = useState("");



  async function loadWorkouts() {
    try {
      setWorkoutLoading(true);
      const response = await getCreatedWorkouts();
      console.log(response);
      const workoutNamesArray = response?.data?.workouts?.map((workout) => {
        return workout.name;
      });
      setWorkoutNames(workoutNamesArray);
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    } finally {
      setWorkoutLoading(false);
    }
  }

  async function loadDiets() {
    try {
      setDietLoading(true);
      const response = await getCreatedDiets();
      console.log(response);
      const dietNamesArray = response?.data?.diets?.map((diet) => {
        return diet.name;
      });
      setDietNames(dietNamesArray);
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    } finally {
      setDietLoading(false);
    }
  }

  async function assignWorkoutSubmit() {
    try {
      setAssigingWorkoutLoading(true);
      await assignWorkout(data.email, chosenWorkout, sets, reps);
      handleWorkoutClose();
      loadWorkouts();
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    } finally {
      setAssigingWorkoutLoading(false);
    }
  }


  async function assignDietSubmit() {
    try {
      setAssigingDietLoading(true);
      await assignDiet(data.email, chosenDiet, noOfTimes, time);
      handleDietClose();
      loadDiets();
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    } finally {
      setAssigingDietLoading(false);
    }
  }

  useEffect(() => {
    loadWorkouts();
    loadDiets();
  }, []);
  return (
    <div className="ourtrainer__container">
      <div className="user_item">
        <img src={img} alt="" className="user__img" />
        <div className="detail__container">
          <p>name:{data.name}</p>
          <p>height:</p>
          <p>weight:</p>
          <button className="details__btn" onClick={handleWorkoutOpen}>
            set workout
          </button>
          <button className="details__btn" onClick={handleDietOpen}>set diet</button>
        </div>
      </div>
      <Modal id="workoutModal" open={workoutOpen} onClose={handleWorkoutClose}>
        <Box
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            backgroundColor: "#fff",
            border: "2px solid #000",
            padding: "30px",
            maxHeight: "700px",
            overflowY: "auto !important",
          }}
        >
          {workoutLoading ? (
            <Spinner />
          ) : (
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <h1>ADD A NEW WORKOUT PLAN</h1>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">Workout Name</Typography>
              </Grid>
              <Grid item xs={6}>
                <Autocomplete
                  options={workoutNames}
                  value={chosenWorkout}
                  onChange={(event, newValue) => {
                    setChosenWorkout(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField {...params} label="assignedWorkout" />
                  )}
                />
              </Grid>
              <Grid item xs={6} justifyContent="center" alignItems="center">
                <Typography variant="h6">Sets</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  value={sets}
                  onChange={(e) => setSets(e.target.value)}
                  fullWidth
                  variant="outlined"
                  name="sets"
                  label="Sets"
                />
              </Grid>
              <Grid item xs={6} justifyContent="center" alignItems="center">
                <Typography variant="h6">Reps</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  value={reps}
                  onChange={(e) => setReps(e.target.value)}
                  fullWidth
                  variant="outlined"
                  name="reps"
                  label="Reps"
                />
              </Grid>
              <Grid item xs={12} justifyContent="center" alignItems="center">
                <LoadingButton
                  loading={assigingWorkoutLoading}
                  variant="contained"
                  color="primary"
                  style={{ width: "100%" }}
                  onClick={assignWorkoutSubmit}
                >
                  ADD
                </LoadingButton>
              </Grid>
            </Grid>
          )}
        </Box>
      </Modal>


      <Modal id="dietModal" open={dietOpen} onClose={handleDietClose}>
        <Box
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            backgroundColor: "#fff",
            border: "2px solid #000",
            padding: "30px",
            maxHeight: "700px",
            overflowY: "auto !important",
          }}
        >
          {dietLoading ? (
            <Spinner />
          ) : (
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <h1>ADD A NEW DIET PLAN</h1>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">DIET Name</Typography>
              </Grid>
              <Grid item xs={6}>
                <Autocomplete
                  options={dietNames}
                  value={chosenDiet}
                  onChange={(event, newValue) => {
                    setChosenDiet(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField {...params} label="assignedDiet" />
                  )}
                />
              </Grid>
              <Grid item xs={6} justifyContent="center" alignItems="center">
                <Typography variant="h6">No of times</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  value={noOfTimes}
                  onChange={(e) => setNoOfTimes(e.target.value)}
                  fullWidth
                  variant="outlined"
                  name="noOfTimes"
                  label="No Of Times"
                />
              </Grid>
              <Grid item xs={6} justifyContent="center" alignItems="center">
                <Typography variant="h6">Time</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  fullWidth
                  variant="outlined"
                  name="time"
                  label="Time"
                />
              </Grid>
              <Grid item xs={12} justifyContent="center" alignItems="center">
                <LoadingButton
                  loading={assigingDietLoading}
                  variant="contained"
                  color="primary"
                  style={{ width: "100%" }}
                  onClick={assignDietSubmit}
                >
                  ADD
                </LoadingButton>
              </Grid>
            </Grid>
          )}
        </Box>
      </Modal>
      
    </div>
  );
}

export default ClientuserCard;
