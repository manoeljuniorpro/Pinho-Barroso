
import React from 'react';
import { MessageSquare } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  ctaText = "Verificar meu direito", 
  onCtaClick
}) => {
  return (
    <div className="bg-[#1a3241] text-white p-8 rounded-xl border-t-4 border-[#F2CA61] shadow-2xl flex flex-col h-full transition-transform hover:-translate-y-2">
      <h3 className="text-xl font-bold mb-4 min-h-[3rem] text-[#F2CA61]">
        {title}
      </h3>
      <div className="text-sm leading-relaxed mb-8 flex-grow whitespace-pre-line text-gray-200">
        {description}
      </div>
      <div className="flex justify-center mt-auto">
        <button 
          onClick={onCtaClick}
          className="bg-[#25D366] text-white px-8 py-3 rounded-md font-bold hover:bg-[#20bd5a] transition-colors flex items-center gap-2 text-xs uppercase tracking-widest shadow-lg"
        >
          <MessageSquare className="w-4 h-4" />
          {ctaText}
        </button>
      </div>
    </div>
  );
};
