import { useState, useEffect } from "react";
import { getCreatedDiets, addDiet } from "../../api";
import Spinner from "../../components/Loader/Spinner";
import DietRow from "../../components/ManageDiets/DietRow";
import Modal from "@mui/material/Modal";
import "./ManageDiets.css";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import AddIcon from "@mui/icons-material/Add";
// import { createTheme } from "@mui/system";

// const accentTheme = createTheme({
//     palette: {
//         primary: {
//             main: "#ff0000",
//         },
//     },
// });

function ManageDiet() {
  const [loading, setLoading] = useState(true);
  const [diets, setDiets] = useState([]);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [dietName, setDietName] = useState("");
  const [protein, setProtein] = useState("");
  const [quantity, setQuantity] = useState("");
  const [addingDiet, setAddingDiet] = useState(false);

  async function loadDiets() {
    try {
      setLoading(true);
      const response = await getCreatedDiets();
      console.log(response);
      setDiets(response.data.diets);
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit() {
    try {
      setAddingDiet(true);
      const response = await addDiet(dietName, protein, quantity);
      console.log(response);
      handleClose();
      loadDiets();
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    } finally {
      setAddingDiet(false);
    }
  }

  useEffect(() => {
    loadDiets();
  }, []);

  return (
    // <ThemeProvider theme={accentTheme}>
      <div className="user__dash_container">
        <h1>Your Workout Plans</h1>
        <div className="work__out">
          <table>
            <thead>
              <tr>
                <th>Diet name</th>
                <th>Protein</th>
                <th>Quantity</th>
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
                  {diets.map((diet) => (
                    <DietRow key={diet.id} diet={diet} />
                  ))}
                  <tr>
                    <td colSpan={4}>
                      <Button
                        variant="outlined"
                        onClick={handleOpen}
                        endIcon={<AddIcon />}
                      >
                        ADD A NEW DIET PLAN
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
                <h1>ADD A NEW DIET PLAN</h1>
              </Grid>

              <Grid item xs={6} justifyContent="center" alignItems="center">
                <Typography variant="h6">Diet Name</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  value={dietName}
                  onChange={(e) => setDietName(e.target.value)}
                  fullWidth
                  variant="outlined"
                  name="dietName"
                  label="Diet Name"
                />
              </Grid>

              <Grid item xs={6} justifyContent="center" alignItems="center">
                <Typography variant="h6">protein</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  value={protein}
                  onChange={(e) => setProtein(e.target.value)}
                  fullWidth
                  variant="outlined"
                  name="protein"
                  label="Protein"
                />
              </Grid>
              <Grid item xs={6} justifyContent="center" alignItems="center">
                <Typography variant="h6">quantity</Typography>
              </Grid>
              <Grid item xs={6}>
              <TextField
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  fullWidth
                  variant="outlined"
                  name="quantity"
                  label="Quantity"
                />
              </Grid>

              <Grid item xs={12} justifyContent="center" alignItems="center">
                <LoadingButton
                  loading={addingDiet}
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
    // </ThemeProvider>
  );
}

export default ManageDiet;
