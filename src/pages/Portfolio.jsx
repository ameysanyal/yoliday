import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { Search } from 'lucide-react';
import Saved from './Saved';
import Shared from './Shared';
import Achievements from './Achievements';
import Project from './Project';

const Portfolio = () => {
  const location = useLocation();

  // search state for search query
  const [search, setSearch] = useState('');

  const tabs = [
    { name: 'Project', path: '/portfolio/project' },
    { name: 'Saved', path: '/portfolio/saved' },
    { name: 'Shared', path: '/portfolio/shared' },
    { name: 'Achievement', path: '/portfolio/achievements' },
  ];

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };


  const isActiveTab = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="w-auto sm:h-96 m-4 rounded-lg p-4 border border-gray-200 bg-white">
      <h1 className="font-semibold text-xl">Portfolio</h1>

      <div className="flex gap-3 justify-between flex-wrap">
        <div className="flex">
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              to={tab.path}
              className={`border-b-2 ${isActiveTab(tab.path) ? 'border-b-[#DF5532]' : 'border-b-transparent'
                } px-4 py-2 transition-colors hover:text-gray-700`}
            >
              {tab.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center relative">
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search a Project.."
            className="border border-black rounded-lg mr-16 p-0.5 pl-2 outline-none w-80 focus:border-[#DF5532] transition-colors"
          />
          <div className="absolute right-[68px] bg-[#DF5532] rounded-lg p-0.5 cursor-pointer hover:bg-[#c94a2b] transition-colors">
            <Search className="text-white" size={20} />
          </div>
        </div>
      </div>

      {/* portfolio tab routes */}
      <Routes>

        <Route path="/" element={<Navigate to="/portfolio/project" replace />} />
        <Route path="/portfolio/project" element={<Project search={search} />} />
        <Route path="/portfolio/saved" element={<Saved />} />
        <Route path="/portfolio/shared" element={<Shared />} />
        <Route path="/portfolio/achievements" element={<Achievements />} />
      </Routes>
    </div>
  );
};

export default Portfolio;
