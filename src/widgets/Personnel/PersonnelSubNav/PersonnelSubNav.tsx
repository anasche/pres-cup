import React from 'react';
import { NavLink } from 'react-router-dom';

const PersonnelSubNav: React.FC = () => {
  const tabs = [
    { name: 'Horses', path: '/personnel/horses' },
    { name: 'Owners', path: '/personnel/owners' },
    { name: 'Trainers', path: '/personnel/trainers' },
    { name: 'Jockeys', path: '/personnel/jockeys' },
  ];

  return (
    <div className="flex justify-center mb-12 px-4">
      <div className="inline-flex bg-[#0A1045] rounded-lg p-1">
        {tabs.map((tab) => (
          <NavLink
            key={tab.name}
            to={tab.path}
            className={({ isActive }) =>
              `px-8 py-2.5 rounded-md text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                isActive 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'text-white/40 hover:text-white'
              }`
            }
          >
            {tab.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default PersonnelSubNav;
