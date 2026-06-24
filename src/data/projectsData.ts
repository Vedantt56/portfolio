export interface Project {
  id: number | string;
  title: string;
  category: string;
  year: string;
  role: string;
  techStack: string;
  status: string;
  description: string;
  highlights: string[];
  image: string;
  mockImage?: string;
  liveLink?: string;
  sourceLink?: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "CALORIE TRACKER",
    category: "Full-Stack Dev",
    year: "2026",
    role: "Full-Stack Developer",
    techStack: "React | Node.js | MongoDB | Express | Chart.js & AI",
    status: "Completed build",
    description: "A DEEP NUTRITIONAL INTELLIGENCE AND COMPREHENSIVE DIET TRACKER FEATURING A CINEMATIC FRONTEND INTERFACE, STRENGTHENED BY AI-POWERED NUTRITION LOGGING AND RICH ANALYTIC MACRO GRAPH VISUALIZATIONS.",
    highlights: [
      "Engineered an elegant, startup-themed cinematic food logging frontend with dynamic user workflows.",
      "Integrated smart AI nutrition modules capable of decomposing natural food logs into comprehensive macro lists.",
      "Coded robust REST API services with customized JWT authentication schemas and database models.",
      "Created highly responsive dashboard matrices mapping protein, fat, and carbohydrate ratios over time."
    ],
    image: "/caltrack-cover.png",
    mockImage: "/caltrack-details.png",
    liveLink: "https://github.com/Vedantt56/calorie",
    sourceLink: "https://github.com/Vedantt56/calorie"
  },
  {
    id: "flow",
    title: "ZENETH",
    category: "Web3/Blockchain",
    year: "2026",
    role: "Full-Stack Web3 Developer",
    techStack: "React.js | Tailwind CSS | thirdweb SDK | MetaMask | Solidity (Ethereum Sepolia Testnet) | Node.js | Express | MongoDB",
    status: "Completed build (Hackathon)",
    description: "A DECENTRALIZED FINANCE AND WEB3 HYBRID PORTAL ELIMINATING TRADITIONAL AUTHENTICATION BY ALLOWING SECURE PASSWORDLESS WALLET CONNECTION VIA METAMASK, PEER-TO-PEER ETH TRANSFERS, AND SMART CONTRACT-BASED STAKING POOLS YIELDING INTEREST ACCRUAL TRACKABLE IN A REAL-TIME UTILITY DASHBOARD.",
    highlights: [
      "Engineered secure passwordless Web3 authentication using thirdweb SDK and MetaMask wallet-connecting handshakes.",
      "Coded Solidity smart contracts on the Ethereum Sepolia Testnet managing decentralized wallet-to-wallet ETH transfers, pool deposits, and staking mechanics.",
      "Designed a real-time reactive React & Tailwind CSS dashboard to visualize active on-chain balances, staking status, and calculated yield earnings.",
      "Implemented an Express and MongoDB Web2 synchronization layer to securely store auxiliary user details and persistent system activity logs."
    ],
    image: "/zeneth-cover.png",
    mockImage: "/zeneth-details.png",
    liveLink: "https://github.com/Vedantt56/ZenETH",
    sourceLink: "https://github.com/Vedantt56/ZenETH"
  },
  {
    id: "community",
    title: "CIVIC SYNC",
    category: "Civic Tech Hub",
    year: "2025",
    role: "Lead Web Developer",
    techStack: "Flutter & Dart | React | Firebase (Auth & Firestore) | Google Maps API | Tailwind CSS",
    status: "Completed build",
    description: "A COLLABORATIVE SMART CIVIC ENGAGEMENT PORTAL DEVELOPED TO BRIDGE THE COMMUNICATION GAP BETWEEN CITIZENS AND LOCAL AUTHORITIES, COMPRISING FLUTTER MOBILE APPLICATIONS INTEGRATED SECURELY WITH A HIGH-FIDELITY WEB DASHBOARD FEATURING REAL-TIME COMPLAINT LIFECYCLES AND GEOGRAPHICAL DISPATCH MAPS.",
    highlights: [
      "Engineered the fully responsive admin web dashboard and community feed interface utilizing high-density grid structures and cohesive utility layouts.",
      "Integrated Google Maps location services to power interactive map-based issue visualization, simplifying geographical concern pinpointing.",
      "Configured secure authentication flows and scalable data structures utilizing Cloud Firestore, Firebase Auth, and custom multi-media evidence upload modules.",
      "Collaborated in a multi-disciplinary engineering pool synchronization of design components across Flutter mobile views and high-fidelity web views."
    ],
    image: "/civicsync-cover.png",
    mockImage: "/civicsync-details.png",
    liveLink: "https://github.com/Vedantt56/Civic-sync",
    sourceLink: "https://github.com/Vedantt56/Civic-sync"
  }
];
