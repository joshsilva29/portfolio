import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import AboutPage from "./pages/about-page/AboutPage"
import ContactPage from "./pages/contact-page/ContactPage"
import HomePage from "./pages/home-page/HomePage"
import Pokemonify from "./pages/project-pages/pokemonify/Pokemonify"
import Portfolio from "./pages/project-pages/portfolio/Portfolio"

let hash = true;

let home = hash ? "/" : import.meta.env.BASE_URL;
let contact = hash ? "/contact" : import.meta.env.BASE_URL + 'contact';
let about = hash ? "/about" : import.meta.env.BASE_URL + 'about';
let mnfy = hash ? "/mnfy" : import.meta.env.BASE_URL + 'mnfy';
let portfolio = hash ? "/portfolio" : import.meta.env.BASE_URL + 'portfolio';

const router = createHashRouter([
  {
    path: home,
    element: <HomePage />,
    errorElement: <HomePage />
  },
  {
    path: contact,
    element: <ContactPage />,
    errorElement: <HomePage />
  },
  {
    path: about,
    element: <AboutPage />,
    errorElement: <AboutPage />
  },
  {
    path: mnfy,
    element: <Pokemonify />,
    errorElement: <Pokemonify />
  },
  {
    path: portfolio,
    element: <Portfolio />,
    errorElement: <Portfolio />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
