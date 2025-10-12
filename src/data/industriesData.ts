import { 
  Users, 
  Music, 
  Trophy, 
  Building, 
  Camera, 
  Heart, 
  Mic, 
  Briefcase,
  Building2
} from "lucide-react";

export interface Industry {
  title: string;
  description: string;
  icon: any;
  services: string[];
  events: string[];
  certifications: string[];
}

export const industries: Industry[] = [
  {
    title: "Sports & Recreation",
    description: "Comprehensive medical support for sporting events, from grassroots to professional competitions.",
    icon: Trophy,
    services: [
      "On-site paramedics and first aiders",
      "Emergency response teams",
      "Pre-event medical risk assessments",
      "Player and spectator medical care",
      "Equipment and supplies provision"
    ],
    events: [
      "Football matches",
      "Rugby tournaments", 
      "Cricket matches",
      "Athletics events",
      "Cycling races",
      "Swimming competitions"
    ],
    certifications: [
      "HCPC Registered Paramedics",
      "First Aid at Work",
      "Event Medical Services",
      "BLS/ALS Trained"
    ]
  },
  {
    title: "Entertainment & Festivals",
    description: "Specialised medical coverage for music festivals, concerts, and entertainment events.",
    icon: Music,
    services: [
      "Festival medical teams",
      "Crowd medical management",
      "VIP medical support",
      "Substance misuse protocols",
      "Weather contingency planning"
    ],
    events: [
      "Music festivals",
      "Outdoor concerts",
      "Comedy shows",
      "Cultural events",
      "Food festivals",
      "Arts gatherings"
    ],
    certifications: [
      "Festival Medical Services",
      "Crowd Safety Management",
      "Emergency Response",
      "Mental Health First Aid"
    ]
  },
  {
    title: "Corporate & Business",
    description: "Professional medical support for corporate events, conferences, and business gatherings.",
    icon: Briefcase,
    services: [
      "Corporate event medical cover",
      "Conference medical support",
      "Executive health screening",
      "Occupational health services",
      "Emergency response planning"
    ],
    events: [
      "Corporate conferences",
      "Product launches",
      "Trade shows",
      "Team building events",
      "Board meetings",
      "Company celebrations"
    ],
    certifications: [
      "Occupational Health",
      "Corporate Medical Services",
      "Emergency First Aid",
      "Health Surveillance"
    ]
  },
  {
    title: "Film & Television",
    description: "Specialised medical support for film productions, TV shows, and media events.",
    icon: Camera,
    services: [
      "On-set medical supervision",
      "Stunt safety coordination",
      "Cast and crew health monitoring",
      "Location medical assessments",
      "Emergency evacuation planning"
    ],
    events: [
      "Film productions",
      "TV series",
      "Commercial shoots",
      "Documentary filming",
      "Live broadcasts",
      "Award ceremonies"
    ],
    certifications: [
      "Film Industry Medical",
      "Stunt Safety Qualified",
      "Remote Location Medicine",
      "Trauma Care Certified"
    ]
  },
  {
    title: "Community & Charity",
    description: "Accessible medical coverage for community events, charity fundraisers, and local gatherings.",
    icon: Heart,
    services: [
      "Community event medical support",
      "Charity event coverage",
      "Volunteer medical teams",
      "Educational health programs",
      "Affordable medical packages"
    ],
    events: [
      "Charity runs",
      "Community fairs",
      "School sports days",
      "Local festivals",
      "Fundraising events",
      "Religious gatherings"
    ],
    certifications: [
      "Community First Aid",
      "Volunteer Medical Services",
      "Child Protection Trained",
      "Basic Life Support"
    ]
  },
  {
    title: "Venue Medical Services",
    description: "Professional medical support for nightclubs, stadiums, wedding venues and entertainment establishments across the North East.",
    icon: Building2,
    services: [
      "Professional medical cover",
      "Uniformed or covert staff options",
      "Fully equipped marked or unmarked ambulances",
      "First aid/treatment room equipment",
      "Medical facilities",
      "Incident logging and documentation"
    ],
    events: [
      "Nightclub events",
      "Stadium matches",
      "Wedding venues",
      "Concert halls",
      "Entertainment venues",
      "Corporate hospitality"
    ],
    certifications: [
      "Venue Medical Specialists",
      "Critical Care Trained",
      "Licensing Compliance",
      "Public Liability Covered"
    ]
  }
];
