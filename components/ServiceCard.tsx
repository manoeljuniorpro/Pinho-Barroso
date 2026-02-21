
import React from 'react';

interface ServiceCardProps {
  title: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  ctaText = "Saiba mais", 
  onCtaClick
}) => {
  return (
    <div className="bg-[#1a3241] text-white p-6 md:p-8 rounded-xl border-t-4 border-[#F2CA61] shadow-2xl flex flex-col items-center justify-center h-full transition-transform hover:-translate-y-2 text-center">
      <h3 className="text-xl md:text-2xl font-bold mb-8 text-[#F2CA61] font-serif uppercase tracking-wide">
        {title}
      </h3>
      <div className="flex justify-center mt-auto w-full">
        <button 
          onClick={onCtaClick}
          className="bg-[#F2CA61] text-black px-10 py-4 rounded-md font-bold hover:bg-[#e0b950] transition-colors flex items-center justify-center gap-2 text-sm uppercase tracking-widest shadow-lg w-full"
        >
          {ctaText}
        </button>
      </div>
    </div>
  );
};
