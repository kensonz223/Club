import { Facility, FacilityType, PeakHourData } from './types';

export const APP_NAME = "尊爵・住宅會所";

export const FACILITIES: Facility[] = [
  {
    id: 'pool',
    name: '室內恆溫游泳池',
    description: '會所設有設計雅致的室內游泳池，水質定期監測，環境寬敞舒適，適合休閒暢泳及日常鍛煉。',
    features: ['日常健身', '放鬆休憩', '親子活動（須依使用規則）'],
    type: FacilityType.Sports,
    imageUrl: 'https://picsum.photos/800/600?random=1',
    openHours: '07:00 - 22:00'
  },
  {
    id: 'gym',
    name: '專業健身室',
    description: '健身室配備多款專業健身器材，包括有氧及重量訓練設備，滿足不同健身需求。明亮通風空間，分區設計提升舒適度。',
    features: ['有氧訓練區', '重量訓練區', '瑜伽伸展區'],
    type: FacilityType.Sports,
    imageUrl: 'https://picsum.photos/800/600?random=2',
    openHours: '24小時開放'
  },
  {
    id: 'billiards',
    name: '英式桌球室',
    description: '桌球室環境寧靜雅致，適合住戶休閒娛樂及朋友聚會，享受輕鬆愉快的活動時光。',
    features: ['專業球桌', '休閒座椅', '飲品自助區'],
    type: FacilityType.Leisure,
    imageUrl: 'https://picsum.photos/800/600?random=3',
    openHours: '09:00 - 23:00'
  },
  {
    id: 'kids',
    name: '兒童遊戲室',
    description: '專為兒童而設的安全遊戲空間，配備多款益智及互動設施，讓小朋友在安全環境中盡情玩樂。',
    features: ['益智玩具', '互動設施', '軟墊安全區'],
    type: FacilityType.Kids,
    imageUrl: 'https://picsum.photos/800/600?random=4',
    openHours: '09:00 - 20:00 (清潔時間除外)'
  },
  {
    id: 'banquet',
    name: '多功能宴會廳',
    description: '多功能宴會廳設計高雅，適合舉辦住戶聚會、生日派對、小型活動或社區聚會。',
    features: ['私人活動', '社區聚會', '影音設備'],
    type: FacilityType.Event,
    imageUrl: 'https://picsum.photos/800/600?random=5',
    openHours: '預約制 (10:00 - 23:00)'
  },
  {
    id: 'music',
    name: '隔音音樂室',
    description: '音樂室提供良好隔音設計，適合樂器練習及音樂活動，讓住戶盡情享受音樂時光。',
    features: ['專業隔音', '鋼琴配備', '譜架提供'],
    type: FacilityType.Leisure,
    imageUrl: 'https://picsum.photos/800/600?random=6',
    openHours: '08:00 - 22:00'
  },
  {
    id: 'sports_hall',
    name: '綜合室內運動場',
    description: '室內運動場空間寬敞，適合進行多種球類及團體運動，為住戶提供全天候運動選擇。',
    features: ['羽毛球場', '籃球場', '排球網'],
    type: FacilityType.Sports,
    imageUrl: 'https://picsum.photos/800/600?random=7',
    openHours: '07:00 - 22:00'
  }
];

export const PEAK_HOURS_DATA: PeakHourData[] = [
  { time: '06:00', occupancy: 10 },
  { time: '09:00', occupancy: 35 },
  { time: '12:00', occupancy: 20 },
  { time: '15:00', occupancy: 45 },
  { time: '18:00', occupancy: 85 },
  { time: '19:00', occupancy: 95 },
  { time: '20:00', occupancy: 80 },
  { time: '22:00', occupancy: 30 },
];

export const SYSTEM_INSTRUCTION = `
You are the AI Concierge for "${APP_NAME}".
Your goal is to assist residents with information about the clubhouse facilities, rules, and booking procedures.
Be polite, professional, and helpful.

Here is the data about our facilities:
${JSON.stringify(FACILITIES)}

General Rules:
- Swimming Pool: Swim caps required. No food or drink.
- Gym: Sports shoes required. Wipe down equipment after use.
- Kids Room: Adult supervision required at all times. No shoes allowed inside.
- Booking: Can be done via the "Services" page forms.
- Guests: Residents may bring up to 2 guests per facility visit (fees apply).

If asked about something not in the data, apologize politely and suggest contacting the management office at 2345-6789.
Reply in Traditional Chinese (Cantonese colloquialism is acceptable if the user uses it, otherwise standard written Chinese).
`;
