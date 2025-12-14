import React, { useState } from 'react';
import { Download, Calendar, AlertCircle, Check } from 'lucide-react';
import { FACILITIES } from '../constants';

export const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'booking' | 'forms' | 'rules'>('booking');
  const [bookingForm, setBookingForm] = useState({
    facility: '',
    date: '',
    time: '',
    name: '',
    unit: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation of API call
    setTimeout(() => {
      setSubmitted(true);
      setBookingForm({ facility: '', date: '', time: '', name: '', unit: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }, 500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">住戶服務</h1>

      {/* Tabs */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setActiveTab('booking')}
            className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all ${
              activeTab === 'booking' ? 'bg-white text-blue-900 shadow-sm' : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            設施預約
          </button>
          <button
            onClick={() => setActiveTab('forms')}
            className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all ${
              activeTab === 'forms' ? 'bg-white text-blue-900 shadow-sm' : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            表格下載
          </button>
          <button
            onClick={() => setActiveTab('rules')}
            className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all ${
              activeTab === 'rules' ? 'bg-white text-blue-900 shadow-sm' : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            使用須知
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden min-h-[400px]">
        {activeTab === 'booking' && (
          <div className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-800">網上設施預約</h2>
            </div>
            
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">申請已提交</h3>
                <p className="text-gray-600 mt-2">我們會盡快確認您的預約，結果將透過電郵通知。</p>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">選擇設施</label>
                    <select 
                      required
                      className="w-full rounded-lg border-gray-300 border px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      value={bookingForm.facility}
                      onChange={e => setBookingForm({...bookingForm, facility: e.target.value})}
                    >
                      <option value="">請選擇...</option>
                      {FACILITIES.map(f => (
                        <option key={f.id} value={f.id}>{f.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">單位編號</label>
                    <input 
                      type="text" 
                      required
                      placeholder="例如: T1-12A"
                      className="w-full rounded-lg border-gray-300 border px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      value={bookingForm.unit}
                      onChange={e => setBookingForm({...bookingForm, unit: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">預約日期</label>
                    <input 
                      type="date" 
                      required
                      className="w-full rounded-lg border-gray-300 border px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      value={bookingForm.date}
                      onChange={e => setBookingForm({...bookingForm, date: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">預約時間</label>
                    <select 
                      required
                      className="w-full rounded-lg border-gray-300 border px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      value={bookingForm.time}
                      onChange={e => setBookingForm({...bookingForm, time: e.target.value})}
                    >
                      <option value="">請選擇...</option>
                      <option value="09:00">09:00 - 10:00</option>
                      <option value="10:00">10:00 - 11:00</option>
                      <option value="11:00">11:00 - 12:00</option>
                      <option value="14:00">14:00 - 15:00</option>
                      <option value="15:00">15:00 - 16:00</option>
                      <option value="16:00">16:00 - 17:00</option>
                    </select>
                  </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">住戶姓名</label>
                    <input 
                      type="text" 
                      required
                      className="w-full rounded-lg border-gray-300 border px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      value={bookingForm.name}
                      onChange={e => setBookingForm({...bookingForm, name: e.target.value})}
                    />
                </div>
                <div className="pt-4">
                  <button type="submit" className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg">
                    提交預約
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {activeTab === 'forms' && (
          <div className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Download className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-800">常用表格下載</h2>
            </div>
            <div className="space-y-4">
              {[
                '會所設施長期使用申請表',
                '訪客登記表',
                '宴會廳租用協議書',
                '住戶證補領申請表',
                '興趣班報名表'
              ].map((form, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors border border-gray-100">
                  <span className="font-medium text-gray-700">{form}</span>
                  <button className="flex items-center gap-2 text-blue-600 text-sm font-medium hover:text-blue-800">
                    <Download className="w-4 h-4" /> 下載 PDF
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'rules' && (
          <div className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-800">使用須知與守則</h2>
            </div>
            <div className="space-y-6 text-gray-600">
              <div className="border-b border-gray-100 pb-4">
                <h3 className="font-bold text-gray-800 mb-2 text-lg">一般守則</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>所有使用者必須為本苑住戶或其陪同之訪客。</li>
                  <li>請保持場地清潔，使用後請自行清理垃圾。</li>
                  <li>場內嚴禁吸煙、飲酒（宴會廳除外）及賭博。</li>
                  <li>請愛護公物，如有損壞須照價賠償。</li>
                </ul>
              </div>
              <div className="border-b border-gray-100 pb-4">
                <h3 className="font-bold text-gray-800 mb-2 text-lg">游泳池安全指引</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>進入泳池前請先淋浴及通過洗腳池。</li>
                  <li>12歲以下兒童必須由成人陪同方可進入泳池範圍。</li>
                  <li>如遇雷暴警告或惡劣天氣，泳池將暫停開放。</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2 text-lg">預約取消政策</h3>
                <p>如需取消已預約之設施，請於使用時間前至少 24 小時通知管理處，否則將扣除相應之住戶點數。</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
