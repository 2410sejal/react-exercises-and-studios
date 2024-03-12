// import React from 'react';
import classes from './ChoresList.module.css';
export default function ChoresList () {
   let choresTitle = "Today's Chores";
   return (
   <div>
      <h3 className={classes.choresHeading}>{choresTitle}</h3>
      <ol className={classes.choresText}>
         <li >Empty dishwasher</li>
         <li>Complete prep work </li>
         <li>Buy Groceries</li>
   </ol>
   </div>
   );
}