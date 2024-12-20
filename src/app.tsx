import { Schedule } from "./pages/schedule";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import { Scheduling } from "./pages/scheduling";
import { Login } from "./pages/login";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/agenda" element={<Schedule />} />
        <Route path="/agendamento" element={<Scheduling />} />
      </Routes>
    </Router>
  )
}