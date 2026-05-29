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
    year: "2024",
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
    image: "https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&q=80&w=1600",
    mockImage: "https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&q=80&w=1600",
    liveLink: "https://github.com/Vedantt56/calorie",
    sourceLink: "https://github.com/Vedantt56/calorie"
  },
  {
    id: "flow",
    title: "ZENETH",
    category: "Web3/Blockchain",
    year: "2024",
    role: "Blockchain Developer",
    techStack: "Solidity | Ethereum (Sepolia) | thirdweb SDK | React | Node.js | MongoDB",
    status: "Active repository",
    description: "A DECENTRALIZED HYBRID WEB3 & WEB2 DEFI FINANCE PORTAL POWERED BY WALLET-BASED METAMASK AUTHENTICATION, PEER-TO-PEER ETH TRANSFERS, AND SMART CONTRACT-BASED STAKING POOLS.",
    highlights: [
      "Architected secure MetaMask blockchain handshake connections bypassing Web2 password requirements completely.",
      "Drafted Solidity smart contracts on the Sepolia Testnet driving secure peer-to-peer asset routing streams.",
      "Coded interest accumulators matching DeFi pool designs to deliver staking yield estimations.",
      "Coordinated full-stack synchronization between Node.js/MongoDB analytics layer and on-chain logs."
    ],
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=1200",
    mockImage: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=1200",
    liveLink: "https://github.com/Vedantt56/ZenETH",
    sourceLink: "https://github.com/Vedantt56/ZenETH"
  },
  {
    id: "community",
    title: "CIVIC SYNC",
    category: "Civic Tech Hub",
    year: "2024",
    role: "Lead Engineer",
    techStack: "React | Node.js | MongoDB | WebSockets | Tailwind CSS",
    status: "Open Source build",
    description: "A SEAMLESS COMMUNITY-FIRST CIVIC DISPATCH PORTAL ENABLING SYSTEMATIZED LOCAL AREA CONCERN RECORDING, REAL-TIME BROADCASTS, AND HAZARD AUDITS.",
    highlights: [
      "Engineered WebSockets events pipelines broadcasting alert statuses across high-density active regions.",
      "Crafted mobile-first geographical coordinates mapping modules pinpointing municipal alerts.",
      "Designed standard grid dashboard layouts allowing public administration to review reports cleanly.",
      "Integrated secure session state flows ensuring community members' authenticity in logins."
    ],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200",
    mockImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200",
    liveLink: "https://github.com/Vedantt56/Civic-sync",
    sourceLink: "https://github.com/Vedantt56/Civic-sync"
  }
];
