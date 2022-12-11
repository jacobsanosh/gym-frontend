function WorkoutRow({ workout }) {
  return (
    <tr>
      <td>{workout.name}</td>
      <td>{workout.part_of_body}</td>
      <td>{workout.description}</td>
      <td> Remove </td>
    </tr>
  );
}

export default WorkoutRow;
