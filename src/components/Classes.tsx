import { FiClock, FiMoreHorizontal } from "react-icons/fi";

export function Classes() {
  return (
    <div className="flex-1 overflow-y-auto p-10 bg-gray-50">
      
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">My Classes</h1>
        <p className="text-muted mt-2">Manage your current enrollment.</p>
      </header>

      <div className="space-y-4">
        {/* Placeholder Class Card 1 */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center">
            <div className="flex flex-col gap-1">
                <h3 className="font-bold text-lg text-gray-800">Advanced React Patterns</h3>
                <div className="flex items-center gap-2 text-muted text-sm">
                    <FiClock />
                    <span>Mon/Wed 2:00 PM</span>
                </div>
            </div>
            <button type="button" className="p-2 hover:bg-gray-50 rounded-full text-gray-400" aria-label="More options">
                <FiMoreHorizontal size={20} />
            </button>
        </div>

        {/* Placeholder Class Card 2 */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center">
            <div className="flex flex-col gap-1">
                <h3 className="font-bold text-lg text-gray-800">UI/UX Design Principles</h3>
                <div className="flex items-center gap-2 text-muted text-sm">
                    <FiClock />
                    <span>Tue/Thu 10:00 AM</span>
                </div>
            </div>
            <button type="button" className="p-2 hover:bg-gray-50 rounded-full text-gray-400" aria-label="More options">
                <FiMoreHorizontal size={20} />
            </button>
        </div>
      </div>

    </div>
  );
}