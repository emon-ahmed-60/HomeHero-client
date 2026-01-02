import React, { useState } from 'react';
import { NavLink, Outlet, Link } from 'react-router';
import { 
  User, ClipboardList, PlusCircle, Briefcase, 
  LayoutDashboard, ChevronLeft, ChevronRight, Menu, Home, X 
} from 'lucide-react';
import useAuth from '../Hooks/useAuth';

const Dashboard = () => {
  const { theme } = useAuth();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  
  // Theme logic
  const isLight = theme === 'light';

  // Sidebar Links Configuration
  const sidebarLinks = [
    // /dashboard এ গেলে যেহেতু প্রোফাইল দেখাবে, তাই এটাকে end: true দিচ্ছি
    { name: 'Profile', path: '/dashboard', icon: <User size={20} />, exact: true },
    { name: 'My Bookings', path: '/dashboard/my-booking', icon: <ClipboardList size={20} />, exact: false },
    { name: 'My Services', path: '/dashboard/my-service', icon: <Briefcase size={20} />, exact: false },
    { name: 'Add Service', path: '/dashboard/add-service', icon: <PlusCircle size={20} />, exact: false },
  ];

  const sidebarClass = `
    fixed inset-y-0 left-0 z-50 transition-all duration-300 border-r
    ${isCollapsed ? 'w-20' : 'w-64'}
    ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
    ${isLight ? 'bg-white border-gray-200' : 'bg-[#1e293b] border-gray-800'}
  `;

  return (
    <div className={`flex min-h-screen transition-colors duration-300 ${
      isLight ? 'bg-gray-50' : 'bg-[#0f172a]'
    }`}>
      
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsMobileOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={sidebarClass}>
        <div className="flex flex-col h-full">
          
          {/* Header */}
          <div className={`p-6 flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
            {!isCollapsed && (
              <Link to="/" className={`text-xl font-bold flex items-center gap-2 ${isLight ? 'text-gray-900' : 'text-white'}`}>
                <div className="bg-indigo-600 p-1.5 rounded-lg text-white"><LayoutDashboard size={18} /></div>
                <span>HOME<span className="text-indigo-600">HERO</span></span>
              </Link>
            )}
            {isCollapsed && (
              <Link to="/" className="bg-indigo-600 p-2 rounded-xl text-white shadow-lg shadow-indigo-500/30"><Home size={20} /></Link>
            )}
            <button className="lg:hidden text-gray-400" onClick={() => setIsMobileOpen(false)}><X size={24} /></button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 mt-4 px-3 space-y-2">
            {sidebarLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.exact} // এই প্রোপার্টি ডাবল একটিভ রুট সমস্যা সমাধান করবে
                onClick={() => setIsMobileOpen(false)}
                className={({ isActive }) => `
                  flex items-center gap-4 px-4 py-3 rounded-xl font-semibold transition-all group
                  ${isActive 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25' 
                    : isLight 
                      ? 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600' 
                      : 'text-gray-400 hover:bg-[#0f172a] hover:text-indigo-400'}
                  ${isCollapsed ? 'justify-center' : ''}
                `}
              >
                <span className="shrink-0">{link.icon}</span>
                {!isCollapsed && <span className="text-sm">{link.name}</span>}
                
                {isCollapsed && (
                  <div className="fixed left-20 ml-2 px-2 py-1 bg-indigo-600 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50 whitespace-nowrap">
                    {link.name}
                  </div>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Sidebar Bottom Toggle */}
          <div className={`p-4 border-t ${isLight ? 'border-gray-100' : 'border-gray-800'}`}>
            <button 
              onClick={() => setIsCollapsed(!isCollapsed)}
              className={`hidden lg:flex w-full items-center gap-4 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                isLight ? 'text-gray-500 hover:bg-gray-100' : 'text-gray-400 hover:bg-[#0f172a]'
              } ${isCollapsed ? 'justify-center' : ''}`}
            >
              {isCollapsed ? <ChevronRight size={20} /> : <><ChevronLeft size={20} /> Collapse Menu</>}
            </button>
          </div>
        </div>
      </aside>

      {/* Content Area */}
      <main className={`flex-1 transition-all duration-300 ${isCollapsed ? 'lg:ml-20' : 'lg:ml-64'}`}>
        {/* Mobile Header */}
        <header className={`sticky top-0 z-30 flex items-center justify-between px-6 py-4 border-b lg:hidden transition-colors ${
          isLight ? 'bg-white border-gray-100' : 'bg-[#1e293b] border-gray-800'
        }`}>
          <button onClick={() => setIsMobileOpen(true)} className={isLight ? 'text-gray-600' : 'text-gray-300'}><Menu size={24} /></button>
          <span className={`font-bold tracking-tight ${isLight ? 'text-gray-900' : 'text-white'}`}>DASHBOARD</span>
          <div className="w-8 h-8 rounded-full bg-indigo-600" />
        </header>

        <div className="p-6 md:p-10 max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;