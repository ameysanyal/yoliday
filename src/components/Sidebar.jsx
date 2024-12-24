import { useEffect, useState } from 'react';
import { Home, File, Inbox, User, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../public/yoliday-logo.png'

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation()

  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth < 1300);
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className={`bg-[#DF5532] ${isCollapsed ? 'w-16' : 'w-52'
        } h-screen transition-all`}
    >
      <img src={logo} alt="yoliday" className='w-32 p-2' />
      <button
        className="text-white p-2"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <Menu />
      </button>
      <nav className="mt-5">
        <Link to="/dashboard" className={`${location.pathname === "/dashboard" && "bg-gradient-to-r from-white/50 to-[#DF5532]"}  flex items-center p-3 pl-4 text-white hover:bg-gradient-to-r from-white/50 to-[#DF5532]`}>
          <Home className="mr-2" />
          {!isCollapsed && 'Dashboard'}
        </Link>
        <Link to="/portfolio/project" className={`${location.pathname.startsWith('/portfolio') && "bg-gradient-to-r from-white/50 to-[#DF5532]"}  flex items-center p-3 pl-4 text-white hover:bg-gradient-to-r from-white/50 to-[#DF5532]`}>
          <File className="mr-2" />
          {!isCollapsed && 'Portfolio'}
        </Link>
        <Link to="/inputs" className={`${location.pathname === "/inputs" && "bg-gradient-to-r from-white/50 to-[#DF5532]"}  flex items-center p-3 pl-4 text-white hover:bg-gradient-to-r from-white/50 to-[#DF5532]`}>
          <Inbox className="mr-2" />
          {!isCollapsed && 'Inputs'}
        </Link>
        <Link to="/profile" className={`${location.pathname === "/profile" && "bg-gradient-to-r from-white/50 to-[#DF5532]"}  flex items-center p-3 pl-4 text-white hover:bg-gradient-to-r from-white/50 to-[#DF5532]`}>
          <User className="mr-2" />
          {!isCollapsed && 'Profile'}
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
