import { Schedule } from "./pages/schedule";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import { Scheduling } from "./pages/scheduling";

export function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Schedule />}/>
        <Route path="/agendamento" element={<Scheduling />}/>
      </Routes>
    </Router>
  )
}