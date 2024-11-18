import { Home, Calendar, Settings, HelpCircle } from 'lucide-react';

export const sidebarItems = [
  { icon: Home, label: 'Dashboard', content: 'Dashboard Overview', route: '/admin/' },
  { icon: Calendar, label: 'Appointments', content: 'Appointment Schedule', route: '/admin/appointments' },
  { icon: Settings, label: 'Settings', content: 'System Settings', route: '/admin/settings' },
  { icon: HelpCircle, label: 'Help', content: 'Help and Support', route: '/admin/help' },
];


