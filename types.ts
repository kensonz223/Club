export enum FacilityType {
  Sports = 'Sports',
  Leisure = 'Leisure',
  Event = 'Event',
  Kids = 'Kids'
}

export interface Facility {
  id: string;
  name: string;
  description: string;
  features: string[];
  type: FacilityType;
  imageUrl: string;
  openHours: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface PeakHourData {
  time: string;
  occupancy: number; // 0-100%
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}