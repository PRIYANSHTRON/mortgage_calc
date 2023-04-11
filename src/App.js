import { Container, Grid } from "@mui/material";
import Navbar from "./components/Navbar";
import SliderSelect from "./components/SliderSelect";
import { useState } from "react";
import TenureSelect from "./components/TenureSelect";
import Result from "./components/Result";



function App() {

  const [data, setData] = useState(
    {
      homeValue: 3000,
      downPayment: 3000*0.2,
      loanAmount: 3000 * 0.8,
      loanTerm:5,
      interestRate: 10
    }
  )


  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Grid container>
          <Grid item xs={12} md={6} sm={12}>
            <SliderSelect data={data} setData={setData} />
            <TenureSelect data={data} setData={setData}/>
          </Grid>
          <Grid item xs={6} md={6} sm={12} >
            <Result data={data}/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
