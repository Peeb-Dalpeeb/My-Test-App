import { Profile } from './components/Profile'
import profileImage from './Assets/Young Woman Image.png'
import { MenuButtons } from './components/MenuButtons'
import { RxDashboard } from "react-icons/rx";

function App() {

  return (
    <main className="flex flex-col items-center py-10 ">
      <Profile
        imageUrl={profileImage}
        name="Aster Seawalker"
        occupation="Computer Science"
      />
      <div className="flex flex-col w-full max-w-xs px-10 gap-5">
        <MenuButtons
          icon={<RxDashboard />}
          name="Dashboard"
        />
      </div>
    </main>

 
  )
}

export default App
