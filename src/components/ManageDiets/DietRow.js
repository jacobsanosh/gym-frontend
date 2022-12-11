function DietRow({ diet }) {
  return (
    <tr>
      <td>{diet.name}</td>
      <td>{diet.protein}</td>
      <td>{diet.quantity}</td>
      <td> Remove </td>
    </tr>
  );
}

export default DietRow;
