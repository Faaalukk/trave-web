import type { Lang } from './types';

/** UI strings, keyed by language. `en` mirrors `th` key for key. */
export const COPY = {
  th: {
    brand: 'Vokrub', landingTitle: 'ไม่รู้จะเที่ยวไหนดี? ให้เราช่วยหา', landingSub: 'เลือกวิธีที่ใช่สำหรับคุณ ไม่ต้องเสียเวลาหาข้อมูลเอง',
    selfTitle: 'หาข้อมูลเอง', selfDesc: 'เลือกทีละหัวข้อ ตามใจคุณ',
    recoTitle: 'ให้เราแนะนำ', recoDesc: 'ตอบคำถามสั้นๆ แล้วรับคำแนะนำที่ใช่กับคุณ', recoBadge: 'เร็วๆนี้',
    hubTitle: 'เลือกสิ่งที่คุณสนใจ', hubSub: 'เลือกหัวข้อเดียว แล้วดูสถานที่ที่ตรงกับหัวข้อนั้นทันที',
    catLocation: 'โลเคชั่น', catType: 'ประเภทสถานที่', catActivity: 'กิจกรรม', catBudget: 'งบประมาณ', catAudience: 'เหมาะกับใคร', catDuration: 'ระยะเวลาเที่ยว',
    catLocationDesc: 'เลือกภูมิภาค จังหวัด หรือแนวรถไฟฟ้า', catTypeDesc: 'ทะเล ภูเขา น้ำตก และอื่นๆ', catActivityDesc: 'ถ่ายรูป ดำน้ำ แคมปิ้ง ฯลฯ',
    catBudgetDesc: 'ฟรีไปจนถึงงบหรูหรา', catAudienceDesc: 'เที่ยวกับใคร', catDurationDesc: 'มีเวลาแค่ไหน',
    pickToSee: 'เลือกอันที่ใช่ แล้วดูสถานที่ทั้งหมดในหมวดนั้น', pickRegionOrTransit: 'เลือกจากแผนที่ภูมิภาค หรือเลือกแนวรถไฟฟ้า',
    modeRegion: 'ภูมิภาค', modeTransit: 'แนวรถไฟฟ้า', tapMapHint: 'แตะจุดบนแผนที่เพื่อเลือกภูมิภาค',
    seeWholeRegion: 'ดูสถานที่ทั้งภาคนี้', provincesSuffix: 'จังหวัด', transitNote: '* ตัวอย่างแนวรถไฟฟ้า (Mock)',
    resultsTitle: 'สถานที่ที่ตรงกับคุณ', noResults: 'ยังไม่มีสถานที่ตรงกับตัวกรองนี้', reviewsSuffix: 'รีวิว',
    gallery: 'แกลเลอรี่', mapLabel: 'แผนที่ (แบบย่อ)', priceLabel: 'ราคา/ค่าเข้า', hoursLabel: 'เวลาเปิด-ปิด',
    durationLabel: 'ระยะเวลาที่แนะนำ', nearbyLabel: 'ที่เที่ยวใกล้เคียง', contactBtn: 'ติดต่อ/จองสถานที่นี้',
    backToHub: '← กลับ', backToMap: '← กลับไปแผนที่', backToResultsChoice: '← เลือกหัวข้อใหม่', backToResults: '← กลับไปหน้าผลลัพธ์',
  },
  en: {
    brand: 'Vokrub', landingTitle: "Don't know where to go? Let us help.", landingSub: 'Pick the way that suits you — skip the research.',
    selfTitle: 'Explore myself', selfDesc: 'Pick topics your own way',
    recoTitle: 'Recommend for me', recoDesc: 'Answer a few quick questions for tailored picks', recoBadge: 'Coming soon',
    hubTitle: 'What are you into?', hubSub: 'Pick one topic and see matching places right away',
    catLocation: 'Location', catType: 'Place type', catActivity: 'Activities', catBudget: 'Budget', catAudience: 'Who for', catDuration: 'Trip length',
    catLocationDesc: 'Region, province or transit line', catTypeDesc: 'Sea, mountain, waterfall & more', catActivityDesc: 'Photography, diving, camping...',
    catBudgetDesc: 'Free to splurge-worthy', catAudienceDesc: 'Who are you travelling with', catDurationDesc: 'How much time you have',
    pickToSee: 'Pick one to see every place in that category', pickRegionOrTransit: 'Pick from the region map, or choose a transit line',
    modeRegion: 'Region', modeTransit: 'Transit line', tapMapHint: 'Tap a point on the map to pick a region',
    seeWholeRegion: 'See all places in this region', provincesSuffix: 'provinces', transitNote: '* Sample transit lines (mock)',
    resultsTitle: 'Places that match you', noResults: 'No places match this filter yet', reviewsSuffix: 'reviews',
    gallery: 'Gallery', mapLabel: 'Map (simplified)', priceLabel: 'Price / entry', hoursLabel: 'Hours',
    durationLabel: 'Recommended time', nearbyLabel: 'Nearby places', contactBtn: 'Contact / book this place',
    backToHub: '← Back', backToMap: '← Back to map', backToResultsChoice: '← Pick another topic', backToResults: '← Back to results',
  },
} as const;

export type Copy = (typeof COPY)[Lang];
