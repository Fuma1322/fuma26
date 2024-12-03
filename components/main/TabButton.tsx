import React from "react";
import { motion } from "framer-motion";

type TabButtonProps = {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
};

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-green-700" : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab} className="flex flex-col items-start">
      <p className={`mr-3 font-semibold hover:text-green-700 ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-green-700 mt-2 mr-3"
      />
    </button>
  );
};

export default TabButton;