import { ReactNode } from 'react';

type BadgeColor = 'blue' | 'purple' | 'green';

interface IconBadgeProps {
  icon: ReactNode;
  color?: BadgeColor;
}

const colorClasses: Record<BadgeColor, string> = {
  blue: 'bg-blue-50 text-primary',
  purple: 'bg-purple-50 text-purple-600',
  green: 'bg-green-50 text-green-600',
};

export function IconBadge({ icon, color = 'blue' }: IconBadgeProps) {
  return (
    <div className={`p-3 ${colorClasses[color]} w-fit rounded-xl`}>
      {icon}
    </div>
  );
}
