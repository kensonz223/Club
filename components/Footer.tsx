import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">尊爵・住宅會所</h3>
            <p className="text-sm leading-relaxed">
              致力為住戶提供舒適、完善及多元化的休閒設施，融合運動、娛樂與社交空間。
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">聯絡我們</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>香港中環尊爵大道1號</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>(852) 2345 6789</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>service@prestige-club.hk</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">開放時間</h3>
            <p className="text-sm">會所大堂：24小時</p>
            <p className="text-sm">設施預約：09:00 - 21:00</p>
            <p className="text-sm mt-4 text-gray-500">© 2024 Prestige Clubhouse. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
