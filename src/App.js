import React, {useState} from "react";
import NewCost from "./components/NewCost/NewCost";
import Costs from "./components/Costs/Costs";


const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date('December 18, 2021 03:24:00'),
    description: "Холодильник",
    amount :  999.99 
  },

  {
    id: 'c2',
    date: new Date('4 27, 2021 08:54:00'),
    description: "macbook",
    amount :  1350 
  },

  {
    id: 'c3',
    date: new Date('December 17, 2022 05:24:00'),
    description: "car",
    amount :  25000
  }
]

// const App = () => {
//   const costs = 
//     {
//       date: new Date('December 18, 1995 03:24:00'),
//       description: "Холодильник",
//       amount :  999.99 
//     }
// };

const App = () => {

 const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts(prevCosts => {
      return [cost, ...prevCosts]
    });
  };
   
  return (
    <div>
      <NewCost onAddCost={addCostHandler}/> 
      <Costs costs={costs}/>    
    </div>
  );
};

export default App;
