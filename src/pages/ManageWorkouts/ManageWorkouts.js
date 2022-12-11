import { useState, useEffect } from "react";
import { addWorkout, getCreatedWorkouts } from "../../api";
import Spinner from "../../components/Loader/Spinner";
import WorkoutRow from "../../components/ManageWorkouts/WorkoutRow";
import Modal from "@mui/material/Modal";
import "./ManageWorkouts.css";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import Textarea from "@mui/joy/Textarea";
import AddIcon from "@mui/icons-material/Add";
import MainLayout from "../../components/MainLayout/MainLayout";
// import { createTheme } from "@mui/system";

// const accentTheme = createTheme({
//     palette: {
//         primary: {
//             main: "#ff0000",
//         },
//     },
// });

function ManageWorkout() {
  const [loading, setLoading] = useState(true);
  const [workouts, setWorkouts] = useState([]);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [workoutName, setWorkoutName] = useState("");
  const [partOfBody, setPartOfBody] = useState("");
  const [description, setDescription] = useState("");
  const [addingWorkout, setAddingWorkout] = useState(false);

  async function loadWorkouts() {
    try {
      setLoading(true);
      const response = await getCreatedWorkouts();
      console.log(response);
      setWorkouts(response.data.workouts);
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit() {
    try {
      setAddingWorkout(true);
      const response = await addWorkout(workoutName, partOfBody, description);
      console.log(response);
      handleClose();
      loadWorkouts();
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    } finally {
      setAddingWorkout(false);
    }
  }

  useEffect(() => {
    loadWorkouts();
  }, []);

  return (
    // <ThemeProvider theme={accentTheme}>
    <MainLayout>

    
      <div className="user__dash_container">
        <h1>Your Workout Plans</h1>
        <div className="work__out">
          <table>
            <thead>
              <tr>
                <th>workout name</th>
                <th>part of body</th>
                <th>description</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td
                    colSpan={4}
                    style={{
                      padding: "51px 30px",
                    }}
                  >
                    <Spinner />
                  </td>
                </tr>
              ) : (
                <>
                  {workouts.map((workout) => (
                    <WorkoutRow key={workout._id} workout={workout} />
                  ))}
                  <tr>
                    <td colSpan={4}>
                      <Button
                        variant="outlined"
                        onClick={handleOpen}
                        endIcon={<AddIcon />}
                      >
                        ADD A NEW WORKOUT PLAN
                      </Button>
                    </td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </div>
        <Modal open={open} onClose={handleClose}>
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
            <Grid
              container
              spacing={2}
              alignContent="center"
              justifyContent="center"
            >
              <Grid item xs={12} justifyContent="center" alignItems="center">
                <h1>ADD A NEW WORKOUT PLAN</h1>
              </Grid>

              <Grid item xs={6} justifyContent="center" alignItems="center">
                <Typography variant="h6">Workout Name</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  value={workoutName}
                  onChange={(e) => setWorkoutName(e.target.value)}
                  fullWidth
                  variant="outlined"
                  name="workoutName"
                  label="Workout Name"
                />
              </Grid>

              <Grid item xs={6} justifyContent="center" alignItems="center">
                <Typography variant="h6">Body Part</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  value={partOfBody}
                  onChange={(e) => setPartOfBody(e.target.value)}
                  fullWidth
                  variant="outlined"
                  name="partOfBody"
                  label="Body Part"
                />
              </Grid>
              <Grid item xs={6} justifyContent="center" alignItems="center">
                <Typography variant="h6">Description</Typography>
              </Grid>
              <Grid item xs={6}>
                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter a Description"
                />
              </Grid>

              <Grid item xs={12} justifyContent="center" alignItems="center">
                <LoadingButton
                  loading={addingWorkout}
                  variant="contained"
                  color="primary"
                  style={{ width: "100%" }}
                  onClick={handleSubmit}
                >
                  ADD
                </LoadingButton>
              </Grid>
            </Grid>
          </Box>
        </Modal>
      </div>
      </MainLayout>
    // </ThemeProvider>
  );
}

export default ManageWorkout;
