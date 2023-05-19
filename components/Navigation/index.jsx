"use client";
import { useState } from "react";
import Card from "../Card";
import { navList } from "@constants";

const Navigation = () => {
  const [activePage, setActivePage] = useState(0);
  const hoverClassNames =
    "hover:bg-socialBlue200 hover:bg-opacity-20 hover:-mx-6 px-4 hover:shadow-sm transition-all scale-110";
  const activeClassNames = "text-tertiary500 bg-socialBlue bg-opacity-80 px-4 -mx-10 shadow-sm";
  return (
    <Card>
      <div className="p-2">
        <h2 className="text-2xl block text-socialBlue font-bold mb-4">
          Navigation
        </h2>
        {navList.map((navLink) => (
          <a
            onClick={() => setActivePage(navLink.id)}
            key={navLink.id}
            className={`flex items-center gap-3 px-6 py-3 my-2 rounded-md ${
              activePage == navLink.id ? activeClassNames : hoverClassNames
            }`}
            href={navLink.link}
          >
            {<navLink.icon />} {navLink.displayName}
          </a>
        ))}
      </div>
    </Card>
  );
};

export default Navigation;
