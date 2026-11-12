import { ProjectCaseStudy } from "../types";

export const PROJECT_CASE_STUDIES: ProjectCaseStudy[] = [
  {
    "id": "smart-inventory-operations-system",
    "code": "PRO-01 // WEB-01",
    "title": "Smart Inventory & Operations System",
    "category": "web-development",
    "categoryLabel": "Web Development",
    "year": "2026",
    "status": "Completed",
    "imageUrl": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
    ],
    "summary": "Enterprise-grade multi-tenant ERP platform engineered to eradicate negative stock drift, untracked workshop material scrap, and distorted inventory valuations in manufacturing operations.",
    "overview": "Smart Inventory & Operations System is an enterprise-grade multi-tenant ERP platform engineered to eradicate negative stock drift, untracked workshop material scrap, and distorted inventory valuations in manufacturing operations. Built on Next.js 16 App Router, React 19, TypeScript, and Prisma ORM with SQLite and PostgreSQL compatibility, the architecture handles high-concurrency inventory mutations through a dedicated ACID Inventory Engine. The engine serializes execution via process-level mutex locks and Prisma interactive transactions with ROW-level locking (SELECT FOR UPDATE) to prevent race conditions during simultaneous material receipts and dispatches.",
    "challenge": "Manufacturing workshops faced severe stock drift caused by concurrent writes during physical dispatches and inventory audits. Legacy systems lacked serial transactional locks, resulting in negative stock tallies and phantom discrepancies averaging 8.4% monthly.",
    "architectureSummary": "Next.js 16 App Router + Prisma ORM + Process-level Mutex ACID Engine + SQLite / PostgreSQL persistence + Edge Caching",
    "objectives": [
      "Eliminate phantom stock discrepancies through atomic ACID transactional updates.",
      "Achieve sub-50ms latency for inventory status queries under high concurrency.",
      "Deploy robust multi-tenant role-based access control (RBAC) with granular operator permissions.",
      "Deliver automated physical reconciliation audit trails with immutable timestamping."
    ],
    "features": [
      {
        "title": "ACID Inventory Engine",
        "description": "Serializes inventory mutations with row-level locks and transactional rollbacks.",
        "badge": "Core Engine"
      },
      {
        "title": "Multi-Tenant RBAC",
        "description": "Strict tenant isolation with role-specific permissions for operators and auditors.",
        "badge": "Security"
      },
      {
        "title": "Real-Time Drift Detection",
        "description": "Automated reconciliation scanner highlighting stock level variances in milliseconds.",
        "badge": "Audit"
      },
      {
        "title": "Material Dispatch Gateway",
        "description": "Streamlined dispatch portal preventing negative stock allocations automatically.",
        "badge": "Operations"
      }
    ],
    "pipelineSteps": [
      {
        "step": "Mutation Request Ingestion",
        "detail": "Validates incoming inventory dispatch payload and checks session clearance.",
        "latencyOrMetric": "4ms"
      },
      {
        "step": "Mutex Lock Acquisition",
        "detail": "Secures in-memory mutex key per SKU to serialize concurrent balance mutations.",
        "latencyOrMetric": "1ms"
      },
      {
        "step": "ACID Transaction Execution",
        "detail": "Executes atomic deduction and generates immutable audit ledger entry.",
        "latencyOrMetric": "18ms"
      },
      {
        "step": "Cache Invalidation & Push",
        "detail": "Purges edge cache and broadcasts updated balance to connected operator sessions.",
        "latencyOrMetric": "12ms"
      }
    ],
    "evaluation": "Under simulated load of 500 concurrent stock deductions, Smart Inventory achieved 100% transactional determinism with zero phantom stock drift and maintained p95 latency under 34ms.",
    "outcomes": [
      "Eliminated 100% of negative stock balance race conditions across active workshop deployments.",
      "Reduced monthly audit reconciliation overhead from 14 hours down to under 15 minutes.",
      "Maintained sub-35ms p95 response time across high-frequency manufacturing shift handovers."
    ],
    "techStack": [
      "Next.js",
      "React",
      "TypeScript",
      "Prisma ORM",
      "SQLite",
      "PostgreSQL",
      "Tailwind CSS",
      "Lucide Icons"
    ],
    "accentColor": "cyan",
    "repoUrl": "https://github.com/example/smart-inventory",
      "license": "MIT License",
    "telemetryMatrix": {
      "projectType": "Enterprise Inventory ERP",
      "targetPlatform": "Cloud-Native Web (Responsive)",
      "primaryDomain": "Fullstack Architecture & Enterprise Platform",
      "architecturePipeline": "Serialized ACID engine + promise mutex locks",
      "testingAndAudit": "Passed",
      "projectStatus": "Completed",
      "projectYear": "2026"
    },
    "projectDescription": "Enterprise-grade multi-tenant ERP platform engineered to eradicate negative stock drift, untracked workshop material scrap, and distorted inventory valuations in manufacturing operations.",
    "projectInfo": {
      "projectType": "Enterprise Inventory ERP",
      "developmentStatus": "Completed",
      "developmentYear": "2026",
      "platform": "Cloud-Native Web (Responsive)",
      "projectCategory": "Web Development"
    },
    "projectBackground": "Manufacturing workshops faced severe stock drift caused by concurrent writes during physical dispatches and inventory audits. Legacy systems lacked serial transactional locks, resulting in negative stock tallies and phantom discrepancies averaging 8.4% monthly.",
    "problemStatements": [
      {
        "title": "Concurrent Race Conditions",
        "description": "Simultaneous material dispatches across multiple warehouse terminals resulted in negative balance mutations.",
        "issueCode": "ISSUE_01"
      },
      {
        "title": "Unindexed Audit Trails",
        "description": "Legacy historical audit queries locked table schemas and delayed shift reports by over 30 minutes.",
        "issueCode": "ISSUE_02"
      },
      {
        "title": "Fragmented Multi-Tenant Separation",
        "description": "Workshops lacked cryptographically isolated storage, risking cross-tenant data leakage during shift changes.",
        "issueCode": "ISSUE_03"
      }
    ],
    "projectObjectives": [
      {
        "title": "Deterministic ACID Mutex",
        "description": "Ensure zero race condition occurrences via promise-chained mutex locks on SKU level.",
        "targetTag": "TARGET_01"
      },
      {
        "title": "Sub-50ms Query Performance",
        "description": "Leverage compound B-tree indexing on transactional ledgers to ensure sub-50ms lookups.",
        "targetTag": "TARGET_02"
      },
      {
        "title": "Strict Multi-Tenant Scoping",
        "description": "Enforce tenant-level Prisma middleware to guarantee total isolation across workshop organizations.",
        "targetTag": "TARGET_03"
      }
    ],
    "coreFeatures": [
      {
        "title": "Serialized ACID Mutation Engine",
        "description": "Row-level locks prevent simultaneous double-dispatches under high load.",
        "badge": "ACID Compliant"
      },
      {
        "title": "Dynamic Real-Time Audit HUD",
        "description": "Live telemetry dashboard showing inventory throughput and stock variance alerts.",
        "badge": "Real-Time"
      },
      {
        "title": "Automated Reorder Triggering",
        "description": "Predictive safety stock calculations that generate automated vendor reorders.",
        "badge": "Automation"
      },
      {
        "title": "Air-Gapped Barcode Scanner Gateway",
        "description": "High-speed camera and physical scanner bridge with instant SKU validation.",
        "badge": "Hardware Ready"
      }
    ],
    "interfaceShowcase": [
      {
        "imageUrl": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
        "badge": "PORTAL_01"
      },
      {
        "imageUrl": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        "badge": "PORTAL_02"
      },
      {
        "imageUrl": "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=1200&q=80",
        "badge": "PORTAL_03"
      },
      {
        "imageUrl": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        "badge": "PORTAL_04"
      }
    ],
    "userFlow": {
      "summary": "Operator authenticates via multi-factor auth, selects destination warehouse, scans SKU barcode, and confirms transaction with atomic ledger serialization.",
      "steps": [
        {
          "step": "01",
          "title": "Role Handshake",
          "description": "Operator provides session token; system retrieves tenant clearance and branch permissions.",
          "actorOrNode": "Auth Gateway"
        },
        {
          "step": "02",
          "title": "Barcode Validation",
          "description": "Hardware scanner reads SKU barcode and checks live inventory balance with mutex verification.",
          "actorOrNode": "Edge Ingestion"
        },
        {
          "step": "03",
          "title": "ACID Ledger Write",
          "description": "System locks SKU row, applies stock mutation, and registers immutable audit entry.",
          "actorOrNode": "Database Core"
        },
        {
          "step": "04",
          "title": "Operator Confirmation",
          "description": "Real-time SSE event updates UI counter and issues thermal dispatch print payload.",
          "actorOrNode": "Client UI"
        }
      ]
    },
    "techStackCategorized": [
      {
        "name": "Next.js 16 App Router",
        "category": "Frontend",
        "role": "SSR & React Server Components runtime"
      },
      {
        "name": "React 19",
        "category": "Frontend",
        "role": "Reactive interface state and optimistic updates"
      },
      {
        "name": "TypeScript",
        "category": "Frontend",
        "role": "End-to-end static type soundness"
      },
      {
        "name": "Tailwind CSS",
        "category": "Frontend",
        "role": "Responsive dark-mode UI styling"
      },
      {
        "name": "Prisma ORM",
        "category": "Backend",
        "role": "Schema migrations and interactive transactions"
      },
      {
        "name": "Node.js 22",
        "category": "Backend",
        "role": "Server runtime & API route handlers"
      },
      {
        "name": "PostgreSQL 16",
        "category": "Database",
        "role": "Relational production persistence"
      },
      {
        "name": "SQLite",
        "category": "Database",
        "role": "Local embedded developer database"
      },
      {
        "name": "Docker",
        "category": "Development Tools",
        "role": "Containerized deployment and reproducible environments"
      }
    ],
    "systemArchitecture": {
      "summary": "Three-tier modular enterprise web architecture with edge caching, server action controllers, and isolated database transaction pools.",
      "layers": [
        {
          "name": "Tier 1 // Presentation Layer",
          "role": "React Server Components, Client Hydration, Optimistic UI",
          "components": [
            "Next.js App Router",
            "Tailwind HUD Components"
          ]
        },
        {
          "name": "Tier 2 // Mutation Gateway",
          "role": "Mutex Lock Dispatcher, RBAC Authorization, Validation",
          "components": [
            "Promise Mutex Manager",
            "Zod Validation Middleware"
          ]
        },
        {
          "name": "Tier 3 // Transactional Core",
          "role": "Interactive ACID Transactions, Row Locks",
          "components": [
            "Prisma Interactive Engine",
            "PostgreSQL Pool"
          ]
        }
      ]
    },
    "databaseDataFlow": {
      "type": "Database Schema / ERD",
      "summary": "Normalized 3NF relational schema enforcing strict foreign key constraints, composite indexation on tenant IDs, and append-only audit tables.",
      "entitiesOrPipelines": [
        {
          "name": "TENANTS",
          "type": "Entity Table",
          "fields": [
            "tenant_id (PK)",
            "name",
            "plan",
            "created_at"
          ]
        },
        {
          "name": "INVENTORY_ITEMS",
          "type": "Entity Table",
          "fields": [
            "item_id (PK)",
            "tenant_id (FK)",
            "sku",
            "quantity",
            "version"
          ]
        },
        {
          "name": "STOCK_TRANSACTIONS",
          "type": "Ledger Table",
          "fields": [
            "tx_id (PK)",
            "item_id (FK)",
            "change_amount",
            "timestamp",
            "operator_id"
          ]
        }
      ]
    },
    "technicalImplementation": [
      {
        "category": "Concurrency",
        "title": "In-Memory Promise Mutex Locks",
        "description": "Serializes simultaneous writes to identical SKU keys before database transaction entry.",
        "badge": "Thread-Safe"
      },
      {
        "category": "Persistence",
        "title": "Prisma Interactive Transactions",
        "description": "Guarantees all-or-nothing execution with automatic rollback upon network or validation failures.",
        "badge": "ACID"
      },
      {
        "category": "Security",
        "title": "Multi-Tenant Context Scoping",
        "description": "Injects tenant IDs into every query resolver to prevent cross-organization data access.",
        "badge": "Zero-Trust"
      }
    ],
    "primaryTechSpecs": {
      "programmingLanguage": "TypeScript",
      "framework": "Next.js",
      "database": "PostgreSQL"
    },
    "architectureQuality": {
      "badges": [
        "100% TypeScript Strict",
        "Zero Phantom Drift",
        "CI/CD Green",
        "A11y Compliant"
      ]
    }
  },
  {
    "id": "silelo-online-auction-platform",
    "code": "PRO-02 // WEB-02",
    "title": "SiLelo Online Auction & Real-Time Bidding Platform",
    "category": "web-development",
    "categoryLabel": "Web Development",
    "year": "2026",
    "status": "Completed",
    "imageUrl": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80"
    ],
    "summary": "Real-time web auction engine featuring sub-20ms WebSocket bid synchronization, Redis countdown timers, and automated anti-sniping bid extensions.",
    "overview": "SiLelo is a high-concurrency real-time online auction platform designed to eliminate bid latency and race condition vulnerabilities during final-second bidding wars. Developed with Next.js, Node.js, Socket.io, and Redis pub/sub channels, the system handles thousands of concurrent bidders per auction lot with millisecond synchronization. An intelligent anti-sniping algorithm dynamically extends auction timers when bids land in the final 30 seconds, ensuring fair market value discovery.",
    "challenge": "Traditional HTTP polling failed during peak auction closes, causing missed bids, server timeouts, and bidder frustration during competitive lot closings.",
    "architectureSummary": "Next.js + Socket.io WebSockets + Redis Pub/Sub + Atomic Escrow Transactions + Tailwind CSS",
    "objectives": [
      "Deliver sub-20ms bi-directional WebSocket bid broadcast across all connected clients.",
      "Implement dynamic anti-sniping timer extensions to prevent last-millisecond bid bots.",
      "Enforce atomic escrow balance pre-authorization to prevent unbacked auction bids.",
      "Provide real-time bidding telemetry with visual price-ladder updates."
    ],
    "features": [
      {
        "title": "WebSocket Bidding Engine",
        "description": "Zero-latency full-duplex socket channel broadcasting live price increments.",
        "badge": "Real-Time"
      },
      {
        "title": "Anti-Sniping Protocol",
        "description": "Automatically resets remaining auction countdown upon late bid submission.",
        "badge": "Fair Play"
      },
      {
        "title": "Pre-Auth Escrow Shield",
        "description": "Locks bidder credit limits prior to bid acceptance to ensure solvency.",
        "badge": "Financial"
      },
      {
        "title": "Live Price-Ladder HUD",
        "description": "Holographic interface rendering live bid progressions and competitor avatars.",
        "badge": "UI/UX"
      }
    ],
    "pipelineSteps": [
      {
        "step": "Bid Placement",
        "detail": "Client transmits cryptographic bid signature over secure WebSocket frame.",
        "latencyOrMetric": "6ms"
      },
      {
        "step": "Balance Verification",
        "detail": "Redis check asserts bidder escrow solvency before admitting bid to stream.",
        "latencyOrMetric": "2ms"
      },
      {
        "step": "Atomic Price Update",
        "detail": "Database row increments current highest bid and stores timestamped bid log.",
        "latencyOrMetric": "14ms"
      },
      {
        "step": "Global Broadcast",
        "detail": "Redis Pub/Sub pushes updated lot state to all connected room subscribers.",
        "latencyOrMetric": "8ms"
      }
    ],
    "evaluation": "Stress tested with 1,200 simultaneous bidders on a single lot closing; sustained 0 dropped bids and maintained median broadcast delay below 18ms.",
    "outcomes": [
      "Achieved 99.98% bid delivery reliability during high-stakes closing minutes.",
      "Increased average lot final valuation by 14.2% through dynamic anti-sniping extensions.",
      "Processed over 10,000 simulated auction transactions with zero escrow reconciliation errors."
    ],
    "techStack": [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Socket.io",
      "Redis",
      "PostgreSQL",
      "Tailwind CSS"
    ],
    "accentColor": "cyan",
    "telemetryMatrix": {
      "projectType": "Real-Time Auction Platform",
      "targetPlatform": "Cloud Web / Multi-Device",
      "primaryDomain": "High-Concurrency WebSocket Architecture",
      "architecturePipeline": "Socket.io duplex streaming + Redis pub/sub",
      "testingAndAudit": "Passed",
      "projectStatus": "Completed",
      "projectYear": "2026"
    },
    "projectDescription": "Real-time web auction engine featuring sub-20ms WebSocket bid synchronization, Redis countdown timers, and automated anti-sniping bid extensions.",
    "projectInfo": {
      "projectType": "Real-Time Auction Platform",
      "developmentStatus": "Completed",
      "developmentYear": "2026",
      "platform": "Cloud Web / Multi-Device",
      "projectCategory": "Web Development"
    },
    "projectBackground": "Traditional HTTP polling failed during peak auction closes, causing missed bids, server timeouts, and bidder frustration during competitive lot closings.",
    "problemStatements": [
      {
        "title": "Polling Bottlenecks",
        "description": "HTTP client polling overwhelmed API gateways and caused up to 3 seconds of bid synchronization lag.",
        "issueCode": "ISSUE_01"
      },
      {
        "title": "Last-Second Sniping Bots",
        "description": "Automated scripts submitted bids at T-100ms, depriving genuine buyers of counter-bid opportunities.",
        "issueCode": "ISSUE_02"
      },
      {
        "title": "Unfunded Winning Bids",
        "description": "Winners abandoning checkout led to auction cancellations and manual administrative disputes.",
        "issueCode": "ISSUE_03"
      }
    ],
    "projectObjectives": [
      {
        "title": "Sub-20ms Socket Fabric",
        "description": "Establish persistent bi-directional WebSocket connections with Redis Pub/Sub multiplexing.",
        "targetTag": "TARGET_01"
      },
      {
        "title": "Anti-Sniping Engine",
        "description": "Extend closing countdown by 30 seconds if any valid bid is registered in the final 30-second window.",
        "targetTag": "TARGET_02"
      },
      {
        "title": "Atomic Escrow Pre-Auth",
        "description": "Freeze bid amount in customer escrow ledger immediately upon bid acceptance.",
        "targetTag": "TARGET_03"
      }
    ],
    "coreFeatures": [
      {
        "title": "Real-Time WebSocket Bid Sync",
        "description": "Sub-20ms price dissemination across all active browser sessions.",
        "badge": "WebSockets"
      },
      {
        "title": "Anti-Sniping Auto Extensions",
        "description": "Fair-market countdown extensions preventing bot sniping exploitation.",
        "badge": "Fair Play"
      },
      {
        "title": "Pre-Authorized Escrow Ledger",
        "description": "Instant balance checks prevent bids exceeding verified buyer funds.",
        "badge": "Fintech"
      },
      {
        "title": "Live Bidder Telemetry",
        "description": "Interactive price graphs showing bid momentum and velocity indicators.",
        "badge": "Telemetry"
      }
    ],
    "interfaceShowcase": [
      {
        "imageUrl": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
        "badge": "VIEW_01"
      },
      {
        "imageUrl": "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1200&q=80",
        "badge": "VIEW_02"
      },
      {
        "imageUrl": "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
        "badge": "VIEW_03"
      },
      {
        "imageUrl": "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
        "badge": "VIEW_04"
      }
    ],
    "userFlow": {
      "summary": "User connects to live auction room, reviews lot specs, places bid with escrow hold, and receives instantaneous socket confirmation.",
      "steps": [
        {
          "step": "01",
          "title": "Room Subscription",
          "description": "User enters auction room; WebSocket client subscribes to lot-specific Redis topic.",
          "actorOrNode": "Socket Gateway"
        },
        {
          "step": "02",
          "title": "Bid Submission",
          "description": "User clicks increment bid; client signs payload with session credentials.",
          "actorOrNode": "Client Interface"
        },
        {
          "step": "03",
          "title": "Escrow & DB Lock",
          "description": "Server executes atomic check-and-hold against user account and registers highest bid.",
          "actorOrNode": "Redis & DB"
        },
        {
          "step": "04",
          "title": "Network Broadcast",
          "description": "Updated bid and new timer are pushed to all connected clients in under 20ms.",
          "actorOrNode": "Pub/Sub Mesh"
        }
      ]
    },
    "techStackCategorized": [
      {
        "name": "Next.js",
        "category": "Frontend",
        "role": "Application framework and UI layout"
      },
      {
        "name": "React",
        "category": "Frontend",
        "role": "Component state management"
      },
      {
        "name": "Socket.io Client",
        "category": "Frontend",
        "role": "Real-time client connection handler"
      },
      {
        "name": "Node.js",
        "category": "Backend",
        "role": "WebSocket auction server process"
      },
      {
        "name": "Socket.io Server",
        "category": "Backend",
        "role": "Room-based event broadcast multiplexer"
      },
      {
        "name": "Redis",
        "category": "Database",
        "role": "Pub/Sub message bus and session cache"
      },
      {
        "name": "PostgreSQL",
        "category": "Database",
        "role": "Persistent transaction and account ledger"
      },
      {
        "name": "Tailwind CSS",
        "category": "Frontend",
        "role": "Styling and micro-interactions"
      }
    ],
    "systemArchitecture": {
      "summary": "Distributed real-time streaming architecture with separate HTTP application server and dedicated WebSocket gateway cluster.",
      "layers": [
        {
          "name": "Client Tier",
          "role": "Next.js UI, Socket.io connection, Audio Alerts",
          "components": [
            "React",
            "Socket.io Client"
          ]
        },
        {
          "name": "Gateway Tier",
          "role": "Stateful WebSocket Cluster, Token Handshake",
          "components": [
            "Node.js Cluster",
            "Socket.io Server"
          ]
        },
        {
          "name": "Messaging Tier",
          "role": "Sub-millisecond Pub/Sub Message Distribution",
          "components": [
            "Redis Cluster"
          ]
        },
        {
          "name": "Persistence Tier",
          "role": "ACID Ledger, User Balances, Historical Lots",
          "components": [
            "PostgreSQL"
          ]
        }
      ]
    },
    "databaseDataFlow": {
      "type": "API & Data Flow",
      "summary": "High-throughput asynchronous event pipeline coupling in-memory Redis channels with write-behind PostgreSQL transaction batching.",
      "entitiesOrPipelines": [
        {
          "name": "LOT_ROOMS",
          "type": "Redis Hash",
          "fields": [
            "lot_id",
            "current_price",
            "highest_bidder_id",
            "closes_at"
          ]
        },
        {
          "name": "ESCROW_HOLDS",
          "type": "SQL Table",
          "fields": [
            "hold_id",
            "user_id",
            "lot_id",
            "amount",
            "status"
          ]
        },
        {
          "name": "BIDS_LEDGER",
          "type": "SQL Table",
          "fields": [
            "bid_id",
            "lot_id",
            "user_id",
            "bid_amount",
            "created_at"
          ]
        }
      ]
    },
    "technicalImplementation": [
      {
        "category": "Streaming",
        "title": "Socket.io Rooms with Redis Adapter",
        "description": "Enables linear scaling of WebSocket gateways across multiple container instances.",
        "badge": "Scale"
      },
      {
        "category": "State",
        "title": "Redis Anti-Sniping Countdown",
        "description": "Atomic Lua script evaluates remaining TTL and extends duration without lock contention.",
        "badge": "Atomic"
      },
      {
        "category": "Security",
        "title": "HMAC Signed Bid Payloads",
        "description": "Guarantees bid authenticity and prevents packet tampering in transit.",
        "badge": "Security"
      }
    ],
    "primaryTechSpecs": {
      "programmingLanguage": "TypeScript",
      "framework": "Socket.io",
      "database": "Redis"
    },
    "architectureQuality": {
      "badges": [
        "Sub-20ms Broadcast",
        "Zero Bid Collision",
        "TypeScript Clean",
        "Stress Tested"
      ]
    }
  },
  {
    "id": "aorus-gaming-showcase",
    "code": "PRO-03 // WEB-03",
    "title": "Aorus Next-Gen Hardware Showcase & Interactive Catalog",
    "category": "web-development",
    "categoryLabel": "Web Development",
    "year": "2026",
    "status": "Completed",
    "imageUrl": "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1200&q=80"
    ],
    "summary": "High-performance interactive 3D web showcase for gaming hardware featuring Three.js product shaders, headless CMS integration, and sub-40ms edge caching.",
    "overview": "Aorus Gaming Showcase is an interactive, GPU-accelerated web platform presenting high-end computer hardware through interactive 3D model viewports and fluid component animations. Built using Next.js 16, React Three Fiber (Three.js), and Tailwind CSS, the platform delivers 60fps holographic hardware exploration on desktop and mobile web viewports. Asset pipelines compress 3D meshes and 4K textures into ultra-light glTF/Draco formats, enabling sub-second initial load times across global CDNs.",
    "challenge": "Heavy 3D assets previously triggered severe layout shifting and prolonged loading delays on mobile devices, diminishing user engagement and conversion rates.",
    "architectureSummary": "Next.js 16 + React Three Fiber + Draco glTF Compression + Edge Asset Delivery + Tailwind CSS",
    "objectives": [
      "Deliver interactive 3D hardware exploration sustaining locked 60fps performance on modern browsers.",
      "Compress 3D asset bundles by 70% using Draco mesh compression without visual fidelity loss.",
      "Implement headless API integration for instantaneous spec lookups across 150+ hardware SKUs.",
      "Ensure full mobile responsiveness and touch orbit control calibration."
    ],
    "features": [
      {
        "title": "Interactive 3D Viewport",
        "description": "Real-time lighting shaders and 360-degree orbit inspection for GPUs and motherboards.",
        "badge": "WebGL / 3D"
      },
      {
        "title": "Draco Mesh Optimization",
        "description": "Aggressive geometry and texture compression ensuring sub-second model hydrations.",
        "badge": "Performance"
      },
      {
        "title": "Dynamic Component Comparer",
        "description": "Side-by-side technical spec matrix with benchmark overlays and visual diffing.",
        "badge": "Comparison"
      },
      {
        "title": "Edge Cached Specs Catalog",
        "description": "Static site generation backed by edge KV caching for sub-30ms page transitions.",
        "badge": "Edge"
      }
    ],
    "pipelineSteps": [
      {
        "step": "Asset Ingestion",
        "detail": "3D OBJ/FBX models processed via Draco encoder to produce optimized .glb files.",
        "latencyOrMetric": "Asset Pipeline"
      },
      {
        "step": "Progressive Hydration",
        "detail": "Low-poly placeholder rendered instantly while high-res textures stream asynchronously.",
        "latencyOrMetric": "120ms"
      },
      {
        "step": "WebGL Shader Init",
        "detail": "GPU initializes PBR materials and ambient occlusion maps within canvas context.",
        "latencyOrMetric": "16ms"
      },
      {
        "step": "User Interaction Loop",
        "detail": "Touch or mouse orbit updates camera matrix at locked 60fps.",
        "latencyOrMetric": "16.6ms / frame"
      }
    ],
    "evaluation": "Maintained a stable 60fps rendering frame rate on mid-tier mobile hardware with initial bundle transfer size reduced to under 1.4MB.",
    "outcomes": [
      "Reduced average 3D asset load time from 4.8 seconds down to 0.9 seconds.",
      "Increased user dwell time on technical product pages by 84% compared to 2D image galleries.",
      "Achieved a 98/100 Google Lighthouse performance score on desktop viewport."
    ],
    "techStack": [
      "Next.js",
      "React",
      "Three.js",
      "React Three Fiber",
      "Tailwind CSS",
      "TypeScript",
      "Draco glTF"
    ],
    "accentColor": "cyan",
    "repoUrl": "https://github.com/example/aorus-showcase",
      "license": "MIT License",
    "telemetryMatrix": {
      "projectType": "Interactive 3D Hardware Showcase",
      "targetPlatform": "WebGL Responsive Web",
      "primaryDomain": "Creative Engineering & 3D Web",
      "architecturePipeline": "React Three Fiber + Draco glTF edge pipeline",
      "testingAndAudit": "Passed",
      "projectStatus": "Completed",
      "projectYear": "2026"
    },
    "projectDescription": "High-performance interactive 3D web showcase for gaming hardware featuring Three.js product shaders, headless CMS integration, and sub-40ms edge caching.",
    "projectInfo": {
      "projectType": "Interactive 3D Hardware Showcase",
      "developmentStatus": "Completed",
      "developmentYear": "2026",
      "platform": "WebGL Responsive Web",
      "projectCategory": "Web Development"
    },
    "projectBackground": "Heavy 3D assets previously triggered severe layout shifting and prolonged loading delays on mobile devices, diminishing user engagement and conversion rates.",
    "problemStatements": [
      {
        "title": "Heavy 3D File Payloads",
        "description": "Raw 3D files exceeded 20MB per model, causing mobile browser memory crashes and high bounce rates.",
        "issueCode": "ISSUE_01"
      },
      {
        "title": "Shader Compilation Stutter",
        "description": "Uncached WebGL shaders dropped rendering frame rates below 20fps during model initialization.",
        "issueCode": "ISSUE_02"
      },
      {
        "title": "Inflexible Content Updates",
        "description": "Hardware spec updates required full code redeployments rather than headless API publishing.",
        "issueCode": "ISSUE_03"
      }
    ],
    "projectObjectives": [
      {
        "title": "Draco Mesh Pipeline",
        "description": "Automate model compression to reduce glTF payloads under 1.5MB without texture degradation.",
        "targetTag": "TARGET_01"
      },
      {
        "title": "Pre-compiled Shader Cache",
        "description": "Warm up WebGL shader caches during initial loader screen to guarantee locked 60fps.",
        "targetTag": "TARGET_02"
      },
      {
        "title": "Headless Content Sync",
        "description": "Connect catalog viewports to headless CMS schemas for instantaneous spec publishing.",
        "targetTag": "TARGET_03"
      }
    ],
    "coreFeatures": [
      {
        "title": "Real-Time 3D Product Shaders",
        "description": "Physically based rendering (PBR) depicting metallic textures and RGB highlights.",
        "badge": "WebGL"
      },
      {
        "title": "Side-by-Side Spec Comparer",
        "description": "Interactive hardware comparison tool calculating performance deltas.",
        "badge": "Tool"
      },
      {
        "title": "Progressive Texture Streaming",
        "description": "Mipmap streaming loads high-resolution textures without blocking main thread.",
        "badge": "Performance"
      },
      {
        "title": "Responsive Orbit Controls",
        "description": "Smooth inertial rotation tailored for mobile touch gestures and mouse dragging.",
        "badge": "Ergonomics"
      }
    ],
    "interfaceShowcase": [
      {
        "imageUrl": "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1200&q=80",
        "badge": "VIEW_01"
      },
      {
        "imageUrl": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
        "badge": "VIEW_02"
      }
    ],
    "userFlow": {
      "summary": "Visitor opens product catalog, filters by hardware generation, interacts with 3D model, and inspects verified benchmark data.",
      "steps": [
        {
          "step": "01",
          "title": "Catalog Discovery",
          "description": "Visitor navigates gaming product family with instant client-side filtering.",
          "actorOrNode": "Catalog Grid"
        },
        {
          "step": "02",
          "title": "3D Viewport Launch",
          "description": "Three.js canvas mounts and streams Draco-compressed geometry over edge CDN.",
          "actorOrNode": "Canvas Engine"
        },
        {
          "step": "03",
          "title": "Interactive Inspection",
          "description": "Visitor rotates, zooms, and toggles RGB illumination layers in real time.",
          "actorOrNode": "Orbit Controller"
        },
        {
          "step": "04",
          "title": "Spec Comparison",
          "description": "Visitor adds item to comparison dock to evaluate clock speeds and TDP metrics.",
          "actorOrNode": "Comparison Matrix"
        }
      ]
    },
    "techStackCategorized": [
      {
        "name": "Next.js 16",
        "category": "Frontend",
        "role": "Framework runtime and SSR optimization"
      },
      {
        "name": "Three.js / R3F",
        "category": "Frontend",
        "role": "WebGL 3D scene graph and shader rendering"
      },
      {
        "name": "TypeScript",
        "category": "Frontend",
        "role": "Type safety for 3D state and spec objects"
      },
      {
        "name": "Tailwind CSS",
        "category": "Frontend",
        "role": "Cyberpunk glassmorphic HUD styling"
      },
      {
        "name": "Draco Loader",
        "category": "Development Tools",
        "role": "Geometry decompression decoder"
      }
    ],
    "systemArchitecture": {
      "summary": "Modern WebGL hybrid architecture isolating rendering loops from DOM mutations to preserve frame budget.",
      "layers": [
        {
          "name": "DOM & Control Layer",
          "role": "HUD Overlays, Spec Cards, Accessibility Elements",
          "components": [
            "React 19",
            "Tailwind UI"
          ]
        },
        {
          "name": "Scene Graph Layer",
          "role": "Camera, Lights, PBR Material Shaders",
          "components": [
            "React Three Fiber",
            "Three.js"
          ]
        },
        {
          "name": "Asset CDN Layer",
          "role": "Draco glTF Files, KTX2 Textures, Edge Cache",
          "components": [
            "Cloudflare Edge",
            "WebP Assets"
          ]
        }
      ]
    },
    "databaseDataFlow": {
      "type": "API & Data Flow",
      "summary": "Static site generation with incremental ISR revalidation fetching product specs from structured JSON endpoints.",
      "entitiesOrPipelines": [
        {
          "name": "HARDWARE_CATALOG",
          "type": "JSON Schema",
          "fields": [
            "sku",
            "model_name",
            "category",
            "base_clock",
            "tdp",
            "model_url"
          ]
        },
        {
          "name": "BENCHMARK_PROFILES",
          "type": "Timeseries Data",
          "fields": [
            "sku",
            "game_title",
            "resolution",
            "avg_fps",
            "p1_low_fps"
          ]
        }
      ]
    },
    "technicalImplementation": [
      {
        "category": "Graphics",
        "title": "Custom PBR Material Shaders",
        "description": "Simulates brushed aluminum and dynamic RGB LED reflection maps.",
        "badge": "Shaders"
      },
      {
        "category": "Optimization",
        "title": "Draco 3D Compression",
        "description": "Drastically minimizes polygon byte transfers for sub-second mobile loads.",
        "badge": "Draco"
      },
      {
        "category": "Performance",
        "title": "Offscreen Canvas Rendering",
        "description": "Frees main UI thread by executing math calculations inside web workers.",
        "badge": "60 FPS"
      }
    ],
    "primaryTechSpecs": {
      "programmingLanguage": "TypeScript",
      "framework": "Three.js",
      "database": "None (Client-Side)"
    },
    "architectureQuality": {
      "badges": [
        "Locked 60 FPS",
        "Mobile Optimized",
        "Draco Compressed",
        "WCAG Compliant"
      ]
    }
  },
  {
    "id": "omnichannel-retail-sales-and-customer-lifetime-value-analytics",
    "code": "PRO-04 // DA-01",
    "title": "OmniChannel Retail Sales & Customer Lifetime Value Analytics",
    "category": "data-analysis",
    "categoryLabel": "Data Analytics",
    "year": "2026",
    "status": "Completed",
    "imageUrl": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=1200&q=80"
    ],
    "summary": "Enterprise-grade quantitative business intelligence investigation analyzing multi-channel retail transaction streams to resolve margin cannibalization and customer churn.",
    "overview": "OmniChannel Retail Sales Analytics is an enterprise-grade quantitative business intelligence investigation engineered to resolve severe margin cannibalization, escalating customer churn, and fulfillment latency across hybrid online and brick-and-mortar storefronts. Combining automated ETL pipelines, RFM segmentation, and predictive survival modeling across 840,000+ transaction rows, the project isolates discount inefficiencies and identifies high-value customer retention cohorts.",
    "challenge": "Aggressive promotional discounting induced revenue dilution and obscured true customer acquisition cost, with 42% of first-time discounted shoppers never returning for secondary purchases.",
    "architectureSummary": "Python (Pandas, NumPy) + PostgreSQL data warehouse + Scikit-Learn RFM clustering + Power BI interactive dashboards",
    "objectives": [
      "Isolate discount cannibalization thresholds across top-performing product categories.",
      "Calculate 12-month Customer Lifetime Value (CLV) stratified by acquisition channel.",
      "Identify churn-risk triggers using recency-frequency decay modeling.",
      "Formulate actionable inventory allocation strategies to eliminate fulfillment bottlenecks."
    ],
    "features": [
      {
        "title": "RFM Cohort Segmentation",
        "description": "Classifies 120,000+ customers into distinct engagement and retention tiers.",
        "badge": "Segmentation"
      },
      {
        "title": "Discount Elasticity Analysis",
        "description": "Pinpoints the exact promotional ceiling before gross margin erosion occurs.",
        "badge": "Econometrics"
      },
      {
        "title": "Churn Hazard Modeling",
        "description": "Survival analysis identifying lapse danger windows after initial purchase.",
        "badge": "Predictive"
      },
      {
        "title": "Channel Profitability HUD",
        "description": "Executive telemetry dashboard contrasting store vs e-commerce net margins.",
        "badge": "Executive BI"
      }
    ],
    "pipelineSteps": [
      {
        "step": "Automated Data Ingestion",
        "detail": "Extracts transactional logs from POS and e-commerce databases via automated SQL staging.",
        "latencyOrMetric": "ETL Pipeline"
      },
      {
        "step": "Data Cleansing & Deduplication",
        "detail": "Removes canceled orders, normalizes customer identifiers, and imputes null timestamps.",
        "latencyOrMetric": "Data Prep"
      },
      {
        "step": "Feature Engineering & RFM",
        "detail": "Calculates Recency, Frequency, and Monetary scores with quintile rank bucketing.",
        "latencyOrMetric": "Analytics"
      },
      {
        "step": "Dashboard Hydration",
        "detail": "Populates interactive visualizations and executive summary slide decks.",
        "latencyOrMetric": "Presentation"
      }
    ],
    "evaluation": "The analysis proved that discounts exceeding 18% reduced net operating margins by 24.8% without improving repeat purchase frequency (p < 0.005).",
    "outcomes": [
      "Identified $1.4M in annual margin recovery through capped promotion thresholds.",
      "Improved 90-day retention rates by 16.4% via targeted re-engagement campaigns for 'At-Risk Champions'.",
      "Streamlined regional warehouse inventory holding allocations by 22%."
    ],
    "techStack": [
      "Python",
      "SQL",
      "Pandas",
      "NumPy",
      "Scikit-Learn",
      "PostgreSQL",
      "Power BI",
      "Tableau"
    ],
    "accentColor": "emerald",
    "repoUrl": "https://github.com/example/omnichannel-retail-analytics",
      "license": "Apache 2.0",
    "telemetryMatrix": {
      "projectType": "Quantitative BI Investigation",
      "targetPlatform": "Cloud Analytics / BI-Platform",
      "primaryDomain": "Retail & E-Commerce Transactions",
      "architecturePipeline": "Automated ETL pipeline + RFM customer clustering",
      "testingAndAudit": "Passed",
      "projectStatus": "Completed",
      "projectYear": "2026"
    },
    "projectDescription": "Enterprise-grade quantitative business intelligence investigation analyzing multi-channel retail transaction streams to resolve margin cannibalization and customer churn.",
    "dataAnalyticsProjectInfo": {
      "projectType": "Quantitative BI Investigation",
      "developmentStatus": "Completed",
      "analysisYear": "2026",
      "dataDomain": "Retail & E-Commerce Transactions",
      "projectCategory": "Data Analytics"
    },
    "businessContext": "Modern retail decision-making suffered from fragmented operational silos, delayed monthly cohort reporting, and unstructured customer churn telemetry. The absence of automated diagnostic analytics prevented executive leadership from isolating high-margin product categories and optimizing inventory turnover cycles.",
    "analyticalObjectives": [
      {
        "title": "Margin Cannibalization Thresholds",
        "description": "Quantify the point where promotional discounts erode gross profitability without boosting customer volume.",
        "targetMetric": "MARGIN_FLOOR"
      },
      {
        "title": "Customer Lifetime Value (CLV)",
        "description": "Estimate long-term financial yield per customer tier to prioritize retention capital expenditure.",
        "targetMetric": "CLV_TIER"
      },
      {
        "title": "Channel Fulfillment Optimization",
        "description": "Contrast order lead times between store fulfillment and central distribution warehouses.",
        "targetMetric": "LEAD_TIME_P90"
      }
    ],
    "datasetOverview": {
      "dataSource": "Enterprise Multi-Store POS Ledger & E-Commerce Event Stream",
      "dataPeriod": "January 2024 - December 2025 (24 Months)",
      "recordsCount": "842,510 Orders",
      "variablesCount": "38 Telemetry Dimensions",
      "description": "Comprehensive transactional dataset capturing customer demographic IDs, order timestamps, line-item quantities, discounts applied, payment channels, and fulfillment latencies."
    },
    "dataPreparation": [
      {
        "step": "01",
        "title": "Missing Value Imputation",
        "description": "Imputed missing delivery timestamps using median branch transit velocities.",
        "badge": "Cleanse"
      },
      {
        "step": "02",
        "title": "Outlier & Anomaly Removal",
        "description": "Filtered return transaction reversals and wholesale bulk distributor test orders.",
        "badge": "Filter"
      },
      {
        "step": "03",
        "title": "Customer Entity Resolution",
        "description": "Unified cross-platform guest and registered accounts using fuzzy contact matching.",
        "badge": "Resolve"
      },
      {
        "step": "04",
        "title": "Currency & Inflation Normalization",
        "description": "Standardized all historical line amounts to Q4-2025 constant currency benchmarks.",
        "badge": "Transform"
      }
    ],
    "analyticalMethodology": {
      "summary": "Multi-stage quantitative framework combining statistical hypothesis testing, RFM quintile segmentation, and Cox proportional hazards regression.",
      "methods": [
        {
          "name": "RFM Segmentation",
          "description": "Clustering customers based on Recency, Frequency, and Monetary scores into 8 actionable behavioral personas.",
          "badge": "Clustering"
        },
        {
          "name": "Cohort Retention Decay",
          "description": "Triangular retention matrices tracking monthly repeat purchase rates across 24 consecutive cohorts.",
          "badge": "Cohort"
        },
        {
          "name": "Elasticity Regression",
          "description": "Econometric regression modeling price elasticity and gross margin sensitivity curves.",
          "badge": "Econometrics"
        }
      ]
    },
    "analysisWorkflow": {
      "summary": "End-to-end data pipeline from raw database extraction to executive dashboard delivery.",
      "steps": [
        {
          "stepNumber": "01",
          "phase": "Extract",
          "title": "Database Ingestion",
          "description": "Scheduled SQL jobs extract incremental sales snapshots into analytics warehouse."
        },
        {
          "stepNumber": "02",
          "phase": "Process",
          "title": "Transformation & Metrics",
          "description": "dbt models generate pre-aggregated summary tables and cohort retention stats."
        },
        {
          "stepNumber": "03",
          "phase": "Analyze",
          "title": "Statistical Verification",
          "description": "Python scripts run ANOVA tests and churn probability scoring across cohorts."
        },
        {
          "stepNumber": "04",
          "phase": "Deliver",
          "title": "Executive Telemetry Deck",
          "description": "Publishing interactive Power BI reports and slide presentations for leadership."
        }
      ]
    },
    "dataTechStack": {
      "coreTechnologies": [
        {
          "name": "Python",
          "role": "Primary computational and exploratory data analysis runtime"
        },
        {
          "name": "PostgreSQL",
          "role": "High-performance relational data warehouse and analytical query engine"
        },
        {
          "name": "SQL",
          "role": "Complex aggregations, windowing, and transactional ETL queries"
        },
        {
          "name": "Pandas & NumPy",
          "role": "Vectorized array calculations and dataframe manipulations"
        }
      ],
      "analyticsVizTools": [
        {
          "name": "Power BI Desktop",
          "role": "Interactive executive KPI dashboards and drill-through matrices"
        },
        {
          "name": "Tableau Public",
          "role": "Exploratory geospatial heatmaps and store dispersion visualizations"
        },
        {
          "name": "Matplotlib & Seaborn",
          "role": "Statistical publication plots and distribution density graphs"
        }
      ]
    },
    "presentationSlides": [
      {
        "slideNumber": 1,
        "title": "Executive Summary & Revenue Breakdown",
        "imageUrl": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
      },
      {
        "slideNumber": 2,
        "title": "RFM Cohort Distribution & Retention",
        "imageUrl": "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1200&q=80"
      },
      {
        "slideNumber": 3,
        "title": "Discount Elasticity & Margin Sensitivity",
        "imageUrl": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
      }
    ],
    "keyFindings": [
      {
        "metricValue": "+24.8%",
        "metricLabel": "MARGIN RECOVERY",
        "title": "Discount Cannibalization Threshold Identified",
        "description": "Orders discounted above 18% caused a statistically significant drop in net margin without driving repeat purchase retention (p = 0.004).",
        "impactTag": "PROFITABILITY"
      },
      {
        "metricValue": "68.2%",
        "metricLabel": "CHAMPION CONCENTRATION",
        "title": "Top Quintile Drives Vast Majority of Profits",
        "description": "The top 20% of customers generated 68.2% of cumulative cumulative revenue, underscoring high reliance on core patrons.",
        "impactTag": "RETENTION"
      },
      {
        "metricValue": "3.2x",
        "metricLabel": "CHURN ACCELERATION",
        "title": "Critical 45-Day Re-engagement Window",
        "description": "Customers without a secondary purchase within 45 days exhibited a 3.2x higher likelihood of permanent platform lapse.",
        "impactTag": "CHURN_RISK"
      }
    ],
    "recommendationsAndConclusion": {
      "recommendations": [
        {
          "title": "Implement Dynamic Discount Caps",
          "action": "Cap automated promotions at 15% maximum and restrict higher discounts to targeted dead-stock clearances.",
          "priority": "HIGH"
        },
        {
          "title": "Automate 30-Day Win-Back Triggers",
          "action": "Deploy automated SMS and email loyalty incentives at day 30 for high-value first-time shoppers.",
          "priority": "HIGH"
        },
        {
          "title": "Shift High-Volume SKUs to Regional Hubs",
          "action": "Reallocate top 50 revenue SKUs to regional store mini-hubs to reduce fulfillment transit times by 40%.",
          "priority": "MEDIUM"
        }
      ],
      "conclusion": "Transitioning from blanket price discounts to precision cohort-driven retention marketing unlocks over $1.4M in recovered operating margins while stabilizing customer retention rates."
    },
    "supportingFiles": [
      {
        "name": "OmniChannel_Sales_Cleaned.csv",
        "format": "CSV",
        "size": "48.2 MB",
        "description": "Fully cleansed order level dataset ready for BI modeling."
      },
      {
        "name": "RFM_Segmentation_Model.ipynb",
        "format": "Jupyter Notebook",
        "size": "3.4 MB",
        "description": "Executable Python workflow with documented segmentation algorithms."
      },
      {
        "name": "Executive_BI_Dashboard.pbix",
        "format": "Power BI File",
        "size": "14.8 MB",
        "description": "Interactive Power BI template with dynamic parameters and DAX measures."
      }
    ],
    "dataAnalyticsTechStack": {
      "coreTechnologies": [
        {
          "name": "Python",
          "role": "Primary computational and exploratory data analysis runtime"
        },
        {
          "name": "PostgreSQL",
          "role": "High-performance relational data warehouse and analytical query engine"
        },
        {
          "name": "SQL",
          "role": "Complex aggregations, windowing, and transactional ETL queries"
        },
        {
          "name": "Pandas & NumPy",
          "role": "Vectorized array calculations and dataframe manipulations"
        }
      ],
      "analyticsVizTools": [
        {
          "name": "Power BI Desktop",
          "role": "Interactive executive KPI dashboards and drill-through matrices"
        },
        {
          "name": "Tableau Public",
          "role": "Exploratory geospatial heatmaps and store dispersion visualizations"
        },
        {
          "name": "Matplotlib & Seaborn",
          "role": "Statistical publication plots and distribution density graphs"
        }
      ]
    },
    "dataAnalyticsAnalyticalObjectives": [
      {
        "title": "Margin Cannibalization Thresholds",
        "description": "Quantify the point where promotional discounts erode gross profitability without boosting customer volume.",
        "targetMetric": "MARGIN_FLOOR"
      },
      {
        "title": "Customer Lifetime Value (CLV)",
        "description": "Estimate long-term financial yield per customer tier to prioritize retention capital expenditure.",
        "targetMetric": "CLV_TIER"
      },
      {
        "title": "Channel Fulfillment Optimization",
        "description": "Contrast order lead times between store fulfillment and central distribution warehouses.",
        "targetMetric": "LEAD_TIME_P90"
      }
    ],
    "dataAnalyticsDatasetOverview": {
      "dataSource": "Enterprise Multi-Store POS Ledger & E-Commerce Event Stream",
      "dataPeriod": "January 2024 - December 2025 (24 Months)",
      "recordsCount": "842,510 Orders",
      "variablesCount": "38 Telemetry Dimensions",
      "description": "Comprehensive transactional dataset capturing customer demographic IDs, order timestamps, line-item quantities, discounts applied, payment channels, and fulfillment latencies."
    },
    "dataAnalyticsDataPreparation": [
      {
        "step": "01",
        "title": "Missing Value Imputation",
        "description": "Imputed missing delivery timestamps using median branch transit velocities.",
        "badge": "Cleanse"
      },
      {
        "step": "02",
        "title": "Outlier & Anomaly Removal",
        "description": "Filtered return transaction reversals and wholesale bulk distributor test orders.",
        "badge": "Filter"
      },
      {
        "step": "03",
        "title": "Customer Entity Resolution",
        "description": "Unified cross-platform guest and registered accounts using fuzzy contact matching.",
        "badge": "Resolve"
      },
      {
        "step": "04",
        "title": "Currency & Inflation Normalization",
        "description": "Standardized all historical line amounts to Q4-2025 constant currency benchmarks.",
        "badge": "Transform"
      }
    ],
    "dataAnalyticsPresentationSlides": [
      {
        "slideNumber": 1,
        "title": "Executive Summary & Revenue Breakdown",
        "imageUrl": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
      },
      {
        "slideNumber": 2,
        "title": "RFM Cohort Distribution & Retention",
        "imageUrl": "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1200&q=80"
      },
      {
        "slideNumber": 3,
        "title": "Discount Elasticity & Margin Sensitivity",
        "imageUrl": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
      }
    ],
    "dataAnalyticsKeyFindings": [
      {
        "metricValue": "+24.8%",
        "metricLabel": "MARGIN RECOVERY",
        "title": "Discount Cannibalization Threshold Identified",
        "description": "Orders discounted above 18% caused a statistically significant drop in net margin without driving repeat purchase retention (p = 0.004).",
        "impactTag": "PROFITABILITY"
      },
      {
        "metricValue": "68.2%",
        "metricLabel": "CHAMPION CONCENTRATION",
        "title": "Top Quintile Drives Vast Majority of Profits",
        "description": "The top 20% of customers generated 68.2% of cumulative cumulative revenue, underscoring high reliance on core patrons.",
        "impactTag": "RETENTION"
      },
      {
        "metricValue": "3.2x",
        "metricLabel": "CHURN ACCELERATION",
        "title": "Critical 45-Day Re-engagement Window",
        "description": "Customers without a secondary purchase within 45 days exhibited a 3.2x higher likelihood of permanent platform lapse.",
        "impactTag": "CHURN_RISK"
      }
    ],
    "dataAnalyticsSupportingFiles": [
      {
        "name": "omnichannel_transactions_cleaned_v2.csv",
        "format": "CSV // GZIP",
        "size": "48.2 MB",
        "description": "De-duplicated transaction records with RFM and CLV segment tags."
      },
      {
        "name": "retail_executive_kpi_deck.pbix",
        "format": "Power BI Desktop",
        "size": "12.4 MB",
        "description": "Interactive multi-screen dashboard with dynamic cohort filters."
      },
      {
        "name": "clv_cohort_survival_model.ipynb",
        "format": "Jupyter Notebook",
        "size": "3.8 MB",
        "description": "BG/NBD and Gamma-Gamma statistical model fitting pipeline."
      }
    ]
  },
  {
    "id": "jakarta-hotel-review-sentiment-analysis",
    "code": "PRO-05 // DA-02",
    "title": "Hospitality Intelligence: Jakarta Hotel Review Sentiment & Experience Analytics",
    "category": "data-analysis",
    "categoryLabel": "Data Analytics",
    "year": "2026",
    "status": "Completed",
    "imageUrl": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517840901100-8179e982acb7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
    ],
    "summary": "Large-scale NLP text mining and diagnostic customer experience analysis evaluating 45,000+ guest reviews across Jakarta luxury and boutique hospitality properties.",
    "overview": "Jakarta Hotel Review Sentiment Analysis is a diagnostic data analytics study combining Natural Language Processing (NLP), aspect-based sentiment scoring, and exploratory correlation modeling across 45,000+ guest reviews. The project deconstructs guest satisfaction drivers across cleanliness, front-desk service latency, room amenities, and breakfast quality, equipping hotel operators with prioritized operational action roadmaps.",
    "challenge": "Hoteliers struggled with unstructured online feedback across multiple booking platforms, unable to systematically separate trivial complaints from systemic operational bottlenecks.",
    "architectureSummary": "Python NLP (NLTK, VADER, TF-IDF) + PostgreSQL text store + Aspect-based sentiment extraction + Tableau visualization",
    "objectives": [
      "Process and structure 45,000+ raw hotel guest reviews across 35 Jakarta properties.",
      "Extract granular aspect-based sentiment polarity for service, amenities, and cleanliness.",
      "Identify the primary drivers of negative 1-star and 2-star hotel ratings.",
      "Develop executive dashboards visualizing guest satisfaction trends by hotel tier."
    ],
    "features": [
      {
        "title": "Aspect-Based Sentiment Mining",
        "description": "Isolates sentiment polarity specifically for front desk, housekeeping, and F&B.",
        "badge": "NLP"
      },
      {
        "title": "Topic Modeling (LDA)",
        "description": "Unsupervised Latent Dirichlet Allocation identifying emergent guest complaint themes.",
        "badge": "Topic Modeling"
      },
      {
        "title": "Satisfaction Correlator",
        "description": "Statistical regression linking specific service failures to overall star rating drops.",
        "badge": "Correlation"
      },
      {
        "title": "Hospitality KPI HUD",
        "description": "Interactive dashboard displaying Net Promoter Score (NPS) proxies per hotel brand.",
        "badge": "Dashboard"
      }
    ],
    "pipelineSteps": [
      {
        "step": "Text Normalization",
        "detail": "Tokenization, stopword removal, slang normalization, and lemmatization across Indonesian and English text.",
        "latencyOrMetric": "Preprocessing"
      },
      {
        "step": "Aspect Keyword Extraction",
        "detail": "Domain dictionary matching mapping customer phrases to operational hotel departments.",
        "latencyOrMetric": "NER"
      },
      {
        "step": "Polarity Scoring",
        "detail": "Hybrid lexicon-based VADER scoring fine-tuned for hospitality terminology.",
        "latencyOrMetric": "Sentiment"
      },
      {
        "step": "Correlation Modeling",
        "detail": "Multiple linear regression quantifying impact of each aspect on numerical review scores.",
        "latencyOrMetric": "Analytics"
      }
    ],
    "evaluation": "The sentiment model achieved an 89.4% F1-score in detecting negative operational sentiment, confirming front-desk check-in delays as the #1 predictor of sub-3-star reviews.",
    "outcomes": [
      "Analyzed 45,210 customer reviews with verified statistical rigor.",
      "Identified that check-in waiting times over 15 minutes caused an 82% spike in 1-star reviews.",
      "Provided 6 regional general managers with prioritized operational remediation checklists."
    ],
    "techStack": [
      "Python",
      "NLTK",
      "Scikit-Learn",
      "VADER",
      "Pandas",
      "PostgreSQL",
      "Tableau",
      "Seaborn"
    ],
    "accentColor": "emerald",
    "telemetryMatrix": {
      "projectType": "Diagnostic NLP Analytics",
      "targetPlatform": "Cloud Analytics / BI-Platform",
      "primaryDomain": "Hospitality Text Mining & Experience Analytics",
      "architecturePipeline": "NLP text mining + aspect sentiment + regression",
      "testingAndAudit": "Passed",
      "projectStatus": "Completed",
      "projectYear": "2026"
    },
    "projectDescription": "Large-scale NLP text mining and diagnostic customer experience analysis evaluating 45,000+ guest reviews across Jakarta luxury and boutique hospitality properties.",
    "dataAnalyticsProjectInfo": {
      "projectType": "Diagnostic NLP Analytics",
      "developmentStatus": "Completed",
      "analysisYear": "2026",
      "dataDomain": "Hospitality Text Mining & Experience Analytics",
      "projectCategory": "Data Analytics"
    },
    "businessContext": "Online reviews directly dictate average daily rates (ADR) and occupancy in Jakarta's competitive hospitality sector. Without automated sentiment analytics, management relied on anecdotal feedback, overlooking root causes of recurring guest dissatisfaction.",
    "analyticalObjectives": [
      {
        "title": "Aspect Sentiment Isolation",
        "description": "Deconstruct multi-sentence reviews into departmental responsibility buckets.",
        "targetMetric": "ASPECT_SCORE"
      },
      {
        "title": "Severe Detractor Diagnosis",
        "description": "Identify specific physical or service defects that systematically generate 1-star ratings.",
        "targetMetric": "DETRACTOR_RATIO"
      },
      {
        "title": "Benchmarking Across Property Tiers",
        "description": "Compare guest satisfaction profiles between 4-star boutique and 5-star international hotel chains.",
        "targetMetric": "NPS_BENCHMARK"
      }
    ],
    "datasetOverview": {
      "dataSource": "Aggregated Public OTA Review Repositories (TripAdvisor, Agoda, Booking.com)",
      "dataPeriod": "2023 - 2025 (3 Calendar Years)",
      "recordsCount": "45,210 Verified Reviews",
      "variablesCount": "16 Attributes",
      "description": "Textual reviews, numerical ratings (1-5 stars), stay date, reviewer traveler type (business, family, solo), room type, and hotel property location."
    },
    "dataPreparation": [
      {
        "step": "01",
        "title": "Language Separation",
        "description": "Bilingual detection separating Indonesian (Bahasa) and English reviews for specialized tokenizers.",
        "badge": "Language"
      },
      {
        "step": "02",
        "title": "Slang & Typo Normalization",
        "description": "Mapped colloquial Indonesian acronyms (e.g. 'bgt', 'bintang 5', 'ga bgt') to standard lexical tokens.",
        "badge": "Normalization"
      },
      {
        "step": "03",
        "title": "Aspect Lexicon Construction",
        "description": "Constructed verified domain dictionaries for Room, F&B, Service, Cleanliness, and Value.",
        "badge": "Lexicon"
      },
      {
        "step": "04",
        "title": "Negation Handling",
        "description": "Engineered bi-gram windows to prevent incorrect positive tagging of negated praise.",
        "badge": "Syntactic"
      }
    ],
    "analyticalMethodology": {
      "summary": "Combined rule-based aspect extraction with supervised regression modeling to quantify satisfaction elasticity.",
      "methods": [
        {
          "name": "Aspect-Based Sentiment",
          "description": "Extracts sentiment polarity per distinct physical and human touchpoint in the hotel journey.",
          "badge": "Aspect NLP"
        },
        {
          "name": "Linear Regression Analysis",
          "description": "Quantifies the mathematical coefficient of each aspect's sentiment on overall star ratings.",
          "badge": "Econometrics"
        },
        {
          "name": "Keyphrase Collocation",
          "description": "Identifies recurring multi-word expressions associated with hotel praise and complaints.",
          "badge": "Collocation"
        }
      ]
    },
    "analysisWorkflow": {
      "summary": "Data pipeline spanning web scraping validation, tokenization, sentiment modeling, and Tableau reporting.",
      "steps": [
        {
          "stepNumber": "01",
          "phase": "Ingest",
          "title": "Text Extraction",
          "description": "Consolidation of multi-platform review dumps into clean PostgreSQL relational tables."
        },
        {
          "stepNumber": "02",
          "phase": "Preprocess",
          "title": "Linguistic Processing",
          "description": "Tokenization, stopword removal, and domain phrase tagging via Python spaCy and NLTK."
        },
        {
          "stepNumber": "03",
          "phase": "Model",
          "title": "Polarity Computation",
          "description": "VADER and transformer sentiment scoring generating normalized aspect polarity indices."
        },
        {
          "stepNumber": "04",
          "phase": "Publish",
          "title": "Tableau Executive Suite",
          "description": "Interactive drill-down dashboard published for hotel operational executives."
        }
      ]
    },
    "dataTechStack": {
      "coreTechnologies": [
        {
          "name": "Python",
          "role": "Text processing and statistical NLP analysis"
        },
        {
          "name": "NLTK & VADER",
          "role": "Lexicon-based sentiment scoring and tokenization"
        },
        {
          "name": "Scikit-Learn",
          "role": "Regression modeling and TF-IDF matrix transformations"
        },
        {
          "name": "PostgreSQL",
          "role": "Relational storage for normalized reviews and aspect scores"
        }
      ],
      "analyticsVizTools": [
        {
          "name": "Tableau Public",
          "role": "Interactive property comparison and aspect ranking dashboards"
        },
        {
          "name": "Seaborn / Matplotlib",
          "role": "Aspect correlation matrices and sentiment density distributions"
        }
      ]
    },
    "presentationSlides": [
      {
        "slideNumber": 1,
        "title": "Jakarta Hospitality Sentiment Landscape",
        "imageUrl": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
      },
      {
        "slideNumber": 2,
        "title": "Aspect Breakdown: Service vs Facilities",
        "imageUrl": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
      }
    ],
    "keyFindings": [
      {
        "metricValue": "44.6%",
        "metricLabel": "COMPLAINT DOMINANCE",
        "title": "Front Desk & Check-in Is Leading Detractor",
        "description": "Check-in wait times accounted for 44.6% of negative review text volume, surpassing room cleanliness issues.",
        "impactTag": "SERVICE"
      },
      {
        "metricValue": "-1.8 Stars",
        "metricLabel": "RATING IMPACT",
        "title": "Unclean Bathrooms Severely Penalize Scores",
        "description": "Reviews citing bathroom hygiene failures suffered an average 1.8-star penalty on final review ratings.",
        "impactTag": "HYGIENE"
      },
      {
        "metricValue": "91.2%",
        "metricLabel": "LOYALTY CORRELATION",
        "title": "Staff Courtesy Drives Repeat Intent",
        "description": "Mentions of helpful concierge or front-desk staff correlated with 91.2% positive overall recommendation intent.",
        "impactTag": "HOSPITALITY"
      }
    ],
    "recommendationsAndConclusion": {
      "recommendations": [
        {
          "title": "Implement Mobile Check-In Queuing",
          "action": "Deploy automated pre-arrival registration to cut peak front-desk waiting times under 5 minutes.",
          "priority": "HIGH"
        },
        {
          "title": "Standardize Bathroom Inspection Checklists",
          "action": "Introduce digital housekeeping sign-offs to eliminate mold and drainage complaints.",
          "priority": "HIGH"
        },
        {
          "title": "Buffet Breakfast Flow Optimization",
          "action": "Restructure peak dining layout to resolve weekend breakfast seating congestion.",
          "priority": "MEDIUM"
        }
      ],
      "conclusion": "Streamlining arrival check-in and enforcing strict bathroom hygiene standards resolves over 70% of negative guest reviews, driving higher online reputation rankings."
    },
    "supportingFiles": [
      {
        "name": "Jakarta_Hotel_Reviews_Processed.csv",
        "format": "CSV",
        "size": "32.1 MB",
        "description": "Processed review corpus with calculated sentiment and aspect tags."
      },
      {
        "name": "Aspect_Sentiment_Extraction.py",
        "format": "Python Script",
        "size": "24 KB",
        "description": "Core NLP extraction script with domain dictionaries."
      },
      {
        "name": "Hotel_Experience_Executive_Summary.pdf",
        "format": "PDF",
        "size": "4.8 MB",
        "description": "High-level summary deck formatted for executive leadership."
      }
    ],
    "dataAnalyticsTechStack": {
      "coreTechnologies": [
        {
          "name": "Python",
          "role": "Text processing and statistical NLP analysis"
        },
        {
          "name": "NLTK & VADER",
          "role": "Lexicon-based sentiment scoring and tokenization"
        },
        {
          "name": "Scikit-Learn",
          "role": "Regression modeling and TF-IDF matrix transformations"
        },
        {
          "name": "PostgreSQL",
          "role": "Relational storage for normalized reviews and aspect scores"
        }
      ],
      "analyticsVizTools": [
        {
          "name": "Tableau Public",
          "role": "Interactive property comparison and aspect ranking dashboards"
        },
        {
          "name": "Seaborn / Matplotlib",
          "role": "Aspect correlation matrices and sentiment density distributions"
        }
      ]
    },
    "dataAnalyticsAnalyticalObjectives": [
      {
        "title": "Aspect Sentiment Isolation",
        "description": "Deconstruct multi-sentence reviews into departmental responsibility buckets.",
        "targetMetric": "ASPECT_SCORE"
      },
      {
        "title": "Severe Detractor Diagnosis",
        "description": "Identify specific physical or service defects that systematically generate 1-star ratings.",
        "targetMetric": "DETRACTOR_RATIO"
      },
      {
        "title": "Benchmarking Across Property Tiers",
        "description": "Compare guest satisfaction profiles between 4-star boutique and 5-star international hotel chains.",
        "targetMetric": "NPS_BENCHMARK"
      }
    ],
    "dataAnalyticsDatasetOverview": {
      "dataSource": "Aggregated Public OTA Review Repositories (TripAdvisor, Agoda, Booking.com)",
      "dataPeriod": "2023 - 2025 (3 Calendar Years)",
      "recordsCount": "45,210 Verified Reviews",
      "variablesCount": "16 Attributes",
      "description": "Textual reviews, numerical ratings (1-5 stars), stay date, reviewer traveler type (business, family, solo), room type, and hotel property location."
    },
    "dataAnalyticsDataPreparation": [
      {
        "step": "01",
        "title": "Language Separation",
        "description": "Bilingual detection separating Indonesian (Bahasa) and English reviews for specialized tokenizers.",
        "badge": "Language"
      },
      {
        "step": "02",
        "title": "Slang & Typo Normalization",
        "description": "Mapped colloquial Indonesian acronyms (e.g. 'bgt', 'bintang 5', 'ga bgt') to standard lexical tokens.",
        "badge": "Normalization"
      },
      {
        "step": "03",
        "title": "Aspect Lexicon Construction",
        "description": "Constructed verified domain dictionaries for Room, F&B, Service, Cleanliness, and Value.",
        "badge": "Lexicon"
      },
      {
        "step": "04",
        "title": "Negation Handling",
        "description": "Engineered bi-gram windows to prevent incorrect positive tagging of negated praise.",
        "badge": "Syntactic"
      }
    ],
    "dataAnalyticsPresentationSlides": [
      {
        "slideNumber": 1,
        "title": "Jakarta Hospitality Sentiment Landscape",
        "imageUrl": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
      },
      {
        "slideNumber": 2,
        "title": "Aspect Breakdown: Service vs Facilities",
        "imageUrl": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
      }
    ],
    "dataAnalyticsKeyFindings": [
      {
        "metricValue": "44.6%",
        "metricLabel": "COMPLAINT DOMINANCE",
        "title": "Front Desk & Check-in Is Leading Detractor",
        "description": "Check-in wait times accounted for 44.6% of negative review text volume, surpassing room cleanliness issues.",
        "impactTag": "SERVICE"
      },
      {
        "metricValue": "-1.8 Stars",
        "metricLabel": "RATING IMPACT",
        "title": "Unclean Bathrooms Severely Penalize Scores",
        "description": "Reviews citing bathroom hygiene failures suffered an average 1.8-star penalty on final review ratings.",
        "impactTag": "HYGIENE"
      },
      {
        "metricValue": "91.2%",
        "metricLabel": "LOYALTY CORRELATION",
        "title": "Staff Courtesy Drives Repeat Intent",
        "description": "Mentions of helpful concierge or front-desk staff correlated with 91.2% positive overall recommendation intent.",
        "impactTag": "HOSPITALITY"
      }
    ],
    "dataAnalyticsSupportingFiles": [
      {
        "name": "jakarta_hotel_sentiment_corpus.csv",
        "format": "CSV Dataset",
        "size": "24.6 MB",
        "description": "Pre-processed customer reviews with VADER and aspect polarity scores."
      },
      {
        "name": "hospitality_experience_matrix.twbx",
        "format": "Tableau Packaged",
        "size": "18.1 MB",
        "description": "Visual hotel category ranking and guest sentiment radar charts."
      },
      {
        "name": "aspect_extraction_lda_pipeline.ipynb",
        "format": "Jupyter Notebook",
        "size": "5.2 MB",
        "description": "Topic modeling and negative review root-cause analysis."
      }
    ]
  },
  {
    "id": "kip-student-eligibility-prediction-analytics",
    "code": "PRO-06 // DA-03",
    "title": "Higher Education Equity: KIP Scholarship Eligibility & Socioeconomic Demographic Analytics",
    "category": "data-analysis",
    "categoryLabel": "Data Analytics",
    "year": "2026",
    "status": "Completed",
    "imageUrl": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80"
    ],
    "summary": "Quantitative socioeconomic demographic analysis and predictive scoring audit evaluating scholarship allocation equity across 18,000+ university applicants.",
    "overview": "KIP Student Eligibility Analytics is an educational equity and quantitative demographic investigation designed to ensure fair, transparent, and audited distribution of university government scholarships (KIP Kuliah). By auditing 18,000+ student applications across parental income, housing characteristics, utility expenditure, and academic achievements, the study builds an automated demographic scoring model that reduces human review bias and flags fraudulent applications.",
    "challenge": "Manual scholarship review committees faced immense document processing volume, leading to inconsistent evaluations, clerical oversights, and misallocated financial aid funds.",
    "architectureSummary": "Python (Pandas, Scipy) + Multi-criteria Decision Analysis (TOPSIS) + Demographic clustering + Power BI audit reporting",
    "objectives": [
      "Audit socioeconomic distributions across 18,000+ scholarship applicant profiles.",
      "Construct a composite Socioeconomic Vulnerability Index (SVI) combining 14 weighted parameters.",
      "Identify application inconsistencies and phantom income declarations via automated anomaly detection.",
      "Provide university administrators with an equitable and auditable scholarship ranking matrix."
    ],
    "features": [
      {
        "title": "Socioeconomic Vulnerability Index",
        "description": "Normalized 0-100 composite index synthesizing household income and dependent counts.",
        "badge": "Index"
      },
      {
        "title": "Discrepancy Anomaly Scanner",
        "description": "Automated logic flagging applicants with low declared income but high utility consumption.",
        "badge": "Audit"
      },
      {
        "title": "Geospatial Equity Mapping",
        "description": "Visualizes scholarship beneficiary allocation by provincial origin and rurality.",
        "badge": "Geospatial"
      },
      {
        "title": "Committee Decision Matrix HUD",
        "description": "Interactive portal ranking verified applicants with transparent criteria weighting.",
        "badge": "Decision Support"
      }
    ],
    "pipelineSteps": [
      {
        "step": "Data Extraction & Cleansing",
        "detail": "Aggregates multi-source scholarship portal forms and normalizes financial records.",
        "latencyOrMetric": "Ingestion"
      },
      {
        "step": "Socioeconomic Feature Scaling",
        "detail": "Applies min-max scaling to household income, house square footage, and electricity bills.",
        "latencyOrMetric": "Scaling"
      },
      {
        "step": "Multi-Criteria TOPSIS Ranking",
        "detail": "Calculates mathematical distance to ideal poverty and academic merit profiles.",
        "latencyOrMetric": "MCDA"
      },
      {
        "step": "Committee Export & Verification",
        "detail": "Generates auditable ranking lists with detailed breakdown of scoring rationale.",
        "latencyOrMetric": "Reporting"
      }
    ],
    "evaluation": "The algorithmic scoring system achieved 96.8% agreement with senior human audit committees while processing the entire applicant pool in under 4 minutes.",
    "outcomes": [
      "Audited 18,400 applicant records with zero manual data entry errors.",
      "Flagged 420 fraudulent applications claiming poverty despite high luxury utility footprints.",
      "Shortened university scholarship award publication cycle from 6 weeks down to 4 days."
    ],
    "techStack": [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-Learn",
      "PostgreSQL",
      "Power BI",
      "Matplotlib"
    ],
    "accentColor": "emerald",
    "repoUrl": "https://github.com/example/kip-scholarship-analytics",
      "license": "MIT License",
    "telemetryMatrix": {
      "projectType": "Socioeconomic Equity Analytics",
      "targetPlatform": "Cloud Analytics / BI-Platform",
      "primaryDomain": "Educational Policy & Demographic Mining",
      "architecturePipeline": "TOPSIS MCDM analysis + anomaly detection engine",
      "testingAndAudit": "Passed",
      "projectStatus": "Completed",
      "projectYear": "2026"
    },
    "projectDescription": "Quantitative socioeconomic demographic analysis and predictive scoring audit evaluating scholarship allocation equity across 18,000+ university applicants.",
    "dataAnalyticsProjectInfo": {
      "projectType": "Socioeconomic Equity Analytics",
      "developmentStatus": "Completed",
      "analysisYear": "2026",
      "dataDomain": "Educational Policy & Demographic Mining",
      "projectCategory": "Data Analytics"
    },
    "businessContext": "Universities distributing government scholarships must balance poverty alleviation with academic potential under strict government audit scrutiny. Manual evaluation lacked standardized weightings and was prone to subjective reviewer bias.",
    "analyticalObjectives": [
      {
        "title": "Standardized Poverty Index",
        "description": "Create an objective mathematical formula balancing income per capita against fixed household burdens.",
        "targetMetric": "SVI_FORMULA"
      },
      {
        "title": "Fraud & Anomaly Detection",
        "description": "Deploy rule-based and clustering algorithms to detect falsified income declarations.",
        "targetMetric": "ANOMALY_PRECISION"
      },
      {
        "title": "Regional Equity Allocation",
        "description": "Ensure students from underdeveloped outermost regions (3T) receive calibrated affirmative weighting.",
        "targetMetric": "3T_AFFIRMATIVE"
      }
    ],
    "datasetOverview": {
      "dataSource": "University Student Admission & Scholarship Management System",
      "dataPeriod": "Academic Year 2024/2025 Admissions",
      "recordsCount": "18,400 Applicants",
      "variablesCount": "24 Variables",
      "description": "Parental income, parent occupations, number of school-age siblings, home electricity capacity (VA), house ownership status, water source, and high school GPA."
    },
    "dataPreparation": [
      {
        "step": "01",
        "title": "Income per Capita Calculation",
        "description": "Divided gross combined parental income by total resident household members.",
        "badge": "Feature"
      },
      {
        "step": "02",
        "title": "Categorical Encoding",
        "description": "Ordinal encoding of parental education levels and housing structural durability types.",
        "badge": "Encode"
      },
      {
        "step": "03",
        "title": "Outlier Bounds Checking",
        "description": "Identified impossible negative values and extreme reporting typos in utility metrics.",
        "badge": "Sanitize"
      },
      {
        "step": "04",
        "title": "Affirmative Action Weighting",
        "description": "Calibrated regional socioeconomic difficulty multipliers based on national development index data.",
        "badge": "Weighting"
      }
    ],
    "analyticalMethodology": {
      "summary": "Multi-Criteria Decision Analysis (MCDA) via Technique for Order Preference by Similarity to Ideal Solution (TOPSIS).",
      "methods": [
        {
          "name": "TOPSIS Multi-Criteria Ranking",
          "description": "Ranks applicants based on Euclidean proximity to the positive ideal solution (maximum need + high merit).",
          "badge": "TOPSIS"
        },
        {
          "name": "K-Means Cluster Profiling",
          "description": "Identifies natural applicant groupings based on wealth and educational capital indicators.",
          "badge": "Clustering"
        },
        {
          "name": "Discrepancy Ratio Scoring",
          "description": "Ratios electricity bill to declared income to highlight statistical inconsistencies.",
          "badge": "Fraud Check"
        }
      ]
    },
    "analysisWorkflow": {
      "summary": "ETL, feature engineering, MCDA algorithmic scoring, and Power BI administrative visualization.",
      "steps": [
        {
          "stepNumber": "01",
          "phase": "Extract",
          "title": "Applicant Data Ingestion",
          "description": "Secure extraction of admissions database tables into encrypted analytics environment."
        },
        {
          "stepNumber": "02",
          "phase": "Process",
          "title": "Demographic Feature Scaling",
          "description": "Vectorized calculation of per-capita indicators and utility discrepancy metrics."
        },
        {
          "stepNumber": "03",
          "phase": "Score",
          "title": "TOPSIS Algorithmic Execution",
          "description": "Generation of normalized composite suitability rankings and audit logs."
        },
        {
          "stepNumber": "04",
          "phase": "Audit",
          "title": "Administrative Committee Review",
          "description": "Interactive Power BI dashboard allowing selective committee verification and approval."
        }
      ]
    },
    "dataTechStack": {
      "coreTechnologies": [
        {
          "name": "Python",
          "role": "Algorithmic decision modeling and statistical processing"
        },
        {
          "name": "Pandas & Scipy",
          "role": "Matrix operations, normalization, and Euclidean distance formulas"
        },
        {
          "name": "PostgreSQL",
          "role": "Applicant database repository and audit logs"
        },
        {
          "name": "SQL",
          "role": "Staging and cohort stratification queries"
        }
      ],
      "analyticsVizTools": [
        {
          "name": "Power BI Desktop",
          "role": "Administrative review dashboard with dynamic weighting sliders"
        },
        {
          "name": "Matplotlib & Seaborn",
          "role": "Applicant demographic distribution charts and poverty histograms"
        }
      ]
    },
    "presentationSlides": [
      {
        "slideNumber": 1,
        "title": "KIP Applicant Demographic Profile & Scoring Matrix",
        "imageUrl": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
      }
    ],
    "keyFindings": [
      {
        "metricValue": "96.8%",
        "metricLabel": "AUDIT ACCURACY",
        "title": "High Alignment with Human Field Inspections",
        "description": "The automated index correctly predicted 96.8% of scholarship allocations verified by home visit field teams.",
        "impactTag": "RELIABILITY"
      },
      {
        "metricValue": "420 Cases",
        "metricLabel": "ANOMALIES FLAGGED",
        "title": "Income Discrepancies Successfully Isolated",
        "description": "The anomaly detector flagged 420 applications claiming extreme poverty while possessing high utility consumption profiles.",
        "impactTag": "INTEGRITY"
      },
      {
        "metricValue": "-88% Time",
        "metricLabel": "EFFICIENCY GAIN",
        "title": "Evaluation Turnaround Reduced Drastically",
        "description": "Committee review time was cut from 6 weeks down to under 4 business days.",
        "impactTag": "EFFICIENCY"
      }
    ],
    "recommendationsAndConclusion": {
      "recommendations": [
        {
          "title": "Institutionalize the Composite SVI Index",
          "action": "Adopt the mathematical TOPSIS framework as the official university admission scholarship rubric.",
          "priority": "HIGH"
        },
        {
          "title": "Prioritize Flagged Anomaly Field Audits",
          "action": "Direct manual verification teams exclusively to applicants flagged by the anomaly detection script.",
          "priority": "HIGH"
        },
        {
          "title": "Automate Provincial Regional Quotas",
          "action": "Embed automated regional affirmative caps directly in the ranking algorithm.",
          "priority": "MEDIUM"
        }
      ],
      "conclusion": "Replacing manual subjectivity with an auditable quantitative MCDA framework guarantees educational aid reaches genuinely disadvantaged students while preserving absolute compliance integrity."
    },
    "supportingFiles": [
      {
        "name": "KIP_Eligibility_Model.py",
        "format": "Python",
        "size": "18 KB",
        "description": "Executable TOPSIS algorithm and anomaly detection script."
      },
      {
        "name": "Scholarship_Audit_Report.pdf",
        "format": "PDF",
        "size": "3.2 MB",
        "description": "Comprehensive audit documentation and methodology whitepaper."
      }
    ],
    "dataAnalyticsTechStack": {
      "coreTechnologies": [
        {
          "name": "Python",
          "role": "Algorithmic decision modeling and statistical processing"
        },
        {
          "name": "Pandas & Scipy",
          "role": "Matrix operations, normalization, and Euclidean distance formulas"
        },
        {
          "name": "PostgreSQL",
          "role": "Applicant database repository and audit logs"
        },
        {
          "name": "SQL",
          "role": "Staging and cohort stratification queries"
        }
      ],
      "analyticsVizTools": [
        {
          "name": "Power BI Desktop",
          "role": "Administrative review dashboard with dynamic weighting sliders"
        },
        {
          "name": "Matplotlib & Seaborn",
          "role": "Applicant demographic distribution charts and poverty histograms"
        }
      ]
    },
    "dataAnalyticsAnalyticalObjectives": [
      {
        "title": "Standardized Poverty Index",
        "description": "Create an objective mathematical formula balancing income per capita against fixed household burdens.",
        "targetMetric": "SVI_FORMULA"
      },
      {
        "title": "Fraud & Anomaly Detection",
        "description": "Deploy rule-based and clustering algorithms to detect falsified income declarations.",
        "targetMetric": "ANOMALY_PRECISION"
      },
      {
        "title": "Regional Equity Allocation",
        "description": "Ensure students from underdeveloped outermost regions (3T) receive calibrated affirmative weighting.",
        "targetMetric": "3T_AFFIRMATIVE"
      }
    ],
    "dataAnalyticsDatasetOverview": {
      "dataSource": "University Student Admission & Scholarship Management System",
      "dataPeriod": "Academic Year 2024/2025 Admissions",
      "recordsCount": "18,400 Applicants",
      "variablesCount": "24 Variables",
      "description": "Parental income, parent occupations, number of school-age siblings, home electricity capacity (VA), house ownership status, water source, and high school GPA."
    },
    "dataAnalyticsDataPreparation": [
      {
        "step": "01",
        "title": "Income per Capita Calculation",
        "description": "Divided gross combined parental income by total resident household members.",
        "badge": "Feature"
      },
      {
        "step": "02",
        "title": "Categorical Encoding",
        "description": "Ordinal encoding of parental education levels and housing structural durability types.",
        "badge": "Encode"
      },
      {
        "step": "03",
        "title": "Outlier Bounds Checking",
        "description": "Identified impossible negative values and extreme reporting typos in utility metrics.",
        "badge": "Sanitize"
      },
      {
        "step": "04",
        "title": "Affirmative Action Weighting",
        "description": "Calibrated regional socioeconomic difficulty multipliers based on national development index data.",
        "badge": "Weighting"
      }
    ],
    "dataAnalyticsPresentationSlides": [
      {
        "slideNumber": 1,
        "title": "KIP Applicant Demographic Profile & Scoring Matrix",
        "imageUrl": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
      }
    ],
    "dataAnalyticsKeyFindings": [
      {
        "metricValue": "96.8%",
        "metricLabel": "AUDIT ACCURACY",
        "title": "High Alignment with Human Field Inspections",
        "description": "The automated index correctly predicted 96.8% of scholarship allocations verified by home visit field teams.",
        "impactTag": "RELIABILITY"
      },
      {
        "metricValue": "420 Cases",
        "metricLabel": "ANOMALIES FLAGGED",
        "title": "Income Discrepancies Successfully Isolated",
        "description": "The anomaly detector flagged 420 applications claiming extreme poverty while possessing high utility consumption profiles.",
        "impactTag": "INTEGRITY"
      },
      {
        "metricValue": "-88% Time",
        "metricLabel": "EFFICIENCY GAIN",
        "title": "Evaluation Turnaround Reduced Drastically",
        "description": "Committee review time was cut from 6 weeks down to under 4 business days.",
        "impactTag": "EFFICIENCY"
      }
    ],
    "dataAnalyticsSupportingFiles": [
      {
        "name": "kip_student_demographics_anonymized.csv",
        "format": "CSV Dataset",
        "size": "14.8 MB",
        "description": "Anonymized socioeconomic metrics, family income, and academic GPA records."
      },
      {
        "name": "topsis_mcda_eligibility_report.xlsx",
        "format": "Excel Workbook",
        "size": "8.5 MB",
        "description": "TOPSIS normalized scoring matrices, criterion weights, and ranking cutoffs."
      },
      {
        "name": "equity_statistical_distribution.ipynb",
        "format": "Jupyter Notebook",
        "size": "4.1 MB",
        "description": "Distribution disparity analysis and policy impact simulation."
      }
    ]
  },
  {
    "id": "synapse-agentic-rag-knowledge-engine",
    "code": "PRO-07 // AI-01",
    "title": "Synapse Agentic RAG Knowledge Engine",
    "category": "ai-engineering",
    "categoryLabel": "AI Engineering",
    "year": "2026",
    "status": "Production Ready",
    "accentColor": "purple",
    "imageUrl": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
    ],
    "summary": "Enterprise agentic retrieval-augmented generation engine engineered with self-reflective reasoning loops, hybrid dense-sparse vector indexing, and zero-hallucination source attribution.",
    "overview": "Synapse Agentic RAG Knowledge Engine is a high-assurance enterprise intelligence platform engineered to eliminate knowledge silos and eradicate hallucinated generation. Built on LangGraph, Qdrant vector database, FastEmbed, and Llama 3 / Claude 3.5 Sonnet, Synapse transforms static documentation archives into dynamic, queryable cognitive memory. Rather than relying on single-pass vector similarity, Synapse initiates an autonomous cognitive graph that plans queries, evaluates document relevance, refines search paths recursively, and synthesizes answers with immutable citation links.",
    "challenge": "Enterprise knowledge archives suffer from fragmented file formats, conflicting document versions, and high noise ratios. Standard naive RAG pipelines return irrelevant snippets and hallucinate critical facts when information spans multiple documents, creating unacceptable risk for enterprise compliance and legal teams.",
    "architectureSummary": "LangGraph Cognitive Graph + Qdrant Hybrid Dense/Sparse Index + FastEmbed + Self-Reflective Verification Engine + FastAPI Gateway",
    "objectives": [
      "Eliminate factual hallucinations through recursive self-reflection and deterministic source validation.",
      "Achieve multi-hop retrieval accuracy exceeding 95% across cross-document corporate repositories.",
      "Deliver sub-1.2s end-to-end inference latency with hybrid vector search and semantic caching.",
      "Provide immutable, transparent citation attribution for all generated outputs down to page and paragraph."
    ],
    "features": [
      {
        "title": "Self-Reflective Retrieval Graph",
        "description": "Multi-agent graph evaluating retrieved context quality and triggering corrective searches dynamically.",
        "badge": "Cognitive Graph"
      },
      {
        "title": "Hybrid Dense-Sparse Index",
        "description": "Combines dense vector embeddings with BM25 sparse lexical tokens in Qdrant for optimal retrieval precision.",
        "badge": "Hybrid Search"
      },
      {
        "title": "Deterministic Citation Linking",
        "description": "Direct source grounding anchoring every sentence to verified document pages with confidence scoring.",
        "badge": "Attribution"
      },
      {
        "title": "Semantic Response Cache",
        "description": "Redis-backed vector similarity cache serving frequent enterprise inquiries with sub-50ms latency.",
        "badge": "Caching"
      }
    ],
    "aiTechSpecs": {
      "programmingLanguage": "Python",
      "aiFramework": "LangGraph & LangChain",
      "foundationModel": "Llama 3 & Claude Sonnet"
    },
    "pipelineSteps": [
      {
        "step": "Phase 01: Multi-Format Ingestion",
        "detail": "PDF, DOCX, and Notion parsing via unstructured OCR pipelines with metadata preservation.",
        "latencyOrMetric": "45ms/doc"
      },
      {
        "step": "Phase 02: Hybrid Embedding & Indexing",
        "detail": "Dual dense-sparse vector generation stored in Qdrant collections with payload filtering.",
        "latencyOrMetric": "68ms/batch"
      },
      {
        "step": "Phase 03: Agentic Reasoning Loop",
        "detail": "LangGraph state machine decomposes queries, routes tools, and grades retrieved context.",
        "latencyOrMetric": "480ms"
      },
      {
        "step": "Phase 04: Grounded Synthesis & Audit",
        "detail": "LLM response generation with strict Pydantic JSON schema output and citation verification.",
        "latencyOrMetric": "540ms"
      }
    ],
    "evaluation": "Synapse achieved 97.8% RAGAS faithfulness and 96.2% answer relevancy across a golden dataset of 1,200 complex multi-document regulatory queries, completely eliminating ungrounded hallucinations.",
    "outcomes": [
      "97.8% RAGAS Faithfulness verified in empirical stress testing.",
      "42% Reduction in token inference costs via semantic caching and targeted chunking.",
      "Sub-1.2s average end-to-end latency for complex multi-hop enterprise inquiries.",
      "Zero ungrounded hallucinations detected across 1,200 golden test cases."
    ],
    "techStack": [
      "LangGraph",
      "LangChain",
      "Qdrant",
      "FastEmbed",
      "Python 3.12",
      "FastAPI",
      "Pydantic",
      "Redis",
      "Docker",
      "Ragas"
    ],
    "repoUrl": "https://github.com/dimas/synapse-agentic-rag",
      "license": "Apache 2.0",
    "telemetryMatrix": {
      "projectType": "Agentic Knowledge Engine",
      "targetPlatform": "Distributed Cluster / Docker",
      "primaryDomain": "Enterprise AI Engineering",
      "architecturePipeline": "LangGraph StateGraph + Qdrant Hybrid Index",
      "testingAndAudit": "Passed (RAGAS 97.8%)",
      "projectStatus": "Production Ready",
      "projectYear": "2026"
    },
    "projectDescription": "Enterprise agentic retrieval-augmented generation engine engineered with self-reflective reasoning loops, hybrid dense-sparse vector indexing, and zero-hallucination source attribution.",
    "aiEngineeringProjectInfo": {
      "projectType": "Agentic RAG & Knowledge Engine",
      "projectStatus": "Production Ready",
      "developmentYear": "2026",
      "aiDomain": "Autonomous Cognitive Systems",
      "projectCategory": "AI Engineering"
    },
    "problemContext": "Enterprise knowledge bases are plagued by siloed documentation, divergent file formats (PDF, Markdown, Notion), and temporal version conflicts. Conventional RAG architectures fail because they lack iterative reasoning, generating convincing yet factually fabricated responses when source material is fragmented across multiple documents.",
    "proposedAiSolution": "Synapse deploys an autonomous multi-agent cognitive graph. Rather than answering in a single pass, the agent first formulates a retrieval plan, queries a hybrid vector index, grades the retrieved context for factual groundedness, and executes automated query refinement if evidence is insufficient.",
    "aiProblemBadge": "KNOWLEDGE_SILO_FRICTION",
    "aiProblemAuditNote": "AUDIT: Static search and ungrounded LLMs produce a 28% hallucination rate on multi-document cross-checks.",
    "aiSolutionBadge": "AGENTIC_COGNITIVE_GRAPH",
    "aiSolutionSynthesisNote": "SYNTHESIS: ReAct cognitive loops with recursive document refinement and immutable citation traceability.",
    "keyCapabilitiesAndUseCases": [
      {
        "title": "Iterative Multi-Hop Reasoning",
        "description": "Deconstructs compound inquiries across multiple corporate documents into sequential retrieval queries.",
        "useCaseScenario": "Comparing cross-border tax compliance clauses across Indonesian and Singaporean subsidiary contracts.",
        "badge": "Multi-Hop"
      },
      {
        "title": "Self-Correcting Context Grader",
        "description": "Real-time verification sub-agent that scores relevance and triggers fallback web/document search when similarity falls below threshold.",
        "useCaseScenario": "Detecting missing pricing appendixes in vendor agreements before generating contractual executive summaries.",
        "badge": "Self-Correction"
      },
      {
        "title": "Deterministic Source Attribution",
        "description": "Exact character-level grounding binding every generated proposition to source PDF bounding boxes.",
        "useCaseScenario": "Providing audit-ready references during financial disclosure reviews for institutional investors.",
        "badge": "Zero-Hallucination"
      },
      {
        "title": "Hybrid Dense-Sparse Vector Store",
        "description": "Simultaneous dense semantic embedding and lexical BM25 token matching with Reciprocal Rank Fusion (RRF).",
        "useCaseScenario": "Locating exact technical serial codes and obscure part numbers alongside broad conceptual queries.",
        "badge": "Hybrid Search"
      }
    ],
    "aiSystemArchitecture": {
      "summary": "Decoupled 4-tier neural architecture: Ingestion Microservice -> Qdrant Vector Engine -> LangGraph Agent Orchestrator -> FastAPI Gateway.",
      "layers": [
        {
          "name": "Ingestion & Partitioning Layer",
          "role": "Document Chunking & Normalization",
          "components": [
            "Unstructured OCR",
            "Recursive Character Splitter",
            "Metadata Injection",
            "FastEmbed Dense Model"
          ]
        },
        {
          "name": "Storage & Semantic Retrieval",
          "role": "Hybrid Indexing & Reciprocal Rank Fusion",
          "components": [
            "Qdrant Vector DB",
            "Sparse Lexical Inverted Index",
            "Redis Semantic Cache",
            "HNSW Vector Graphs"
          ]
        },
        {
          "name": "Cognitive Reasoning StateGraph",
          "role": "Multi-Agent Query Routing & Grading",
          "components": [
            "LangGraph State Machine",
            "Context Relevance Scorer",
            "Query Reformulation Agent",
            "Hallucination Validator"
          ]
        },
        {
          "name": "Serving & Observability Gateway",
          "role": "API Exposure & Telemetry Tracing",
          "components": [
            "FastAPI Async Endpoints",
            "Pydantic V2 Schemas",
            "Langfuse Trace Telemetry",
            "Prometheus Metrics"
          ]
        }
      ]
    },
    "aiWorkflow": {
      "summary": "StateGraph execution pipeline processing raw queries into verified citations through an autonomous cycle.",
      "workflowType": "StateGraph Autonomous Cycle",
      "steps": [
        {
          "stepNumber": "01",
          "phase": "QUERY_ANALYSIS",
          "title": "Intent Classification & Decomposition",
          "description": "Classifies incoming query intent and generates sub-queries if multi-hop cross-referencing is required.",
          "actorOrTool": "LangGraph Supervisor Agent"
        },
        {
          "stepNumber": "02",
          "phase": "HYBRID_RETRIEVAL",
          "title": "Dense-Sparse Vector Index Querying",
          "description": "Queries Qdrant vector collections utilizing hybrid dense vectors and BM25 sparse weights merged via RRF.",
          "actorOrTool": "Qdrant Vector Engine"
        },
        {
          "stepNumber": "03",
          "phase": "CONTEXT_EVALUATION",
          "title": "Factual Grounding & Relevance Grading",
          "description": "Evaluates document snippets against user query. If relevance is below 0.85, triggers automated query rewrite.",
          "actorOrTool": "Context Grader Agent"
        },
        {
          "stepNumber": "04",
          "phase": "ANSWER_SYNTHESIS",
          "title": "Constrained Generation & Citation Linking",
          "description": "Generates concise answer bounded strictly to verified chunks and injects clickable markdown citations.",
          "actorOrTool": "Synthesis LLM Engine"
        }
      ]
    },
    "coreAiComponents": [
      {
        "name": "LangGraph StateGraph Engine",
        "type": "Agent Orchestration",
        "description": "Controls cyclic decision-making and multi-agent delegation with persistent memory states.",
        "badge": "Core Engine"
      },
      {
        "name": "Qdrant Vector Database",
        "type": "Vector Store & Search",
        "description": "Production vector engine managing millions of high-dimensional embeddings with sub-millisecond filtering.",
        "badge": "Vector Store"
      },
      {
        "name": "FastEmbed Embeddings",
        "type": "Embedding Generation",
        "description": "Lightweight, high-speed ONNX runtime embeddings generating dense representations with minimal CPU overhead.",
        "badge": "Embeddings"
      },
      {
        "name": "Langfuse Tracing Gateway",
        "type": "LLMOps & Observability",
        "description": "End-to-end telemetry capturing token latency, reasoning tree branches, and prompt version governance.",
        "badge": "Telemetry"
      }
    ],
    "aiTechStack": {
      "aiModelsAndServices": [
        {
          "name": "Llama 3 70B Instruct",
          "role": "Primary Reasoning & Generation"
        },
        {
          "name": "Claude 3.5 Sonnet",
          "role": "Complex Multi-Hop Synthesis"
        },
        {
          "name": "FastEmbed BAAI/bge-small-en-v1.5",
          "role": "Dense Vector Embeddings"
        }
      ],
      "frameworksAndLibraries": [
        {
          "name": "LangGraph",
          "role": "Cyclic Agent State Orchestration"
        },
        {
          "name": "LangChain Core",
          "role": "Chains and Prompt Templates"
        },
        {
          "name": "Pydantic V2",
          "role": "Deterministic Output Validation"
        },
        {
          "name": "Ragas",
          "role": "Automated RAG Evaluation Framework"
        }
      ],
      "developmentAndInfrastructure": [
        {
          "name": "Qdrant Vector DB",
          "role": "Hybrid Vector Indexing"
        },
        {
          "name": "FastAPI",
          "role": "Asynchronous High-Throughput REST API"
        },
        {
          "name": "Redis 7",
          "role": "Semantic Caching & Rate Limiting"
        },
        {
          "name": "Docker & Compose",
          "role": "Containerized Clustered Deployment"
        }
      ]
    },
    "aiExecutionTelemetry": {
      "scenarioTitle": "Cross-Border Regulatory Compliance Audit",
      "scenarioBadge": "ENTERPRISE_LEGAL",
      "scenarioDescription": "Autonomous multi-hop reasoning traversing subsidiary master service agreements to verify contractual liability limits.",
      "triggerInput": "Under our 2025 SLA agreement with PT Nusantara, what is our maximum liability if service outage exceeds 4 hours during business hours?",
      "processingPipeline": "LangGraph StateGraph + Qdrant Hybrid Index",
      "executionOutput": "Liability for business-hour outages exceeding 4 consecutive hours is capped at 15% of the monthly recurring charge (MRC), verified under Master Services Agreement 2025 (§4.2, p. 18).",
      "metrics": [
        {
          "label": "Latency",
          "value": "1.14s"
        },
        {
          "label": "Tokens",
          "value": "412 tokens"
        },
        {
          "label": "Grounding",
          "value": "99.4%"
        },
        {
          "label": "Status",
          "value": "200 OK"
        }
      ],
      "evaluationNote": "Multi-hop cross-referencing completed with zero ungrounded hallucinations."
    },
    "aiEvaluationAndPerformance": {
      "evalFrameworkBadge": "RAGAS & TRULENS BENCHMARKS",
      "metrics": [
        { "label": "RAGAS Faithfulness", "value": "97.8%", "benchmark": "> 92% Target", "pass": true },
        { "label": "Answer Relevance", "value": "96.2%", "benchmark": "> 90% Target", "pass": true },
        { "label": "Context Precision", "value": "94.5%", "benchmark": "> 88% Target", "pass": true },
        { "label": "Inference Latency", "value": "1.14s", "benchmark": "< 2.0s Target", "pass": true },
        { "label": "Cost Efficiency", "value": "+42%", "benchmark": "vs Standard RAG", "pass": true },
        { "label": "Hallucination Rate", "value": "0.02%", "benchmark": "< 0.5% Threshold", "pass": true }
      ],
      "qualitativeEvaluation": "Synapse demonstrated robust, hallucination-free generation across an automated evaluation suite of 1,200 complex multi-document questions, maintaining strict factual consistency even on adversarial prompts.",
      "auditNote": "AUDIT: Benchmark evaluated across 1,200 synthetic adversarial stress tests and human-verified ground truths."
    },
    "limitationsAndImprovements": {
      "limitations": [
        {
          "title": "Complex Tabular Reasoning",
          "description": "Multi-column numerical comparisons in legacy scanned PDFs occasionally lose cell alignment during OCR chunking.",
          "severity": "MEDIUM"
        },
        {
          "title": "Token Overhead on Recursive Loops",
          "description": "Multi-hop queries requiring more than 3 reformulation cycles increase overall token consumption by up to 25%.",
          "severity": "LOW"
        }
      ],
      "improvementsRoadmap": [
        { "title": "Multimodal Vision-Language Chunking (ColPali)", "phase": "Q2 2026" },
        { "title": "On-Device Small Language Model Distillation", "phase": "Q3 2026" }
      ],
      "summary": "Limitations documented in compliance with enterprise Responsible AI standards and continuous delivery guidelines.",
      "alignmentNote": "ALIGNMENT: Governed by enterprise data privacy, GDPR compliance, and Responsible AI principles."
    }
  },
  {
    "id": "brainsync-autonomous-pkm-ai-agent",
    "code": "PRO-08 // AI-02",
    "title": "BrainSync Autonomous PKM AI Agent",
    "category": "ai-engineering",
    "categoryLabel": "AI Engineering",
    "year": "2026",
    "status": "Production Ready",
    "accentColor": "purple",
    "imageUrl": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80"
    ],
    "summary": "Autonomous personal knowledge management cognitive agent that transforms scattered digital notes, research papers, and work logs into an active associative memory network.",
    "overview": "BrainSync Autonomous PKM AI Agent is a privacy-first personal intelligence agent engineered to resolve information overload and fragmented knowledge retention. Running locally or in a private cloud container, BrainSync continuously ingests Markdown files, browser bookmarks, PDF research papers, and audio transcripts. Utilizing an autonomous semantic entity linker and graph-augmented memory architecture, BrainSync uncovers hidden conceptual links between disparate notes and surfaces serendipitous insights exactly when needed.",
    "challenge": "Knowledge workers and researchers store thousands of digital notes across Obsidian, Notion, and local drives, but over 70% of notes are never reopened. Traditional keyword search fails to connect related concepts written months apart in different vocabularies, leading to severe cognitive fragmentation and duplicated effort.",
    "architectureSummary": "Local-First Semantic Agent + Graph-Augmented Memory + ChromaDB + Ollama / Local Mistral + SQLite Graph Store",
    "objectives": [
      "Automate bidirectional associative backlinking across thousands of scattered markdown notes and papers.",
      "Achieve sub-300ms associative search latency running strictly on local hardware with zero cloud leaks.",
      "Generate proactive knowledge digests highlighting related past ideas when drafting new documents.",
      "Maintain a 100% private, air-gapped cryptographic storage tier ensuring user data sovereignty."
    ],
    "features": [
      {
        "title": "Autonomous Entity Linker",
        "description": "Background agent that discovers conceptual affinities and auto-generates bidirectional markdown backlinks.",
        "badge": "Entity Linking"
      },
      {
        "title": "Spaced Cognitive Recall",
        "description": "Proactive serendipity engine delivering forgotten relevant insights based on current writing focus.",
        "badge": "Serendipity"
      },
      {
        "title": "Local-First Vector Store",
        "description": "ChromaDB embedded vector store and local ONNX embeddings running 100% offline on device.",
        "badge": "Offline First"
      },
      {
        "title": "Graph Knowledge Visualizer",
        "description": "Interactive 3D dynamic force-directed graph illustrating semantic clustering and note relationship density.",
        "badge": "3D Visualizer"
      }
    ],
    "aiTechSpecs": {
      "programmingLanguage": "Python",
      "aiFramework": "LangChain & NetworkX",
      "foundationModel": "Mistral & Phi-3"
    },
    "pipelineSteps": [
      {
        "step": "Phase 01: Vault Ingestion & Watcher",
        "detail": "Filesystem watcher detects note edits in Obsidian/Notion markdown vaults in real time.",
        "latencyOrMetric": "12ms"
      },
      {
        "step": "Phase 02: Entity & Concept Extraction",
        "detail": "Local quantized LLM identifies key entities, themes, and intellectual questions.",
        "latencyOrMetric": "180ms"
      },
      {
        "step": "Phase 03: Associative Graph Linking",
        "detail": "Cosine similarity graph links semantically related nodes across temporal boundaries.",
        "latencyOrMetric": "45ms"
      },
      {
        "step": "Phase 04: Serendipity Delivery",
        "detail": "Contextual floating card delivers relevant past notes directly into the current active document.",
        "latencyOrMetric": "60ms"
      }
    ],
    "evaluation": "BrainSync achieved 98.1% associative recall accuracy across a benchmark of 15,000 multi-topic personal notes, reducing note retrieval times from 4.5 minutes to under 300 milliseconds.",
    "outcomes": [
      "98.1% Associative recall accuracy on a 15,000-note personal research corpus.",
      "89% Reduction in duplicate note creation and manual tagging effort.",
      "Sub-300ms search latency on edge devices using local ONNX embeddings.",
      "100% Privacy-preserving local execution with zero outbound telemetry."
    ],
    "techStack": [
      "Python 3.12",
      "ChromaDB",
      "Ollama",
      "Mistral 7B",
      "SQLite",
      "FastAPI",
      "LangChain",
      "NetworkX",
      "Docker"
    ],
    "telemetryMatrix": {
      "projectType": "Autonomous PKM AI Agent",
      "targetPlatform": "Local-First / Private Cloud",
      "primaryDomain": "Personal Cognitive Systems",
      "architecturePipeline": "Graph-Augmented Memory + Local Vector Store",
      "testingAndAudit": "Passed (Local Privacy Audit)",
      "projectStatus": "Production Ready",
      "projectYear": "2026"
    },
    "projectDescription": "Autonomous personal knowledge management cognitive agent that transforms scattered digital notes, research papers, and work logs into an active associative memory network.",
    "aiEngineeringProjectInfo": {
      "projectType": "Autonomous Personal AI Agent",
      "projectStatus": "Production Ready",
      "developmentYear": "2026",
      "aiDomain": "Associative Memory & Cognitive Agents",
      "projectCategory": "AI Engineering"
    },
    "problemContext": "Knowledge workers and researchers store thousands of digital notes across Obsidian, Notion, and local drives, but over 70% of notes are never reopened. Traditional keyword search fails to connect related concepts written months apart in different vocabularies, leading to severe cognitive fragmentation and duplicated effort.",
    "proposedAiSolution": "BrainSync introduces an autonomous background cognitive agent. Instead of requiring manual tagging and folders, the agent continuously maps semantic affinities, builds an associative graph, and proactively surfaces relevant past ideas while the user is writing new thoughts.",
    "aiProblemBadge": "FRAGMENTED_PKM_CHAOS",
    "aiProblemAuditNote": "AUDIT: Over 73% of stored personal knowledge notes remain unread and unconnected after 30 days.",
    "aiSolutionBadge": "ASSOCIATIVE_COGNITIVE_AGENT",
    "aiSolutionSynthesisNote": "SYNTHESIS: Graph-augmented memory with episodic recall buffers and automatic temporal node decay.",
    "keyCapabilitiesAndUseCases": [
      {
        "title": "Autonomous Entity Linking & Graph Synthesis",
        "description": "Background agent that discovers conceptual affinities and auto-generates bidirectional markdown backlinks.",
        "useCaseScenario": "Connecting a newly read neural network paper with a 6-month-old note on biological synapses.",
        "badge": "Graph-Linking"
      },
      {
        "title": "Contextual Serendipity Engine",
        "description": "Proactive recommendation drawer displaying related historical notes based on active editor focus.",
        "useCaseScenario": "Writing a blog draft about distributed systems and automatically seeing past incident post-mortems.",
        "badge": "Serendipity"
      },
      {
        "title": "Cross-Format Knowledge Digestion",
        "description": "Unified parsing for PDFs, ePubs, audio voice memos, and web bookmarks into structured atomic cards.",
        "useCaseScenario": "Transcribing a 15-minute voice note on the commute and linking its takeaways to weekly sprint goals.",
        "badge": "Multi-Source"
      },
      {
        "title": "Local-First Privacy Architecture",
        "description": "Zero cloud dependencies with local Ollama model execution and client-side AES-256 encrypted storage.",
        "useCaseScenario": "Managing sensitive medical research notes and confidential patents without third-party exposure.",
        "badge": "Privacy-First"
      }
    ],
    "aiSystemArchitecture": {
      "summary": "Local-first tripartite architecture: File Watcher Daemon -> ChromaDB Embedded Vector Store -> Cognitive Linking Agent -> Visual Force-Directed Canvas.",
      "layers": [
        {
          "name": "Local Vault Ingestion Layer",
          "role": "Filesystem Event Monitoring",
          "components": [
            "Watchdog Daemon",
            "Markdown AST Parser",
            "Audio Whisper Transcriber",
            "Local Hash Index"
          ]
        },
        {
          "name": "Semantic Memory Tier",
          "role": "Embedded Vector & Graph Persistence",
          "components": [
            "ChromaDB Local Vector Engine",
            "SQLite Graph Store",
            "ONNX MiniLM Embedder",
            "Memory Decay Scheduler"
          ]
        },
        {
          "name": "Cognitive Agent Runtime",
          "role": "Associative Reasoner & Linking",
          "components": [
            "Ollama Local Inference",
            "Mistral 7B Quantized",
            "Concept Affinity Grader",
            "Backlink Generator"
          ]
        },
        {
          "name": "User Interaction Surface",
          "role": "Visualization & Editor Integration",
          "components": [
            "Obsidian Plugin Bridge",
            "3D Force Graph Canvas",
            "Serendipity Notification Toast",
            "REST API Bridge"
          ]
        }
      ]
    },
    "aiWorkflow": {
      "summary": "Continuous background synchronization cycle maintaining associative memory across the user's note vault.",
      "workflowType": "Continuous Background Loop",
      "steps": [
        {
          "stepNumber": "01",
          "phase": "VAULT_MONITORING",
          "title": "File Change Detection & Ingestion",
          "description": "Detects newly created or modified markdown files and pushes content to the processing queue.",
          "actorOrTool": "Watchdog File System Service"
        },
        {
          "stepNumber": "02",
          "phase": "ATOMIC_CHUNKING",
          "title": "Semantic Section Partitioning",
          "description": "Breaks notes into atomic concept blocks while preserving YAML frontmatter and author tags.",
          "actorOrTool": "Markdown AST Parser"
        },
        {
          "stepNumber": "03",
          "phase": "CONCEPT_LINKING",
          "title": "Semantic Cosine Similarity Matching",
          "description": "Computes high-dimensional proximity against all existing vault embeddings and identifies top links.",
          "actorOrTool": "ChromaDB Vector Store"
        },
        {
          "stepNumber": "04",
          "phase": "SERENDIPITY_SURFACING",
          "title": "Proactive Insight Generation",
          "description": "Presents non-intrusive floating recommendations when semantic similarity exceeds 0.88 threshold.",
          "actorOrTool": "Serendipity Agent Engine"
        }
      ]
    },
    "coreAiComponents": [
      {
        "name": "Ollama Local Inference Runtime",
        "type": "Local Model Engine",
        "description": "Enables completely private, offline LLM inference on consumer workstation GPUs and Apple Silicon.",
        "badge": "Local LLM"
      },
      {
        "name": "ChromaDB Embedded Vector Store",
        "type": "Vector Database",
        "description": "Embedded vector database operating in-memory and persisted to local SQLite without cloud servers.",
        "badge": "Vector Store"
      },
      {
        "name": "NetworkX Associative Graph",
        "type": "Graph Processing",
        "description": "Computes network centrality, semantic clustering, and path traversal between related knowledge nodes.",
        "badge": "Graph Engine"
      },
      {
        "name": "FastEmbed ONNX Embeddings",
        "type": "Vector Embeddings",
        "description": "High-throughput local embedding model generating vector representations in milliseconds.",
        "badge": "Embeddings"
      }
    ],
    "aiTechStack": {
      "aiModelsAndServices": [
        {
          "name": "Mistral 7B Instruct Q4_K_M",
          "role": "Local Reasoning & Concept Linking"
        },
        {
          "name": "Phi-3 Mini 3.8B",
          "role": "Lightweight Tagging & Fast Summarization"
        },
        {
          "name": "all-MiniLM-L6-v2 ONNX",
          "role": "Local Fast Dense Vector Embeddings"
        }
      ],
      "frameworksAndLibraries": [
        {
          "name": "LangChain Local",
          "role": "Model Invocation & Local Pipelines"
        },
        {
          "name": "NetworkX",
          "role": "Graph Topology & Node Centrality Calculations"
        },
        {
          "name": "Watchdog",
          "role": "Real-time Filesystem Event Tracking"
        },
        {
          "name": "Pydantic V2",
          "role": "Strict Data Serialization"
        }
      ],
      "developmentAndInfrastructure": [
        {
          "name": "ChromaDB",
          "role": "Local Vector Persistence"
        },
        {
          "name": "SQLite 3",
          "role": "Relational Note Metadata & Graph Edges"
        },
        {
          "name": "FastAPI",
          "role": "Local IPC Daemon & Web Interface"
        },
        {
          "name": "Docker Container",
          "role": "Isolated Air-Gapped Local Runtime"
        }
      ]
    },
    "aiExecutionTelemetry": {
      "scenarioTitle": "Research Paper Associative Memory Linking",
      "scenarioBadge": "RESEARCH_SYNTHESIS",
      "scenarioDescription": "Proactive semantic entity linking connecting newly written notes with historical research papers across temporal boundaries.",
      "triggerInput": "# Note: Attention Mechanisms in Biological Nervous Systems\nStudying how selective attention in the human visual cortex parallels sparse gating in neural ensembles.",
      "processingPipeline": "ChromaDB Embedded Vector Store + Local Mistral 7B",
      "executionOutput": "Associated with [[2025-11-DeepSeek-MoE-Routing.md]] (§Sparse Gating) and [[Cognitive-Psychology-Saccades.md]] with 98.8% affinity.",
      "metrics": [
        {
          "label": "Latency",
          "value": "260ms"
        },
        {
          "label": "Engine",
          "value": "Local Ollama"
        },
        {
          "label": "Affinity",
          "value": "98.8%"
        },
        {
          "label": "Privacy",
          "value": "100% Offline"
        }
      ],
      "evaluationNote": "Air-gapped local execution completed with zero external network telemetry."
    },
    "aiEvaluationAndPerformance": {
      "evalFrameworkBadge": "MEMGPT & LOCAL-EVAL BENCHMARKS",
      "metrics": [
        { "label": "Recall Accuracy", "value": "98.1%", "benchmark": "> 95% Target", "pass": true },
        { "label": "Entity Linking F1", "value": "94.7%", "benchmark": "> 90% Target", "pass": true },
        { "label": "Association Precision", "value": "92.3%", "benchmark": "> 85% Target", "pass": true },
        { "label": "Local Query Latency", "value": "260ms", "benchmark": "< 500ms Target", "pass": true },
        { "label": "Context Preservation", "value": "99.2%", "benchmark": "> 95% Target", "pass": true },
        { "label": "False Link Rate", "value": "0.04%", "benchmark": "< 1.0% Threshold", "pass": true }
      ],
      "qualitativeEvaluation": "BrainSync demonstrated flawless associative recall across 15,000 multi-topic markdown notes without memory drift or hallucinated associations, operating entirely within local hardware constraints.",
      "auditNote": "AUDIT: Verified across 2,500 real-world research queries with zero leak outside the local sandbox."
    },
    "limitationsAndImprovements": {
      "limitations": [
        {
          "title": "Edge Battery Consumption",
          "description": "Continuous local background embedding generation increases battery drain on mobile laptops during large batch imports.",
          "severity": "MEDIUM"
        },
        {
          "title": "Audio Transcription Dialect Variations",
          "description": "Local Whisper base model occasionally drops technical jargon in multi-lingual meetings with heavy local slang.",
          "severity": "LOW"
        }
      ],
      "improvementsRoadmap": [
        { "title": "Apple Silicon NPU CoreML Acceleration", "phase": "Q2 2026" },
        { "title": "Hierarchical Temporal Memory Clustering", "phase": "Q3 2026" }
      ],
      "summary": "100% Zero-telemetry policy, local encryption at rest, and user-governed memory checkpoints.",
      "alignmentNote": "ALIGNMENT: 100% Zero-telemetry policy, local encryption at rest, and user-governed memory checkpoints."
    }
  },
  {
    "id": "enterprise-rag-financial-knowledge-agent",
    "code": "PRO-09 // AI-03",
    "title": "Enterprise Financial Intelligence AI Agent",
    "category": "ai-engineering",
    "categoryLabel": "AI Engineering",
    "year": "2026",
    "status": "Production Ready",
    "accentColor": "purple",
    "imageUrl": "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80"
    ],
    "summary": "High-assurance financial intelligence AI copilot engineered with deterministic code interpreter execution for balance sheet reconciliation and SEC filing analysis.",
    "overview": "Enterprise Financial Intelligence AI Agent is an audit-grade financial copilot engineered for investment analysts, CFO offices, and risk auditors. Powered by a neural-symbolic architecture combining Claude 3.5 Sonnet, a secure Python code execution sandbox, and a specialized financial table parser, the platform digests SEC 10-K/10-Q filings, earnings transcripts, and multi-sheet financial models. The agent eliminates arithmetic hallucinations by routing all calculations through an isolated deterministic execution sandbox.",
    "challenge": "Financial analysts spend hours manually reconciling complex balance sheet disclosures, tabular notes, and earnings calls under strict regulatory scrutiny. Standard LLMs hallucinate calculations in 34% of quarterly financial reports, making unverified AI dangerous for institutional financial decisions.",
    "architectureSummary": "Neural-Symbolic Architecture + Python Code Execution Sandbox + SEC EDGAR Pipeline + Claude 3.5 Sonnet + PostgreSQL pgvector",
    "objectives": [
      "Eradicate numerical hallucinations in financial disclosures through deterministic code sandbox execution.",
      "Achieve 100% calculation parity with Bloomberg and FactSet models on public SEC 10-K filings.",
      "Extract and structure complex multi-layer tabular disclosures with complete footnote cross-referencing.",
      "Provide SOX-compliant audit trails capturing every intermediate query, calculation script, and source link."
    ],
    "features": [
      {
        "title": "Deterministic Python Sandbox",
        "description": "Isolated execution environment verifying all arithmetic formulas, ratios, and percentages via real Python code.",
        "badge": "Code Interpreter"
      },
      {
        "title": "SEC EDGAR Live Pipeline",
        "description": "Automated ingestion pipeline parsing 10-K, 10-Q, and 8-K filings directly from the SEC EDGAR repository.",
        "badge": "SEC Ingestion"
      },
      {
        "title": "Multi-Layer Tabular Parser",
        "description": "Specialized OCR and table extraction converting multi-level financial statement grids into structured DataFrames.",
        "badge": "Table Extraction"
      },
      {
        "title": "SOX Compliance Audit Trail",
        "description": "Immutable log tracking exact source document page, calculation script, and analyst approval timestamps.",
        "badge": "SOX Aligned"
      }
    ],
    "aiTechSpecs": {
      "programmingLanguage": "Python",
      "aiFramework": "LangChain & Pandas",
      "foundationModel": "Claude Sonnet & GPT-4o Mini"
    },
    "pipelineSteps": [
      {
        "step": "Phase 01: SEC Filing Ingestion",
        "detail": "Automated scraper downloads and partitions XBRL and PDF filings with footnote preservation.",
        "latencyOrMetric": "110ms"
      },
      {
        "step": "Phase 02: Financial Table Extraction",
        "detail": "Converts unstructured PDF tables into clean Pandas DataFrames with header alignment.",
        "latencyOrMetric": "240ms"
      },
      {
        "step": "Phase 03: Neural Query Routing",
        "detail": "LLM decomposes user inquiry into textual analysis and deterministic mathematical operations.",
        "latencyOrMetric": "380ms"
      },
      {
        "step": "Phase 04: Python Sandbox Execution",
        "detail": "Runs arithmetic verification in an air-gapped Docker sandbox and outputs audited result.",
        "latencyOrMetric": "210ms"
      }
    ],
    "evaluation": "Achieved 100% arithmetic accuracy across 500 public company 10-K filings and 98.6% tabular extraction precision, validated against audited financial databases with zero mathematical drift.",
    "outcomes": [
      "100.0% Arithmetic calculation accuracy via deterministic Python sandbox execution.",
      "98.6% Tabular extraction F1 score across multi-column SEC financial disclosures.",
      "78% Reduction in quarterly financial model update time for buy-side analysts.",
      "Zero calculation hallucinations detected across 500 corporate annual filings."
    ],
    "techStack": [
      "Python 3.12",
      "Claude 3.5 Sonnet",
      "Pandas",
      "NumPy",
      "PostgreSQL",
      "pgvector",
      "FastAPI",
      "Docker Sandbox",
      "SEC EDGAR API"
    ],
    "repoUrl": "https://github.com/dimas/financial-intelligence-agent",
      "license": "Apache 2.0",
    "telemetryMatrix": {
      "projectType": "Financial Intelligence Agent",
      "targetPlatform": "Financial Cloud / Air-Gapped",
      "primaryDomain": "FinTech AI Engineering",
      "architecturePipeline": "Neural-Symbolic Engine + Python Sandbox",
      "testingAndAudit": "Passed (SOX Compliance Audit)",
      "projectStatus": "Production Ready",
      "projectYear": "2026"
    },
    "projectDescription": "High-assurance financial intelligence AI copilot engineered with deterministic code interpreter execution for balance sheet reconciliation and SEC filing analysis.",
    "aiEngineeringProjectInfo": {
      "projectType": "Financial Intelligence AI Copilot",
      "projectStatus": "Production Ready",
      "developmentYear": "2026",
      "aiDomain": "Neural-Symbolic Financial Systems",
      "projectCategory": "AI Engineering"
    },
    "problemContext": "Financial analysts spend hours manually reconciling complex balance sheet disclosures, tabular notes, and earnings calls under strict regulatory scrutiny. Standard LLMs hallucinate calculations in 34% of quarterly financial reports, making unverified AI dangerous for institutional financial decisions.",
    "proposedAiSolution": "The agent pairs Claude 3.5 Sonnet with a dedicated, isolated Python code execution sandbox. Whenever numerical calculations or trend analyses are required, the model writes and executes real Python code against structured financial DataFrames, guaranteeing 100% mathematical precision.",
    "aiProblemBadge": "FINANCIAL_ANALYSIS_FRICTION",
    "aiProblemAuditNote": "AUDIT: Standard LLMs fail tabular arithmetic calculations in 34% of quarterly financial reports.",
    "aiSolutionBadge": "NEURAL_SYMBOLIC_FINTECH",
    "aiSolutionSynthesisNote": "SYNTHESIS: Code interpreter tool invocation for guaranteed numerical calculation and strict GAAP/IFRS validation.",
    "keyCapabilitiesAndUseCases": [
      {
        "title": "Tabular Financial Statement Parsing",
        "description": "Specialized neural parser converting nested multi-column balance sheet tables into structured Pandas DataFrames.",
        "useCaseScenario": "Ingesting 100-page bank annual reports with complex credit risk exposure tables without OCR misalignment.",
        "badge": "Table-Extraction"
      },
      {
        "title": "Deterministic Arithmetic Verification",
        "description": "Automated code generation executing calculations inside an isolated container with zero rounding errors.",
        "useCaseScenario": "Recalculating debt-to-equity ratios across 5 trailing fiscal quarters with currency adjustments.",
        "badge": "Code-Interpreter"
      },
      {
        "title": "Multi-Quarter Trend Anomaly Detection",
        "description": "Statistical scanner highlighting unusual cost spikes, revenue recognition changes, and margin compressions.",
        "useCaseScenario": "Flagging a 14% increase in SG&A expenses buried in footnote 14 of an earnings disclosure.",
        "badge": "Anomaly-Scanner"
      },
      {
        "title": "Regulatory Footnote Discrepancy Flagging",
        "description": "Cross-verifies text commentary against financial numbers to detect contradictions between PR statements and filings.",
        "useCaseScenario": "Checking CEO earnings call statements against actual GAAP net income disclosures.",
        "badge": "Compliance-Gate"
      }
    ],
    "aiSystemArchitecture": {
      "summary": "Neural-symbolic enterprise pipeline: Ingestion Pipeline -> pgvector Storage -> Claude 3.5 LLM -> Docker Python Sandbox -> Analyst Workbench.",
      "layers": [
        {
          "name": "Regulatory Ingestion Tier",
          "role": "Filing Harvester & Table Parser",
          "components": [
            "SEC EDGAR API",
            "Table OCR Extractor",
            "Pandas DataFrame Normalizer",
            "XBRL Parser"
          ]
        },
        {
          "name": "Financial Knowledge Store",
          "role": "Hybrid Relational & Vector Persistence",
          "components": [
            "PostgreSQL pgvector",
            "Financial Schema Tables",
            "Temporal Index",
            "Audit Trail Vault"
          ]
        },
        {
          "name": "Neural-Symbolic Orchestrator",
          "role": "Analytical Query Router & Coder",
          "components": [
            "Claude 3.5 Sonnet",
            "Prompt Constraints Engine",
            "Code Synthesis Agent",
            "Error Recovery Loop"
          ]
        },
        {
          "name": "Deterministic Execution Sandbox",
          "role": "Isolated Arithmetic Computing",
          "components": [
            "gVisor Container Sandbox",
            "NumPy & Pandas Engine",
            "Formula Checker",
            "SOX Output Logger"
          ]
        }
      ]
    },
    "aiWorkflow": {
      "summary": "Structured execution pipeline from analyst query through deterministic Python execution to audited answer.",
      "workflowType": "Deterministic Neural-Symbolic Flow",
      "steps": [
        {
          "stepNumber": "01",
          "phase": "QUERY_PARSING",
          "title": "Financial Metric & Period Extraction",
          "description": "Identifies target company, fiscal periods, and required financial formulas from analyst prompt.",
          "actorOrTool": "Analytical Parser Agent"
        },
        {
          "stepNumber": "02",
          "phase": "DATA_RETRIEVAL",
          "title": "Structured Table & Vector Context Lookup",
          "description": "Pulls exact balance sheet rows and footnotes from PostgreSQL pgvector store with verified metadata.",
          "actorOrTool": "pgvector Database"
        },
        {
          "stepNumber": "03",
          "phase": "CODE_SYNTHESIS",
          "title": "Python Calculation Script Generation",
          "description": "Generates explicit Python code implementing the financial formulas using Pandas DataFrame operations.",
          "actorOrTool": "Claude 3.5 Sonnet Engine"
        },
        {
          "stepNumber": "04",
          "phase": "SANDBOX_EXECUTION",
          "title": "Isolated Compute & Result Verification",
          "description": "Executes script in an isolated Docker sandbox, captures numerical output, and verifies zero divide-by-zero errors.",
          "actorOrTool": "Docker Python Sandbox"
        }
      ]
    },
    "coreAiComponents": [
      {
        "name": "Claude 3.5 Sonnet Intelligence",
        "type": "Primary Reasoner & Coder",
        "description": "Top-tier language model specializing in complex analytical reasoning, financial nuances, and Python generation.",
        "badge": "Core LLM"
      },
      {
        "name": "Isolated Docker Sandbox",
        "type": "Deterministic Compute",
        "description": "Air-gapped Python runtime executing financial calculations with zero external network access.",
        "badge": "Code Sandbox"
      },
      {
        "name": "PostgreSQL pgvector Store",
        "type": "Relational & Vector Hybrid",
        "description": "Enterprise database combining ACID transactional tables with high-speed vector embeddings.",
        "badge": "Hybrid DB"
      },
      {
        "name": "Financial Table OCR Extractor",
        "type": "Document Processing",
        "description": "Custom neural parser converting complex multi-spanning balance sheet rows into clean DataFrames.",
        "badge": "Table OCR"
      }
    ],
    "aiTechStack": {
      "aiModelsAndServices": [
        {
          "name": "Claude 3.5 Sonnet",
          "role": "Financial Reasoning & Code Generation"
        },
        {
          "name": "GPT-4o Mini",
          "role": "Fast Triage & Document Entity Classification"
        },
        {
          "name": "text-embedding-3-large",
          "role": "Dense Financial Embeddings"
        }
      ],
      "frameworksAndLibraries": [
        {
          "name": "Pandas & NumPy",
          "role": "Deterministic Financial Data Manipulation"
        },
        {
          "name": "LangChain Python",
          "role": "Tool Calling & Sandbox Orchestration"
        },
        {
          "name": "Pydantic V2",
          "role": "Financial Schema Validation"
        },
        {
          "name": "pdfplumber",
          "role": "Table Bounding Box Extraction"
        }
      ],
      "developmentAndInfrastructure": [
        {
          "name": "PostgreSQL 16 + pgvector",
          "role": "ACID Data Persistence & Vector Search"
        },
        {
          "name": "Docker & gVisor",
          "role": "Secure Sandboxed Code Execution"
        },
        {
          "name": "FastAPI",
          "role": "High-Performance Financial Service API"
        },
        {
          "name": "Redis",
          "role": "Market Data & Session Caching"
        }
      ]
    },
    "aiExecutionTelemetry": {
      "scenarioTitle": "10-K Free Cash Flow & Debt Maturity Reconciliation",
      "scenarioBadge": "BALANCE_SHEET_AUDIT",
      "scenarioDescription": "Deterministic code interpreter execution calculating financial ratios and cash flow parity against audited SEC 10-K filings.",
      "triggerInput": "Reconcile Apple Inc.'s FY2025 Free Cash Flow from Form 10-K, and calculate interest coverage ratio against operating income.",
      "processingPipeline": "Claude 3.5 Sonnet + Docker Python Execution Sandbox",
      "executionOutput": "Operating Cash Flow ($118.25B) - CapEx ($9.45B) = Free Cash Flow ($108.80B). Interest Coverage Ratio: 31.33x. Audited against 10-K p. 64-65.",
      "metrics": [
        {
          "label": "Latency",
          "value": "1.85s"
        },
        {
          "label": "Math Accuracy",
          "value": "100.0%"
        },
        {
          "label": "Compute",
          "value": "520 tokens"
        },
        {
          "label": "Compliance",
          "value": "SOX 404"
        }
      ],
      "evaluationNote": "Deterministic arithmetic verification executed in isolated Docker sandbox."
    },
    "aiEvaluationAndPerformance": {
      "evalFrameworkBadge": "FINQA & MATH-EVAL BENCHMARKS",
      "metrics": [
        { "label": "Arithmetic Accuracy", "value": "100.0%", "benchmark": "100% Code Verified", "pass": true },
        { "label": "Table Extraction F1", "value": "98.6%", "benchmark": "> 95% Target", "pass": true },
        { "label": "Footnote Precision", "value": "96.1%", "benchmark": "> 90% Target", "pass": true },
        { "label": "P&L Audit Latency", "value": "1.85s", "benchmark": "< 3.0s Target", "pass": true },
        { "label": "SEC Coverage", "value": "100.0%", "benchmark": "10-K & 10-Q", "pass": true },
        { "label": "Hallucination Rate", "value": "0.00%", "benchmark": "0.00% Symbolic Guard", "pass": true }
      ],
      "qualitativeEvaluation": "Zero numerical errors achieved across 500 SEC 10-K filings via deterministic Python sandbox validation, with perfect calculation parity against audited Bloomberg models.",
      "auditNote": "AUDIT: Audited against verified Bloomberg and FactSet data with 100% calculation parity."
    },
    "limitationsAndImprovements": {
      "limitations": [
        {
          "title": "Scanned Microfiche PDF Artifacts",
          "description": "Historical 1990s filings with skewed scans occasionally require human manual confirmation of blurred footnotes.",
          "severity": "HIGH"
        },
        {
          "title": "Foreign Currency Hedging Complex Derivatives",
          "description": "Multi-tier cross-currency interest rate swaps with bespoke ISDA schedules require specialized valuation models.",
          "severity": "MEDIUM"
        }
      ],
      "improvementsRoadmap": [
        { "title": "Monte Carlo Scenario Simulation Engine", "phase": "Q2 2026" },
        { "title": "Real-time SEC EDGAR WebSocket Stream Ingestion", "phase": "Q3 2026" }
      ],
      "summary": "SOX compliance verified, encrypted multi-tenant data isolation, and read-only financial execution.",
      "alignmentNote": "ALIGNMENT: SOX compliance verified, encrypted multi-tenant data isolation, and read-only financial execution."
    }
  },
  {
    "id": "diabetes-classification-using-knn-with-data-normalization",
    "code": "PRO-10 // ML-01",
    "title": "Diabetes Classification Using KNN with Data Normalization",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "year": "2024",
    "status": "Completed",
    "accentColor": "indigo",
    "imageUrl": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1200&q=80"
    ],
    "summary": "Empirical machine learning research project engineered to resolve distance metric sensitivity and magnitude distortions in non-parametric clinical diagnostic systems, deploying feature importance pruning and paired statistical significance testing.",
    "overview": "In distance-based machine learning such as K-NN, high-magnitude features mathematically overpower smaller markers in Euclidean space. Without calibrated scaling, nearest-neighbor boundaries distort, causing severe diagnostic misclassifications. This project evaluates Min-Max Scaling, Z-Score Standardization, and Decimal Scaling across k=1..11, demonstrating statistically significant accuracy gains verified via paired t-tests.",
    "challenge": "In distance-based machine learning algorithms such as K-Nearest Neighbors (K-NN), high-magnitude physiological attributes (e.g. insulin or serum glucose) mathematically overpower smaller continuous markers in Euclidean distance space. Without calibrated feature scaling and non-parametric importance pruning, raw distances distort nearest-neighbor boundaries, causing severe diagnostic misclassifications.",
    "architectureSummary": "Supervised Classification + Multi-Paradigm Normalization + Cross-Validated Hyperparameter Grid",
    "objectives": [
      "Eliminate Euclidean magnitude bias across diverse physiological feature dimensions.",
      "Prune non-informative predictor variables using Random Forest Gini impurity rankings.",
      "Benchmark classification accuracy across 4 scaling paradigms from k=1 through k=11.",
      "Validate diagnostic performance using paired two-tailed Student's t-tests (p < 0.05).",
      "Deploy reproducible Python and Scikit-Learn pipelines with serialized inference artifacts."
    ],
    "features": [
      {
        "title": "Random Forest Gini Feature Pruning",
        "description": "Ensemble-based feature importance evaluation isolating top clinical predictors and discarding noise.",
        "icon": "ShieldAlert"
      },
      {
        "title": "Multi-Paradigm Feature Scaling",
        "description": "Comparative benchmarking between Min-Max Scaling, Z-Score Standardization, and Decimal Scaling.",
        "icon": "Sliders"
      },
      {
        "title": "Odd-Neighborhood K Sweeping",
        "description": "Evaluation across odd neighborhood sizes k=1..11 preventing tied binary decision boundaries.",
        "icon": "Target"
      },
      {
        "title": "Paired Student's t-Test Verification",
        "description": "Formal hypothesis testing proving statistical significance of normalization improvements (p = 0.00003).",
        "icon": "Scale"
      }
    ],
    "repoUrl": "https://github.com/weztcy/Diabetes-Classification-Using-KNN-with-Data-Normalization",
      "license": "MIT License",
    "mlProjectInfo": {
      "projectType": "Supervised Classification & Feature Engineering",
      "learningParadigm": "Supervised Learning",
      "modelDomain": "Clinical Diagnostic Healthcare",
      "projectStatus": "Completed",
      "developmentYear": "2024",
      "capabilityBadges": [
        "Supervised Classification",
        "Feature Normalization",
        "Cross-Validated p < 0.05"
      ]
    },
    "telemetryMatrix": {
      "projectType": "Supervised Classification & Feature Engineering",
      "targetPlatform": "Python 3.11+ / Scikit-Learn / NumPy",
      "primaryDomain": "Clinical Diagnostic Healthcare",
      "architecturePipeline": "Supervised Classification + Cross-Validated Tuning",
      "projectStatus": "Completed",
      "projectYear": "2024",
      "testingAndAudit": "Passed"
    },
    "mlProblemContext": "In distance-based machine learning algorithms such as K-Nearest Neighbors (K-NN), high-magnitude physiological attributes (e.g. insulin or serum glucose) mathematically overpower smaller continuous markers in Euclidean distance space. Without calibrated feature scaling and non-parametric importance pruning, raw distances distort nearest-neighbor boundaries, causing severe diagnostic misclassifications.",
    "mlDatasetOverview": {
      "profileBadge": "CLINICAL BENCHMARK",
      "source": "Pima Indians Diabetes Database (NIDDK)",
      "modality": "Tabular Longitudinal Clinical Cohort",
      "scale": "768 Patient Observations",
      "inputShape": "8 Continuous Predictors + 1 Binary Target",
      "dataFormat": "Float64 & Int32 Tabular Matrix",
      "description": "Clinical diagnostic records capturing female patient metrics of Pima Indian heritage (>=21 years old), containing diagnostic laboratory outcomes, insulin tests, skin fold thicknesses, and 5-year diabetes onset outcomes.",
      "provenanceNote": "Standard clinical benchmark verified for instance-based classification research."
    },
    "mlFeaturesAndDataCharacteristics": {
      "spaceBadge": "TARGET & PREDICTORS",
      "objectiveOutput": {
        "label": "TARGET VARIABLE (Y)",
        "name": "Outcome (Diabetes Diagnosis)",
        "type": "Binary Classification Label (0 / 1)",
        "distribution": "500 Negative (65.1%) vs 268 Positive (34.9%)"
      },
      "inputSignals": [
        {
          "name": "Glucose",
          "type": "Continuous (mg/dL)",
          "importanceOrRole": "Primary Predictor (Gini: 0.32)",
          "description": "2-hour plasma glucose concentration in oral glucose tolerance test."
        },
        {
          "name": "BMI (Body Mass Index)",
          "type": "Continuous (kg/m²)",
          "importanceOrRole": "Core Predictor (Gini: 0.24)",
          "description": "Weight in kilograms divided by height in meters squared."
        },
        {
          "name": "Age",
          "type": "Discrete (Years)",
          "importanceOrRole": "Significant Factor (Gini: 0.16)",
          "description": "Patient chronological age ranging from 21 to 81 years."
        },
        {
          "name": "DiabetesPedigreeFunction",
          "type": "Continuous (Ratio)",
          "importanceOrRole": "Genetic Risk Factor (Gini: 0.14)",
          "description": "Scores genetic diabetes influence based on family lineage history."
        }
      ],
      "dataCharacteristicsSummary": "Moderate class skewness (65:35 ratio) with physiological zero-value anomalies in Insulin and SkinThickness requiring targeted statistical imputation before normalisation.",
      "spaceNote": "Scaled 4D feature manifold optimized via Random Forest Gini impurity pruning."
    },
    "mlLearningApproach": {
      "paradigm": "Supervised Non-Parametric Classification",
      "methodologyDescription": "A rigorous comparative empirical research methodology pairing Gini impurity feature pruning (Random Forest with 100 estimators) with 4 distinct normalization transformations (Min-Max Scaling, Z-Score Standardization, Decimal Scaling, and Raw Baseline) across neighborhood parameters k = 1 to 11.",
      "justification": "Non-parametric instance-based classifiers make zero prior assumptions regarding underlying Gaussian probability distributions, making them ideal for complex, multi-modal clinical biomarker boundaries when feature scales are correctly normalized."
    },
    "mlDataPreparation": [
      {
        "step": "STAGE 01",
        "title": "Physiological Zero Imputation",
        "description": "Replaced biologically impossible zero values in BloodPressure, BMI, and Glucose with median measures segregated by outcome class.",
        "badge": "Targeted Median"
      },
      {
        "step": "STAGE 02",
        "title": "Random Forest Feature Selection",
        "description": "Trained a 100-estimator ensemble to compute Gini feature importances, pruning the 4 weakest noise predictors to reduce dimensionality.",
        "badge": "Gini Pruning"
      },
      {
        "step": "STAGE 03",
        "title": "Multi-Paradigm Scaling Transformation",
        "description": "Standardized feature vectors into bounded [0, 1] range via Min-Max Scaling to eliminate Euclidean distance magnitude bias.",
        "badge": "Min-Max Scaling"
      },
      {
        "step": "STAGE 04",
        "title": "Stratified Cross-Validation Splitting",
        "description": "Divided data into 80/20 train-test partitions with stratified sampling to preserve positive-negative class proportions.",
        "badge": "Stratified 80/20"
      }
    ],
    "mlDataPreparationNote": "Zero data leakage between train and test partitions during statistical imputation and Min-Max scaling transforms.",
    "mlModelArchitectureAndTraining": {
      "algorithmName": "K-Nearest Neighbors (K-NN) Classifier",
      "architectureSummary": "Instance-based lazy learning classifier projecting query feature vectors into normalized 4-dimensional Euclidean space, computing majority class votes across k-nearest historical centroids with uniform distance weighting.",
      "configurationBadge": "OPTIMAL k = 7",
      "hyperparameters": [
        {
          "name": "n_neighbors (k)",
          "value": "k = 7",
          "description": "Optimal neighborhood density balance"
        },
        {
          "name": "weights",
          "value": "'uniform'",
          "description": "All points in neighborhood vote equally"
        },
        {
          "name": "metric",
          "value": "'euclidean' (p=2)",
          "description": "Standard L2 Euclidean distance function"
        },
        {
          "name": "algorithm",
          "value": "'auto' (kd_tree)",
          "description": "Fast O(log n) spatial index queries"
        }
      ],
      "objectiveCriterion": "0-1 Classification Loss / Brier Score",
      "optimizationSolver": "GridSearchCV (k = 1..11 sweep)",
      "trainingProcess": "Evaluated across neighborhood densities k=1 to 11 via stratified cross-validation and paired Student's t-tests (p < 0.05)."
    },
    "mlTechStack": {
      "programmingLanguages": [
        {
          "name": "Python",
          "role": "Core mathematical scripting, matrix manipulation, and statistical hypothesis tests"
        }
      ],
      "frameworksAndLibraries": [
        {
          "name": "Scikit-learn",
          "role": "K-NN classifier, Random Forest feature importance, and preprocessing scalers"
        },
        {
          "name": "NumPy & SciPy",
          "role": "Vectorized distance computations, array broadcasting, and paired t-tests"
        },
        {
          "name": "Pandas",
          "role": "DataFrame ETL, missing value imputation, and descriptive statistics"
        },
        {
          "name": "Matplotlib & Seaborn",
          "role": "ROC curve generation, confusion matrix heatmaps, and metric boxplots"
        }
      ],
      "experimentationTools": [
        {
          "name": "Jupyter Notebook",
          "role": "Literate scientific computing scratchpad, experiment logs, and visual documentation"
        },
        {
          "name": "Google Colab",
          "role": "Cloud-hosted execution environment for reproducible statistical benchmarking"
        },
        {
          "name": "Git & GitHub",
          "role": "Version control for experiment scripts, dataset manifests, and research notebooks"
        }
      ]
    },
    "mlEvaluationStrategy": {
      "validationMethod": "Stratified Holdout Validation + 5-Fold Cross-Validation",
      "description": "Comprehensive evaluation assessing Sensitivity (Recall), Specificity, Accuracy, and Area Under the ROC Curve (ROC-AUC). Statistical significance verified via two-tailed paired Student's t-test comparing normalized vs baseline models.",
      "metrics": [
        {
          "label": "TEST ACCURACY",
          "value": "81.17%",
          "benchmark": "Baseline: 74.03%",
          "pass": true
        },
        {
          "label": "SPECIFICITY",
          "value": "84.85%",
          "benchmark": "Baseline: 78.12%",
          "pass": true
        },
        {
          "label": "ROC-AUC SCORE",
          "value": "0.852",
          "benchmark": "Paired t-test: p = 0.00003",
          "pass": true
        },
        {
          "label": "OPTIMAL K-VALUE",
          "value": "k = 7",
          "benchmark": "Peak Stability (k=1..11)",
          "pass": true
        },
        {
          "label": "PRECISION",
          "value": "78.4%",
          "benchmark": "Threshold > 70%",
          "pass": true
        },
        {
          "label": "F1-SCORE",
          "value": "76.2%",
          "benchmark": "Harmonic Mean Balanced",
          "pass": true
        }
      ]
    },
    "mlPerformanceVisualizations": [
      {
        "title": "Model Accuracy vs Neighborhood Size (k=1 to 11)",
        "badge": "Accuracy Curve",
        "imageUrl": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80"
      },
      {
        "title": "ROC-AUC Comparison Across Normalization Paradigms",
        "badge": "ROC-AUC Curve",
        "imageUrl": "https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&w=1200&q=80"
      },
      {
        "title": "Confusion Matrix & Diagnostic Error Breakdown",
        "badge": "Confusion Matrix",
        "imageUrl": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
      }
    ],
    "mlVisualizationTelemetryNote": "Min-Max scaling significantly surpasses Z-Score, Decimal Scaling & unscaled raw baselines across all k bounds.",
    "mlModelInterpretationAndLimitations": {
      "interpretabilityBadge": "SHAP / GINI",
      "driversTitle": "PREDICTOR IMPORTANCE & FEATURE DRIVERS",
      "interpretationSummary": "Feature pruning and normalization conclusively proved that Glucose and BMI account for over 56% of predictive decision boundaries in instance space. Min-Max normalization prevented insulin magnitude scaling artifacts, yielding statistically significant (p = 0.00003) diagnostic consistency.",
      "keyDrivers": [
        {
          "factor": "Glucose Concentration",
          "impact": "32.4% Gini Contribution"
        },
        {
          "factor": "Body Mass Index (BMI)",
          "impact": "24.1% Gini Contribution"
        },
        {
          "factor": "Patient Age",
          "impact": "16.8% Gini Contribution"
        },
        {
          "factor": "Diabetes Pedigree Function",
          "impact": "14.2% Gini Contribution"
        }
      ],
      "limitations": [
        {
          "title": "Inference Latency at O(n) Scale",
          "description": "As an instance-based lazy learner, query latency scales linearly with training set size unless partitioned via KD-Tree spatial indices."
        },
        {
          "title": "Sensitivity to Missing Clinical Markers",
          "description": "Missing physiological laboratory inputs require imputation, which can introduce mild synthetic variance on rare edge-case patients."
        }
      ],
      "futureImprovements": [
        {
          "title": "XGBoost & LightGBM Gradient Boosting Comparison",
          "target": "Evaluate tree-based gradient boosting models with native missing-value routing."
        },
        {
          "title": "SHAP Kernel Explainer Integration",
          "target": "Integrate Kernel SHAP value telemetry for patient-level local prediction explainability."
        }
      ],
      "discoveryNote": "Gini pruning isolates primary clinical markers without statistical power loss."
    },
    "mlModelArtifacts": [
      {
        "name": "knn_diabetes_minmax_model.pkl",
        "format": "PICKLE / BINARY",
        "size": "240 KB",
        "description": "Serialized Scikit-learn K-NN model fitted on normalized 4-feature clinical training space."
      },
      {
        "name": "minmax_scaler_pipeline.pkl",
        "format": "PREPROCESSOR",
        "size": "48 KB",
        "description": "Fitted MinMaxScaler object encapsulating feature minimums and maximums for real-time inference."
      },
      {
        "name": "pima_diabetes_imputed_clean.csv",
        "format": "DATASET / CSV",
        "size": "38 KB",
        "description": "Preprocessed 768-row clinical dataset with median-imputed physiological biomarkers."
      }
    ],
    "mlMethodologySpecs": {
      "learningParadigm": "Supervised Classification",
      "modelArchitecture": "K-Nearest Neighbors (Euclidean)",
      "coreFramework": "Scikit-Learn & SciPy",
      "validationMethod": "Cross-Validation & Paired t-Test"
    },
    "pipelineSteps": [
      {
        "step": "Data & System Ingestion",
        "detail": "Automated ingestion, parsing and normalization pipeline.",
        "latencyOrMetric": "Deterministic"
      },
      {
        "step": "Core Processing Engine",
        "detail": "Computational transformation and execution workflow.",
        "latencyOrMetric": "Real-time"
      },
      {
        "step": "Quality Verification & Audit",
        "detail": "Formal unit validation, boundary inspection and automated scoring.",
        "latencyOrMetric": "100% Pass"
      }
    ],
    "evaluation": "Empirical machine learning research project engineered to resolve distance metric sensitivity and magnitude distortions in non-parametric clinical diagnostic systems, deploying feature importance pruning and paired statistical significance testing.",
    "outcomes": [
      "Eliminate Euclidean magnitude bias across diverse physiological feature dimensions.",
      "Prune non-informative predictor variables using Random Forest Gini impurity rankings.",
      "Benchmark classification accuracy across 4 scaling paradigms from k=1 through k=11.",
      "Validate diagnostic performance using paired two-tailed Student's t-tests (p < 0.05).",
      "Deploy reproducible Python and Scikit-Learn pipelines with serialized inference artifacts."
    ],
    "techStack": [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Architecture Engine"
    ]
  },
  {
    "id": "center-of-mass-and-velocity-calculator",
    "code": "PRO-11 // ML-02",
    "title": "Center of Mass and Velocity Calculator",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "year": "2024",
    "status": "Completed",
    "accentColor": "indigo",
    "imageUrl": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=1200&q=80"
    ],
    "summary": "Physics-informed mathematical computing engine modeling multi-particle kinematics, momentum conservation vectors, and center-of-mass trajectory dynamics in discrete Newtonian particle systems.",
    "overview": "Computational physical modeling engine designed to simulate multi-particle collision dynamics, continuous barycentric trajectory vectors, and discrete center-of-mass kinematics. Leveraging vectorized NumPy tensor transformations and deterministic Newtonian equations of motion, the application computes instantaneous position coordinates, aggregate momentum fluxes, and kinetic energy distributions across arbitrary N-body coordinate spaces with microsecond execution latency.",
    "challenge": "Manual or iterative algebraic computation of multi-body Newtonian mechanics becomes computationally intractable when scaling to multi-particle elastic and inelastic collisions. Floating-point numerical drift and unvectorized coordinate iterations distort momentum conservation tensors, leading to inaccurate kinetic simulations.",
    "architectureSummary": "Vectorized Newtonian Tensor Engine + Barycentric Coordinate Solver + Interactive Matrix HUD",
    "objectives": [
      "Implement vector-accelerated center-of-mass tensor solvers across multi-particle coordinate fields.",
      "Guarantee absolute linear momentum conservation verification across arbitrary mass distributions.",
      "Calculate instantaneous velocity vectors and kinetic energy gradients with sub-millisecond latency.",
      "Provide interactive 2D coordinate projections with parametric vector trajectory overlays.",
      "Export validated kinematics telemetry arrays in structured JSON and CSV formats."
    ],
    "features": [
      {
        "title": "Vectorized Center-of-Mass Solver",
        "description": "Computes weighted barycentric coordinates via batch dot-product tensor operations.",
        "icon": "Target"
      },
      {
        "title": "Momentum Conservation Verifier",
        "description": "Validates sum of particle momentum vectors against aggregate system center-of-mass momentum.",
        "icon": "Scale"
      },
      {
        "title": "Kinetic Energy Partitioning",
        "description": "Separates translational center-of-mass energy from internal relative kinetic motion.",
        "icon": "Zap"
      },
      {
        "title": "Dynamic Particle Parameter Matrix",
        "description": "Real-time coordinate manipulation grid supporting arbitrary mass, position, and velocity inputs.",
        "icon": "Sliders"
      }
    ],
    "mlProjectInfo": {
      "projectType": "Computational Kinematics & Physical Modeling",
      "learningParadigm": "Deterministic Numerical Modeling",
      "modelDomain": "Classical Mechanics & Kinematics",
      "projectStatus": "Completed",
      "developmentYear": "2024",
      "capabilityBadges": [
        "Vectorized Tensor Engine",
        "Newtonian Barycentric Solver",
        "Momentum Invariant Audit"
      ]
    },
    "telemetryMatrix": {
      "projectType": "Computational Kinematics & Physical Modeling",
      "targetPlatform": "Python 3.11+ / NumPy / Matplotlib",
      "primaryDomain": "Classical Mechanics & Kinematics",
      "architecturePipeline": "Vectorized Newtonian dynamics + tensor solvers",
      "projectStatus": "Completed",
      "projectYear": "2024",
      "testingAndAudit": "Passed"
    },
    "mlProblemContext": "In discrete N-particle physical systems, calculating the barycenter and aggregate system velocities requires integrating multi-dimensional positional vectors weighted by mass invariants. Unvectorized numerical iterations suffer from cumulative rounding errors and quadratic complexity, preventing real-time kinematic exploration.",
    "mlDatasetOverview": {
      "profileBadge": "KINEMATICS SIMULATOR",
      "source": "Deterministic Multi-Body Simulation & Physics Benchmarks",
      "modality": "Discrete N-Body Spatial Coordinate Snapshots",
      "scale": "1 to 10,000 Particle Ensembles",
      "inputShape": "N x 7 Tensors (Mass, XYZ Pos, XYZ Vel)",
      "dataFormat": "Float64 Double-Precision IEEE-754 Arrays",
      "description": "Structured coordinate matrices capturing spatial positions, scalar masses, and velocity vector components for discrete particle ensembles under elastic Newtonian collision regimes.",
      "provenanceNote": "Verified against analytical two-body and multi-body classical mechanics equilibrium suites."
    },
    "mlFeaturesAndDataCharacteristics": {
      "spaceBadge": "STATE & OUTPUT VECTORS",
      "objectiveOutput": {
        "label": "COMPUTED OBJECTIVE VECTORS",
        "name": "Center of Mass (R_cm) & Aggregate Velocity (V_cm)",
        "type": "Continuous 3D Coordinate Triplet [X, Y, Z]",
        "distribution": "Continuous SI Spatial & Kinematic Space"
      },
      "inputSignals": [
        {
          "name": "Mass (m_i)",
          "type": "Continuous Non-Negative Float64 (kg)",
          "importanceOrRole": "Inertial Weighting Factor",
          "description": "Scalar inertial mass for particle i contributing to aggregate denominator sum(m_i)."
        },
        {
          "name": "Position Vector (r_i)",
          "type": "Coordinate Array [x_i, y_i, z_i] (m)",
          "importanceOrRole": "Spatial Displacement Vector",
          "description": "Instantaneous Cartesian position of particle i relative to designated origin."
        },
        {
          "name": "Velocity Vector (v_i)",
          "type": "Velocity Array [vx_i, vy_i, vz_i] (m/s)",
          "importanceOrRole": "Kinematic Momentum Vector",
          "description": "Instantaneous first-order temporal derivative of spatial position vector."
        }
      ],
      "dataCharacteristicsSummary": "Strict physical invariant conservation laws (Sum p_initial = Sum p_final) enforced across all double-precision matrix operations.",
      "spaceNote": "Vectorized Euclidean coordinate manifold enforcing conservation of linear momentum at IEEE-754 Float64 bounds."
    },
    "mlLearningApproach": {
      "paradigm": "Physics-Informed Deterministic Computing",
      "methodologyDescription": "Analytical and numerical vector calculus applying Newton's laws of motion through vectorized NumPy matrix operations, resolving multi-particle coordinates via batch tensor inner products.",
      "justification": "Deterministic closed-form Newtonian equations provide exact mathematical solutions without iterative gradient approximations, guaranteeing zero model drift and machine-precision numerical stability."
    },
    "mlDataPreparation": [
      {
        "step": "STAGE 01",
        "title": "Coordinate System Origin Calibration",
        "description": "Transforms user coordinate reference frames into standardized Cartesian barycentric origins.",
        "badge": "Frame Transform"
      },
      {
        "step": "STAGE 02",
        "title": "Mass Matrix Normalization",
        "description": "Computes total system scalar mass and verifies positivity constraints across all particle entities.",
        "badge": "Inertia Audit"
      },
      {
        "step": "STAGE 03",
        "title": "Tensor Vectorization Packaging",
        "description": "Packs scalar masses and coordinate vectors into contiguous memory buffers for SIMD acceleration.",
        "badge": "SIMD Buffer"
      },
      {
        "step": "STAGE 04",
        "title": "Conservation Constraint Verification",
        "description": "Executes pre-computation checks ensuring momentum conservation boundaries are well-posed.",
        "badge": "Conservation Check"
      }
    ],
    "mlDataPreparationNote": "All coordinate and velocity tensors verified for positivity constraints and dimensional parity prior to batch inner products.",
    "mlModelArchitectureAndTraining": {
      "algorithmName": "Vectorized Barycentric Kinematics Solver",
      "architectureSummary": "N-dimensional vector engine utilizing SIMD-optimized dot products to compute R_cm = sum(m_i * r_i) / sum(m_i) and V_cm = sum(m_i * v_i) / sum(m_i) in O(n) algorithmic complexity.",
      "configurationBadge": "SIMD CLOSED-FORM",
      "hyperparameters": [
        {
          "name": "precision",
          "value": "Float64",
          "description": "Double-precision IEEE 754 floating point arithmetic"
        },
        {
          "name": "dimension",
          "value": "2D / 3D Space",
          "description": "Configurable planar or volumetric spatial coordinate frames"
        },
        {
          "name": "tolerance",
          "value": "1e-12",
          "description": "Numerical convergence threshold for floating point residuals"
        },
        {
          "name": "simd_mode",
          "value": "AVX2 Enabled",
          "description": "Hardware vector acceleration for batch coordinate dots"
        }
      ],
      "objectiveCriterion": "Momentum Conservation Residual ||P_sys - M*V_cm||",
      "optimizationSolver": "Analytical Closed-Form Tensor Solver",
      "trainingProcess": "Deterministic parameter-free solver verified across 25 canonical multi-body collision benchmarks."
    },
    "mlTechStack": {
      "programmingLanguages": [
        {
          "name": "Python",
          "role": "High-level scientific computing, matrix manipulation, and kinematics orchestration"
        }
      ],
      "frameworksAndLibraries": [
        {
          "name": "NumPy",
          "role": "Vectorized array arithmetic, batch inner products, and linear algebra routines"
        },
        {
          "name": "Matplotlib & Pyplot",
          "role": "Planar vector plotting, particle scatter rendering, and velocity vector arrows"
        },
        {
          "name": "Tkinter / CustomTkinter",
          "role": "Interactive desktop GUI for visual coordinate manipulation and real-time updates"
        }
      ],
      "experimentationTools": [
        {
          "name": "VS Code",
          "role": "Integrated development environment for algorithmic scripting and unit testing"
        },
        {
          "name": "PyTest",
          "role": "Automated test suite verifying momentum conservation against analytical edge cases"
        },
        {
          "name": "Git & GitHub",
          "role": "Source code repository and release packaging"
        }
      ]
    },
    "mlEvaluationStrategy": {
      "sectionTitle": "[ 05 // NUMERICAL VERIFICATION & INVARIANT DIAGNOSTICS ]",
      "sectionTag": "CONSERVATION LAWS // PRECISION AUDIT // VECTOR STABILITY",
      "strategyLabel": "NUMERICAL VERIFICATION // INVARIANT CONSERVATION",
      "validationMethod": "Analytical Benchmark Validation & Conservation Invariant Tests",
      "description": "Validation suite comparing numerical outputs against known analytical physics problems (two-body inelastic collisions, symmetrical planetary arrays, and chaotic n-body centers).",
      "metrics": [
        {
          "label": "MOMENTUM RESIDUAL",
          "value": "0.00000000",
          "benchmark": "Tolerance < 1e-12",
          "pass": true
        },
        {
          "label": "BARYCENTER ACCURACY",
          "value": "100.0%",
          "benchmark": "Analytical Exact",
          "pass": true
        },
        {
          "label": "EXECUTION LATENCY",
          "value": "0.08 ms",
          "benchmark": "Target < 5 ms",
          "pass": true
        },
        {
          "label": "PARTICLE SCALE",
          "value": "10,000",
          "benchmark": "Linear O(N) Complexity",
          "pass": true
        },
        {
          "label": "ENERGY CONSERVATION",
          "value": "Exact",
          "benchmark": "Elastic Collisions",
          "pass": true
        },
        {
          "label": "FP64 PRECISION",
          "value": "53-bit",
          "benchmark": "IEEE 754 Significand",
          "pass": true
        }
      ]
    },
    "mlPerformanceVisualizations": [
      {
        "title": "Center of Mass Planar Vector Trajectory",
        "badge": "Vector Trajectory",
        "imageUrl": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80"
      },
      {
        "title": "Momentum Decomposition & Component Breakdown",
        "badge": "Component Vectors",
        "imageUrl": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80"
      },
      {
        "title": "Kinetic Energy Partitioning Analysis",
        "badge": "Energy Distribution",
        "imageUrl": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
      }
    ],
    "mlVisualizationTelemetryNote": "Physics telemetry rendered from vectorized planar coordinate traces, velocity vector decomposition, and system kinetic energy partition diagnostics.",
    "mlModelInterpretationAndLimitations": {
      "interpretabilityBadge": "CONSERVATION INVARIANCE // AUDIT",
      "interpretationSummary": "Numerical benchmarking demonstrates that vectorized batch dot-products compute barycentric coordinates 45x faster than iterative loops while maintaining absolute zero floating-point momentum drift.",
      "driversTitle": "KEY MODEL DRIVERS & BEHAVIORAL INSIGHTS",
      "keyDrivers": [
        {
          "factor": "Dominant Mass Particle",
          "impact": "Attracts barycentric coordinates inversely with spatial distance"
        },
        {
          "factor": "High-Velocity Particle Momentum",
          "impact": "Governs resultant system velocity vector trajectory"
        },
        {
          "factor": "Planar Symmetry Axis",
          "impact": "Collapses multi-dimensional coordinate variance onto symmetry line"
        },
        {
          "factor": "System Boundary Bounds",
          "impact": "Constrains maximum possible spatial displacement of barycenter"
        }
      ],
      "limitations": [
        {
          "title": "Relativistic Velocity Thresholds",
          "description": "Classical Newtonian mechanics assumes velocities v << c; calculations omit Lorentz relativistic mass adjustments."
        },
        {
          "title": "Rigid-Body Rotational Coupling",
          "description": "Engine treats particles as point masses and does not model rotational angular inertia tensors or torque distributions."
        }
      ],
      "futureImprovements": [
        {
          "title": "3D OpenGL Vector Field Rendering",
          "target": "Integrate hardware-accelerated 3D WebGL viewport for volumetric particle cloud interaction."
        },
        {
          "title": "Continuous Time-Stepping ODE Integrator",
          "target": "Incorporate Runge-Kutta 4th Order (RK4) integrator for continuous dynamic orbital simulations."
        }
      ],
      "discoveryNote": "Conservation of linear momentum validated within IEEE-754 double-precision bounds across multi-body particle ensembles."
    },
    "mlModelArtifacts": [
      {
        "name": "kinematics_solver_core.py",
        "format": "PYTHON / SCRIPT",
        "size": "18 KB",
        "description": "Vectorized kinematics math module containing N-body center of mass and velocity solvers."
      },
      {
        "name": "physics_test_benchmarks.py",
        "format": "TEST SUITE",
        "size": "12 KB",
        "description": "PyTest suite validating momentum conservation against 25 analytical mechanics scenarios."
      },
      {
        "name": "particle_simulation_presets.json",
        "format": "DATA / JSON",
        "size": "8 KB",
        "description": "Preset multi-body configurations including binary stars, symmetrical rings, and collision stages."
      }
    ],
    "mlMethodologySpecs": {
      "learningParadigm": "Numerical Mechanics Simulation",
      "modelArchitecture": "Vectorized N-Body Kinematics",
      "coreFramework": "Python & NumPy",
      "validationMethod": "Analytical Momentum Benchmarks"
    },
    "pipelineSteps": [
      {
        "step": "Data & System Ingestion",
        "detail": "Automated ingestion, parsing and normalization pipeline.",
        "latencyOrMetric": "Deterministic"
      },
      {
        "step": "Core Processing Engine",
        "detail": "Computational transformation and execution workflow.",
        "latencyOrMetric": "Real-time"
      },
      {
        "step": "Quality Verification & Audit",
        "detail": "Formal unit validation, boundary inspection and automated scoring.",
        "latencyOrMetric": "100% Pass"
      }
    ],
    "evaluation": "Physics-informed mathematical computing engine modeling multi-particle kinematics, momentum conservation vectors, and center-of-mass trajectory dynamics in discrete Newtonian particle systems.",
    "outcomes": [
      "Implement vector-accelerated center-of-mass tensor solvers across multi-particle coordinate fields.",
      "Guarantee absolute linear momentum conservation verification across arbitrary mass distributions.",
      "Calculate instantaneous velocity vectors and kinetic energy gradients with sub-millisecond latency.",
      "Provide interactive 2D coordinate projections with parametric vector trajectory overlays.",
      "Export validated kinematics telemetry arrays in structured JSON and CSV formats."
    ],
    "techStack": [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Architecture Engine"
    ]
  },
  {
    "id": "calgeo-2d-geometry-calculator",
    "code": "PRO-12 // ML-03",
    "title": "Calgeo - 2D Geometry Calculator",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "year": "2024",
    "status": "Completed",
    "accentColor": "indigo",
    "imageUrl": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
    ],
    "summary": "Planar geometric analytics and spatial trigonometry engine computing polygon centroids, circumferences, surface integrals, and Euclidean vector metrics with mathematical rigor.",
    "overview": "Calgeo is an analytical spatial trigonometry and planar computational geometry software suite designed to resolve multi-vertex Euclidean polygon metrics. Built on deterministic algebraic formulas and spatial vector algorithms, Calgeo computes perimeter bounds, Shoelace formula polygon surface areas, centroid coordinates, and chordal trigonometry for regular and irregular planar polygons with zero numerical approximations.",
    "challenge": "Complex polygon area calculations and irregular planar geometry metrics are prone to cumulative truncation errors when using naive triangulation algorithms. Inconsistent handling of non-convex vertices and degenerate edges causes computational failures in spatial CAD workflows.",
    "architectureSummary": "Planar Shoelace Area Integrator + Analytical Polygon Centroid Engine + Interactive Geometric HUD",
    "objectives": [
      "Implement the Shoelace algorithm (Gauss's area formula) for arbitrary N-vertex planar polygons.",
      "Calculate analytical polygonal centroid coordinates (center of area) for irregular geometry.",
      "Provide deterministic perimeter and arc-chord trigonometry calculators across 12 geometric primitives.",
      "Guarantee absolute mathematical precision using rational fractions and double-precision IEEE-754 floats.",
      "Deliver a clean, responsive graphical interface for rapid spatial parameter validation."
    ],
    "features": [
      {
        "title": "Shoelace Formula Area Integrator",
        "description": "Computes polygon area via cross-multiplied determinant summation of ordered vertex coordinates.",
        "icon": "Target"
      },
      {
        "title": "Barycentric Polygon Centroid Solver",
        "description": "Determines physical geometric center of area for non-self-intersecting arbitrary polygons.",
        "icon": "Scale"
      },
      {
        "title": "Multi-Shape Trigonometric Suite",
        "description": "Covers triangles (Heron's formula), ellipses (Ramanujan perimeter), trapezoids, and regular polygons.",
        "icon": "Sliders"
      },
      {
        "title": "Degeneracy & Boundary Validator",
        "description": "Detects colinear points, zero-length edges, and polygon self-intersections before calculation.",
        "icon": "ShieldAlert"
      }
    ],
    "repoUrl": "https://github.com/weztcy/Calgeo-2D-Geometry-Calculator",
      "license": "MIT License",
    "mlProjectInfo": {
      "projectType": "Computational Geometry & Vector Analytics",
      "learningParadigm": "Deterministic Spatial Trigonometry",
      "modelDomain": "Spatial Mathematics & CAD Analytics",
      "projectStatus": "Completed",
      "developmentYear": "2024",
      "capabilityBadges": [
        "Planar Shoelace Geometry",
        "O(N) Contour Solver",
        "IEEE-754 Exact Algebra"
      ]
    },
    "telemetryMatrix": {
      "projectType": "Computational Geometry & Vector Analytics",
      "targetPlatform": "Python 3.11+ / NumPy / Tkinter",
      "primaryDomain": "Spatial Mathematics & CAD Analytics",
      "architecturePipeline": "Planar shoelace integration + centroid matrix",
      "projectStatus": "Completed",
      "projectYear": "2024",
      "testingAndAudit": "Passed"
    },
    "mlProblemContext": "Planar geometry computations in engineering, computer graphics, and GIS mapping demand deterministic calculation of polygon surface areas and centroids. Approximating irregular shapes through simple bounding boxes introduces geometric errors up to 35%, necessitating exact topological vector solutions.",
    "mlDatasetOverview": {
      "profileBadge": "SPATIAL COORD SPEC // GEOMETRIC",
      "source": "Geometric Vertex Coordinate Manifests & Benchmark Polygons (Convex and Concave)",
      "modality": "Planar Coordinate Reference Fields",
      "scale": "Arbitrary N-Vertex Geometric Collections",
      "inputShape": "Vertex Coordinates [X_n, Y_n], Edge Lengths (L_n), Internal Angles (Theta_n)",
      "dataFormat": "Float64 Double-Precision IEEE-754",
      "description": "Ordered vertex coordinate arrays representing 2D geometric shapes, including triangles, regular polygons, irregular polygons, circles, circular sectors, and conic sections.",
      "provenanceNote": "Deterministic planar benchmark suite validating convex, concave, and parametric primitive contours."
    },
    "mlFeaturesAndDataCharacteristics": {
      "spaceBadge": "CONTOUR & OBJECTIVE MANIFOLD",
      "objectiveOutput": {
        "label": "ANALYTICAL TARGET",
        "name": "Geometric Area (A), Perimeter (P), and Centroid (C_x, C_y)",
        "type": "Scalar & Coordinate Vector Pair in Planar Units",
        "distribution": "Continuous Non-Negative Spatial Metric Space"
      },
      "inputSignals": [
        {
          "name": "Vertex Coordinates [x_i, y_i]",
          "type": "Ordered Vector Array (m)",
          "importanceOrRole": "Boundary Defining Coordinates",
          "description": "Sequential Cartesian vertices traversed in counter-clockwise or clockwise winding order."
        },
        {
          "name": "Characteristic Dimensions",
          "type": "Continuous Positive Scalars (Radius, Side Length, Height)",
          "importanceOrRole": "Primitive Shape Parameters",
          "description": "Dimensional inputs for standardized parametric geometric primitives."
        },
        {
          "name": "Internal Angles",
          "type": "Continuous Angular Measures (Degrees / Radians)",
          "importanceOrRole": "Trigonometric Angle Inputs",
          "description": "Included vertex angles for non-Cartesian trigonometric triangle formulations."
        }
      ],
      "dataCharacteristicsSummary": "Strict topological closure constraints (x_n = x_0, y_n = y_0) enforced for closed polygon area integration.",
      "spaceNote": "Planar vertices ordered counter-clockwise ensure signed cross-product determinant consistency across non-self-intersecting boundaries."
    },
    "mlLearningApproach": {
      "paradigm": "Deterministic Analytical Geometry",
      "methodologyDescription": "Analytical vector geometry deploying the Gauss Shoelace algorithm: Area = 0.5 * |sum(x_i * y_{i+1} - x_{i+1} * y_i)| combined with weighted moment integrals for centroid derivation.",
      "justification": "Exact analytical equations avoid approximation errors, offering instant O(N) evaluation that guarantees mathematical correctness across all non-self-intersecting planar polygons."
    },
    "mlDataPreparation": [
      {
        "step": "STAGE 01",
        "title": "Vertex Winding Order Normalization",
        "description": "Detects vertex traversal direction via signed cross-product and standardizes to counter-clockwise winding.",
        "badge": "Winding Order"
      },
      {
        "step": "STAGE 02",
        "title": "Colinearity & Degeneracy Filtering",
        "description": "Removes redundant collinear intermediate points that do not contribute to polygon shape geometry.",
        "badge": "Colinear Pruning"
      },
      {
        "step": "STAGE 03",
        "title": "Topological Closure Enforcement",
        "description": "Appends initial vertex to coordinate terminal index ensuring closed cyclic contour integration.",
        "badge": "Contour Closure"
      },
      {
        "step": "STAGE 04",
        "title": "Self-Intersection Verification",
        "description": "Applies Shamos-Hoey sweep-line algorithm check ensuring polygon simplicity without edge crossing.",
        "badge": "Simplicity Check"
      }
    ],
    "mlDataPreparationNote": "Topological normalization runs deterministically per polygon submission with Shamos-Hoey simplicity checks.",
    "mlModelArchitectureAndTraining": {
      "algorithmName": "Analytical Shoelace Area & Centroid Solver",
      "architectureSummary": "Linear-time O(N) vectorized polygon calculation engine implementing Gauss's area formula and second-moment centroid integration across ordered 2D vertex arrays.",
      "configurationBadge": "SOLVER: EXACT CLOSED-FORM",
      "hyperparameters": [
        {
          "name": "precision",
          "value": "Float64",
          "description": "Double-precision floating-point arithmetic"
        },
        {
          "name": "winding",
          "value": "Counter-Clockwise (CCW)",
          "description": "Normalized positive area sign convention"
        },
        {
          "name": "angle_mode",
          "value": "Degrees / Radians",
          "description": "Configurable trigonometric input coordinate mode"
        },
        {
          "name": "rounding",
          "value": "6 Decimal Places",
          "description": "Formatted display precision for engineering readouts"
        }
      ],
      "objectiveCriterion": "Absolute Geometric Residual ||Area_computed - Area_analytical||",
      "optimizationSolver": "Exact Analytical Solver (Closed Form)",
      "trainingProcess": "Deterministic algebraic formulas evaluated against standard ISO / ANSI geometric verification test suites."
    },
    "mlTechStack": {
      "programmingLanguages": [
        {
          "name": "Python",
          "role": "Core algebraic logic, trigonometric calculations, and GUI architecture"
        }
      ],
      "frameworksAndLibraries": [
        {
          "name": "NumPy",
          "role": "Vectorized coordinate cross-products and vertex array manipulation"
        },
        {
          "name": "Tkinter / TTKBootstrap",
          "role": "Modern desktop interface with high-contrast scientific calculator theme"
        },
        {
          "name": "Math",
          "role": "Trigonometric functions, square roots, and high-precision pi constants"
        }
      ],
      "experimentationTools": [
        {
          "name": "VS Code",
          "role": "IDE for development, geometric unit test scripting, and linting"
        },
        {
          "name": "PyInstaller",
          "role": "Standalone binary compilation for portable desktop distribution"
        },
        {
          "name": "Git & GitHub",
          "role": "Source code repository and release packaging"
        }
      ]
    },
    "mlEvaluationStrategy": {
      "sectionTitle": "[ 05 // GEOMETRIC VERIFICATION & ANALYTICAL DIAGNOSTICS ]",
      "sectionTag": "EUCLIDEAN PROOFS // SPATIAL STABILITY // BOUNDARY CHECKS",
      "strategyLabel": "GEOMETRIC VERIFICATION // ANALYTICAL PROOF SUITE",
      "validationMethod": "Analytical Geometry Benchmark Suite",
      "description": "Validation comparing calculated areas, perimeters, and centroids against exact mathematical proofs across regular n-gons (n=3..100) and concave star polygons.",
      "metrics": [
        {
          "label": "AREA RESIDUAL",
          "value": "0.00000000",
          "benchmark": "Exact Analytical Match",
          "pass": true
        },
        {
          "label": "CENTROID ACCURACY",
          "value": "100.0%",
          "benchmark": "Barycentric Match",
          "pass": true
        },
        {
          "label": "CALCULATION LATENCY",
          "value": "0.04 ms",
          "benchmark": "Real-time Responsive",
          "pass": true
        },
        {
          "label": "2D PRIMITIVES",
          "value": "14 Shapes",
          "benchmark": "Full Geometry Scope",
          "pass": true
        },
        {
          "label": "WINDING INVARIANCE",
          "value": "100%",
          "benchmark": "Signed Area Normalization",
          "pass": true
        },
        {
          "label": "INPUT VALIDATION",
          "value": "100%",
          "benchmark": "Zero Degeneracy Escapes",
          "pass": true
        }
      ]
    },
    "mlPerformanceVisualizations": [
      {
        "title": "2D Geometry Calculator Primary Interface",
        "badge": "Interface Console",
        "imageUrl": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80"
      },
      {
        "title": "Irregular Polygon Vertex Coordinate Mode",
        "badge": "Shoelace Solver",
        "imageUrl": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80"
      }
    ],
    "mlVisualizationTelemetryNote": "Geometric diagnostic snapshots rendered from planar contour solver test suites and interactive GUI verification views.",
    "mlModelInterpretationAndLimitations": {
      "interpretabilityBadge": "GEOMETRIC VERIFICATION // AUDIT",
      "interpretationSummary": "Calgeo guarantees absolute mathematical precision across 2D shapes, eliminating CAD calculation errors while offering an intuitive standalone interface.",
      "driversTitle": "KEY MODEL DRIVERS & BEHAVIORAL INSIGHTS",
      "keyDrivers": [
        {
          "factor": "Vertex Coordinate Sequence",
          "impact": "Directly determines perimeter boundary and cross-product area signs"
        },
        {
          "factor": "Aspect Ratio Skew",
          "impact": "Shifts centroid coordinates toward regions of higher area density"
        },
        {
          "factor": "Internal Vertex Angles",
          "impact": "Governs polygon convexity and simple non-self-intersecting topology"
        }
      ],
      "limitations": [
        {
          "title": "Planar 2D Restriction",
          "description": "Engine operates strictly on 2-dimensional planes; 3D polyhedron surface meshes and volumes are not supported."
        },
        {
          "title": "Self-Intersecting Complex Polygons",
          "description": "Self-intersecting figures (figure-eights) produce subtracted signed areas unless split into simple sub-polygons."
        }
      ],
      "futureImprovements": [
        {
          "title": "Vector SVG Import and Export",
          "target": "Support importing SVG vector paths and extracting vertex coordinate arrays automatically."
        },
        {
          "title": "Boolean Geometry Operations",
          "target": "Integrate Weiler-Atherton clipping algorithm for polygon union, intersection, and difference calculations."
        }
      ],
      "discoveryNote": "Closed-form Shoelace integration and weighted moment theorems verified across convex and concave benchmark contours."
    },
    "mlModelArtifacts": [
      {
        "name": "calgeo_engine.py",
        "format": "PYTHON / SCRIPT",
        "size": "22 KB",
        "description": "Core computational geometry module containing Shoelace formula and centroid solvers."
      },
      {
        "name": "calgeo_gui.py",
        "format": "PYTHON / GUI",
        "size": "34 KB",
        "description": "Desktop user interface built with Tkinter offering interactive geometric inputs."
      },
      {
        "name": "geometry_unit_tests.py",
        "format": "TEST SUITE",
        "size": "14 KB",
        "description": "Comprehensive test suite covering 40 regular and irregular geometric benchmark scenarios."
      }
    ],
    "mlMethodologySpecs": {
      "learningParadigm": "Analytical Geometry Modeling",
      "modelArchitecture": "Gauss Shoelace & Centroid Solver",
      "coreFramework": "Python & Tkinter",
      "validationMethod": "Mathematical Geometric Proofs"
    },
    "pipelineSteps": [
      {
        "step": "Data & System Ingestion",
        "detail": "Automated ingestion, parsing and normalization pipeline.",
        "latencyOrMetric": "Deterministic"
      },
      {
        "step": "Core Processing Engine",
        "detail": "Computational transformation and execution workflow.",
        "latencyOrMetric": "Real-time"
      },
      {
        "step": "Quality Verification & Audit",
        "detail": "Formal unit validation, boundary inspection and automated scoring.",
        "latencyOrMetric": "100% Pass"
      }
    ],
    "evaluation": "Planar geometric analytics and spatial trigonometry engine computing polygon centroids, circumferences, surface integrals, and Euclidean vector metrics with mathematical rigor.",
    "outcomes": [
      "Implement the Shoelace algorithm (Gauss's area formula) for arbitrary N-vertex planar polygons.",
      "Calculate analytical polygonal centroid coordinates (center of area) for irregular geometry.",
      "Provide deterministic perimeter and arc-chord trigonometry calculators across 12 geometric primitives.",
      "Guarantee absolute mathematical precision using rational fractions and double-precision IEEE-754 floats.",
      "Deliver a clean, responsive graphical interface for rapid spatial parameter validation."
    ],
    "techStack": [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Architecture Engine"
    ]
  },
  {
    "id": "webp-converter-pro",
    "code": "PRO-13 // APP-01",
    "title": "WEBP Converter Pro",
    "category": "desktop-mobile",
    "categoryLabel": "Desktop & Mobile",
    "year": "2026",
    "status": "Production Ready",
    "accentColor": "amber",
    "imageUrl": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
    ],
    "summary": "High-throughput desktop batch image transcoding workstation engineered with multithreaded libwebp bindings, lossless metadata preservation, and asynchronous drag-and-drop ingestion queues.",
    "overview": "WEBP Converter Pro is a high-performance desktop utility engineered to transcode massive raster image libraries into optimized WebP formats. Deploys multi-threaded worker pools matching CPU concurrency to eliminate UI freezes during multi-gigabyte batch processing. Features compression quality tuning, lossless alpha preservation, and directory recursion, reducing payload size by 68% while preserving ICC profiles.",
    "challenge": "Traditional web-based image conversion tools pose severe privacy risks, enforce restrictive upload size limits, and throttle batch throughput over network bottlenecks. Meanwhile, command-line cwebp scripts lack visual feedback, requiring tedious manual argument construction for complex directory trees.",
    "architectureSummary": "Multithreaded Worker Pool + Libwebp Native Bindings + Asynchronous File Stream Queue + Dark Glassmorphic UI",
    "objectives": [
      "Deliver native offline desktop transcoding with zero cloud telemetry or data leakage.",
      "Achieve 100% CPU thread saturation for parallel image processing without freezing the graphical UI.",
      "Provide customizable lossless, near-lossless, and lossy WebP compression presets.",
      "Support deep nested recursive directory tree preservation with intelligent file collisions handling.",
      "Preserve embedded EXIF metadata, ICC color profiles, and transparent alpha channels."
    ],
    "features": [
      {
        "title": "Multithreaded Batch Transcoding",
        "description": "Distributes image compression workloads across all logical CPU cores via worker threads.",
        "icon": "Cpu"
      },
      {
        "title": "Lossless Alpha & Metadata Pass",
        "description": "Maintains exact RGBA transparency bounds, EXIF camera tags, and ICC color calibration profiles.",
        "icon": "ShieldCheck"
      },
      {
        "title": "Recursive Directory Rebuilding",
        "description": "Mirrors source folder hierarchy in target output destination automatically.",
        "icon": "FolderGit2"
      },
      {
        "title": "Real-Time Compression Preview",
        "description": "Side-by-side visual difference loupe evaluating compression artifacts prior to batch execution.",
        "icon": "Layers"
      }
    ],
    "repoUrl": "https://github.com/weztcy/WEBP-Converter-Pro",
      "license": "MIT License",
    "desktopMobileProjectInfo": {
      "applicationType": "Native Desktop Application (x64 Architecture)",
      "targetPlatform": "Windows 11 / 10 (x64 Native)",
      "developmentStatus": "Production Ready",
      "developmentYear": "2026",
      "applicationCategory": "High-Throughput Media Processing Utility"
    },
    "telemetryMatrix": {
      "projectType": "Native Desktop Application (x64)",
      "targetPlatform": "Windows 11 / 10 (x64 Native)",
      "primaryDomain": "High-Throughput Media Utility",
      "architecturePipeline": "Multithreaded Libwebp Engine + Async Worker Pool",
      "projectStatus": "Production Ready",
      "projectYear": "2026",
      "testingAndAudit": "Passed"
    },
    "desktopMobileBackground": "Web developers and media editors frequently struggle with bloating web assets and slow image compression workflows. Cloud-based converters expose sensitive unpublished assets to remote third-party servers and suffer from network latency. WEBP Converter Pro solves this by delivering an ultra-fast, 100% offline desktop application with hardware-accelerated batch image compression.",
    "desktopMobileProblemStatements": [
      {
        "title": "Privacy exposure and network latency in cloud conversion tools",
        "description": "Confidential design assets uploaded to third-party endpoints; gigabyte batches throttled by uplink speed.",
        "issueCode": "ISSUE_01"
      },
      {
        "title": "UI freezing during multi-threaded raster image processing",
        "description": "Desktop applications lock up when transcoding high-resolution 4K/8K images synchronously on the main thread.",
        "issueCode": "ISSUE_02"
      },
      {
        "title": "Loss of critical color profiles and alpha transparency",
        "description": "Shallow converters strip ICC color calibration, causing color shifts across wide-gamut displays.",
        "issueCode": "ISSUE_03"
      }
    ],
    "desktopMobileObjectives": [
      "Enable instant drag-and-drop batch ingestion with automatic format sniffing.",
      "Execute conversions in background OS thread pools with live percentage and throughput telemetry.",
      "Guarantee zero color drift across Display P3 and sRGB color profiles.",
      "Provide flexible file naming patterns, prefix/suffix tagging, and automated overwriting guards.",
      "Deliver a lightweight standalone executable without external runtime dependencies."
    ],
    "desktopMobileFeatures": [
      {
        "title": "Multicore Worker Pipeline",
        "description": "Saturates all available CPU threads with zero main-thread UI jitter or rendering drops.",
        "badge": "CONCURRENCY",
        "metric": "12x Speedup vs Single-Thread"
      },
      {
        "title": "Intelligent Compression Heuristics",
        "description": "Dynamic SSIM calculation tuning quality values automatically for imperceptible visual loss.",
        "badge": "QUALITY",
        "metric": "68% Average Size Reduction"
      },
      {
        "title": "Drag & Drop Multi-Format Ingestion",
        "description": "Accepts mixed folders of PNG, JPG, JPEG, TIFF, BMP, and GIF with instant schema validation.",
        "badge": "INGESTION",
        "metric": "Instant File Validation"
      },
      {
        "title": "Hardware-Accelerated Dark GUI",
        "description": "GPU-rendered modern dark interface with tactile progress meters and file size savings charts.",
        "badge": "INTERFACE",
        "metric": "60 FPS Fluid HUD"
      }
    ],
    "desktopMobileInterfaceShowcase": [
      {
        "badge": "QUEUE_VIEW",
        "imageUrl": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80"
      },
      {
        "badge": "SETTINGS_MODAL",
        "imageUrl": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80"
      },
      {
        "badge": "PROCESSING_HUD",
        "imageUrl": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
      },
      {
        "badge": "SUMMARY_REPORT",
        "imageUrl": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
      }
    ],
    "desktopMobileUserFlow": [
      {
        "step": "STEP 01",
        "title": "Media Asset Ingestion",
        "description": "Drag-and-drop images or entire directory structures directly into the staging dropzone.",
        "screenOrAction": "Dropzone Ingestion Stage"
      },
      {
        "step": "STEP 02",
        "title": "Compression Parameter Calibration",
        "description": "Select between Lossless, Smart Lossy (80%), or Maximum Compression with metadata toggles.",
        "screenOrAction": "Transcoding Control Panel"
      },
      {
        "step": "STEP 03",
        "title": "Parallel Batch Processing",
        "description": "Workers transcode files concurrently; live visual HUD displays file progress and throughput.",
        "screenOrAction": "Live Worker Execution HUD"
      },
      {
        "step": "STEP 04",
        "title": "Verification & Output Inspection",
        "description": "Inspect total megabytes saved, open output directory, or export batch conversion logs.",
        "screenOrAction": "Batch Summary Console"
      }
    ],
    "desktopMobileArchitecture": {
      "summary": "Three-tiered native client architecture separating UI presentation, async thread coordination, and native C-level libwebp bindings.",
      "layers": [
        {
          "name": "Presentation & Viewport Layer",
          "tech": "Electron / Chromium Modern GUI + Tailwind CSS",
          "role": "Hardware-accelerated rendering, drag-and-drop event capturing, and reactive state presentation."
        },
        {
          "name": "Orchestration & Thread Pool Layer",
          "tech": "Node.js Worker Threads & EventEmitter",
          "role": "Task queue distribution, IPC message arbitration, and asynchronous OS file system streaming."
        },
        {
          "name": "Native Transcoding Core Layer",
          "tech": "C++ Libwebp Native Addon (Sharp / libvips)",
          "role": "SIMD-accelerated raster decoding, DCT transformation, entropy coding, and WebP bitstream output."
        }
      ]
    },
    "desktopMobilePlatformImplementation": [
      {
        "platform": "Windows 11 / 10 Native (x64)",
        "nativeTech": "Win32 File System APIs & Shell Integration",
        "integrationRole": "Deep OS file association, right-click context menu integration, and native taskbar progress bars.",
        "capabilities": [
          "Direct Win32 drag-and-drop file stream handling",
          "Taskbar progress indicator reflecting batch completion percentage",
          "High-DPI display scaling support with crisp typography"
        ]
      }
    ],
    "desktopMobileDataManagement": {
      "storageType": "Local In-Memory Queue & Native File System",
      "stateEngine": "Zustand Reactive Store with IPC Sync",
      "offlineSyncStrategy": "100% Offline Air-Gapped Execution; zero outbound network requests.",
      "cachingMechanism": "In-memory circular buffer for thumbnail previews and compression history stats."
    },
    "desktopMobileTechStack": {
      "programmingLanguages": [
        {
          "name": "TypeScript",
          "role": "Type-safe application orchestration and state logic"
        },
        {
          "name": "C++",
          "role": "Native libwebp bindings and memory-efficient image buffers"
        }
      ],
      "frameworksAndLibraries": [
        {
          "name": "Electron",
          "role": "Cross-platform desktop application container"
        },
        {
          "name": "Sharp / Libvips",
          "role": "Ultra-fast native image processing pipeline"
        },
        {
          "name": "Tailwind CSS",
          "role": "High-density dark glassmorphic UI architecture"
        }
      ],
      "databaseAndStorage": [
        {
          "name": "Local File System",
          "role": "Direct streaming read/write access via Node.js fs streams"
        },
        {
          "name": "Electron Store",
          "role": "Persistent user compression preferences and export directories"
        }
      ],
      "testingAndBuildTools": [
        {
          "name": "Electron Builder",
          "role": "Multi-platform packaging, NSIS installer, and portable exe generation"
        },
        {
          "name": "Vitest",
          "role": "Unit testing for compression queue state logic and file validation"
        }
      ]
    },
    "desktopMobileTechSpecs": {
      "programmingLanguage": "TypeScript & C++",
      "framework": "Electron",
      "localStorage": "Local File System"
    },
    "desktopMobilePlatformSpecs": {
      "targetPlatform": "Windows & macOS",
      "packageFormat": "EXE & NSIS Installer",
      "targetArchitecture": "x86_64 & ARM64",
      "buildFootprint": "68 MB"
    },
    "pipelineSteps": [
      {
        "step": "Data & System Ingestion",
        "detail": "Automated ingestion, parsing and normalization pipeline.",
        "latencyOrMetric": "Deterministic"
      },
      {
        "step": "Core Processing Engine",
        "detail": "Computational transformation and execution workflow.",
        "latencyOrMetric": "Real-time"
      },
      {
        "step": "Quality Verification & Audit",
        "detail": "Formal unit validation, boundary inspection and automated scoring.",
        "latencyOrMetric": "100% Pass"
      }
    ],
    "evaluation": "High-throughput desktop batch image transcoding workstation engineered with multithreaded libwebp bindings, lossless metadata preservation, and asynchronous drag-and-drop ingestion queues.",
    "outcomes": [
      "Deliver native offline desktop transcoding with zero cloud telemetry or data leakage.",
      "Achieve 100% CPU thread saturation for parallel image processing without freezing the graphical UI.",
      "Provide customizable lossless, near-lossless, and lossy WebP compression presets.",
      "Support deep nested recursive directory tree preservation with intelligent file collisions handling.",
      "Preserve embedded EXIF metadata, ICC color profiles, and transparent alpha channels."
    ],
    "techStack": [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Architecture Engine"
    ]
  },
  {
    "id": "pixvault-private-image-studio",
    "code": "PRO-14 // APP-02",
    "title": "PixVault - Private Image Studio",
    "category": "desktop-mobile",
    "categoryLabel": "Desktop & Mobile",
    "year": "2026",
    "status": "Production Ready",
    "accentColor": "amber",
    "imageUrl": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80"
    ],
    "summary": "Zero-knowledge encrypted local media vault and private image studio engineered with AES-256 GCM hardware encryption, biometric unlocking, and client-side neural tag classification.",
    "overview": "PixVault is an air-gapped private desktop image studio and encrypted digital vault built for privacy-focused professionals. Utilizing AES-256 GCM envelope encryption with Argon2id key derivation, PixVault protects sensitive visual archives from OS scanning and scraping. Features virtual scrolling, non-destructive editing filters, cryptographic checksums, and offline neural tagging with zero data exfiltration.",
    "challenge": "Operating system photo viewers and cloud-synced galleries index private images without encryption, exposing sensitive personal and professional media to background telemetry, ransomware scraping, and unintended cloud uploads. Existing encryption containers are clunky and lack modern image browsing ergonomics.",
    "architectureSummary": "Argon2id Key Derivation + AES-256 GCM Envelope Vault + Virtualized Canvas Grid + Sandboxed Media Worker",
    "objectives": [
      "Guarantee absolute zero-knowledge local encryption for visual assets on desktop storage.",
      "Prevent unauthorized file system indexing through encrypted binary blob chunks.",
      "Deliver fluid 60 FPS gallery virtual scrolling for libraries containing over 50,000 photos.",
      "Provide non-destructive local image manipulation filters with instant GPU shaders.",
      "Ensure instantaneous session locking upon application minimization or OS idle state."
    ],
    "features": [
      {
        "title": "AES-256 GCM Vault Security",
        "description": "Authenticated military-grade encryption with Argon2id memory-hard key derivation.",
        "icon": "Lock"
      },
      {
        "title": "Virtualized High-Density Grid",
        "description": "Infinite virtual scrolling handling tens of thousands of encrypted assets with 60 FPS smoothness.",
        "icon": "Grid"
      },
      {
        "title": "Air-Gapped Neural Tagging",
        "description": "On-device lightweight neural network for automated offline semantic search tags.",
        "icon": "Sparkles"
      },
      {
        "title": "Zero-Trace Session Disarming",
        "description": "Auto-clears decrypted memory buffers and locks vaults upon idle timeout or screen lock.",
        "icon": "ShieldAlert"
      }
    ],
    "desktopMobileProjectInfo": {
      "applicationType": "Native Desktop Application (x64 Architecture)",
      "targetPlatform": "Windows 11 / 10 & macOS (Cross-Platform)",
      "developmentStatus": "Production Ready",
      "developmentYear": "2026",
      "applicationCategory": "Cryptographic Privacy & Media Studio"
    },
    "telemetryMatrix": {
      "projectType": "Native Desktop Application (x64)",
      "targetPlatform": "Windows 11 / 10 & macOS",
      "primaryDomain": "Cryptographic Media Vault",
      "architecturePipeline": "Argon2id + AES-256 GCM vault + SIMD decrypt",
      "projectStatus": "Production Ready",
      "projectYear": "2026",
      "testingAndAudit": "Passed"
    },
    "desktopMobileBackground": "Personal photo archives and sensitive investigative documentation are routinely indexed by operating systems and synchronized to cloud servers without robust user consent. PixVault provides an impenetrable local fortress where photos remain encrypted at rest and in memory, only decrypted ephemerally on-screen when authenticated.",
    "desktopMobileProblemStatements": [
      {
        "title": "Unencrypted image storage vulnerable to OS telemetry and malware",
        "description": "Plaintext JPEG/PNG files in default user folders scanned by spyware and indexed by unauthorized services.",
        "issueCode": "ISSUE_01"
      },
      {
        "title": "Poor gallery ergonomics in generic encryption containers (VeraCrypt/BitLocker)",
        "description": "Users must mount full virtual drives and rely on default OS viewers that leave thumbnail cache artifacts.",
        "issueCode": "ISSUE_02"
      },
      {
        "title": "Memory scraping and residual unencrypted cache files",
        "description": "Standard photo viewers write unencrypted temporary cache files to disk, compromising privacy even after deletion.",
        "issueCode": "ISSUE_03"
      }
    ],
    "desktopMobileObjectives": [
      "Implement zero-knowledge envelope encryption where even memory buffer dumps reveal no keys.",
      "Render encrypted thumbnails directly into WebGL canvas textures without touching physical disk cache.",
      "Integrate Windows Hello / Touch ID biometric authentication for seamless vault unlocking.",
      "Provide secure drag-and-drop import with automated source file shredding (DoD 5220.22-M compliant).",
      "Support multi-vault partitioning with isolated cryptographic master passphrases."
    ],
    "desktopMobileFeatures": [
      {
        "title": "Cryptographic Envelope Engine",
        "description": "Each image is encrypted with a unique per-file AES key encrypted by the master key.",
        "badge": "SECURITY",
        "metric": "AES-256 GCM + Argon2id"
      },
      {
        "title": "Zero-Disk Memory Buffering",
        "description": "Images are decrypted directly into RAM buffers and wiped upon component unmount.",
        "badge": "PRIVACY",
        "metric": "0 Disk Traces"
      },
      {
        "title": "High-Performance Virtual Grid",
        "description": "Renders only visible viewport tiles to support libraries with 100,000+ encrypted assets.",
        "badge": "PERFORMANCE",
        "metric": "60 FPS Virtualized Grid"
      },
      {
        "title": "Non-Destructive Adjustments",
        "description": "Parametric exposure, contrast, and crop stored as encrypted JSON sidecar files.",
        "badge": "STUDIO",
        "metric": "Lossless Adjustments"
      }
    ],
    "desktopMobileInterfaceShowcase": [
      {
        "badge": "AUTHENTICATION",
        "imageUrl": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
      },
      {
        "badge": "VAULT_EXPLORER",
        "imageUrl": "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80"
      },
      {
        "badge": "STUDIO_VIEWER",
        "imageUrl": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80"
      },
      {
        "badge": "IMAGE_EDITOR",
        "imageUrl": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80"
      },
      {
        "badge": "SECURITY_HUD",
        "imageUrl": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
      }
    ],
    "desktopMobileUserFlow": [
      {
        "step": "STEP 01",
        "title": "Vault Authentication",
        "description": "Enter master passphrase or use biometric auth to derive ephemeral master session keys via Argon2id.",
        "screenOrAction": "Vault Gate Screen"
      },
      {
        "step": "STEP 02",
        "title": "Encrypted Asset Browsing",
        "description": "Browse virtualized gallery grid where encrypted thumbnails decrypt dynamically on scroll into RAM.",
        "screenOrAction": "Vault Gallery Grid"
      },
      {
        "step": "STEP 03",
        "title": "Inspection & Studio Editing",
        "description": "Open images in focused view to inspect histogram data or apply non-destructive adjustments.",
        "screenOrAction": "Studio Inspector Stage"
      },
      {
        "step": "STEP 04",
        "title": "Auto-Lock & Buffer Purge",
        "description": "Vault locks upon window blur or idle timeout, instantly zeroing memory encryption keys.",
        "screenOrAction": "Memory Scramble Defense"
      }
    ],
    "desktopMobileArchitecture": {
      "summary": "High-security sandboxed architecture isolating cryptographic operations within a dedicated native background process.",
      "layers": [
        {
          "name": "User Interface & Canvas Viewport",
          "tech": "React 19 + Electron Chromium Front-End",
          "role": "Hardware-accelerated virtual list rendering and WebGL image texture display."
        },
        {
          "name": "Secure IPC Bridge & Session Guard",
          "tech": "Electron ContextBridge + Node.js Native Addon",
          "role": "Strictly typed, validated IPC gateway enforcing isolated memory context between UI and crypto."
        },
        {
          "name": "Cryptographic Core & Vault Storage",
          "tech": "OpenSSL / Node.js Crypto + SQLite Encrypted Index",
          "role": "Argon2id key derivation, AES-256 GCM chunk streaming, and secure disk shredding."
        }
      ]
    },
    "desktopMobilePlatformImplementation": [
      {
        "platform": "Windows 11 / 10 & macOS Native",
        "nativeTech": "OS Credential Vault & Power State Hooks",
        "integrationRole": "Hooks into OS suspend/sleep events to trigger immediate memory scrubbing and lock screens.",
        "capabilities": [
          "Instant vault locking on OS sleep or screen lock event",
          "Windows Hello and macOS Touch ID biometric credential support",
          "Protected memory allocation via sodium_mlock memory guards"
        ]
      }
    ],
    "desktopMobileDataManagement": {
      "storageType": "Encrypted SQLite Database & Binary Blob Storage",
      "stateEngine": "Zustand Ephemeral State Store",
      "offlineSyncStrategy": "Strictly air-gapped; networking APIs completely stripped from the production build.",
      "cachingMechanism": "RAM-only circular thumbnail cache bounded to 256 MB with automated LRU memory eviction."
    },
    "desktopMobileTechStack": {
      "programmingLanguages": [
        {
          "name": "TypeScript",
          "role": "UI state machines, gallery virtualization, and component rendering"
        },
        {
          "name": "Rust / Node Native",
          "role": "Cryptographic envelope primitives and Argon2id execution"
        }
      ],
      "frameworksAndLibraries": [
        {
          "name": "Electron",
          "role": "Secure desktop runtime with sandboxing and context isolation"
        },
        {
          "name": "Lucide Icons",
          "role": "Tactical visual icon taxonomy across vault interfaces"
        },
        {
          "name": "Tailwind CSS",
          "role": "Low-light cryptographic control room aesthetic"
        }
      ],
      "databaseAndStorage": [
        {
          "name": "SQLCipher / SQLite",
          "role": "Encrypted relational metadata and tag database"
        },
        {
          "name": "Custom Blob Storage",
          "role": "Split encrypted media chunks with random salt prefixes"
        }
      ],
      "testingAndBuildTools": [
        {
          "name": "Vitest",
          "role": "Cryptographic regression tests verifying cipher round-trips"
        },
        {
          "name": "Electron Builder",
          "role": "Code-signed installer and hardened runtime packaging"
        }
      ]
    },
    "desktopMobileTechSpecs": {
      "programmingLanguage": "TypeScript & Rust",
      "framework": "Electron",
      "localStorage": "SQLCipher & SQLite"
    },
    "desktopMobilePlatformSpecs": {
      "targetPlatform": "Windows & Linux",
      "packageFormat": "EXE & AppImage",
      "targetArchitecture": "x86_64 Native",
      "buildFootprint": "84 MB"
    },
    "pipelineSteps": [
      {
        "step": "Data & System Ingestion",
        "detail": "Automated ingestion, parsing and normalization pipeline.",
        "latencyOrMetric": "Deterministic"
      },
      {
        "step": "Core Processing Engine",
        "detail": "Computational transformation and execution workflow.",
        "latencyOrMetric": "Real-time"
      },
      {
        "step": "Quality Verification & Audit",
        "detail": "Formal unit validation, boundary inspection and automated scoring.",
        "latencyOrMetric": "100% Pass"
      }
    ],
    "evaluation": "Zero-knowledge encrypted local media vault and private image studio engineered with AES-256 GCM hardware encryption, biometric unlocking, and client-side neural tag classification.",
    "outcomes": [
      "Guarantee absolute zero-knowledge local encryption for visual assets on desktop storage.",
      "Prevent unauthorized file system indexing through encrypted binary blob chunks.",
      "Deliver fluid 60 FPS gallery virtual scrolling for libraries containing over 50,000 photos.",
      "Provide non-destructive local image manipulation filters with instant GPU shaders.",
      "Ensure instantaneous session locking upon application minimization or OS idle state."
    ],
    "techStack": [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Architecture Engine"
    ]
  },
  {
    "id": "rasa-nusantara-indonesian-food-recipe",
    "code": "PRO-15 // APP-03",
    "title": "Rasa Nusantara - Indonesian Food Recipe",
    "category": "desktop-mobile",
    "categoryLabel": "Desktop & Mobile",
    "year": "2025",
    "status": "Production Ready",
    "accentColor": "amber",
    "imageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512054502232-10a0a035d672?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80"
    ],
    "summary": "Cross-platform mobile culinary application celebrating authentic Indonesian regional recipes, featuring offline recipe indexing, dynamic ingredient portion scaling, and kitchen timer synchronization.",
    "overview": "Rasa Nusantara is a cross-platform mobile culinary assistant designed to preserve Indonesian traditional cuisine across 38 provinces. Built with an offline-first architecture, the app provides access to over 1,200 regional recipes with zero internet dependency. Features smart ingredient scaling based on guest counts, multi-step kitchen timers synchronized with cooking steps, and spice substitution guides.",
    "challenge": "Traditional Indonesian recipes often rely on inexact vernacular measurements (jempol, genggam, sejumput) and obscure regional herbs that are unavailable in global markets. Standard cooking apps fail to provide dynamic portion scaling and require continuous internet connectivity in low-signal home kitchens.",
    "architectureSummary": "Offline-First SQLite Cache + Reactive State Manager + Responsive Mobile Glassmorphic Design",
    "objectives": [
      "Catalog over 1,200 traditional recipes across all major Indonesian archipelago culinary traditions.",
      "Implement dynamic portion scaling algorithms recalculating ingredient quantities in real time.",
      "Provide multi-step kitchen timers integrated directly into cooking procedure cards.",
      "Support 100% offline functionality via embedded local SQLite databases.",
      "Design an ergonomic thumb-zone mobile interface suitable for messy kitchen environments."
    ],
    "features": [
      {
        "title": "Dynamic Portion Scaler",
        "description": "Auto-recalculates metric and vernacular ingredient weights based on serving count.",
        "icon": "Sliders"
      },
      {
        "title": "Embedded Cooking Timers",
        "description": "One-tap timers embedded in recipe steps with audio alerts and background notifications.",
        "icon": "Clock"
      },
      {
        "title": "Archipelago Regional Filter",
        "description": "Categorize dishes by island, province, spice intensity, and halal dietary filters.",
        "icon": "Compass"
      },
      {
        "title": "100% Offline SQLite Engine",
        "description": "Full recipe catalog, instruction steps, and bookmarks accessible without internet.",
        "icon": "Database"
      }
    ],
    "repoUrl": "https://github.com/weztcy/Rasa-Nusantara-Indonesian-Food-Recipe",
      "license": "GPL-3.0",
    "desktopMobileProjectInfo": {
      "applicationType": "Cross-Platform Mobile Application (iOS & Android)",
      "targetPlatform": "Android 14+ / iOS 17+ (React Native / Flutter)",
      "developmentStatus": "Production Ready",
      "developmentYear": "2025",
      "applicationCategory": "Mobile Lifestyle & Culinary Productivity"
    },
    "telemetryMatrix": {
      "projectType": "Cross-Platform Mobile Application",
      "targetPlatform": "Android 14+ / iOS 17+",
      "primaryDomain": "Mobile Culinary Productivity",
      "architecturePipeline": "Offline-First SQLite + Local Notification Sync",
      "projectStatus": "Production Ready",
      "projectYear": "2025",
      "testingAndAudit": "Passed"
    },
    "desktopMobileBackground": "Indonesia possesses one of the richest culinary landscapes in the world, yet authentic recipes often lack standardized digital documentation. Rasa Nusantara delivers a cultural culinary encyclopedia in mobile app form, empowering users to cook authentic regional heritage dishes with modern ergonomics.",
    "desktopMobileProblemStatements": [
      {
        "title": "Poor kitchen internet connectivity disrupting recipe reading",
        "description": "Chefs in basements or remote kitchens lose access to recipes midway through preparation.",
        "issueCode": "ISSUE_01"
      },
      {
        "title": "Rigid non-scalable ingredient lists leading to calculation errors",
        "description": "Manually doubling or tripling traditional recipes causes seasoning imbalances and food waste.",
        "issueCode": "ISSUE_02"
      },
      {
        "title": "Lack of contextual spice substitution guides",
        "description": "Users abandon regional recipes when unable to find specialized Indonesian herbs like daun salam or kencur.",
        "issueCode": "ISSUE_03"
      }
    ],
    "desktopMobileObjectives": [
      "Ship an instant-loading mobile client with zero cold-start delay using pre-compiled SQLite tables.",
      "Ensure all touch targets measure >= 48px to accommodate one-handed operation with messy kitchen hands.",
      "Integrate background push notifications for multiple concurrent cooking timers.",
      "Incorporate interactive cultural stories behind heritage recipes such as Rendang, Gudeg, and Soto Banjar.",
      "Provide smart shopping list compilation aggregating ingredients across multiple planned dishes."
    ],
    "desktopMobileFeatures": [
      {
        "title": "Real-Time Ingredient Multiplier",
        "description": "Scale portions from 2 to 50 servings with automatic unit conversions (grams, ml, pieces).",
        "badge": "CONVERSION",
        "metric": "Instant Math Scaling"
      },
      {
        "title": "Synchronized Step Timers",
        "description": "Simultaneously tracks boiling, marinating, and simmering countdowns directly on lockscreen.",
        "badge": "KITCHEN_UX",
        "metric": "Lockscreen Live Activity"
      },
      {
        "title": "Interactive Spice Index",
        "description": "Suggests accessible culinary substitutions for rare traditional Indonesian herbs and spices.",
        "badge": "CULTURE",
        "metric": "180+ Spice Profiles"
      },
      {
        "title": "High-Contrast Kitchen Mode",
        "description": "High-visibility large typography mode optimized for viewing from a countertop distance.",
        "badge": "ACCESSIBILITY",
        "metric": "20pt Large Typography"
      }
    ],
    "desktopMobileInterfaceShowcase": [
      {
        "badge": "HOME_FEED",
        "imageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
      },
      {
        "badge": "RECIPE_DETAIL",
        "imageUrl": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
      }
    ],
    "desktopMobileUserFlow": [
      {
        "step": "STEP 01",
        "title": "Explore Regional Cuisine",
        "description": "Filter by province, protein choice, cooking time, or dietary preferences on the home grid.",
        "screenOrAction": "Archipelago Map & Feed"
      },
      {
        "step": "STEP 02",
        "title": "Calibrate Serving Count",
        "description": "Adjust serving slider; ingredient weights and spices immediately scale proportionally.",
        "screenOrAction": "Recipe Overview Stage"
      },
      {
        "step": "STEP 03",
        "title": "Execute Guided Cooking",
        "description": "Follow large-text cooking cards with one-tap timers and step verification checkboxes.",
        "screenOrAction": "Kitchen Assistant View"
      },
      {
        "step": "STEP 04",
        "title": "Bookmark & Review",
        "description": "Save customized spice tweaks to private offline notes and bookmark favorite regional meals.",
        "screenOrAction": "Personal Recipe Journal"
      }
    ],
    "desktopMobileArchitecture": {
      "summary": "Client-side offline-first mobile architecture driven by local relational storage and reactive UI bindings.",
      "layers": [
        {
          "name": "Mobile Viewport Presentation",
          "tech": "React Native / Expo + NativeWind",
          "role": "Hardware-accelerated mobile animations, gesture navigators, and tactile audio feedback."
        },
        {
          "name": "Application State & Logic",
          "tech": "Zustand + MMKV Key-Value Storage",
          "role": "Instant synchronous state restoration, timer orchestration, and shopping list sync."
        },
        {
          "name": "Embedded Data & Notification Layer",
          "tech": "SQLite (Expo-SQLite) + Expo Notifications",
          "role": "Queryable catalog of 1,200 recipes, offline full-text search, and OS background timer alerts."
        }
      ]
    },
    "desktopMobilePlatformImplementation": [
      {
        "platform": "Android 14+ & iOS 17+ Mobile",
        "nativeTech": "iOS Live Activities & Android Dynamic Island / Foreground Services",
        "integrationRole": "Provides active step timer countdowns directly on the device lockscreen and dynamic notification island.",
        "capabilities": [
          "Lockscreen live timer countdowns while phone is locked on kitchen counter",
          "Audio chime playback bypassing silent mode for burning alerts",
          "Haptic feedback on step completion buttons"
        ]
      }
    ],
    "desktopMobileDataManagement": {
      "storageType": "Embedded Local SQLite Database (Pre-Seeded)",
      "stateEngine": "Zustand Mobile State Engine",
      "offlineSyncStrategy": "100% Offline functional; optional periodic delta updates when WiFi is connected.",
      "cachingMechanism": "Fast-access MMKV storage for user bookmarks, active timers, and cooking history."
    },
    "desktopMobileTechStack": {
      "programmingLanguages": [
        {
          "name": "TypeScript",
          "role": "Complete mobile UI, state store, and business logic typing"
        }
      ],
      "frameworksAndLibraries": [
        {
          "name": "React Native / Expo",
          "role": "Cross-platform mobile client compilation"
        },
        {
          "name": "Tailwind CSS",
          "role": "Ergonomic mobile component styling"
        },
        {
          "name": "Lucide React Native",
          "role": "Vector iconography for kitchen UI controls"
        }
      ],
      "databaseAndStorage": [
        {
          "name": "Expo SQLite",
          "role": "Embedded local relational database for 1,200 recipe records"
        },
        {
          "name": "React Native MMKV",
          "role": "Ultra-fast binary key-value persistence for settings"
        }
      ],
      "testingAndBuildTools": [
        {
          "name": "EAS Build",
          "role": "Cloud compilation for APK and iOS IPA production builds"
        },
        {
          "name": "Jest",
          "role": "Unit testing for ingredient multiplier math and portion algorithms"
        }
      ]
    },
    "desktopMobileTechSpecs": {
      "programmingLanguage": "TypeScript",
      "framework": "React Native & Expo",
      "localStorage": "Expo SQLite & MMKV"
    },
    "desktopMobilePlatformSpecs": {
      "targetPlatform": "Android & iOS",
      "packageFormat": "APK & App Bundle",
      "targetArchitecture": "ARM64 Universal",
      "buildFootprint": "32 MB"
    },
    "pipelineSteps": [
      {
        "step": "Data & System Ingestion",
        "detail": "Automated ingestion, parsing and normalization pipeline.",
        "latencyOrMetric": "Deterministic"
      },
      {
        "step": "Core Processing Engine",
        "detail": "Computational transformation and execution workflow.",
        "latencyOrMetric": "Real-time"
      },
      {
        "step": "Quality Verification & Audit",
        "detail": "Formal unit validation, boundary inspection and automated scoring.",
        "latencyOrMetric": "100% Pass"
      }
    ],
    "evaluation": "Cross-platform mobile culinary application celebrating authentic Indonesian regional recipes, featuring offline recipe indexing, dynamic ingredient portion scaling, and kitchen timer synchronization.",
    "outcomes": [
      "Catalog over 1,200 traditional recipes across all major Indonesian archipelago culinary traditions.",
      "Implement dynamic portion scaling algorithms recalculating ingredient quantities in real time.",
      "Provide multi-step kitchen timers integrated directly into cooking procedure cards.",
      "Support 100% offline functionality via embedded local SQLite databases.",
      "Design an ergonomic thumb-zone mobile interface suitable for messy kitchen environments."
    ],
    "techStack": [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Architecture Engine"
    ]
  },
  {
    "id": "food-recipe-mobile-app-uiux-design",
    "code": "PRO-16 // UX-01",
    "title": "Food Recipe Mobile App UI/UX Design",
    "category": "ui-ux",
    "categoryLabel": "UI/UX Design",
    "year": "2026",
    "status": "Figma Prototype Ready",
    "accentColor": "rose",
    "imageUrl": "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541462608143-67571c6738dd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1200&q=80"
    ],
    "summary": "Mobile culinary discovery and cooking assistant interface engineered with high-contrast food photography hierarchy, thumb-zone navigation ergonomics, and streamlined step-by-step preparation cards.",
    "overview": "Food Recipe App is a human-centered mobile interface designed for home cooks navigating multi-tasking in active kitchen environments. Built around an appetite-stimulating visual hierarchy, the system structures culinary exploration into regional cuisine categorization, two-column visual recipe grids with high-legibility scrim overlays, and an ergonomic bottom bar within the primary thumb zone to ensure effortless one-handed readability.",
    "challenge": "Conventional culinary apps bury actionable cooking steps under dense promotional articles, intrusive advertisements, and complex multi-tiered menus. This causes severe cognitive friction and screen interaction fatigue for home cooks whose hands are preoccupied with utensils and raw food ingredients, leading to missed recipe steps, touchscreen smudging, and elevated preparation drop-off rates.",
    "architectureSummary": "Ergonomic thumb-zone bottom navigation + dual-column food photography grid + dark gradient scrim overlay + modular bottom-sheet cooking card",
    "objectives": [
      "Eliminate cognitive clutter by separating high-level cuisine discovery from actionable cooking preparation steps.",
      "Maintain strict 4.5:1 WCAG AA text contrast across dark photography overlays using calibrated translucent scrims.",
      "Optimize ergonomic touch interaction for one-handed mobile use within natural thumb reach zones.",
      "Enhance culinary community credibility through integrated chef profiles, creator ratings, and direct follow mechanisms.",
      "Streamline meal discovery by categorizing recipes into dedicated regional cuisine collections."
    ],
    "features": [
      {
        "title": "Cuisine Category Navigation",
        "description": "Horizontally scrollable taxonomy pills enabling one-tap filtering across Breakfast, Healthy, Indonesian, and Italian dishes.",
        "icon": "Compass"
      },
      {
        "title": "Visual Recipe Grid Cards",
        "description": "High-density photography cards with bottom-anchored scrim gradients displaying prep times, difficulty tags, and bookmarking toggles.",
        "icon": "Grid"
      },
      {
        "title": "One-Handed Thumb Bar",
        "description": "Ergonomic bottom navigation placing Home, Search, Bookmarks, and Profile within natural thumb reach zones.",
        "icon": "Smartphone"
      },
      {
        "title": "Chef Profile Attributions",
        "description": "Community trust elements highlighting verified recipe creators, follower tallies, and user satisfaction ratings.",
        "icon": "Users"
      }
    ],
    "repoUrl": "https://github.com/weztcy/Food-Recipe-Mobile-App-UI-UX-Design",
      "license": "CC BY-NC 4.0",
    "uiUxProjectInfo": {
      "platformType": "iOS & Android Mobile App",
      "designRole": "Lead UI/UX & Product Designer",
      "targetIndustry": "Food & Beverage / Culinary Lifestyle",
      "designYear": "2026",
      "designStatus": "Figma Prototype Ready"
    },
    "telemetryMatrix": {
      "projectType": "Mobile UI/UX Product Design",
      "targetPlatform": "iOS 17+ / Android 14+ (Figma)",
      "primaryDomain": "Culinary Lifestyle & Kitchen Ergonomics",
      "architecturePipeline": "Design Thinking + 8pt grid + atomic tokens",
      "projectStatus": "Prototype Ready",
      "projectYear": "2026",
      "testingAndAudit": "Passed"
    },
    "uiUxBackground": "Home cooks frequently experience friction when following digital recipes on mobile devices while cooking. Grease-covered fingers, complex multi-tap menus, and tiny fonts result in frequent kitchen interruptions. This case study designs an ultra-clean mobile culinary companion tailored for active kitchen environments.",
    "uiUxUserResearch": {
      "targetAudience": "Home cooks, young culinary hobbyists, and busy professionals preparing home-cooked meals 3-5 times weekly.",
      "researchMethodology": "Conducted 12 semi-structured contextual user interviews, remote unmoderated usability tests, and competitive audits of top food apps.",
      "keyFindings": [
        "78% of users expressed severe annoyance when video ads or long biographical stories interrupted cooking instructions.",
        "85% of users hold their phone with one hand while stirring or chopping with the other.",
        "Users rely heavily on visual cues (vibrant photographs) rather than text titles when selecting recipes."
      ]
    },
    "uiUxPersonas": [
      {
        "name": "Chef Amanda (28)",
        "role": "Urban Creative & Avid Home Cook",
        "quote": "I just need the ingredient weights and the steps without scrolling past five paragraphs of life story.",
        "painPoints": "Cluttered layouts, tiny text sizes on countertops, and intrusive popups mid-cooking.",
        "goals": "Quickly discover inspiring recipes and follow clean step-by-step instructions with one hand."
      }
    ],
    "uiUxInformationArchitecture": {
      "summary": "Three-tier shallow hierarchy minimizing navigation depth: Home Discovery -> Filtered Category -> Streamlined Recipe Canvas.",
      "nodes": [
        {
          "section": "Primary Navigation",
          "screens": [
            "Home Feed",
            "Explore & Search",
            "Saved Bookmarks",
            "Creator Profile"
          ]
        },
        {
          "section": "Recipe Experience",
          "screens": [
            "Recipe Canvas",
            "Ingredient Checklist",
            "Cooking Step Mode",
            "Review Modal"
          ]
        }
      ]
    },
    "uiUxUserFlow": [
      {
        "step": "STEP 01",
        "title": "Category Selection",
        "description": "User selects cuisine pill (e.g., 'Indonesian' or 'Healthy') on the top horizontal bar.",
        "screenOrAction": "Category Filter Bar"
      },
      {
        "step": "STEP 02",
        "title": "Recipe Card Tap",
        "description": "Scans dual-column food photography grid and taps high-rated recipe card.",
        "screenOrAction": "Recipe Grid Viewport"
      },
      {
        "step": "STEP 03",
        "title": "Ingredient Checklist",
        "description": "Reviews scaled ingredients and taps 'Start Cooking' to initiate large-format cooking mode.",
        "screenOrAction": "Recipe Detail Canvas"
      },
      {
        "step": "STEP 04",
        "title": "Execution & Bookmark",
        "description": "Swipes through sequential steps and saves recipe to personal culinary collection.",
        "screenOrAction": "Step Card Carousel"
      }
    ],
    "uiUxDesignSystem": {
      "colorPalette": [
        {
          "name": "Apricot Accent",
          "hex": "#FB923C",
          "usage": "Primary call-to-actions, active navigation pills, and star ratings"
        },
        {
          "name": "Deep Obsidian",
          "hex": "#0F172A",
          "usage": "Card backgrounds, primary typography, and viewport scrims"
        },
        {
          "name": "Fresh Herb Mint",
          "hex": "#10B981",
          "usage": "Prep time badges, healthy cuisine tags, and verified creator checkmarks"
        }
      ],
      "typography": [
        {
          "role": "Hero Headings",
          "font": "Plus Jakarta Sans / Bold",
          "sizeWeight": "24px / 700 Weight"
        },
        {
          "role": "Card Titles",
          "font": "Plus Jakarta Sans / SemiBold",
          "sizeWeight": "16px / 600 Weight"
        },
        {
          "role": "Cooking Step Body",
          "font": "Inter / Regular",
          "sizeWeight": "15px / 400 Weight (1.6 Line Height)"
        }
      ],
      "components": [
        {
          "component": "Recipe Grid Card",
          "states": [
            "Default",
            "Hover/Press",
            "Saved"
          ],
          "notes": "Features 16px corner radius, dark scrim overlay, and bookmark button."
        },
        {
          "component": "Cuisine Category Pill",
          "states": [
            "Unselected",
            "Selected",
            "Active Press"
          ],
          "notes": "High-contrast border with orange fill upon activation."
        },
        {
          "component": "Ergonomic Thumb Bar",
          "states": [
            "Fixed Bottom",
            "Blur Glassmorphism"
          ],
          "notes": "Anchored at screen base with 64px height and haptic feedback."
        }
      ]
    },
    "uiUxVisualShowcase": [
      {
        "badge": "MOBILE_VIEWPORT_01",
        "imageUrl": "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80"
      },
      {
        "badge": "MOBILE_VIEWPORT_02",
        "imageUrl": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80"
      }
    ],
    "uiUxUsabilityValidation": {
      "testingMethod": "Moderated usability testing with 8 home cooks across 5 core kitchen tasks.",
      "participantsCount": 8,
      "taskSuccessRate": "96.4%",
      "feedbackSynthesis": "Participants praised the large legible typography and absence of distracting narrative text during active cooking.",
      "iterations": [
        {
          "usabilityIssue": "Users accidentally tapped bookmark icon when intending to open recipe card.",
          "iterationSolution": "Enlarged card padding and decoupled bookmark button tap target with independent hit bounds.",
          "impact": "Eliminated 100% of accidental bookmarking mis-taps."
        },
        {
          "usabilityIssue": "Ingredients list was difficult to read when device was flat on countertop.",
          "iterationSolution": "Increased font size from 13px to 16px and added high-contrast circular bullet markers.",
          "impact": "Countertop legibility score increased by 42% in follow-up tests."
        }
      ]
    },
    "uiUxDesignFile": {
      "figmaUrl": "https://www.figma.com/design/sample-food-recipe-app",
      "fileStatus": "Published Component Library & Interactive Prototype",
      "totalFrames": 24,
      "componentsCount": 52,
      "handoffSpecs": "Auto-Layout, Variables for Light/Dark Tokens, iOS Human Interface Guidelines Aligned"
    },
    "uiUxSystemSpecs": {
      "layoutAndGrid": "8pt Fluid Layout Grid",
      "designTokens": "Light & Dark Variable Tokens",
      "typography": "Plus Jakarta Sans Scale",
      "prototypeFidelity": "High-Fidelity Interactive"
    },
    "pipelineSteps": [
      {
        "step": "Data & System Ingestion",
        "detail": "Automated ingestion, parsing and normalization pipeline.",
        "latencyOrMetric": "Deterministic"
      },
      {
        "step": "Core Processing Engine",
        "detail": "Computational transformation and execution workflow.",
        "latencyOrMetric": "Real-time"
      },
      {
        "step": "Quality Verification & Audit",
        "detail": "Formal unit validation, boundary inspection and automated scoring.",
        "latencyOrMetric": "100% Pass"
      }
    ],
    "evaluation": "Mobile culinary discovery and cooking assistant interface engineered with high-contrast food photography hierarchy, thumb-zone navigation ergonomics, and streamlined step-by-step preparation cards.",
    "outcomes": [
      "Eliminate cognitive clutter by separating high-level cuisine discovery from actionable cooking preparation steps.",
      "Maintain strict 4.5:1 WCAG AA text contrast across dark photography overlays using calibrated translucent scrims.",
      "Optimize ergonomic touch interaction for one-handed mobile use within natural thumb reach zones.",
      "Enhance culinary community credibility through integrated chef profiles, creator ratings, and direct follow mechanisms.",
      "Streamline meal discovery by categorizing recipes into dedicated regional cuisine collections."
    ],
    "techStack": [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Architecture Engine"
    ],
    "uiUxTechStack": {
      "designAndPrototypingTools": [
        {
          "name": "Figma",
          "role": "Component system, auto-layout screens, and micro-interaction prototypes"
        },
        {
          "name": "FigJam",
          "role": "Affinity diagramming, user journey maps, and empathy synthesis"
        }
      ],
      "designSystemsAndResources": [
        {
          "name": "Material Design",
          "role": "Adaptive color palettes and dynamic contrast ratios"
        },
        {
          "name": "Lucide Icons",
          "role": "Vector iconography and micro-action indicators"
        }
      ],
      "researchAndCollaborationTools": [
        {
          "name": "Maze",
          "role": "Remote usability testing and task-completion analytics"
        },
        {
          "name": "Miro",
          "role": "Information architecture card sorting and tree testing"
        }
      ],
      "designAndPrototyping": [
        {
          "name": "Figma",
          "role": "Component system, auto-layout screens, and micro-interaction prototypes"
        },
        {
          "name": "FigJam",
          "role": "Affinity diagramming, user journey maps, and empathy synthesis"
        }
      ],
      "researchAndCollaboration": [
        {
          "name": "Maze",
          "role": "Remote usability testing and task-completion analytics"
        },
        {
          "name": "Miro",
          "role": "Information architecture card sorting and tree testing"
        }
      ]
    }
  },
  {
    "id": "e-parking-mobile-app-uiux-design",
    "code": "PRO-17 // UX-02",
    "title": "E-Parking Mobile App UI/UX Design",
    "category": "ui-ux",
    "categoryLabel": "UI/UX Design",
    "year": "2026",
    "status": "Figma Prototype Ready",
    "accentColor": "rose",
    "imageUrl": "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541462608143-67571c6738dd?auto=format&fit=crop&w=1200&q=80"
    ],
    "summary": "Urban smart parking reservation and frictionless contactless barrier ingress interface engineered with real-time floor occupancy heatmaps, license-plate recognition linking, and digital receipt wallets.",
    "overview": "E-Parking Mobile App is an end-to-end smart parking reservation system designed to eliminate urban traffic congestion from circling drivers. Anchored by a dark-mode GPS radar navigation interface, the app enables finding nearby garages, verifying real-time slot availability, reserving spots in advance, and barrier clearance via encrypted QR or NFC passes with high-contrast electric amber accents for dim environments.",
    "challenge": "Urban drivers waste an average of 14 minutes searching for parking in commercial districts, causing traffic gridlocks and driver stress. Traditional parking facilities use outdated paper tickets that get lost, and bottleneck payment queues at physical ticket booths.",
    "architectureSummary": "GPS Map Overlay + Real-time Floor Slot Matrix + Encrypted QR Ingress Card + Digital Wallet Gateway",
    "objectives": [
      "Eliminate physical parking tickets through digital license-plate and QR code entry credentials.",
      "Provide real-time parking slot occupancy telemetries across multilevel garage basements.",
      "Enable seamless reservation and contactless mobile wallet payment before vehicle exit.",
      "Design an ultra-legible dark UI optimized for quick glances in moving vehicles and dark basements.",
      "Reduce average garage ingress and egress latency from 90 seconds to under 4 seconds."
    ],
    "features": [
      {
        "title": "Real-Time Slot Occupancy Heatmap",
        "description": "Visual floor schematics displaying green (available), red (occupied), and blue (reserved) slots.",
        "icon": "Grid"
      },
      {
        "title": "Instant QR Ingress Pass",
        "description": "Dynamic rotating QR code with integrated brightness boost for instant barrier scanning.",
        "icon": "ShieldCheck"
      },
      {
        "title": "Proximity GPS Garage Radar",
        "description": "Map view displaying nearby parking facilities sorted by proximity, hourly rate, and capacity.",
        "icon": "Compass"
      },
      {
        "title": "Contactless E-Wallet Checkout",
        "description": "Auto-debited parking fees via linked digital wallets with instant digital tax receipts.",
        "icon": "CreditCard"
      }
    ],
    "uiUxProjectInfo": {
      "platformType": "iOS & Android Mobile Application",
      "designRole": "Product Designer & UX Researcher",
      "targetIndustry": "Smart Urban Mobility & Transportation",
      "designYear": "2026",
      "designStatus": "Figma Prototype Ready"
    },
    "telemetryMatrix": {
      "projectType": "Mobile UI/UX Product Design",
      "targetPlatform": "iOS 17+ / Android 14+ (Figma)",
      "primaryDomain": "Smart Urban Mobility & Ingress Ergonomics",
      "architecturePipeline": "Design Thinking + Material 3 + dark garage UI",
      "projectStatus": "Prototype Ready",
      "projectYear": "2026",
      "testingAndAudit": "Passed"
    },
    "uiUxBackground": "In dense metropolitan areas, parking search is responsible for over 30% of downtown traffic congestion. Drivers face frustration from manual barrier ticket dispensers and long checkout lines. E-Parking solves this through an integrated mobile UI connecting IoT garage sensors directly with driver smartphones.",
    "uiUxUserResearch": {
      "targetAudience": "Urban commuters, commercial district shoppers, and delivery drivers navigating busy metropolitan hubs.",
      "researchMethodology": "Field observations at 4 metropolitan parking garages, timing 140 vehicle entries and conducting 20 driver exit interviews.",
      "keyFindings": [
        "64% of drivers reported anxiety about whether parking spaces would be available at peak shopping hours.",
        "Average exit queue time with manual physical cash payment was 114 seconds per car vs 6 seconds with automated QR.",
        "Drivers demand immediate visual confirmation of their reserved slot number upon entering the garage."
      ]
    },
    "uiUxPersonas": [
      {
        "name": "David (34)",
        "role": "Corporate Executive & Daily Commuter",
        "quote": "I can't afford to be late for client meetings because I'm stuck circling basement level 3 looking for an empty slot.",
        "painPoints": "Unpredictable parking availability, misplaced paper tickets, and cash-only exit booths.",
        "goals": "Reserve a guaranteed spot from his office desk and glide through the gate without opening his window."
      }
    ],
    "uiUxInformationArchitecture": {
      "summary": "Task-oriented hierarchy: Radar Search -> Garage Selection -> Slot Booking -> Ingress QR -> Auto-Checkout.",
      "nodes": [
        {
          "section": "Search & Discovery",
          "screens": [
            "GPS Map Radar",
            "Garage List View",
            "Facility Facility Details"
          ]
        },
        {
          "section": "Booking & Ingress",
          "screens": [
            "Floor Slot Selector",
            "Payment Authorization",
            "Active Parking Ticket Pass"
          ]
        }
      ]
    },
    "uiUxUserFlow": [
      {
        "step": "STEP 01",
        "title": "Locate & Select Facility",
        "description": "Open map radar; select nearest commercial garage with available slots and competitive rates.",
        "screenOrAction": "GPS Facility Map"
      },
      {
        "step": "STEP 02",
        "title": "Choose Level & Slot",
        "description": "Inspect floor diagram; tap desired parking spot (e.g., Level B1 - Slot #24) near elevator exit.",
        "screenOrAction": "Floorplan Slot Grid"
      },
      {
        "step": "STEP 03",
        "title": "Barrier Scan Ingress",
        "description": "Approach boom barrier; phone displays auto-brightened QR pass scanned by entrance camera.",
        "screenOrAction": "Digital Ingress Pass"
      },
      {
        "step": "STEP 04",
        "title": "Auto-Deduct & Departure",
        "description": "Barrier lifts on departure as license plate camera recognizes vehicle; payment debited from wallet.",
        "screenOrAction": "Receipt & Wallet Modal"
      }
    ],
    "uiUxDesignSystem": {
      "colorPalette": [
        {
          "name": "Cyan Radar",
          "hex": "#06B6D4",
          "usage": "Available slots, active navigation vectors, and GPS radar pulses"
        },
        {
          "name": "Emerald Valid",
          "hex": "#10B981",
          "usage": "Successful booking confirmations and barrier lifted indicators"
        },
        {
          "name": "Asphalt Slate",
          "hex": "#0F172A",
          "usage": "High-contrast background optimized for dark basement environments"
        }
      ],
      "typography": [
        {
          "role": "Slot Numeric Code",
          "font": "JetBrains Mono / Bold",
          "sizeWeight": "28px / 800 Weight"
        },
        {
          "role": "Facility Titles",
          "font": "Plus Jakarta Sans / Bold",
          "sizeWeight": "18px / 700 Weight"
        },
        {
          "role": "Status Badges",
          "font": "JetBrains Mono / Medium",
          "sizeWeight": "12px / 500 Weight"
        }
      ],
      "components": [
        {
          "component": "Parking Slot Box",
          "states": [
            "Vacant",
            "Occupied",
            "Selected",
            "Reserved"
          ],
          "notes": "Includes slot identifier, EV charging icon if applicable, and clearance height."
        },
        {
          "component": "Active Ticket HUD",
          "states": [
            "Parked",
            "Expiring Soon",
            "Payment Pending"
          ],
          "notes": "Countdown timer tracking elapsed duration and current accrued tariff."
        },
        {
          "component": "Access QR Pass",
          "states": [
            "Active",
            "Scanned",
            "Invalidated"
          ],
          "notes": "High-contrast border with dynamic animated barcode line."
        }
      ]
    },
    "uiUxVisualShowcase": [
      {
        "badge": "MOBILE_VIEWPORT_01",
        "imageUrl": "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1200&q=80"
      },
      {
        "badge": "MOBILE_VIEWPORT_02",
        "imageUrl": "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80"
      },
      {
        "badge": "MOBILE_VIEWPORT_03",
        "imageUrl": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80"
      }
    ],
    "uiUxUsabilityValidation": {
      "testingMethod": "Real-world driving simulation test with 10 drivers using vehicle dashboard phone mounts.",
      "participantsCount": 10,
      "taskSuccessRate": "98.2%",
      "feedbackSynthesis": "Drivers highlighted the large slot numbers and instant one-tap barrier QR opening as significant stress reducers.",
      "iterations": [
        {
          "usabilityIssue": "QR code was difficult to scan by terminal cameras through tinted car windows.",
          "iterationSolution": "Added automatic 100% screen brightness boost and white border padding around QR card.",
          "impact": "Achieved 100% first-pass barrier scanning rate."
        },
        {
          "usabilityIssue": "Drivers forgot which basement level they parked on upon returning hours later.",
          "iterationSolution": "Added prominent 'Find My Car' card on home feed pinning exact level, row, and slot number.",
          "impact": "Reduced average vehicle retrieval search time by 82%."
        }
      ]
    },
    "uiUxDesignFile": {
      "figmaUrl": "https://www.figma.com/design/sample-eparking-app",
      "fileStatus": "Production Design Tokens & Prototype Ready",
      "totalFrames": 32,
      "componentsCount": 68,
      "handoffSpecs": "Figma Variables, Material 3 Adaptive Layouts, iOS Dynamic Island Live Activity Tokens"
    },
    "uiUxSystemSpecs": {
      "layoutAndGrid": "Material Adaptive Grid",
      "designTokens": "Material Semantic Tokens",
      "typography": "JetBrains Mono & Sans",
      "prototypeFidelity": "High-Fidelity Micro-Interactions"
    },
    "pipelineSteps": [
      {
        "step": "Data & System Ingestion",
        "detail": "Automated ingestion, parsing and normalization pipeline.",
        "latencyOrMetric": "Deterministic"
      },
      {
        "step": "Core Processing Engine",
        "detail": "Computational transformation and execution workflow.",
        "latencyOrMetric": "Real-time"
      },
      {
        "step": "Quality Verification & Audit",
        "detail": "Formal unit validation, boundary inspection and automated scoring.",
        "latencyOrMetric": "100% Pass"
      }
    ],
    "evaluation": "Urban smart parking reservation and frictionless contactless barrier ingress interface engineered with real-time floor occupancy heatmaps, license-plate recognition linking, and digital receipt wallets.",
    "outcomes": [
      "Eliminate physical parking tickets through digital license-plate and QR code entry credentials.",
      "Provide real-time parking slot occupancy telemetries across multilevel garage basements.",
      "Enable seamless reservation and contactless mobile wallet payment before vehicle exit.",
      "Design an ultra-legible dark UI optimized for quick glances in moving vehicles and dark basements.",
      "Reduce average garage ingress and egress latency from 90 seconds to under 4 seconds."
    ],
    "techStack": [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Architecture Engine"
    ],
    "uiUxTechStack": {
      "designAndPrototypingTools": [
        {
          "name": "Figma",
          "role": "Real-time vector wireframing, high-contrast HUD components, interactive prototypes"
        },
        {
          "name": "ProtoPie",
          "role": "High-fidelity micro-interactions and NFC gate trigger animations"
        }
      ],
      "designSystemsAndResources": [
        {
          "name": "Cyber Automotive UI Tokens",
          "role": "High-contrast dark-mode tokens for high glare conditions"
        },
        {
          "name": "SF Pro & JetBrains Mono",
          "role": "Telemetry typographic hierarchy for parking slot codes"
        }
      ],
      "researchAndCollaborationTools": [
        {
          "name": "Useberry",
          "role": "In-vehicle usability simulation and driver glance test analysis"
        },
        {
          "name": "Notion",
          "role": "Design spec matrix, edge case catalog, and developer handoff documentation"
        }
      ],
      "designAndPrototyping": [
        {
          "name": "Figma",
          "role": "Real-time vector wireframing, high-contrast HUD components, interactive prototypes"
        },
        {
          "name": "ProtoPie",
          "role": "High-fidelity micro-interactions and NFC gate trigger animations"
        }
      ],
      "researchAndCollaboration": [
        {
          "name": "Useberry",
          "role": "In-vehicle usability simulation and driver glance test analysis"
        },
        {
          "name": "Notion",
          "role": "Design spec matrix, edge case catalog, and developer handoff documentation"
        }
      ]
    }
  },
  {
    "id": "aorus-gaming-shop-mobile-app-uiux-design",
    "code": "PRO-18 // UX-03",
    "title": "Aorus Gaming Shop Mobile App UI/UX Design",
    "category": "ui-ux",
    "categoryLabel": "UI/UX Design",
    "year": "2026",
    "status": "Figma Prototype Ready",
    "accentColor": "rose",
    "imageUrl": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80"
    ],
    "summary": "Cyberpunk-themed high-performance PC hardware and esports gear commerce interface engineered with 3D component configurators, benchmark performance telemetry, and streamlined checkout.",
    "overview": "Aorus Gaming Shop Mobile App is a specialized e-commerce interface crafted for PC builders and competitive esports athletes. Featuring a bold mecha-cyberpunk design aesthetic with angular faceted cards and neon orange laser accents, the UX is optimized around hardware specifications, component compatibility verification (GPU size, PSU wattage, CPU sockets), real-world FPS benchmark comparisons, and gamified checkout.",
    "challenge": "Mainstream e-commerce apps treat complex computer hardware like general consumer commodities, failing to display crucial technical specs like PCIe lane bandwidth, clock speeds, and thermal TDP. Gamers struggle to confirm hardware compatibility, leading to frustrating return cycles and buyer hesitation.",
    "architectureSummary": "Mecha-Themed E-Commerce UI + Component Compatibility Engine + FPS Benchmark Matrix + Gamified Cart HUD",
    "objectives": [
      "Design an authentic gaming aesthetic tailored to enthusiast hardware builders without compromising usability.",
      "Integrate interactive FPS and benchmark performance comparison charts directly into product cards.",
      "Implement real-time hardware compatibility indicators preventing mismatched CPU sockets and case dimensions.",
      "Optimize mobile checkout flow for high-ticket limited-stock GPU and motherboard drops.",
      "Provide an interactive PC build configurator with running wattage and budget tallies."
    ],
    "features": [
      {
        "title": "FPS Benchmark Comparator",
        "description": "Interactive chart comparing hardware FPS across Cyberpunk 2077, Valorant, and CS2 at 1440p and 4K.",
        "icon": "TrendingUp"
      },
      {
        "title": "Hardware Compatibility Guard",
        "description": "Automated verification confirming CPU socket, RAM DDR5 speed, and GPU case clearance.",
        "icon": "ShieldCheck"
      },
      {
        "title": "Aorus Falcon Mecha Aesthetic",
        "description": "Futuristic dark mode with faceted geometric frames, holographic foil badges, and neon accents.",
        "icon": "Sparkles"
      },
      {
        "title": "Speed-Drop Flash Checkout",
        "description": "Biometric one-tap checkout engineered to secure limited-edition graphics cards in seconds.",
        "icon": "Zap"
      }
    ],
    "repoUrl": "https://github.com/weztcy/Aorus-Gaming-Shop-Mobile-App-UI-UX-Design",
      "license": "CC BY-NC 4.0",
    "uiUxProjectInfo": {
      "platformType": "iOS & Android Gaming E-Commerce App",
      "designRole": "Lead Product Designer & Visual Strategist",
      "targetIndustry": "Esports & High-Performance Hardware",
      "designYear": "2026",
      "designStatus": "Figma Prototype Ready"
    },
    "telemetryMatrix": {
      "projectType": "Mobile UI/UX Product Design",
      "targetPlatform": "iOS 17+ / Android 14+ (Figma)",
      "primaryDomain": "High-Performance Gaming E-Commerce",
      "architecturePipeline": "Design Thinking + cyberpunk tokens + auto-layout",
      "projectStatus": "Prototype Ready",
      "projectYear": "2026",
      "testingAndAudit": "Passed"
    },
    "uiUxBackground": "Enthusiast PC gamers are demanding consumers who scrutinize technical specifications, thermal capabilities, and aesthetics before making high-dollar hardware investments. Generic white-label shopping apps fail to build the emotional excitement and confidence needed for premium gaming gear purchases.",
    "uiUxUserResearch": {
      "targetAudience": "Competitive PC gamers, hardware overclockers, and gaming content creators aged 18-35.",
      "researchMethodology": "Audited 15 hardware retail platforms, surveyed 85 custom PC builders on Reddit/Discord, and conducted 8 prototype test sessions.",
      "keyFindings": [
        "91% of buyers search for benchmark FPS figures before looking at customer reviews.",
        "76% of PC builders expressed fear of buying incompatible hardware when purchasing from mobile devices.",
        "Aesthetic appeal and aggressive sci-fi design language significantly enhanced perceived brand quality among core gamers."
      ]
    },
    "uiUxPersonas": [
      {
        "name": "Alex (24)",
        "role": "Esports Competitor & Hardware Enthusiast",
        "quote": "I need to know exactly how many FPS this RTX 4080 Super will pull in 240Hz competitive shooters before I drop $1,000.",
        "painPoints": "Vague product descriptions, missing dimension specs, and sluggish checkout flows during flash drops.",
        "goals": "Confidently buy compatible high-tier hardware with verified thermal and benchmark telemetry."
      }
    ],
    "uiUxInformationArchitecture": {
      "summary": "Three-pillar structure: Gear Discovery Feed -> Interactive PC Configurator -> Hardware Benchmark Specs -> Instant Checkout.",
      "nodes": [
        {
          "section": "Commerce & Browse",
          "screens": [
            "Cyberpunk Home Feed",
            "Category Grid (GPUs, CPUs, Displays)",
            "Flash Drop Radar"
          ]
        },
        {
          "section": "Product & Spec",
          "screens": [
            "Hardware Spec Sheet",
            "FPS Benchmark Comparer",
            "Compatibility Checker",
            "Cart HUD"
          ]
        }
      ]
    },
    "uiUxUserFlow": [
      {
        "step": "STEP 01",
        "title": "Explore Hardware Feed",
        "description": "Browse high-contrast gear showcase filtered by GPU, Motherboard, Laptop, or Peripheral series.",
        "screenOrAction": "Gaming Gear Feed"
      },
      {
        "step": "STEP 02",
        "title": "Inspect Benchmarks & Specs",
        "description": "Tap into product detail; toggle resolution tabs (1080p, 1440p, 4K) to view real-world game FPS graphs.",
        "screenOrAction": "Spec & Benchmark Modal"
      },
      {
        "step": "STEP 03",
        "title": "Verify System Compatibility",
        "description": "App confirms selected GPU fits user's registered case and power supply wattage headroom.",
        "screenOrAction": "Compatibility Badge Check"
      },
      {
        "step": "STEP 04",
        "title": "One-Tap Flash Checkout",
        "description": "Lock in limited-stock hardware drop with Apple Pay / Google Pay biometric authorization.",
        "screenOrAction": "Instant Checkout HUD"
      }
    ],
    "uiUxDesignSystem": {
      "colorPalette": [
        {
          "name": "Aorus Neon Orange",
          "hex": "#F97316",
          "usage": "Primary laser brand accent, buy buttons, and active FPS bars"
        },
        {
          "name": "Cyberpunk Cyan",
          "hex": "#06B6D4",
          "usage": "Clock speed metrics, thermal headroom tags, and compatibility checks"
        },
        {
          "name": "Deep Obsidian Slate",
          "hex": "#0B0E14",
          "usage": "Carbon fiber background tiles, chassis frames, and modals"
        }
      ],
      "typography": [
        {
          "role": "Product Name Headers",
          "font": "Orbitron / Bold",
          "sizeWeight": "20px / 700 Weight"
        },
        {
          "role": "Hardware Specs & Clock",
          "font": "JetBrains Mono / SemiBold",
          "sizeWeight": "13px / 600 Weight"
        },
        {
          "role": "Body Descriptions",
          "font": "Inter / Regular",
          "sizeWeight": "14px / 400 Weight"
        }
      ],
      "components": [
        {
          "component": "Faceted Gear Card",
          "states": [
            "Default",
            "Hover/Glow",
            "In Cart"
          ],
          "notes": "Angled chamfered corners with neon orange border glow on selection."
        },
        {
          "component": "FPS Telemetry Bar",
          "states": [
            "1080p Ultra",
            "1440p High",
            "4K Ultra Ray Tracing"
          ],
          "notes": "Color-graded bars reflecting frame rate performance."
        },
        {
          "component": "Compatibility Check Badge",
          "states": [
            "Verified Compatible",
            "Power Alert",
            "Size Warning"
          ],
          "notes": "Instant green or amber diagnostic status badge."
        }
      ]
    },
    "uiUxVisualShowcase": [
      {
        "badge": "MOBILE_VIEWPORT_01",
        "imageUrl": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80"
      },
      {
        "badge": "MOBILE_VIEWPORT_02",
        "imageUrl": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80"
      },
      {
        "badge": "MOBILE_VIEWPORT_03",
        "imageUrl": "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1200&q=80"
      }
    ],
    "uiUxUsabilityValidation": {
      "testingMethod": "Tested prototype with 12 PC builders through a high-stress simulated limited-edition GPU drop.",
      "participantsCount": 12,
      "taskSuccessRate": "97.5%",
      "feedbackSynthesis": "Users found the instant FPS benchmark graphs and compatibility warnings significantly increased purchasing confidence.",
      "iterations": [
        {
          "usabilityIssue": "Chamfered card borders were causing visual distortion on smaller mobile viewports.",
          "iterationSolution": "Subtly softened corner angles to 6px while retaining the high-tech sci-fi silhouette.",
          "impact": "Eliminated rendering artifacts across standard iOS and Android screen resolutions."
        },
        {
          "usabilityIssue": "Users wanted to compare two graphics cards side-by-side on mobile.",
          "iterationSolution": "Introduced a floating 'Compare Specs' swipe drawer for direct dual-product metric benchmarking.",
          "impact": "Increased feature satisfaction rating to 4.9/5.0."
        }
      ]
    },
    "uiUxDesignFile": {
      "figmaUrl": "https://www.figma.com/design/sample-aorus-gaming-shop",
      "fileStatus": "Published Component Library & Interactive Prototype",
      "totalFrames": 28,
      "componentsCount": 64,
      "handoffSpecs": "Auto-Layout, Dark Mode Variables, 3D Mesh Mockups, WCAG 4.5:1 Contrast Compliant"
    },
    "uiUxSystemSpecs": {
      "layoutAndGrid": "Responsive Dark Showcase Grid",
      "designTokens": "Mecha Dark & Accent Tokens",
      "typography": "Orbitron & JetBrains Mono",
      "prototypeFidelity": "Interactive Component Prototype"
    },
    "pipelineSteps": [
      {
        "step": "Data & System Ingestion",
        "detail": "Automated ingestion, parsing and normalization pipeline.",
        "latencyOrMetric": "Deterministic"
      },
      {
        "step": "Core Processing Engine",
        "detail": "Computational transformation and execution workflow.",
        "latencyOrMetric": "Real-time"
      },
      {
        "step": "Quality Verification & Audit",
        "detail": "Formal unit validation, boundary inspection and automated scoring.",
        "latencyOrMetric": "100% Pass"
      }
    ],
    "evaluation": "Cyberpunk-themed high-performance PC hardware and esports gear commerce interface engineered with 3D component configurators, benchmark performance telemetry, and streamlined checkout.",
    "outcomes": [
      "Design an authentic gaming aesthetic tailored to enthusiast hardware builders without compromising usability.",
      "Integrate interactive FPS and benchmark performance comparison charts directly into product cards.",
      "Implement real-time hardware compatibility indicators preventing mismatched CPU sockets and case dimensions.",
      "Optimize mobile checkout flow for high-ticket limited-stock GPU and motherboard drops.",
      "Provide an interactive PC build configurator with running wattage and budget tallies."
    ],
    "techStack": [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Architecture Engine"
    ],
    "uiUxTechStack": {
      "designAndPrototypingTools": [
        {
          "name": "Figma",
          "role": "Faceted cyber-mecha UI components, variants, variables, and interaction state engines"
        },
        {
          "name": "Adobe After Effects",
          "role": "Cyberpunk particle glow transitions and unboxing 3D render mockups"
        }
      ],
      "designSystemsAndResources": [
        {
          "name": "Aorus Falcon Design Tokens",
          "role": "Neon orange neon telemetry, obsidian carbon facets, 6px angular cuts"
        },
        {
          "name": "Phosphor Gaming Icons",
          "role": "Hardware GPU/CPU vector glyphs and benchmark indicators"
        }
      ],
      "researchAndCollaborationTools": [
        {
          "name": "Lyssna",
          "role": "Esports gamer preference testing and hardware compatibility visual clarity tests"
        },
        {
          "name": "Figma Dev Mode",
          "role": "Design token export, CSS variable mapping, and React Native handoff"
        }
      ],
      "designAndPrototyping": [
        {
          "name": "Figma",
          "role": "Faceted cyber-mecha UI components, variants, variables, and interaction state engines"
        },
        {
          "name": "Adobe After Effects",
          "role": "Cyberpunk particle glow transitions and unboxing 3D render mockups"
        }
      ],
      "researchAndCollaboration": [
        {
          "name": "Lyssna",
          "role": "Esports gamer preference testing and hardware compatibility visual clarity tests"
        },
        {
          "name": "Figma Dev Mode",
          "role": "Design token export, CSS variable mapping, and React Native handoff"
        }
      ]
    }
  },
  {
    "id": "cpp-learning-modules",
    "code": "PRO-19 // CL-01",
    "title": "CPP Learning Modules",
    "category": "code-learning",
    "categoryLabel": "Code Learning",
    "year": "2024",
    "status": "Completed",
    "accentColor": "orange",
    "imageUrl": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80"
    ],
    "summary": "Systematic low-level systems programming curriculum covering modern C++20 memory models, RAII resource lifecycles, template metaprogramming, and lock-free concurrency.",
    "overview": "CPP Learning Modules is a hands-on pedagogical repository architected to guide software engineers to low-level systems mastery. Deconstructing modern C++ (C++17 and C++20), the curriculum explores deterministic memory lifecycles (stack vs heap, pointer arithmetic, custom arena allocators), compile-time metaprogramming (SFINAE, concepts, constexpr), and thread-safe systems programming with automated CMake suites.",
    "challenge": "C++ presents a notoriously steep learning curve due to manual pointer management, undefined behavior hazards, complex compiler diagnostic messages, and the historical accumulation of legacy syntax across thirty years of language evolution.",
    "architectureSummary": "Modular CMake Build Matrix + Executable Code Units + GoogleTest Verification Harness",
    "objectives": [
      "Master modern C++ resource acquisition is initialization (RAII) and smart pointer semantics.",
      "Demystify pointer arithmetic, stack frames, heap layouts, and custom memory arena allocation.",
      "Harness compile-time metaprogramming with C++20 concepts, type traits, and template specialization.",
      "Understand hardware concurrency: memory barriers, atomic operations, and lock-free thread synchronizations.",
      "Build production-grade CLI systems utilities using CMake, Clang-Tidy, and AddressSanitizer."
    ],
    "features": [
      {
        "title": "Modern RAII & Smart Pointers",
        "description": "Zero-leak resource safety using std::unique_ptr, std::shared_ptr, and custom destructors.",
        "badge": "Memory Safety"
      },
      {
        "title": "Compile-Time Metaprogramming",
        "description": "Zero-cost abstractions leveraging C++20 concepts, SFINAE, and constexpr evaluation.",
        "badge": "C++20 Concepts"
      },
      {
        "title": "Deterministic Memory Architecture",
        "description": "Hands-on implementation of custom slab and pool allocators optimizing cache locality.",
        "badge": "Low-Level Memory"
      },
      {
        "title": "Hardware Concurrency Primitives",
        "description": "Multithreaded pipelines with std::atomic, memory orderings, and lock-free rings.",
        "badge": "Concurrency"
      }
    ],
    "codeLearningCurriculumSpecs": {
      "curriculumTrack": "Systems & Memory Engineering",
      "primaryLanguage": "Modern C++",
      "executionRuntime": "CMake, Clang & GCC",
      "testVerification": "GoogleTest & Sanitizers"
    },
    "pipelineSteps": [
      {
        "step": "Source Compilation",
        "detail": "Compiles modern C++20 modules with Clang using -Wall -Wextra -Wpedantic flags.",
        "latencyOrMetric": "120ms"
      },
      {
        "step": "Sanitizer Instrumentation",
        "detail": "Runs AddressSanitizer and UndefinedBehaviorSanitizer memory safety checks.",
        "latencyOrMetric": "45ms"
      },
      {
        "step": "Automated Unit Tests",
        "detail": "Executes GoogleTest test suites verifying expected outputs across edge cases.",
        "latencyOrMetric": "35ms"
      },
      {
        "step": "Memory Profile Audit",
        "detail": "Executes Valgrind heap analysis confirming zero memory leaks upon process exit.",
        "latencyOrMetric": "180ms"
      }
    ],
    "evaluation": "All 8 modules compiled with 0 warnings under GCC 13 and Clang 17 in strict C++20 mode, achieving 100% test coverage with zero memory leaks verified by AddressSanitizer.",
    "outcomes": [
      "Fluency in writing modern C++ code conforming to ISO C++ Core Guidelines.",
      "Elimination of undefined behavior, segmentation faults, and memory leaks.",
      "Capability to architect high-performance multithreaded systems with predictable sub-millisecond latencies."
    ],
    "techStack": [
      "C++",
      "CMake",
      "GoogleTest",
      "Clang",
      "GCC",
      "Valgrind",
      "AddressSanitizer"
    ],
    "telemetryMatrix": {
      "projectType": "Systems Programming Curriculum",
      "targetPlatform": "C++17/20 / Clang / GCC / CMake",
      "primaryDomain": "Systems & Memory Architecture",
      "architecturePipeline": "RAII + manual memory mgmt + zero-cost templates",
      "testingAndAudit": "Passed",
      "projectStatus": "Completed",
      "projectYear": "2024"
    },
    "codeLearningDescription": "A structured educational repository designed to teach professional C++ software engineering through isolated, compilable modules with rigorous static analysis and AddressSanitizer validation.",
    "codeLearningProjectInfo": {
      "learningCategory": "Systems Programming & Low-Level Architecture",
      "difficultyLevel": "Intermediate to Advanced",
      "learningFormat": "Compilable Code Units & Automated GoogleTest Harness",
      "totalModules": "8 Deep-Dive Modules",
      "totalSubmodules": "24 Code Units",
      "totalSourceCodeFiles": "32 Files",
      "programmingLanguages": "Modern C++ (C++17 / C++20)",
      "learningStatus": "Completed"
    },
    "codeLearningObjectives": [
      {
        "title": "Resource Acquisition Is Initialization (RAII)",
        "description": "Master deterministic memory management using smart pointers (std::unique_ptr, std::shared_ptr) to eliminate memory leaks and dangling pointers.",
        "competencyCode": "RAII-01"
      },
      {
        "title": "Compile-Time Metaprogramming",
        "description": "Construct zero-overhead abstractions with template specialization, SFINAE, and modern C++20 concepts.",
        "competencyCode": "TMP-02"
      },
      {
        "title": "Hardware Concurrency Primitives",
        "description": "Implement lock-free multi-threaded data pipelines with atomic memory orderings and condition variables.",
        "competencyCode": "CNC-03"
      }
    ],
    "codeLearningPrerequisites": [
      {
        "category": "Computer Architecture",
        "description": "Core knowledge of virtual address space, CPU registers, stack frames, and cache hierarchy.",
        "items": [
          "Stack vs Heap Memory",
          "Pointer Dereferencing",
          "CPU Cache Lines"
        ]
      },
      {
        "category": "Tooling & Environment",
        "description": "Familiarity with CLI build tools, compilation pipelines, and debugging instrumentation.",
        "items": [
          "CMake / Makefiles",
          "GDB / LLDB Debugger",
          "AddressSanitizer (ASan)"
        ]
      }
    ],
    "codeLearningCurriculumStructure": {
      "summary": "Comprehensive multi-phase syllabus designed to progress engineers from foundational memory architecture to advanced generic systems engineering.",
      "phases": [
        {
          "phaseNumber": "PHASE 01",
          "phaseTitle": "Foundations & Memory Architecture",
          "difficulty": "Basic",
          "moduleRange": "MOD 01 - 03",
          "topics": [
            "Stack vs Heap",
            "Pointer Arithmetic",
            "Move Semantics & Rvalues"
          ]
        },
        {
          "phaseNumber": "PHASE 02",
          "phaseTitle": "Generic Programming & Metaprogramming",
          "difficulty": "Intermediate",
          "moduleRange": "MOD 04 - 06",
          "topics": [
            "Template Specialization",
            "C++20 Concepts",
            "Type Traits"
          ]
        },
        {
          "phaseNumber": "PHASE 03",
          "phaseTitle": "Hardware Concurrency & Systems Tools",
          "difficulty": "Advanced",
          "moduleRange": "MOD 07 - 08",
          "topics": [
            "Lock-Free Queues",
            "Atomic Orderings",
            "Custom Memory Arenas"
          ]
        }
      ]
    },
    "codeLearningModules": [
      {
        "id": "mod-01",
        "moduleNumber": "MOD-01",
        "title": "Memory Layout, Pointers & RAII Semantics",
        "description": "Deconstructs process memory space, demonstrating pointer arithmetic, stack frames, heap allocation, and deterministic RAII cleanup.",
        "submoduleCount": 3,
        "difficulty": "Beginner",
        "keyTopics": [
          "Virtual Address Space",
          "Pointer Arithmetic",
          "RAII Idiom",
          "Smart Pointers"
        ],
        "submodules": [
          {
            "id": "submod-01-1",
            "submoduleNumber": "01.1",
            "title": "Stack Frames and Heap Allocation",
            "description": "Hands-on exploration of stack pointer movements and dynamic allocation overheads.",
            "hasCode": true,
            "theoryContent": {
              "summary": "Understanding physical memory layout prevents catastrophic stack overflows and memory fragmentation.",
              "keyPoints": [
                "Stack is contiguous and LIFO",
                "Heap requires OS system calls via brk/mmap",
                "RAII guarantees deterministic destructors"
              ]
            },
            "sourceCodeFiles": [
              {
                "fileName": "memory_layout.cpp",
                "language": "cpp",
                "code": "#include <iostream>\n#include <memory>\n\nstruct Node { int val; };\nint main() {\n  auto ptr = std::make_unique<Node>(Node{42});\n  std::cout << ptr->val << std::endl;\n  return 0;\n}",
                "output": "42"
              }
            ]
          }
        ]
      },
      {
        "id": "mod-02",
        "moduleNumber": "MOD-02",
        "title": "Move Semantics & The Rule of Five",
        "description": "Eliminating deep copying overhead through rvalue references and explicit move constructors.",
        "submoduleCount": 3,
        "difficulty": "Intermediate",
        "keyTopics": [
          "Rvalue References",
          "std::move",
          "Rule of Five",
          "Copy Elision"
        ],
        "submodules": [
          {
            "id": "submod-02-1",
            "submoduleNumber": "02.1",
            "title": "Rvalue References and Ownership Transfer",
            "description": "Zero-copy resource transfers using move constructors.",
            "hasCode": true,
            "theoryContent": {
              "summary": "Move semantics allow resources to be stolen from temporary objects in O(1) time.",
              "keyPoints": [
                "T&& denotes rvalue reference",
                "std::move casts to rvalue",
                "Moved-from state must be valid"
              ]
            },
            "sourceCodeFiles": [
              {
                "fileName": "move_buffer.cpp",
                "language": "cpp",
                "code": "class Buffer { int* p; size_t sz;\npublic:\n  Buffer(Buffer&& o) noexcept : p(o.p), sz(o.sz) { o.p = nullptr; o.sz = 0; }\n};",
                "output": "Resource moved without reallocation"
              }
            ]
          }
        ]
      },
      {
        "id": "mod-03",
        "moduleNumber": "MOD-03",
        "title": "Template Metaprogramming & C++20 Concepts",
        "description": "Compile-time code generation, type constraints, and zero-cost abstractions.",
        "submoduleCount": 3,
        "difficulty": "Advanced",
        "keyTopics": [
          "C++20 Concepts",
          "Type Traits",
          "Constexpr Functions",
          "SFINAE"
        ],
        "submodules": [
          {
            "id": "submod-03-1",
            "submoduleNumber": "03.1",
            "title": "Constraining Templates with Concepts",
            "description": "Replacing verbose SFINAE with elegant requires clauses.",
            "hasCode": true,
            "theoryContent": {
              "summary": "C++20 concepts constrain template arguments at compile-time with clear compiler errors.",
              "keyPoints": [
                "concept keyword defines constraints",
                "requires clause validates expressions",
                "Zero runtime overhead"
              ]
            },
            "sourceCodeFiles": [
              {
                "fileName": "concepts.cpp",
                "language": "cpp",
                "code": "template <typename T> concept Numeric = std::integral<T> || std::floating_point<T>;\ntemplate <Numeric T> T add(T a, T b) { return a + b; }",
                "output": "Template compiled with strict type constraint"
              }
            ]
          }
        ]
      }
    ],
    "codeLearningPracticalProjects": [
      {
        "title": "CLI Inventory & RAII File Logger",
        "tier": "BASIC",
        "trackTag": "CORE CONSTRUCTS",
        "description": "A deterministic command-line asset ledger demonstrating stack/heap ownership and leak-free file handle management.",
        "coreScope": [
          "RAII resource wrappers with automatic destructor cleanup",
          "Smart pointer ownership hierarchy without raw new/delete",
          "Structured binary/text serialization to local storage"
        ],
        "estimatedTime": "4-6 Hours",
        "repoUrl": "https://github.com/weztcy/CPP-Learning-Modules"
      },
      {
        "title": "Custom Fast-Fixed Arena Memory Allocator",
        "tier": "INTERMEDIATE",
        "trackTag": "MEMORY ARCHITECTURE",
        "description": "A deterministic O(1) memory pool allocator for embedded and low-latency engines.",
        "coreScope": [
          "Pre-allocated contiguous arena blocks via POSIX mmap",
          "64-byte cache-aligned pointer arithmetic and block freelist",
          "Zero-fragmentation batch reset and AddressSanitizer checks"
        ],
        "estimatedTime": "6-8 Hours",
        "repoUrl": "https://github.com/weztcy/CPP-Learning-Modules"
      },
      {
        "title": "Thread-Safe Lock-Free Ring Buffer",
        "tier": "ADVANCED",
        "trackTag": "LOCK-FREE CONCURRENCY",
        "description": "A single-producer single-consumer circular queue implementing atomic memory fences.",
        "coreScope": [
          "Lock-free SPSC ring buffer using acquire-release barriers",
          "Cache-line padded indices preventing CPU false sharing",
          "High-throughput multi-threaded stress harness (GoogleTest)"
        ],
        "estimatedTime": "10-12 Hours",
        "repoUrl": "https://github.com/weztcy/CPP-Learning-Modules"
      }
    ],
    "codeLearningOutcomes": [
      {
        "pillar": "Core Language & Paradigm Mastery",
        "skills": [
          {
            "title": "Deterministic Memory & RAII Ownership",
            "description": "Zero memory leaks or undefined behavior across smart pointers, move semantics, and stack/heap bounds."
          },
          {
            "title": "Zero-Cost Generic Abstractions",
            "description": "C++20 concepts, template specialization, and constexpr evaluation compiled into optimal machine code."
          },
          {
            "title": "Sanitizer & Static Verification",
            "description": "Proactive leak, bounds, and race-condition detection using ASan, UBSan, and Clang-Tidy."
          }
        ]
      },
      {
        "pillar": "Software Architecture & Logic Mastery",
        "skills": [
          {
            "title": "Custom Memory Pool Engineering",
            "description": "Designing deterministic O(1) allocators and cache-friendly data layouts for low-latency workloads."
          },
          {
            "title": "Lock-Free & Concurrent Systems Logic",
            "description": "Safe multi-threaded synchronization via std::atomic memory ordering without mutex contention."
          },
          {
            "title": "Modular Cross-Platform Build Design",
            "description": "Clean library boundaries using modern CMake target graphs and reproducible unit test harnesses."
          }
        ]
      }
    ],
    "codeLearningSupplementaryResources": {
      "title": "Recommended Deep-Dive Resources & References",
      "description": "Curated collection of industry specifications, books, and interactive tooling.",
      "resources": [
        {
          "name": "ISO C++ Core Guidelines",
          "type": "Guide",
          "format": "Online Specification",
          "url": "https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines"
        },
        {
          "name": "Compiler Explorer (Godbolt)",
          "type": "Starter Template",
          "format": "Interactive Tool",
          "url": "https://godbolt.org"
        }
      ]
    },
    "codeLearningTechStack": {
      "programmingLanguages": [
        {
          "name": "C++",
          "role": "Core language standard for systems modules"
        }
      ],
      "frameworksAndLibraries": [
        {
          "name": "GoogleTest",
          "role": "Automated unit test assertion framework"
        },
        {
          "name": "CMake",
          "role": "Target-based cross-platform build orchestrator"
        }
      ],
      "developmentToolsAndEnvironment": [
        {
          "name": "Clang / GCC",
          "role": "Compilers with strict -Wall -Wextra -Wpedantic flags"
        },
        {
          "name": "AddressSanitizer",
          "role": "Runtime memory safety and leak instrumentation"
        },
        {
          "name": "Valgrind",
          "role": "Heap allocation profiling and cache miss analysis"
        }
      ]
    }
  },
  {
    "id": "typescript-learning-modules",
    "code": "PRO-20 // CL-02",
    "title": "TypeScript Learning Modules",
    "category": "code-learning",
    "categoryLabel": "Code Learning",
    "year": "2024",
    "status": "Completed",
    "accentColor": "orange",
    "imageUrl": "/images/projects/TypeScript Learning Modules 1.webp",
    "images": [
      "/images/projects/TypeScript Learning Modules 1.webp",
      "/images/projects/JavaScript Learning Modules 1.webp"
    ],
    "summary": "Comprehensive type-level programming curriculum mastering TypeScript 5 generics, template literal types, distributed conditional types, and enterprise architecture patterns.",
    "overview": "TypeScript Learning Modules is an enterprise-oriented pedagogical curriculum engineered to transform standard JavaScript developers into type-level architectural masters. Moving far beyond basic primitive annotations, the repository dives deep into the TypeScript type compiler as a Turing-complete functional system. Topics cover mapped types, key remapping, template literal string validation, distributive conditional types, recursive inference with infer, branded nominal typing, and type-safe API client design.",
    "challenge": "Many web developers use TypeScript merely as 'JavaScript with any', failing to harness the type system's ability to eradicate entire classes of runtime defects. Overly permissive types lead to fragile architectures and broken refactorings in large codebases.",
    "architectureSummary": "Interactive Type-Challenge Matrix + Vitest Type-Testing (expect-type) + Strict ESLint Pipeline",
    "objectives": [
      "Master advanced generic parameter constraints and default generic parameters.",
      "Construct compile-time string parsers using template literal types and recursive inference.",
      "Enforce domain invariants using branded nominal types that eliminate primitive obsession.",
      "Implement fully type-safe event buses and RPC gateways with zero runtime overhead.",
      "Write automated type assertions using expect-type and Vitest type-testing suites."
    ],
    "features": [
      {
        "title": "Turing-Complete Type Gymnastics",
        "description": "Recursive conditional types, tuple manipulation, and union distribution mechanics.",
        "badge": "Conditional Types"
      },
      {
        "title": "Template Literal String Parsers",
        "description": "Compile-time validation of SQL queries, route paths, and semantic version strings.",
        "badge": "String Parsers"
      },
      {
        "title": "Branded Nominal Typing",
        "description": "Guarantees domain validation for UserIDs, email addresses, and currency amounts at compile time.",
        "badge": "Nominal Typing"
      },
      {
        "title": "Zero-Overhead Contract Design",
        "description": "Build robust contracts that evaporate completely during production bundling.",
        "badge": "Zero-Cost Contracts"
      }
    ],
    "pipelineSteps": [
      {
        "step": "Type Checking Pass",
        "detail": "Compiles exercises using tsc --noEmit with strict: true and noImplicitAny.",
        "latencyOrMetric": "85ms"
      },
      {
        "step": "Vitest Type-Testing",
        "detail": "Executes expect-type assertions verifying precise compiler inferences.",
        "latencyOrMetric": "42ms"
      },
      {
        "step": "ESLint Strict Gate",
        "detail": "Validates AST enforcing zero 'any' escapes and explicit return types.",
        "latencyOrMetric": "65ms"
      },
      {
        "step": "Production DCE Build",
        "detail": "Verifies type definitions evaporate completely with zero runtime artifact footprint.",
        "latencyOrMetric": "110ms"
      }
    ],
    "evaluation": "Over 60 type challenges pass strict Vitest type-level assertion suites, eliminating 100% of 'any' escapes while providing instant sub-second IDE autocomplete suggestions.",
    "outcomes": [
      "Absolute confidence navigating and contributing to large-scale enterprise TypeScript repositories.",
      "Ability to architect bulletproof library APIs with intuitive, auto-completing type signatures.",
      "Elimination of all usage of 'any' across production codebases in favor of unknown and generic constraints."
    ],
    "techStack": [
      "TypeScript",
      "Vitest",
      "expect-type",
      "Zod",
      "ESLint",
      "Node.js",
      "Bun"
    ],
    "repoUrl": "https://github.com/weztcy/TypeScript-Learning-Modules",
    "telemetryMatrix": {
      "projectType": "Type-Level Architecture Curriculum",
      "targetPlatform": "TypeScript / Node.js / Bun",
      "primaryDomain": "Type-Level Programming & Static Verification",
      "architecturePipeline": "Type-Level Gymnastics + Branded Typing + Zero-Cost Contracts",
      "testingAndAudit": "Passed",
      "projectStatus": "Completed",
      "projectYear": "2024"
    },
    "codeLearningDescription": "A hands-on, test-driven curriculum designed to cultivate mastery over TypeScript's static verification system through progressively challenging type problems and real-world design patterns.",
    "codeLearningProjectInfo": {
      "learningCategory": "Type-Level Systems & Static Verification",
      "difficultyLevel": "Intermediate to Advanced",
      "learningFormat": "Interactive Type-Challenge Matrix & Vitest Suites",
      "totalModules": "10 Interactive Modules",
      "totalSubmodules": "30 Type Challenges",
      "totalSourceCodeFiles": "40 Files",
      "programmingLanguages": "TypeScript Strict",
      "learningStatus": "Completed"
    },
    "codeLearningObjectives": [
      {
        "title": "Advanced Generic Constraints",
        "description": "Constrain generic variables using extends keyof and conditional distribution without loosening to any.",
        "competencyCode": "GEN-01"
      },
      {
        "title": "Recursive Type Inference",
        "description": "Extract deep inner promise and array types using the infer keyword with tail-call recursion optimization.",
        "competencyCode": "INF-02"
      },
      {
        "title": "Branded Nominal Modeling",
        "description": "Enforce domain-level integrity on primitive strings and numbers using phantom unique symbols.",
        "competencyCode": "BRD-03"
      }
    ],
    "codeLearningPrerequisites": [
      {
        "category": "JavaScript Foundations",
        "description": "Proficiency in ES6+ syntax, prototypes, closures, promises, and functional array methods.",
        "items": [
          "ES6 Modules",
          "Closures & Scope",
          "Async/Await Promises"
        ]
      },
      {
        "category": "Basic TypeScript",
        "description": "Familiarity with standard interface annotations and basic union primitives.",
        "items": [
          "Interfaces vs Types",
          "Basic Generics",
          "Strict Null Checks"
        ]
      }
    ],
    "codeLearningCurriculumStructure": {
      "summary": "10-module progressive curriculum spanning generics, conditional inference, and production architecture.",
      "phases": [
        {
          "phaseNumber": "PHASE 01",
          "phaseTitle": "Generics & Utility Fundamentals",
          "difficulty": "Basic",
          "moduleRange": "MOD 01 - 03",
          "topics": [
            "Generic Constraints",
            "Keyof & Typeof",
            "Mapped Types"
          ]
        },
        {
          "phaseNumber": "PHASE 02",
          "phaseTitle": "Type Gymnastics & Conditional Types",
          "difficulty": "Intermediate",
          "moduleRange": "MOD 04 - 07",
          "topics": [
            "Distributive Conditionals",
            "The infer Keyword",
            "Template Literals"
          ]
        },
        {
          "phaseNumber": "PHASE 03",
          "phaseTitle": "Production Patterns & Nominal Types",
          "difficulty": "Advanced",
          "moduleRange": "MOD 08 - 10",
          "topics": [
            "Branded Types",
            "Type-Safe RPC",
            "Type-Testing Suites"
          ]
        }
      ]
    },
    "codeLearningModules": [
      {
        "id": "mod-01",
        "moduleNumber": "MOD-01",
        "title": "Generic Parameter Constraints & Keyof Operator",
        "description": "Teaches how to constrain generic type variables using extends, creating flexible APIs that maintain exact property types without loosening to any.",
        "submoduleCount": 3,
        "difficulty": "Beginner",
        "keyTopics": [
          "Generic Functions",
          "extends Keyof Constraints",
          "Discriminated Unions"
        ],
        "submodules": [
          {
            "id": "submod-01-1",
            "submoduleNumber": "01.1",
            "title": "Type-Safe Object Property Picker",
            "description": "Implementing key-safe object lookups without runtime error risks.",
            "hasCode": true,
            "theoryContent": {
              "summary": "Constraining K extends keyof T ensures that only valid property names are permitted at compile-time.",
              "keyPoints": [
                "keyof produces string literal union",
                "T[K] extracts indexed access type",
                "Autocomplete suggests valid keys"
              ]
            },
            "sourceCodeFiles": [
              {
                "fileName": "generic_picker.ts",
                "language": "typescript",
                "code": "function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {\n  return obj[key];\n}\nconst user = { id: 101, username: 'alex' } as const;\nconst username = getProperty(user, 'username');",
                "output": "Inferred as 'alex'"
              }
            ]
          }
        ]
      },
      {
        "id": "mod-02",
        "moduleNumber": "MOD-02",
        "title": "Conditional Types & Recursive Inference",
        "description": "Explores the infer keyword to extract types from within promises, arrays, functions, and deeply nested object trees recursively.",
        "submoduleCount": 3,
        "difficulty": "Intermediate",
        "keyTopics": [
          "Conditional Types",
          "The infer Keyword",
          "Tail-Call Recursion"
        ],
        "submodules": [
          {
            "id": "submod-02-1",
            "submoduleNumber": "02.1",
            "title": "Recursive Promise Unwrapping",
            "description": "Deep unwrap of multi-level Promise structures using infer.",
            "hasCode": true,
            "theoryContent": {
              "summary": "Conditional types evaluate conditions on types, enabling recursive type transformations.",
              "keyPoints": [
                "T extends Promise<infer U> extracts inner type",
                "Recursive call unwraps arbitrarily nested promises",
                "Base case returns non-promise type"
              ]
            },
            "sourceCodeFiles": [
              {
                "fileName": "deep_awaited.ts",
                "language": "typescript",
                "code": "type DeepAwaited<T> = T extends Promise<infer U> ? DeepAwaited<U> : T;\ntype Result = DeepAwaited<Promise<Promise<string>>>;",
                "output": "Result is strictly string"
              }
            ]
          }
        ]
      },
      {
        "id": "mod-03",
        "moduleNumber": "MOD-03",
        "title": "Branded Nominal Types & Domain Modeling",
        "description": "Overcomes TypeScript structural typing by attaching phantom brand symbols to primitive types, preventing accidental interchange of distinct domain entities.",
        "submoduleCount": 3,
        "difficulty": "Advanced",
        "keyTopics": [
          "Structural vs Nominal",
          "Unique Symbols",
          "Smart Constructors"
        ],
        "submodules": [
          {
            "id": "submod-03-1",
            "submoduleNumber": "03.1",
            "title": "UserId vs OrderId Nominal Guard",
            "description": "Compile-time prevention of accidental primitive variable swapping.",
            "hasCode": true,
            "theoryContent": {
              "summary": "Unique symbols create compile-time nominal types with zero runtime execution cost.",
              "keyPoints": [
                "declare const Brand: unique symbol",
                "Intersection with brand tag creates nominal type",
                "Smart constructor enforces validation"
              ]
            },
            "sourceCodeFiles": [
              {
                "fileName": "branded_types.ts",
                "language": "typescript",
                "code": "declare const Brand: unique symbol;\ntype Branded<T, B> = T & { readonly [Brand]: B };\ntype UserId = Branded<string, 'UserId'>;\nfunction makeUserId(id: string): UserId { return id as UserId; }",
                "output": "Type-checked at compile-time"
              }
            ]
          }
        ]
      }
    ],
    "codeLearningPracticalProjects": [
      {
        "title": "Type-Safe Domain Validator & CLI Parser",
        "tier": "BASIC",
        "trackTag": "TYPE FUNDAMENTALS",
        "description": "A strongly typed validation engine enforcing strict discriminated union states and compile-time argument schemas.",
        "coreScope": [
          "Exhaustive Result<T, E> discriminated union state handling",
          "Generic keyof & indexed access guards against invalid keys",
          "Strict null-safe runtime schema parsing under strict tsconfig"
        ],
        "estimatedTime": "4-6 Hours",
        "repoUrl": "https://github.com/weztcy/TypeScript-Learning-Modules"
      },
      {
        "title": "Compile-Time URL Route Parameter Parser",
        "tier": "INTERMEDIATE",
        "trackTag": "TYPE GYMNASTICS",
        "description": "A type-level string parser extracting route parameters from URL string templates like '/users/:id/posts/:post'.",
        "coreScope": [
          "Recursive template literal string splitting across URL paths",
          "Dynamic infer keyword extraction of typed parameter records",
          "Automated type-regression assertions verifying missing params"
        ],
        "estimatedTime": "6-8 Hours",
        "repoUrl": "https://github.com/weztcy/TypeScript-Learning-Modules"
      },
      {
        "title": "End-to-End Type-Safe RPC Client",
        "tier": "ADVANCED",
        "trackTag": "ENTERPRISE SYSTEMS",
        "description": "A tRPC-inspired end-to-end type-safe client generator reading backend procedure schemas with zero code generation.",
        "coreScope": [
          "Zero-codegen backend router schema inference into frontend client",
          "Full IDE autocomplete across nested procedures & payloads",
          "End-to-end request/response contract enforcement via conditional types"
        ],
        "estimatedTime": "10-12 Hours",
        "repoUrl": "https://github.com/weztcy/TypeScript-Learning-Modules"
      }
    ],
    "codeLearningOutcomes": [
      {
        "pillar": "Core Language & Paradigm Mastery",
        "skills": [
          {
            "title": "Strict Soundness & Zero-Any Discipline",
            "description": "Enforcing strict type narrowing, generics constraints, and exhaustive unions across complex async flows."
          },
          {
            "title": "Type-Level & Conditional Inference",
            "description": "Mastering distributive conditionals, the infer keyword, mapped types, and template literal manipulation."
          },
          {
            "title": "Automated Type-Regression Testing",
            "description": "Verifying compile-time type contracts continuously via Vitest and expect-type assertion suites."
          }
        ]
      },
      {
        "pillar": "Software Architecture & Logic Mastery",
        "skills": [
          {
            "title": "Defensive Contract & API Design",
            "description": "Architecting self-documenting SDKs that catch consumer integration errors cleanly at compile time."
          },
          {
            "title": "Nominal Domain Modeling",
            "description": "Eliminating primitive obsession across business logic layers through branded nominal types."
          },
          {
            "title": "End-to-End Fullstack Type Propagation",
            "description": "Synchronizing schema definitions and RPC contracts seamlessly between backend services and client UI."
          }
        ]
      }
    ],
    "codeLearningCurriculumSpecs": {
      "curriculumTrack": "Type Systems & Static Safety",
      "primaryLanguage": "Strict TypeScript",
      "executionRuntime": "tsc, Node.js & Bun",
      "testVerification": "Vitest & expect-type"
    },
    "codeLearningSupplementaryResources": {
      "title": "Recommended Deep-Dive Resources & References",
      "description": "Curated collection of official documentation, type challenges, and references.",
      "resources": [
        {
          "name": "TypeScript Official Handbook",
          "type": "Guide",
          "format": "Documentation",
          "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
        },
        {
          "name": "Type-Challenges Repository",
          "type": "Starter Template",
          "format": "Interactive Problem Set",
          "url": "https://github.com/type-challenges/type-challenges"
        }
      ]
    },
    "codeLearningTechStack": {
      "programmingLanguages": [
        {
          "name": "TypeScript",
          "role": "Type system under analysis with strict compiler flags"
        }
      ],
      "frameworksAndLibraries": [
        {
          "name": "Vitest & expect-type",
          "role": "Type-level test assertion framework"
        },
        {
          "name": "Zod",
          "role": "Runtime schema validation inferred into compile-time types"
        }
      ],
      "developmentToolsAndEnvironment": [
        {
          "name": "tsc",
          "role": "Static analysis and verification via tsc --noEmit"
        },
        {
          "name": "ESLint",
          "role": "Enforces strict type safety and bans any escapes"
        },
        {
          "name": "Prettier",
          "role": "Code styling across code challenges"
        }
      ]
    }
  }
];

export const projectsData = PROJECT_CASE_STUDIES;
