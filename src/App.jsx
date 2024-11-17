import { useState } from "react";
import HomePage from "./pages/HomePage";
import Sidebar from "./layout/Sidebar";
import TodoContextProvider from "./contexts/TodoContext";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <TodoContextProvider>
        <div className="bg-gray-100 w-full h-screen grid grid-cols-12">
          <div className="lg:col-span-4 xl:col-span-3 hidden lg:block">
            <Sidebar />
          </div>
          <div className="col-span-full lg:col-span-8 xl:col-span-9 px-4 md:px-10 xl:px-28 py-10 box-border">
            {/* <HomePage /> */}
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/category" element={<CategoryPage />} />
              <Route exact path="/settings" element={<SettingsPage />} />
              {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
          </div>
        </div>
      </TodoContextProvider>
    </Router>
  );
}

export default App;
