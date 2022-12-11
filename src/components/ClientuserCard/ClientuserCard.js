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
import { assignWorkout, getCreatedWorkouts } from "../../api";

function ClientuserCard({ data }) {
  // console.log("on client",data)

  // Modal
  const [workoutNames, setWorkoutNames] = useState([]);
  const [workoutOpen, setWorkoutOpen] = useState(false);

  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [chosenWorkout, setChosenWorkout] = useState("");

  const handleWorkoutOpen = () => setWorkoutOpen(true);
  const handleWorkoutClose = () => setWorkoutOpen(false);
  const [workoutLoading, setWorkoutLoading] = useState(true);
  const [assigingWorkoutLoading, setAssigingWorkoutLoading] = useState(false);

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

  useEffect(() => {
    loadWorkouts();
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
          <button className="details__btn">set diet</button>
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
            <Grid container>
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
    </div>
  );
}

export default ClientuserCard;
