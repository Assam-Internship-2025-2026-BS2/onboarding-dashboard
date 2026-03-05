import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { FilterProvider } from "./context/FilterContext";

import Navbar from "./components/layout/Navbar";

import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import CustomerInsights from "./pages/CustomerInsights";
import Analysis from "./pages/Analysis";

import StageDropMatrix from "./StageDropMatrix";
import JourneyDetails from "./JourneyDetails";

import "./styles/theme.css";

function App() {
  return (
    <ThemeProvider>
      <FilterProvider>
        <BrowserRouter>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/customer-insights" element={<CustomerInsights />} />
              <Route path="/analysis" element={<Analysis />} />

              {/* Existing stage drop feature */}
              <Route path="/stagedrop" element={<StageDropMatrix />} />
              <Route path="/journeys" element={<JourneyDetails />} />
            </Routes>
          </main>
        </BrowserRouter>
      </FilterProvider>
    </ThemeProvider>
  );
}

export default App;