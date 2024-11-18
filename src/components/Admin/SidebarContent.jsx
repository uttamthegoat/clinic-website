import { Home, Calendar, Settings, HelpCircle } from 'lucide-react';
import DefaultPage from './AdminPages/DefaultPage'
import AppointmentsPage from './AdminPages/AppointmentsPage'
import SettingsPage from './AdminPages/SettingsPage'
import HelpPage from './AdminPages/HelpPage'

export const sidebarItems = [
  { icon: Home, label: 'Dashboard', content: 'Dashboard Overview', route: '/admin/', element: <DefaultPage /> },
  { icon: Calendar, label: 'Appointments', content: 'Appointment Schedule', route: '/admin/appointments', element: <AppointmentsPage /> },
  { icon: Settings, label: 'Settings', content: 'System Settings', route: '/admin/settings', element: <SettingsPage /> },
  { icon: HelpCircle, label: 'Help', content: 'Help and Support', route: '/admin/help', element: <HelpPage /> },
];


