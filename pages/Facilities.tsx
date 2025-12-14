import React from 'react';
import { FACILITIES } from '../constants';
import { Clock, CheckCircle } from 'lucide-react';

export const Facilities: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">會所設施</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          從揮灑汗水的運動場館，到洗滌心靈的休憩空間，我們為您精心打造每一個細節。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FACILITIES.map((facility) => (
          <div key={facility.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={facility.imageUrl} 
                alt={facility.name} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow-sm">
                {facility.type}
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{facility.name}</h3>
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <Clock className="w-4 h-4" />
                <span>{facility.openHours}</span>
              </div>
              <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                {facility.description}
              </p>
              
              <div className="space-y-2 mb-6">
                {facility.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full py-2 px-4 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium">
                查看詳情
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
