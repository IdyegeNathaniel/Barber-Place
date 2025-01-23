import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import MainLayout from "./Layouts/MainLayout"
import HomePage from "./Pages/HomePage"
import AboutPage from "./Pages/AboutPage"
import ContactPage from "./Pages/ContactPage"
import AppointmentPage from "./Pages/AppointmentPage"
import ServicePage from "./Pages/ServicePage"
import NotFoundPage from "./Pages/NotFoundPage"
import ProfilePage from "./Pages/ProfilePage"
import LoginPage from "./Pages/LoginPage"

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="" element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/appointment" element={<AppointmentPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App