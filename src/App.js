import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Layout from "./Components/Layout";
import Gateway from "./Gateway";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs }>

      <Layout>
        <Gateway />

      </Layout>
    </LocalizationProvider>

  );
}

export default App;
