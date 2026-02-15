export type NavLink = {
  label: string
  href: `#${string}`
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const siteContent = {
  brand: 'Prajwal.dev',
  name: 'Prajwal',
  role: 'Frontend Developer',
  status: 'Open To Work',
  welcomeMessage: 'Welcome to my portfolio',
  intro:
    'I build fast, responsive web experiences with clean UI and smooth interactions.',
  about:
    'I am a frontend-focused developer who enjoys building clear, scalable interfaces with strong UX foundations. I like turning complex product requirements into clean and intuitive user experiences.',
  highlights: ['Responsive UI Development', 'Performance Optimization', 'Component-Driven Architecture'],
  education: {
    degree: 'Bachelor of Engineering in Electronics and Communication',
    institution: 'Jawaharlal Nehru National College of Engineering, Shivamogga, Karnataka, India',
    duration: '2016 - 2020',
    score: 'CGPA: 8.34 / 10',
  },
  experience: [
    {
      role: 'Member of Technical Staff',
      company: 'Ezee.ai',
      duration: 'Feb 2023 - Jun 2025',
      summary:
        'Worked on core engineering tasks across frontend development, feature delivery, and production support for internal and customer-facing products.',
      achievements: [
        'Delivered features in collaboration with cross-functional teams',
        'Built multilingual functionality across portals to improve user experience',
        'Implemented security enhancements including payload and response encryption',
        'Developed client-specific custom Keycloak themes and authentication screens',
        'Contributed to maintainable, reusable code and release readiness',
      ],
    },
    {
      role: 'Associate Software Engineer',
      company: 'Ezee.ai',
      duration: 'Jun 2025 - Present',
      summary:
        'Focused on performance optimization across portals and mobile apps, while improving reliability and maintainability in production systems.',
      achievements: [
        'Led the Collections UI team with 5 interns, including training and code reviews',
        'Upgraded Angular portals from versions 10/14 to Angular 20',
        'Delivered performance improvements across multiple web portals and apps',
      ],
    },
  ],
  achievements: [
    {
      title: 'Quarter Best Employee (BTB)',
      organization: 'Ezee.ai',
      timeframe: '2025 3rd Quarter',
      description:
        'Recognized for high-impact contributions, delivery consistency, and ownership across key BTB initiatives.',
    },
    {
      title: 'Innovative Instigator Award',
      organization: 'Ezee.ai Annual Awards',
      timeframe: '2026',
      description:
        'Awarded at the 2026 annual ceremony for driving innovation through practical ideas and impactful execution.',
    },
  ],
  skills: {
    languages: ['JavaScript', 'TypeScript', 'Dart'],
    frontend: ['Angular', 'React', 'Flutter', 'Tailwind CSS', 'Bootstrap', 'HTML', 'CSS3', 'SASS'],
    stateManagement: ['Redux', 'Context API', 'Provider', 'NgRx', 'RxJS'],
    tools: ['VS Code', 'Postman', 'Android Studio', 'Xcode', 'Git', 'GitLab', 'Figma'],
  },
  contact: {
    email: 'm.prajwal.2312@gmail.com',
    linkedin: 'https://www.linkedin.com/in/prajwal-m-95b685196',
    github: 'https://github.com/prajwalm2312',
  },
} as const
