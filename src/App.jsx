import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import MainRoutes from "./routes/MainRoutes";

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
