import React from "react";
import "./App.css";
import { menus } from "./utils/constants";
import {
  NavLink,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Todo from "./pages/todo-app/todo";
import VisitingCard from "./pages/visiting-card";
import OTPAppPage from "./pages/otp-app";

function App() {
  return (
    <div className="flex flex-col nin-h-screen">
      <header className="font-bold text-4xl bg-blue-500 p-4 text-center text-white">
        MERN STACK APPS
      </header>

      <Router>
        <section
          className="flex flex-1 min-h-full
      "
        >
          <menu className="w-64 border-r-2">
            <nav className="bg-gray-200 p-4">
              <ul className="space-y-2">
                {menus.map((menu, index) => (
                  <li key={index}>
                    <NavLink
                      to={menu.link}
                      className={({ isActive }: { isActive: boolean }) =>
                        isActive
                          ? "block p-2 rounded bg-gray-800 text-white"
                          : "block p-2 rounded hover:bg-gray-600 hover:text-white"
                      }
                      aria-current="page"
                    >
                      {menu.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </menu>
          <main className="flex-1 p-4 bg-white h-screen">
            <Routes>
              <Route path="/" element={<Todo />} />
              <Route path="/visiting-card" element={<VisitingCard />} />
              <Route path="/otp-app" element={<OTPAppPage />} />
            </Routes>
          </main>
        </section>
      </Router>
      <footer className="bg-gray-500 text-white text-center p-2 fixed bottom-0 w-full">
        Footer
      </footer>
    </div>
  );
}

export default App;
