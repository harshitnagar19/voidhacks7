
import { useRef } from 'react'
import VoidHacksBenefits from './screens/VoidHacksBenefits'
import VoidHacksDomains from './screens/VoidHacksDomains'
import VoidHacksLanding from './screens/VoidHacksLanding'
import VoidHacksSponsors from './screens/VoidHacksSponsors'
import VoidHacksTeam from './screens/VoidHacksTeam'
import VoidHacksTimeline from './screens/VoidHacksTimeline'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from './screens/AboutUs'
import LocationSection from './screens/LocationSection'

function App() {
  const scheduleRef = useRef(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>
          <VoidHacksLanding scheduleRef={scheduleRef} />
          <VoidHacksBenefits />
          <VoidHacksDomains />
          <LocationSection/>
        </>} />
        <Route path="/timelines" element={<VoidHacksTimeline ref={scheduleRef} />} />
        <Route path="/about-us" element={<AboutUs />} />
          {/* <VoidHacksSponsors/> */}
          
          {/* <VoidHacksTeam/> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
