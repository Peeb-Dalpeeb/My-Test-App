import { FiUsers, FiBookOpen, FiAward } from "react-icons/fi";
import { MainLayout } from "./MainLayout";
import { PageHeader } from "./PageHeader";
import { Card } from "./Card";
import { IconBadge } from "./IconBadge";

export function Dashboard() {
  return (
    <MainLayout>
      <PageHeader 
        title="Welcome back, Aster!" 
        subtitle="Here is what's happening with your classes today." 
      />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1 */}
        <Card className="flex flex-col gap-2">
          <IconBadge icon={<FiBookOpen size={24} />} color="blue" />
          <h3 className="text-gray-500 font-medium">Enrolled Classes</h3>
          <p className="text-3xl font-bold">4</p>
        </Card>

        {/* Card 2 */}
        <Card className="flex flex-col gap-2">
          <IconBadge icon={<FiUsers size={24} />} color="purple" />
          <h3 className="text-gray-500 font-medium">Study Groups</h3>
          <p className="text-3xl font-bold">2</p>
        </Card>

        {/* Card 3 */}
        <Card className="flex flex-col gap-2">
          <IconBadge icon={<FiAward size={24} />} color="green" />
          <h3 className="text-gray-500 font-medium">Average Grade</h3>
          <p className="text-3xl font-bold">A-</p>
        </Card>

      </div>
    </MainLayout>
  );
}