import type { LabelKind } from './types';

/** Display labels for every filter key, in both languages. */
export const LABELS: Record<LabelKind, Record<string, { th: string; en: string }>> = {
  region: { north: { th: 'ภาคเหนือ', en: 'North' }, northeast: { th: 'ภาคอีสาน', en: 'Northeast' }, central: { th: 'ภาคกลาง', en: 'Central' }, east: { th: 'ภาคตะวันออก', en: 'East' }, west: { th: 'ภาคตะวันตก', en: 'West' }, south: { th: 'ภาคใต้', en: 'South' } },
  province: { chiangmai: { th: 'เชียงใหม่', en: 'Chiang Mai' }, chiangrai: { th: 'เชียงราย', en: 'Chiang Rai' }, maehongson: { th: 'แม่ฮ่องสอน', en: 'Mae Hong Son' }, nakhonratchasima: { th: 'นครราชสีมา', en: 'Nakhon Ratchasima' }, ubonratchathani: { th: 'อุบลราชธานี', en: 'Ubon Ratchathani' }, bangkok: { th: 'กรุงเทพฯ', en: 'Bangkok' }, ayutthaya: { th: 'พระนครศรีอยุธยา', en: 'Ayutthaya' }, rayong: { th: 'ระยอง', en: 'Rayong' }, trat: { th: 'ตราด', en: 'Trat' }, kanchanaburi: { th: 'กาญจนบุรี', en: 'Kanchanaburi' }, phuket: { th: 'ภูเก็ต', en: 'Phuket' }, krabi: { th: 'กระบี่', en: 'Krabi' }, suratthani: { th: 'สุราษฎร์ธานี', en: 'Surat Thani' } },
  type: { sea: { th: 'ทะเล', en: 'Sea' }, mountain: { th: 'ภูเขา', en: 'Mountain' }, waterfall: { th: 'น้ำตก', en: 'Waterfall' }, river: { th: 'แม่น้ำ', en: 'River' }, cafe: { th: 'คาเฟ่', en: 'Café' }, temple: { th: 'วัด', en: 'Temple' }, market: { th: 'ตลาด', en: 'Market' } },
  activity: { photo: { th: 'ถ่ายรูป', en: 'Photography' }, dive: { th: 'ดำน้ำ', en: 'Diving' }, camp: { th: 'แคมปิ้ง', en: 'Camping' }, fish: { th: 'ตกปลา', en: 'Fishing' }, bike: { th: 'ปั่นจักรยาน', en: 'Cycling' }, hike: { th: 'เดินป่า', en: 'Hiking' } },
  budget: { free: { th: 'ฟรี', en: 'Free' }, u500: { th: 'ต่ำกว่า 500', en: 'Under 500' }, u1000: { th: '500-1000', en: '500-1000' }, over1000: { th: 'มากกว่า 1000', en: 'Over 1000' } },
  audience: { solo: { th: 'Solo', en: 'Solo' }, couple: { th: 'Couple', en: 'Couple' }, family: { th: 'Family', en: 'Family' }, friends: { th: 'Friends', en: 'Friends' } },
  duration: { short: { th: '2-3 ชม.', en: '2-3 hrs' }, day: { th: '1 Day Trip', en: '1 Day Trip' }, multi: { th: '3 วัน 2 คืน', en: '3D2N' } },
  transit: { bts_sukhumvit: { th: 'BTS สายสุขุมวิท', en: 'BTS Sukhumvit Line' }, bts_silom: { th: 'BTS สายสีลม', en: 'BTS Silom Line' }, mrt_blue: { th: 'MRT สายสีน้ำเงิน', en: 'MRT Blue Line' }, mrt_purple: { th: 'MRT สายสีม่วง', en: 'MRT Purple Line' }, arl: { th: 'Airport Rail Link', en: 'Airport Rail Link' } },
};

/** Alt/caption text used by image placeholders until real photos land. */
export const IMG_PLACEHOLDER: Record<string, Record<string, { th: string; en: string }>> = {
  type: { sea: { th: 'ภาพทะเล', en: 'Sea photo' }, mountain: { th: 'ภาพภูเขา', en: 'Mountain photo' }, waterfall: { th: 'ภาพน้ำตก', en: 'Waterfall photo' }, river: { th: 'ภาพแม่น้ำ', en: 'River photo' }, cafe: { th: 'ภาพคาเฟ่', en: 'Café photo' }, temple: { th: 'ภาพวัด', en: 'Temple photo' }, market: { th: 'ภาพตลาด', en: 'Market photo' } },
  activity: { photo: { th: 'ภาพนักท่องเที่ยวถ่ายรูป', en: 'Photography' }, dive: { th: 'ภาพดำน้ำ', en: 'Diving' }, camp: { th: 'ภาพแคมปิ้ง', en: 'Camping' }, fish: { th: 'ภาพตกปลา', en: 'Fishing' }, bike: { th: 'ภาพปั่นจักรยาน', en: 'Cycling' }, hike: { th: 'ภาพเดินป่า', en: 'Hiking' } },
  budget: { free: { th: 'ภาพเที่ยวฟรี', en: 'Free activity' }, u500: { th: 'ภาพเที่ยวงบประหยัด', en: 'Budget trip' }, u1000: { th: 'ภาพเที่ยวงบกลางๆ', en: 'Mid-range trip' }, over1000: { th: 'ภาพเที่ยวงบหรูหรา', en: 'Premium trip' } },
  audience: { solo: { th: 'ภาพเที่ยวคนเดียว', en: 'Solo travel' }, couple: { th: 'ภาพคู่รักเที่ยว', en: 'Couple travel' }, family: { th: 'ภาพครอบครัวเที่ยว', en: 'Family travel' }, friends: { th: 'ภาพเที่ยวกับเพื่อน', en: 'Friends travel' } },
  duration: { short: { th: 'ภาพทริปสั้น', en: 'Short trip' }, day: { th: 'ภาพเที่ยววันเดียว', en: 'Day trip' }, multi: { th: 'ภาพทริปหลายวัน', en: 'Multi-day trip' } },
  province: {},
};
