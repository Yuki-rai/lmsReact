import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Layout from "./Components/Layout";
import Gateway from "./Gateway";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Layout>
          <Gateway />
        </Layout>
      </LocalizationProvider>
      <ToastContainer />

    </Provider>
  );
}

export default App;
