import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Team from "./scenes/team";
import Contacts from "./scenes/vehicleoverzicht";
import Invoices from "./scenes/invoices";
import FAQ from "./scenes/faq";
import Form from "./scenes/form";
import Interpol from "./scenes/interpol";
// import Calendar from "./scenes/calendar/calendar";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
        <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/vehicleoverzicht" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/interpol" element={<Interpol />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/form" element={<Form />} />

            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;