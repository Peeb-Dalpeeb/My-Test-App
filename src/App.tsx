import { Profile } from './components/Profile'
import profileImage from './Assets/Young Woman Image.png'

function App() {

  return (
      <Profile
        imageUrl={profileImage}
        name="Aster Seawalker"
        occupation="Computer Science"
      />
  )
}

export default App
