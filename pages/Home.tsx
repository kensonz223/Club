import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Map, Star } from 'lucide-react';
import { UsageChart } from '../components/UsageChart';
import { APP_NAME } from '../constants';

export const Home: React.FC = () => {
  return (
    <div className="space-y-16 pb-12">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://picsum.photos/1920/1080?random=10")',
            filter: 'brightness(0.6)'
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight shadow-sm">
            歡迎蒞臨 {APP_NAME}
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-10 leading-relaxed font-light">
            本住宅會所致力為住戶提供舒適、完善及多元化的休閒設施，<br className="hidden md:block"/>融合運動、娛樂與社交空間，滿足不同年齡層及生活需要。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/facilities" 
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              瀏覽設施 <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-3 bg-white hover:bg-gray-100 text-blue-900 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg"
            >
              預約服務
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Info Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-amber-500">
            <Clock className="w-10 h-10 text-amber-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">開放時間</h3>
            <p className="text-gray-600">會所大堂全日 24 小時開放。各項設施具體開放時間請參閱設施詳情頁面。</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-blue-500">
            <Map className="w-10 h-10 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">便捷預約</h3>
            <p className="text-gray-600">透過網上平台輕鬆查閱設施狀態，隨時隨地提交預約申請，省時方便。</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-emerald-500">
            <Star className="w-10 h-10 text-emerald-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">尊尚體驗</h3>
            <p className="text-gray-600">定期舉辦各類社區活動與興趣班，豐富住戶生活，營造和諧鄰里關係。</p>
          </div>
        </div>
      </section>

      {/* Chart & News Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-gray-900">會所動態</h2>
              <span className="text-blue-600 text-sm font-medium cursor-pointer hover:underline">查看全部</span>
            </div>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-100">
                  <div className="w-24 h-24 bg-gray-200 rounded-md overflow-hidden flex-shrink-0">
                     <img src={`https://picsum.photos/200/200?random=${20+i}`} alt="News" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">最新公告</span>
                    <h4 className="text-lg font-bold text-gray-800 mt-2 mb-1">夏季游泳班現正接受報名</h4>
                    <p className="text-sm text-gray-500 line-clamp-2">專業教練指導，適合不同程度的小朋友參加。名額有限，先到先得。</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">實時資訊</h2>
            <UsageChart />
            <div className="mt-6 p-6 bg-blue-900 text-white rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">今日天氣概況</h3>
              <div className="flex items-center gap-4">
                <span className="text-4xl font-light">28°C</span>
                <div className="text-sm opacity-90">
                  <p>晴朗</p>
                  <p>濕度: 75%</p>
                </div>
              </div>
              <p className="mt-4 text-sm opacity-80 border-t border-blue-800 pt-4">
                室外泳池水溫：26°C (暫停開放) <br/>
                室內泳池水溫：28°C (正常開放)
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
