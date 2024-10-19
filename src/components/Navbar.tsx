import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <div className="flex flex-1 justify-end gap-8">
      <div className="flex items-center gap-9">
        {['', 'Home', 'Project', 'Contact' ].map((link) => (
          <Link key={link} className="text-[#0e121b] text-sm font-medium" to={`/${link.toLowerCase()}`}>
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
