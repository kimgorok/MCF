import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import List from "./routes/meeting/List";
import MeetingDetail from "./routes/meeting/MeetingDetail";
import MakeMeet from "./routes/meeting/MakeMeet";
import MakeMeetingDetail from "./routes/meeting/MakeMeetDetail";
import Login from "./routes/login/Login";
import SignUp from "./routes/login/SignUp";
import ComponentTest from "./ComponentTest";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="login/signup" element={<SignUp />} />

        <Route path="/meeting" element={<List />} />
        <Route path="/meeting/detail" element={<MeetingDetail />} />
        <Route path="/meeting/new/detail" element={<MakeMeetingDetail />} />
        <Route path="/meeting/new" element={<MakeMeet />} />

        <Route path="/componenttest" element={<ComponentTest />} />

        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
