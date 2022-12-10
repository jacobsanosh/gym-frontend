import React from "react";
import url from "../../assets/user.jpg";
import "./UserdashBoard.css";
function UserdashBoard() {
  return (
    <div className="user__dash_container">
      {/* section for user profiles   */}
      <div className="user__profile_div">
        <div className="user__profile_left">
          <img src={url} alt="" />
        </div>
        <div className="user__profile_right">
          <p>username</p>
          <p>age</p>
          <p>height</p>
          <p>weight</p>
        </div>
      </div>
      {/* section for trainers and their workouts */}
      <div className="trainer__div">
        <h1>Your trainer</h1>
        <div className="work__out">
          <h2>work outs are</h2>
          <table>
            <thead>
              <tr>
                <th>workout name</th>
                <th>part of body</th>
                <th>description</th>
                <th>date</th>
                <th>set</th>
                <th>reps</th>
                <th>completed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td><input type="checkbox" id="work" name="done" value="completed" />completed</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="routines">
          <h2>routines are</h2>
          <table>
            <thead>
              <tr>
                <th>workout name</th>
                <th>part of body</th>
                <th>description</th>
                <th>date</th>
                <th>set</th>
                <th>reps</th>
                <th>completed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td><input type="checkbox" id="work" name="done" value="completed" />completed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="choose_trainer">
        <button className="choose_btn">choose an trainer</button>
      </div>
    </div>
  );
}

export default UserdashBoard;
