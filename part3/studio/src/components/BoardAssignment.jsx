import { useState } from 'react';

export default function BoardAssignment () {
   const [boardName,setName] = useState('no boards yet!');
   const boards = [
      {
         id:1,
         label: "Indo-Chinese",
         name: "Chilli Paneer"
      },
      {
         id:2,
         label: "Chinese",
         name: "Manchurian"
      },
      {
         id:3,
         label: "Chinese",
         name: "Hakka noodles"
      }
   ];

   const handleChange = (event) => {
      setName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {boards.map((board)=>{
         return(
            <option key={board.id} value={board.name}>{board.label}</option>
         )
      })}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
