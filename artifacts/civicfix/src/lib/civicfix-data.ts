export type Role = 'citizen' | 'roads-admin' | 'super-admin';
export type IssueStatus = 'Reported' | 'Acknowledged' | 'In Progress' | 'Resolved';
export type IssuePriority = 'Low' | 'Medium' | 'High' | 'Critical';

export type TimelineEvent = {
  label: string;
  detail: string;
  date: string;
  done: boolean;
};

export type CivicIssue = {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  department: string;
  status: IssueStatus;
  priority: IssuePriority;
  priorityScore: number;
  latitude: number;
  longitude: number;
  address: string;
  image?: string;
  reportedBy: string;
  reportedAt: string;
  votes: number;
  distance: number;
  duplicateCount: number;
  slaHours: number;
  slaRemaining: number;
  resolutionNote?: string;
  resolutionImage?: string;
  timeline: TimelineEvent[];
};

export const categories = [
  { name: 'All issues', icon: '◌', color: 'teal' },
  { name: 'Roads & Potholes', icon: '⌁', color: 'amber' },
  { name: 'Streetlights & Electricity', icon: '✦', color: 'blue' },
  { name: 'Garbage & Sanitation', icon: '▦', color: 'green' },
  { name: 'Water Supply', icon: '≈', color: 'cyan' },
  { name: 'Drainage & Sewage', icon: '⌇', color: 'navy' },
  { name: 'Traffic & Signals', icon: '⊙', color: 'red' },
  { name: 'Parks & Public Spaces', icon: '⌂', color: 'lime' },
  { name: 'Public Property', icon: '▣', color: 'purple' },
  { name: 'Trees & Environment', icon: '♧', color: 'forest' },
  { name: 'Construction & Encroachment', icon: '▤', color: 'orange' },
  { name: 'Public Safety', icon: '◈', color: 'rose' },
  { name: 'Other', icon: '＋', color: 'slate' },
];

export const departments = ['All departments', 'BBMP Roads', 'BESCOM', 'Solid Waste', 'BWSSB', 'Traffic Police', 'Parks & Horticulture', 'Civic Estates', 'Environment Cell'];

const cityImages = [
  'https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/358482/pexels-photo-358482.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=900',
];

