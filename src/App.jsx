import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import MainRoutes from "./routes/MainRoutes";
import { useEffect } from "react";
import { fetchData } from "./redux/dataReducer/action";

function App() {
  const theme = useSelector((store) => store.themeReducer.theme);
  

  return (
    <div>
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;
