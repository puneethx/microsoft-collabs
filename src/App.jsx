import './App.scss'
import Taskbar from './components/taskbar/taskbar'
// import Tasks from "./pages/tasks/tasks"
import MemTasks from "./pages/member-tasks/member"
import Collab from "./pages/collab/collab"
import Calender from "./pages/calender/calender"
import AdminTasks from "./pages/admin-tasks/admin"
import LeadTasks from "./pages/lead-tasks/lead"
import Leave from "./pages/leave/leave"
import Admin from "./pages/admin-login/admin"
import Member from './pages/member-login/member'
import Lead from "./pages/lead-login/lead"
import Windows from "./pages/windevices/windevices"

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path='/' element={<><MemTasks /><Taskbar /></>}></Route>
          <Route path="/collab" element={<><Collab/><Taskbar /></>}></Route>
          <Route path="/calender" element={<><Calender/><Taskbar /></>}></Route>
          <Route path="/leave" element={<><Leave /><Taskbar /></>}></Route>
          <Route path="/admin-tasks" element={<><AdminTasks/><Taskbar /></>}></Route>
          <Route path="/lead-tasks" element={<><LeadTasks/><Taskbar /></>}></Route>
          <Route path="/windows-devices" element={<><Windows/><Taskbar/></>}></Route>
          <Route path="/lead-login" element={<Lead/>}></Route>
          <Route path="/admin-login" element={<Admin/>}></Route>
          <Route path="/member-login" element={<Member/>}></Route>
        </Routes>
        
      </>
    </BrowserRouter>
  )
}

export default App