const rows: Array<[string, string, string, string, string, IssueStatus, IssuePriority, number, string, number, number]> = [
  ['Deep potholes at 12th Main junction', 'Two deep craters are forcing two-wheelers into oncoming traffic during peak hours.', 'Roads & Potholes', 'Pothole', 'BBMP Roads', 'In Progress', 'High', 91, '12th Main, Indiranagar', 187, 0.8],
  ['Streetlight outage near Koramangala 5th Block', 'Six lights are out along the walking stretch beside the lake.', 'Streetlights & Electricity', 'Streetlight outage', 'BESCOM', 'Acknowledged', 'Medium', 67, '80 Feet Road, Koramangala', 64, 1.9],
  ['Overflowing bins outside Russell Market', 'Collection has been missed for three days and waste is spilling onto the footpath.', 'Garbage & Sanitation', 'Overflowing bin', 'Solid Waste', 'Reported', 'High', 88, 'Russell Market, Shivajinagar', 143, 3.4],
  ['No water supply in 4th Cross', 'Homes have had intermittent supply since Monday morning.', 'Water Supply', 'No water', 'BWSSB', 'Acknowledged', 'High', 79, '4th Cross, HSR Layout', 86, 2.6],
  ['Open drain behind Lakshmi Bakery', 'Uncovered drain is a hazard for pedestrians and attracts mosquitoes.', 'Drainage & Sewage', 'Open drain', 'BWSSB', 'In Progress', 'Critical', 96, '5th Block, Jayanagar', 211, 4.8],
  ['Signal timing unsafe at Richmond Circle', 'The pedestrian phase is too short for older residents to cross safely.', 'Traffic & Signals', 'Signal timing', 'Traffic Police', 'Reported', 'High', 82, 'Richmond Circle', 118, 5.2],
  ['Broken benches in Cubbon Park east gate', 'Three benches have loose slats and exposed nails.', 'Parks & Public Spaces', 'Broken furniture', 'Parks & Horticulture', 'Resolved', 'Low', 35, 'Cubbon Park, East Gate', 21, 6.1],
  ['Damaged footpath outside Victoria Hospital', 'Missing paving blocks make the route inaccessible to wheelchairs.', 'Public Property', 'Footpath', 'Civic Estates', 'In Progress', 'High', 85, 'K R Road, Kalasipalya', 104, 4.1],
  ['Fallen tree blocking 2nd Cross', 'Large branch has blocked the side lane after last night’s rain.', 'Trees & Environment', 'Fallen tree', 'Environment Cell', 'Acknowledged', 'Critical', 98, '2nd Cross, Malleshwaram', 172, 1.2],
  ['Illegal construction narrows Bannerghatta Road', 'Temporary structure is occupying half of the service road near the bus stop.', 'Construction & Encroachment', 'Encroachment', 'Civic Estates', 'Reported', 'High', 87, 'Bannerghatta Road, Arekere', 76, 7.3],
  ['Dark stretch near Yeshwanthpur metro', 'Lights along the north exit have been non-functional for a week.', 'Public Safety', 'Dark spot', 'BESCOM', 'In Progress', 'High', 90, 'Yeshwanthpur Metro North Exit', 155, 3.8],
  ['Pothole patch failed on Outer Ring Road', 'Fresh asphalt has broken up again, leaving loose gravel in the lane.', 'Roads & Potholes', 'Road damage', 'BBMP Roads', 'Acknowledged', 'Medium', 70, 'ORR, Marathahalli', 55, 8.6],
  ['Garbage collection missed at Munnekollal', 'Residential lane has not received collection since Friday.', 'Garbage & Sanitation', 'Missed collection', 'Solid Waste', 'Reported', 'Medium', 60, 'Munnekollal Main Road', 42, 9.1],
  ['Low pressure in Whitefield Phase 2', 'Morning water pressure is not enough to reach upper floors.', 'Water Supply', 'Low pressure', 'BWSSB', 'In Progress', 'Medium', 73, 'Phase 2, Whitefield', 39, 10.4],
  ['Sewage backflow on 9th Main', 'Wastewater is entering the street after every evening shower.', 'Drainage & Sewage', 'Sewage overflow', 'BWSSB', 'Reported', 'Critical', 94, '9th Main, Vijayanagar', 133, 3.1],
  ['Wrong-way traffic at 1st Main', 'Vehicles are entering against traffic near the school gate.', 'Traffic & Signals', 'Traffic signage', 'Traffic Police', 'Acknowledged', 'Medium', 62, '1st Main, RT Nagar', 31, 11.8],
  ['Playground lights out at Agara Park', 'Children’s play area becomes unusable before 6 pm.', 'Parks & Public Spaces', 'Park lighting', 'Parks & Horticulture', 'Reported', 'Medium', 54, 'Agara Park, HSR Layout', 25, 12.3],
  ['Bus shelter roof panel missing', 'Passengers have no shade near the northbound stop.', 'Public Property', 'Bus shelter', 'Civic Estates', 'In Progress', 'Medium', 68, 'HAL Airport Road Bus Stop', 61, 6.9],
  ['Dust from road work on 80 Feet Road', 'Uncovered debris is affecting nearby shops and visibility.', 'Construction & Encroachment', 'Construction dust', 'BBMP Roads', 'Reported', 'Medium', 57, '80 Feet Road, Indiranagar', 29, 14.4],
  ['Tree roots lifting pavement', 'Roots have raised pavers beside the school entrance.', 'Trees & Environment', 'Tree maintenance', 'Environment Cell', 'Acknowledged', 'Low', 43, 'St Joseph’s School, Frazer Town', 18, 15.2],
  ['Pothole outside Trinity Metro', 'A deep pothole is hidden by standing water at the auto stand.', 'Roads & Potholes', 'Pothole', 'BBMP Roads', 'Reported', 'High', 84, 'Trinity Metro Station', 94, 2.1],
  ['Transformer humming loudly at Ejipura', 'Residents report a loud transformer noise through the night.', 'Streetlights & Electricity', 'Electrical hazard', 'BESCOM', 'Acknowledged', 'High', 77, 'Ejipura Main Road', 47, 8.3],
  ['Stray waste near Kaikondrahalli lake', 'Plastic waste is collecting along the western walking loop.', 'Garbage & Sanitation', 'Littering', 'Solid Waste', 'Resolved', 'Low', 38, 'Kaikondrahalli Lake', 33, 18.7],
  ['Water tanker blocking narrow lane', 'Private tanker is parked across the lane each morning.', 'Other', 'Civic obstruction', 'Civic Estates', 'Reported', 'Low', 31, '6th A Cross, BTM Layout', 12, 20.1],
  ['Flooding underpass at Domlur', 'Water pools across the underpass and stalls traffic after light rain.', 'Drainage & Sewage', 'Waterlogging', 'BWSSB', 'In Progress', 'Critical', 99, 'Domlur Underpass', 242, 1.4],
  ['Signal not visible at Mekhri Circle', 'Overgrown branches obscure the signal for vehicles approaching from the west.', 'Traffic & Signals', 'Signal visibility', 'Traffic Police', 'Reported', 'High', 80, 'Mekhri Circle', 69, 7.2],
  ['Broken drinking water tap at Freedom Park', 'Public tap leaks continuously and has created a slippery patch.', 'Parks & Public Spaces', 'Park amenity', 'Parks & Horticulture', 'Acknowledged', 'Low', 45, 'Freedom Park', 14, 16.5],
  ['Missing manhole cover in Basavanagudi', 'Open manhole is marked with a small branch but remains dangerous.', 'Public Safety', 'Open manhole', 'BWSSB', 'In Progress', 'Critical', 97, 'NR Colony, Basavanagudi', 186, 0.7],
  ['Footpath occupied by parked scooters', 'A continuous line of parked scooters leaves no walking space.', 'Construction & Encroachment', 'Footpath encroachment', 'Traffic Police', 'Reported', 'Medium', 65, 'Commercial Street', 58, 13.9],
  ['Night-time noise from loose utility cover', 'A metal cover bangs whenever buses pass the junction.', 'Public Property', 'Road furniture', 'Civic Estates', 'Acknowledged', 'Low', 40, 'Church Street Junction', 23, 21.6],
  ['Smoke from open leaf burning', 'Leaves are being burned beside apartment entrances in the evening.', 'Trees & Environment', 'Air quality', 'Environment Cell', 'Reported', 'High', 74, 'Kalyan Nagar 3rd Block', 36, 17.8],
];

