import React from 'react';
import { Info, AlertTriangle, X, Check } from 'lucide-react';

type AlertType = 'info' | 'warning' | 'error' | 'success';

interface AlertProps {
  type?: AlertType;
  children?: React.ReactNode;
}

export const Alert: React.FC<AlertProps> = ({ type = 'info', children }) => {
  const styles: Record<AlertType, string> = {
    info: "bg-blue-50 text-blue-800 border-blue-200",
    warning: "bg-amber-50 text-amber-800 border-amber-200",
    error: "bg-red-50 text-red-800 border-red-200",
    success: "bg-emerald-50 text-emerald-800 border-emerald-100"
  };

  const icons: Record<AlertType, React.ReactNode> = {
    info: <Info className="text-blue-500" size={20} />,
    warning: <AlertTriangle className="text-amber-500" size={20} />,
    error: <X className="text-red-500" size={20} />,
    success: <Check className="text-emerald-500" size={20} />
  };

  return (
    <div className={`flex items-start gap-3 p-4 border rounded-xl my-6 ${styles[type]}`}>
      <div className="mt-0.5 shrink-0">{icons[type]}</div>
      <div className="text-sm font-medium leading-relaxed">{children}</div>
    </div>
  );
};