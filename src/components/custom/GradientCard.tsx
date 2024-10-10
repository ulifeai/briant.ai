import React, { useState, useEffect, ReactNode } from "react";
import Link from "next/link";

// Function to generate a random gradient
const generateRandomGradient = () => {
  const colors = [
    "#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6",
    "#E6B333", "#3366E6", "#999966", "#99FF99", "#B34D4D",
    "#80B300", "#809900", "#E6B3B3", "#6680B3", "#66991A",
    "#FF99E6", "#CCFF1A", "#FF1A66", "#E6331A", "#33FFCC",
    "#66994D", "#B366CC", "#4D8000", "#B33300", "#CC80CC",
  ];

  const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
  const randomColor2 = colors[Math.floor(Math.random() * colors.length)];

  return `linear-gradient(135deg, ${randomColor1}, ${randomColor2})`;
};

interface GradientCardProps {
  children: ReactNode;
  link?: string;
  onDelete?: () => void;
  onUpdate?: () => void;
}

const GradientCard: React.FC<GradientCardProps> = ({ children, link, onDelete, onUpdate }) => {
  const [gradient, setGradient] = useState("");

  useEffect(() => {
    // Set a random gradient when the component mounts
    setGradient(generateRandomGradient());
  }, []);

  const CardContent = (
    <div className="rounded-lg shadow-lg overflow-hidden m-4 max-w-xs transition-all duration-300">
      <div className="h-40" style={{ background: gradient }}></div>
      <div className="p-4">
        {children}
        {(onDelete || onUpdate) && (
          <div className="mt-4 flex space-x-2">
            {onUpdate && (
              <button
                onClick={onUpdate}
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Update
              </button>
            )}
            {onDelete && (
              <button
                onClick={onDelete}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );

  return link ? (
    <Link href={link} passHref>
        {CardContent}
    </Link>
  ) : (
    CardContent
  );
};

export default GradientCard;
