import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from "./contexts/AuthContext";
import { Toaster } from "@/components/ui/toaster";
import Home from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Training from "./pages/Training";
import Industries from "./pages/Industries";
import London from "./pages/regions/London";
import LondonSouthEast from "./pages/regions/LondonSouthEast";
import EastMidlands from "./pages/regions/EastMidlands";
import WestMidlands from "./pages/regions/WestMidlands";
import Wales from "./pages/regions/Wales";
import Midlands from "./pages/regions/Midlands";
import SouthWest from "./pages/regions/SouthWest";
import SouthEast from "./pages/regions/SouthEast";
import NorthWest from "./pages/regions/NorthWest";
import NorthEast from "./pages/regions/NorthEast";
import Scotland from "./pages/regions/Scotland";
import Yorkshire from "./pages/regions/Yorkshire";
import FirstAidLondon from "./pages/services/FirstAidLondon";
import AmbulanceHireLondon from "./pages/services/AmbulanceHireLondon";
import Medical from "./pages/Medical";
import NotFound from "./pages/NotFound";
import NorthEastFirstAidMedicalCover from "./pages/NorthEastFirstAidMedicalCover";
import NorthWestFirstAidMedicalCover from "./pages/NorthWestFirstAidMedicalCover";
import EastMidlandsFirstAidMedicalCover from "./pages/EastMidlandsFirstAidMedicalCover";
import Pride from "./pages/industries/Pride";
import Remembrance from "./pages/industries/Remembrance";
import Fireworks from "./pages/industries/Fireworks";
import Stadium from "./pages/industries/Stadium";
import SportsFestivals from "./pages/industries/SportsFestivals";
import Charity from "./pages/industries/Charity";
import Equestrian from "./pages/industries/Equestrian";
import Accessibility from "./pages/Accessibility";
import Privacy from "./pages/Privacy";
import Auth from "./pages/Auth";
import Portal from "./pages/Portal";
import Quote from "./pages/Quote";
import TrainingBook from "./pages/TrainingBook";
import Admin from "./pages/Admin";

function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/training" element={<Training />} />
            <Route path="/training/book" element={<TrainingBook />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/medical" element={<Medical />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/portal" element={<Portal />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/regions/london" element={<London />} />
            <Route path="/regions/london-south-east" element={<LondonSouthEast />} />
            <Route path="/regions/east-midlands" element={<EastMidlands />} />
            <Route path="/regions/west-midlands" element={<WestMidlands />} />
            <Route path="/regions/wales" element={<Wales />} />
            <Route path="/regions/midlands" element={<Midlands />} />
            <Route path="/regions/south-west" element={<SouthWest />} />
            <Route path="/regions/south-east" element={<SouthEast />} />
            <Route path="/regions/north-west" element={<NorthWest />} />
            <Route path="/regions/north-east" element={<NorthEast />} />
            <Route path="/regions/scotland" element={<Scotland />} />
            <Route path="/regions/yorkshire" element={<Yorkshire />} />
            <Route path="/industries/pride" element={<Pride />} />
            <Route path="/industries/remembrance" element={<Remembrance />} />
            <Route path="/industries/fireworks" element={<Fireworks />} />
            <Route path="/industries/stadium" element={<Stadium />} />
            <Route path="/industries/sports-festivals" element={<SportsFestivals />} />
            <Route path="/industries/charity" element={<Charity />} />
            <Route path="/industries/equestrian" element={<Equestrian />} />
            <Route path="/services/first-aid-london" element={<FirstAidLondon />} />
            <Route path="/services/ambulance-hire-london" element={<AmbulanceHireLondon />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/north-east-first-aid-medical-cover" element={<NorthEastFirstAidMedicalCover />} />
            <Route path="/north-west-first-aid-medical-cover" element={<NorthWestFirstAidMedicalCover />} />
            <Route path="/east-midlands-first-aid-medical-cover" element={<EastMidlandsFirstAidMedicalCover />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
        <Toaster />
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;
