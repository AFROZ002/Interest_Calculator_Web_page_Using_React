import './App.css'; // Importing custom CSS for styling
import Box from '@mui/material/Box'; // Material UI component for layout
import TextField from '@mui/material/TextField'; // Material UI component for input fields
import Stack from '@mui/material/Stack'; // Material UI component for stacking elements
import Button from '@mui/material/Button'; // Material UI component for buttons
import {useState} from 'react'; // React hook for managing state

function App() {
  // State variables to hold input values and result
  const [num1,setNum1]=useState(0); // State for principal amount
  const [num2,setNum2]=useState(0); // State for rate of interest
  const [num3, setNum3]=useState(0); // State for time period
  const [Add,setAdd]=useState(0); // State for calculated simple interest

  // Function to calculate the simple interest
  const calcSum=(e)=>{
    e.preventDefault(); // Prevents the form from submitting and refreshing the page
    // Checking if any field is empty
    if(num1==0 || num2===0 || num3===0){
      alert("Please enter all details"); // Alert if any input is missing
    }
    else{
      // Formula for simple interest: (P * R * T) / 100
      let Add = (parseInt(num1) * parseInt(num2) * parseInt(num3)) / 100;
      console.log(Add); // Logging the calculated result to the console
      setAdd(Add); // Updating the state with the calculated result
    }
  }

  // Function to reset the values and reload the page
  const handleClick =(e)=>{
    setAdd(0); // Resetting the result
    window.location.reload(); // Reloading the page
  }

  return (
    <>
    {/* Main container for the app */}
    <div className='app'>
      <div className='container'>
        {/* Heading section */}
        <div className='heading_text'>
          <h1 className='heading_one'>Simple Calculator</h1>
          <p className='heading_two'> Calculate your Simple Interest Easily</p>
        </div>
      </div>
      
      {/* Display the calculated simple interest */}
      <div className='total_amount_card'>
        <div className='card_text '>
          <h3 className='total_amount_heading'>₹ {Add}</h3> {/* Displaying the calculated interest */}
          <p className='total_amount_para'>Total simple interest</p>
        </div>
      </div>

      {/* Form for user inputs */}
      <form onSubmit={calcSum}>
        <div className='input_area'>
          {/* Principal amount input field */}
          <div className='input_field'>
            <TextField 
              type="number" 
              value={num1 || ""} // Display input value or empty string
              onChange={(e) => setNum1(e.target.value)} // Update state on input change
              id="outlined-basic" 
              label="₹ Principal amount" 
              variant="outlined" 
            />
          </div>
          
          {/* Rate of interest input field */}
          <div className='input_field'>
            <TextField 
              type="number" 
              value={num2 || ""} 
              onChange={(e) => setNum2(e.target.value)} 
              id="outlined-basic" 
              label="Rate of interest (p.a) %" 
              variant="outlined" 
            />
          </div>
          
          {/* Time period input field */}
          <div className='input_field'>
            <TextField  
              type="number" 
              value={num3 || ""} 
              onChange={(e) => setNum3(e.target.value)} 
              id="outlined-basic" 
              label="Time period (Yr)" 
              variant="outlined" 
            />
          </div>
        </div>

        {/* Buttons for calculating and resetting */}
        <div className='button_collection'>
          <Stack spacing={2} direction="row">       
            <Button 
              type='submit' 
              className='btn_one' 
              style={{backgroundColor: 'black'}} 
              variant="contained"
            >
              Calculate
            </Button>
            <Button 
              className='btn_one'  
              onClick={handleClick}  // Call the reset function on click
              variant="outlined"
            >
              Reset
            </Button>
          </Stack>
        </div>
      </form>
    </div>
    </>
  )
}

export default App;
