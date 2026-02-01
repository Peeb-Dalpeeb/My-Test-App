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
    <aside className={`flex overflow-y-auto flex-col [scrollbar-gutter:stable] items-center pt-10 pb-5 ${collapsed ? 'w-25' : 'w-80'} h-screen border-r border-gray-200`}>
      <div className="w-full flex justify-end px-4 mb-4">
        <button 
             onClick={() => setCollapsed(!collapsed)} 
             className="p-2 rounded-full hover:bg-gray-100 text-gray-500"
             aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
             <RxChevronLeft 
                className={`transition-transform duration-300 ${collapsed ? "rotate-180" : ""}`} 
                size={24} 
             />
        </button>
      </div>
      <Profile
        imageUrl={profileImage}
        name="Aster Seawalker"
        occupation="Computer Science"
        isCollapsed={collapsed}
      />
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