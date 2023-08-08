import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
      {label: "cake", value: "cake"}, 
      {label: "cinnamon", value: "cinnamon"}, 
      {label: "dessert", value: "dessert"}];
   
   const [boardName, setName] = useState("no boards yet!")
   
   const handleChange = (event) => {
      setName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {boards.map((board) => (
         <option value={board.value}>{board.label}</option>
         ))}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}