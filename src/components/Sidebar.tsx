import { useState } from 'react';
import { 
  RxDashboard, 
  RxReader, 
  RxCalendar, 
  RxBarChart, 
  RxDownload, 
  RxGear, 
  RxExit,
  RxChevronLeft
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
    const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`flex overflow-y-auto flex-col items-center pt-10 pb-5 ${collapsed ? 'w-20' : 'w-80 [scrollbar-gutter:stable]'} h-screen border-r border-gray-200`}>
      <div className={`w-full relative flex ${collapsed ? "flex-col gap-2" : "justify-center"}`}>
         <button 
             onClick={() => setCollapsed(!collapsed)} 
             className={`rounded-full hover:bg-gray-100 text-gray-500 ${collapsed ? "self-center mb-4" : "absolute right-4"}`}
             aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
             <RxChevronLeft 
                className={`transition-transform duration-300 ${collapsed ? "rotate-180" : ""}`} 
                size={24} 
             />
        </button>
        <Profile
        imageUrl={profileImage}
        name="Aster Seawalker"
        occupation="Computer Science"
        isCollapsed={collapsed}
      />
      </div>
      <div className={`flex flex-col ${collapsed ? '' : 'w-full px-10'}  gap-3`}>
        {MENU_ITEMS.map(({ icon, label }) => (
          <MenuButton 
            key={label}
            icon={icon}
            label={label}
            collapsed={collapsed}
            variant={activeTab === label ? 'primary' : 'ghost'}
            onClick={() => setActiveTab(label)}
          />
        ))}
      </div>
    </aside>
  )
}