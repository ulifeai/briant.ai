import React, { useState, useEffect, ReactNode } from "react";
import Link from "next/link";
import { generateRandomGradient } from "@/lib/helpers/colors";

// Function to generate a random gradient


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
