import React from "react"
import Signup from "./authentication/Signup"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Profile from "./authentication/Profile"
import Login from "./authentication/Login"
import PrivateRoute from "./authentication/PrivateRoute"
import ForgotPassword from "./authentication/ForgotPassword"
import UpdateProfile from "./authentication/UpdateProfile"
import Dashboard from "./google-drive/Dashboard"

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route element={<PrivateRoute/>}>
            {/* Drive */}
            <Route exact path="/" element={<Dashboard/>} />
            <Route exact path="/folder/:folderId" element={<Dashboard/>} />

            {/* Profile */}
            <Route path="/user" element={<Profile/>} />
            <Route path="/update-profile" element={<UpdateProfile/>} />
          </Route>

          {/* Auth */}
          <Route path="/signup" Component={Signup} />
          <Route path="/login" Component={Login} />
          <Route path="/forgot-password" Component={ForgotPassword} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
