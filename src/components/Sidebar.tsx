import { 
  RxDashboard, 
  RxReader, 
  RxCalendar, 
  RxBarChart, 
  RxDownload, 
  RxGear, 
  RxExit
} from "react-icons/rx";
import { FiUsers } from "react-icons/fi";
import { IoTrashOutline } from "react-icons/io5";

// Components and assets
import profileImage from '../Assets/Young Woman Image.png'
import { MenuButton } from './MenuButton'
import { Profile } from './Profile'

const MENU_ITEMS = [
{ icon: <RxDashboard />, label: "Dashboard" },
{ icon: <RxReader />, label: "Classes" },
{ icon: <FiUsers />, label: "Groups" },
{ icon: <RxCalendar />, label: "Schedule" },
{ icon: <RxBarChart />, label: "Grades" },
{ icon: <RxDownload />, label: "Downloads" },
{ icon: <RxGear />, label: "Settings" },
{ icon: <IoTrashOutline />, label: "Trash" },
{ icon: <RxExit />, label: "Log Out" },
];

interface SidebarProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

export function Sidebar({activeTab, setActiveTab}: SidebarProps) {

  return (
    <aside className="flex overflow-y-auto flex-col [scrollbar-gutter:stable] items-center pt-10 pb-5 w-80 h-screen border-r border-gray-200">
      <Profile
        imageUrl={profileImage}
        name="Aster Seawalker"
        occupation="Computer Science"
      />
      <div className="flex flex-col w-full max-w-xs px-10 gap-3">
        {MENU_ITEMS.map(({ icon, label }) => (
          <MenuButton 
            key={label}
            icon={icon}
            label={label}

            variant={activeTab === label ? 'primary' : 'ghost'}
            onClick={() => setActiveTab(label)}
          />
        ))}
      </div>
    </aside>
  )
}