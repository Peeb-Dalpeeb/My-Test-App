import { FiClock, FiMoreHorizontal } from "react-icons/fi";
import { MainLayout } from "./MainLayout";
import { PageHeader } from "./PageHeader";
import { Card } from "./Card";

export function Classes() {
  return (
    <MainLayout>
      <PageHeader 
        title="My Classes" 
        subtitle="Manage your current enrollment." 
      />

      <div className="space-y-4">
        {/* Placeholder Class Card 1 */}
        <Card className="flex justify-between items-center">
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
        </Card>

        {/* Placeholder Class Card 2 */}
        <Card className="flex justify-between items-center">
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
        </Card>
      </div>
    </MainLayout>
  );
}