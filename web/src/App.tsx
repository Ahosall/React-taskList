import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import New from "./views/New";
import Edit from "./views/Edit";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/new" element={<New />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
