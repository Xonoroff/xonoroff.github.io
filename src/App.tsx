import { Routes, Route } from 'react-router-dom'
import { ScrollToTop } from './components/ScrollToTop'
import Home from './pages/Home'
import Unity from './pages/Unity'
import Backend from './pages/Backend'
import Manager from './pages/Manager'

// Unity project pages
import DiceDreamsUnity from './pages/projects/unity/DiceDreams'
import YellowStoneUnity from './pages/projects/unity/YellowStone'
import SlotomaniaUnity from './pages/projects/unity/Slotomania'
import CharmKingUnity from './pages/projects/unity/CharmKing'
import SlotsEraUnity from './pages/projects/unity/SlotsEra'
import ScatterSlotsUnity from './pages/projects/unity/ScatterSlots'

// Backend project pages
import DiceDreamsBackend from './pages/projects/backend/DiceDreams'

// Engineering Manager project pages
import DiceDreamsManager from './pages/projects/manager/DiceDreams'
import YellowStoneManager from './pages/projects/manager/YellowStone'
import SlotsEraManager from './pages/projects/manager/SlotsEra'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/unity" element={<Unity />} />
      <Route path="/backend" element={<Backend />} />

      {/* Unity project pages */}
      <Route path="/unity/dice-dreams" element={<DiceDreamsUnity />} />
      <Route path="/unity/yellow-stone" element={<YellowStoneUnity />} />
      <Route path="/unity/slotomania" element={<SlotomaniaUnity />} />
      <Route path="/unity/charm-king" element={<CharmKingUnity />} />
      <Route path="/unity/slots-era" element={<SlotsEraUnity />} />
      <Route path="/unity/scatter-slots" element={<ScatterSlotsUnity />} />

      {/* Backend project pages */}
      <Route path="/backend/dice-dreams" element={<DiceDreamsBackend />} />

      {/* Engineering Manager pages */}
      <Route path="/engineering-manager" element={<Manager />} />
      <Route path="/engineering-manager/dice-dreams" element={<DiceDreamsManager />} />
      <Route path="/engineering-manager/yellow-stone" element={<YellowStoneManager />} />
      <Route path="/engineering-manager/slots-era" element={<SlotsEraManager />} />
    </Routes>
    </>
  )
}

export default App
