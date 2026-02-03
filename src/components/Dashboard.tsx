import { FiUsers, FiBookOpen, FiAward } from "react-icons/fi";

export function Dashboard() {
  return (
    // 'flex-1' tells this container: "Take up all the remaining space on the screen"
    <main className="flex-1 overflow-y-auto p-10 bg-gray-50 ">
      
      {/* Header Section */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Welcome back, Aster!</h1>
        <p className="text-muted mt-2">Here is what's happening with your classes today.</p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-2">
            <div className="p-3 bg-blue-50 text-primary w-fit rounded-xl">
                <FiBookOpen size={24} />
            </div>
            <h3 className="text-gray-500 font-medium">Enrolled Classes</h3>
            <p className="text-3xl font-bold">4</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-2">
            <div className="p-3 bg-purple-50 text-purple-600 w-fit rounded-xl">
                <FiUsers size={24} />
            </div>
            <h3 className="text-gray-500 font-medium">Study Groups</h3>
            <p className="text-3xl font-bold">2</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-2">
             <div className="p-3 bg-green-50 text-green-600 w-fit rounded-xl">
                <FiAward size={24} />
            </div>
            <h3 className="text-gray-500 font-medium">Average Grade</h3>
            <p className="text-3xl font-bold">A-</p>
        </div>

      </div>
    </main>
  );
}