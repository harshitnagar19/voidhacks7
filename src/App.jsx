
import { useRef } from 'react'
import VoidHacksBenefits from './screens/VoidHacksBenefits'
import VoidHacksDomains from './screens/VoidHacksDomains'
import VoidHacksLanding from './screens/VoidHacksLanding'
import VoidHacksSponsors from './screens/VoidHacksSponsors'
import VoidHacksTeam from './screens/VoidHacksTeam'
import VoidHacksTimeline from './screens/VoidHacksTimeline'
 
function App() {
  const scheduleRef = useRef(null);
  return (
    <>
     <VoidHacksLanding scheduleRef={scheduleRef} />
     <VoidHacksTimeline ref={scheduleRef} />
     <VoidHacksSponsors/>
     <VoidHacksBenefits/>
     <VoidHacksDomains/>
     {/* <VoidHacksTeam/> */}
    </>
  )
}

export default App
