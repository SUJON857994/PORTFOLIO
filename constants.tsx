
import { Skill, Education, Experience, BlogPost } from './types';

export const PERSONAL_INFO = {
  name: "SHAHADAT HOSSAIN SUJON",
  slogan: "Precision in Finance, Soul in Literature.",
  bio: "I am a quick learner who thrives in dynamic environments that value problem-solving, initiative, and attention to detail. I’m dedicated to delivering high-quality results and always ready to adapt and grow as part of a creative and driven team.",
  location: "Noakhali, Bangladesh",
  address: "Goshkmota, Bellal Dakter Bari, 3824 Noakhali/Sonaimuri",
  email: "shahadat4.contact@gmail.com",
  phone: "(+880) 1887509241",
  phoneJapan: "(+81) 07047376952",
  skype: "https://join.skype.com/invite/xd5QcATaWXun",
  socials: {
    facebook: "https://www.facebook.com/share/17kPfaf4HF/",
    instagram: "https://www.instagram.com/shahadathossiansujon",
    blog: "https://litjoin.blogspot.com/"
  },
  identity: {
    height: "5'7\"",
    weight: "68 kg",
    eyeColor: "Black",
    hairColor: "Black",
    favColor: "Deep Blue",
    bloodGroup: "O+"
  }
};

export const FAMILY_INFO = {
  members: [
    {
      name: "MD Bellal Hossain",
      relation: "Father",
      role: "Medicine Business & AGM at Pragati Life Insurance PLC",
      description: "His leadership and career path in the insurance sector have been a significant influence on my professional journey.",
      icon: "💼"
    },
    {
      name: "Bilkis Begum",
      relation: "Mother",
      role: "Homemaker",
      description: "The heart of our home, her dedication and support keep our family grounded.",
      icon: "🏠"
    },
    {
      name: "Shahajahan Hossain Sumon",
      relation: "Elder Brother",
      role: "Entrepreneur (South Africa)",
      description: "An adventurous entrepreneur currently managing his business in South Africa.",
      icon: "🌍"
    },
    {
      name: "Jannat Akter Sumi",
      relation: "Younger Sister",
      role: "Homemaker",
      description: "A caring homemaker who completes our close-knit family circle.",
      icon: "❤️"
    }
  ]
};

export const CURRENT_FOCUS = [
  {
    title: "Global IT Tourism",
    description: "Currently pursuing a Master's degree in IT Tourism at The Kyoto College of Graduate Studies for Informatics (KCG), exploring the future of travel tech.",
    icon: "🌐"
  },
  {
    title: "Financial Excellence",
    description: "Scaling client portfolios at Pragati Life Insurance Ltd., focusing on sustainable wealth protection and strategic planning.",
    icon: "📈"
  },
  {
    title: "Literary Exploration",
    description: "Curating weekly deep-dives into modern Bengali literature on my blog, LitJoin, connecting tradition with digital storytelling.",
    icon: "✍️"
  }
];

export const INTERESTS = [
  { name: "Classical Poetry", icon: "📜" },
  { name: "Financial Strategy", icon: "📊" },
  { name: "Nature Photography", icon: "📸" },
  { name: "Community Service", icon: "🤝" },
  { name: "Traveling", icon: "🌍" },
  { name: "Sunset Watching", icon: "🌅" }
];

export const GALLERY_IMAGES = [
  { url: "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&q=80&w=800", caption: "Zenith of Kyoto - Abstract Torii" },
  { url: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&q=80&w=800", caption: "Architectural Serenity" },
  { url: "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?auto=format&fit=crop&q=80&w=800", caption: "Bamboo Forest Rhythms" },
  { url: "https://images.unsplash.com/photo-1578469550956-0e16b69c6a3d?auto=format&fit=crop&q=80&w=800", caption: "The Art of Japanese Tea" },
  { url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800", caption: "Kyoto Twilight Silhouettes" },
  { url: "https://images.unsplash.com/photo-1504109586057-7a2ae83d1338?auto=format&fit=crop&q=80&w=800", caption: "Nature's Abstract Canvas" }
];

export const SKILLS: Skill[] = [
  { name: "Microsoft Word", level: 95, category: "Office" },
  { name: "Microsoft Excel", level: 92, category: "Office" },
  { name: "Microsoft Powerpoint", level: 88, category: "Office" },
  { name: "Google Docs", level: 90, category: "Office" },
  { name: "Zoom & Skype", level: 95, category: "Communication" },
  { name: "Internet Services", level: 90, category: "Digital" },
  { name: "Social Media", level: 85, category: "Digital" },
  { name: "English (B2)", level: 80, category: "Language" },
  { name: "Bengali (Native)", level: 100, category: "Language" }
];

export const EDUCATION_DATA: Education[] = [
  {
    degree: "Master's in IT Tourism",
    institution: "The Kyoto College of Graduate Studies for Informatics (KCG)",
    year: "2025 - Present",
    description: "Specializing in the intersection of Information Technology and Global Tourism. Learning to innovate the travel industry through data and digital solutions. Website: https://www.kcg.edu/en"
  },
  {
    degree: "Bachelor of Arts",
    institution: "Noakhali Government College",
    year: "Graduated",
    description: "Affiliated with National University of Bangladesh. Number of credits: 120."
  },
  {
    degree: "Higher Secondary School Certificate",
    institution: "Chowmuhani Government Saleh Ahmed College",
    year: "Graduated",
    description: "Field of study: Arts and humanities."
  },
  {
    degree: "Secondary School Certificate",
    institution: "Morshid Alam High School",
    year: "Graduated",
    description: "Field of study: Science."
  }
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    role: "Financial Associate (F.A)",
    company: "Pragati Life Insurance Ltd.",
    period: "05/09/2021 – Current",
    highlights: [
      "Client handling and relationship management.",
      "Product selling and business development.",
      "Providing professional financial advice.",
      "Office work maintenance and administration."
    ]
  },
  {
    role: "Volunteer",
    company: "Blood Donation Camp",
    period: "10/06/2018 – Current",
    highlights: [
      "Actively organizing and participating in blood donation drives in Sonaimuri, Noakhali.",
      "Promoting health awareness within the local community."
    ]
  }
];

export const RECENT_POSTS: BlogPost[] = [
  {
    title: "The Essence of Modern Literature",
    date: "Dec 12, 2024",
    excerpt: "Exploring the bridge between classical poetry and digital-age storytelling...",
    link: "https://litjoin.blogspot.com/",
    imageUrl: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Life and Poems.",
    date: "Nov 25, 2024",
    excerpt: "A collection of personal reflections and verses that capture the beauty of the human experience through literature...",
    link: "https://litjoin.blogspot.com/",
    imageUrl: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&q=80&w=600"
  }
];
