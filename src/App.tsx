import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import HomePage from "./pages/HomePage"
import Favorite from "./pages/Favorite"
import { useCharacterStore } from "./store/useCharacterStore"
import { useEffect } from "react"
import CharacterPage from "./pages/CharacterPage"


function App() {
  const axiosCharacter = useCharacterStore(state => state.axiosCharacter)
  const loadFromStorage = useCharacterStore(state => state.loadFromStorage)

  useEffect(() => { axiosCharacter(); loadFromStorage()}, [axiosCharacter, loadFromStorage])

  return (
    <>
      <BrowserRouter>
        <div>
          <Header />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/character" element={<CharacterPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