const timelineFor = (status: IssueStatus, reportedAt: string): TimelineEvent[] => [
  { label: 'Reported by community', detail: 'Issue submitted with location and description', date: reportedAt, done: true },
  { label: 'Department notified', detail: 'Routed to the responsible city team', date: 'Yesterday, 10:40 AM', done: status !== 'Reported' },
  { label: 'Work underway', detail: 'A field team is reviewing the site', date: 'Today, 9:15 AM', done: status === 'In Progress' || status === 'Resolved' },
  { label: 'Resolution verified', detail: 'Community confirmation closes the loop', date: 'Pending', done: status === 'Resolved' },
];

export const seedIssues: CivicIssue[] = rows.map((row, index) => {
  const [title, description, category, subcategory, department, status, priority, priorityScore, address, votes, distance] = row;
  const day = index % 9;
  const reportedAt = `${day + 2} ${index % 2 ? 'Jun' : 'May'} 2025`;
  return {
    id: `CF-${String(2841 + index).padStart(5, '0')}`,
    title, description, category, subcategory, department, status, priority, priorityScore,
    latitude: 12.89 + (index % 7) * .012, longitude: 77.57 + (index % 6) * .014,
    address, image: cityImages[index % cityImages.length], reportedBy: ['Ananya R.', 'Rohan S.', 'Meera K.', 'Vikram P.'][index % 4],
    reportedAt, votes, distance, duplicateCount: index % 5 === 0 ? 3 : index % 3 === 0 ? 1 : 0,
    slaHours: priority === 'Critical' ? 24 : priority === 'High' ? 48 : 72,
    slaRemaining: row[10] as number * 1.8,
    timeline: timelineFor(status, reportedAt),
  };
});

const issueKey = 'civicfix-issues-v1';
const supportKey = 'civicfix-supported-v1';
const roleKey = 'civicfix-role-v1';

export const getIssues = (): CivicIssue[] => {
  try {
    const saved = localStorage.getItem(issueKey);
    if (saved) return JSON.parse(saved) as CivicIssue[];
  } catch { /* use seed data */ }
  return seedIssues;
};

export const saveIssues = (issues: CivicIssue[]) => localStorage.setItem(issueKey, JSON.stringify(issues));
export const getSupported = (): string[] => {
  try { return JSON.parse(localStorage.getItem(supportKey) || '[]') as string[]; } catch { return []; }
};
export const saveSupported = (ids: string[]) => localStorage.setItem(supportKey, JSON.stringify(ids));
export const getRole = (): Role | null => localStorage.getItem(roleKey) as Role | null;
export const saveRole = (role: Role) => localStorage.setItem(roleKey, role);
export const clearRole = () => localStorage.removeItem(roleKey);
export const departmentForCategory = (category: string) => {
  if (category.includes('Roads')) return 'BBMP Roads';
  if (category.includes('Streetlights')) return 'BESCOM';
  if (category.includes('Garbage')) return 'Solid Waste';
  if (category.includes('Water') || category.includes('Drainage')) return 'BWSSB';
  if (category.includes('Traffic')) return 'Traffic Police';
  if (category.includes('Parks')) return 'Parks & Horticulture';
  if (category.includes('Trees')) return 'Environment Cell';
  return 'Civic Estates';
};

export const findDuplicateIssue = (issues: CivicIssue[], category: string, title: string, address: string) => {
  const firstWord = (value: string) => value.trim().toLowerCase().split(/\s+/)[0] || '';
  const titleWord = firstWord(title);
  const addressWord = firstWord(address);
  return issues.find(issue => issue.category === category && (
    (addressWord.length > 3 && issue.address.toLowerCase().includes(addressWord)) ||
    (titleWord.length > 3 && issue.title.toLowerCase().includes(titleWord))
  )) || null;
};