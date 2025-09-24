// Simulated Project Scenarios for ALP Curriculum Recommendation Interface
// Based on comprehensive_ground_truth_dataset.js with H1-H2-H3 course recommendations
// Maps PDF ground truth data to prototype interface input format

export const simulatedProjectScenarios = [
  {
    // ===== SCENARIO 1: COOPERATIVE BASIC LEADERSHIP =====
    scenarioName: "Basic Cooperative Leadership Training",
    basedOnPDF: "Cooperative Basics (PDF Page 6)",

    // Interface Input Parameters
    projectParameters: {
      focusAreas: "Train elected farmer cooperative leaders in fundamental cooperative management concepts. Address knowledge gaps in governance, leadership, and member relations. Build confidence in basic cooperative operations without requiring technical finance/operations expertise.",

      targetStakeholder: "producer_organizations", // Cooperative leaders

      businessContext: "Rural farming cooperatives in developing regions. Leaders with limited formal education (fewer than 8 years). Mixed literacy levels requiring interactive, discussion-based learning methods. Cultural emphasis on group activities and peer learning. Limited access to technical training resources.",

      expectedOutcomes: "Improve cooperative assessment scores through better understanding of cooperative principles. Enhance leadership capabilities for managing meetings and resolving conflicts. Strengthen member engagement and retention strategies. Build foundation for future advanced cooperative management training."
    },

    // H1-H2-H3 Course Recommendations (from ground truth)
    recommendedCourses: [
      {
        learningPath: "Fundamentals of Cooperatives", // H1
        category: "Understanding Cooperatives", // H2
        courses: [ // H3
          "Introduction to Cooperatives",
          "Cooperative Values and Principles",
          "Cooperative Governance"
        ],
        selectionReason: "Core cooperative concepts for leaders with limited formal education"
      },
      {
        learningPath: "Fundamentals of Cooperatives", // H1
        category: "Leadership", // H2
        courses: [ // H3
          "Introduction to Leadership",
          "Managing Meetings",
          "Resolving Conflicts"
        ],
        selectionReason: "Essential leadership skills for elected cooperative leaders"
      },
      {
        learningPath: "Fundamentals of Cooperatives", // H1
        category: "Member Relations", // H2
        courses: [ // H3
          "Introduction to Member Relations",
          "Member Recruitment and Retention",
          "Member Engagement and Commitment",
          "Member Management"
        ],
        selectionReason: "Member management skills for improving cooperative participation"
      },
      {
        learningPath: "Producer Organization Essentials", // H1
        category: "Operations", // H2
        courses: [ // H3
          "Introduction to Operations",
          "Collection from Farmers"
        ],
        selectionReason: "Basic cooperative operations skills for elected leaders managing member services"
      },
      {
        learningPath: "Internal Management", // H1
        category: "Internal Organization", // H2
        courses: [ // H3
          "Introduction to Internal Organization",
          "Recordkeeping"
        ],
        selectionReason: "Organizational structure and documentation skills for basic cooperative management"
      },
      {
        learningPath: "Growing Your Business", // H1
        category: "Managing Risk", // H2
        courses: [ // H3
          "Introduction to Managing Risk",
          "Using Contracts"
        ],
        selectionReason: "Basic risk awareness and contract management for cooperative leaders"
      },
      {
        learningPath: "Business Sustainability", // H1
        category: "Sustainability", // H2
        courses: [ // H3
          "Introduction to Sustainability",
          "Environmental Impacts",
          "Fair Labor Practices",
          "Diversity"
        ],
        selectionReason: "Basic sustainability principles for responsible cooperative leadership"
      }
    ]
  },

  {
    // ===== SCENARIO 2: FINANCIAL SKILLS FOR FARMERS =====
    scenarioName: "Small-Scale Farmer Financial Literacy",
    basedOnPDF: "Financial Literacy Series (PDF Page 11)",

    // Interface Input Parameters
    projectParameters: {
      focusAreas: "Provide basic financial literacy training for small-scale farmers to improve farm profitability. Focus on practical recordkeeping, budgeting, and financial decision-making skills. Enable farmers to track income, expenses, and make data-driven farming decisions.",

      targetStakeholder: "individual_farmers", // Smallholder farmers

      businessContext: "Smallholder farmers with 2-4 years of formal education operating family farms. Limited exposure to formal financial systems. Seasonal income patterns with irregular cash flows. Need practical, hands-on training with mentoring support. Preference for short, flexible training sessions.",

      expectedOutcomes: "Enable farmers to maintain basic bookkeeping records for their farm operations. Improve financial decision-making to increase farm output and household livelihoods. Build foundation for accessing formal credit and financial services. Increase farm profitability through better cost management and budgeting."
    },

    // H1-H2-H3 Course Recommendations
    recommendedCourses: [
      {
        learningPath: "Bookkeeping Essentials", // H1
        category: "Bookkeeping and Your Business", // H2
        courses: [ // H3
          "Introduction to Bookkeeping"
        ],
        selectionReason: "Basic recordkeeping skills for farmers with limited education"
      },
      {
        learningPath: "Bookkeeping Essentials", // H1
        category: "Bookkeeping Ledgers", // H2
        courses: [ // H3
          "Cash Ledger",
          "Expense Ledger"
        ],
        selectionReason: "Essential ledgers for tracking farm income and expenses"
      },
      {
        learningPath: "Growing Your Business", // H1
        category: "Planning For Your Business", // H2
        courses: [ // H3
          "Budgeting"
        ],
        selectionReason: "Financial planning skills for seasonal farm operations"
      },
      {
        learningPath: "Fundamentals of Retail Management", // H1
        category: "Cost Management", // H2
        courses: [ // H3
          "Introduction to Cost Management"
        ],
        selectionReason: "Basic cost management principles for farm profitability analysis"
      },
      {
        learningPath: "Finance and Accounting", // H1
        category: "Finance and Accounting Basics", // H2
        courses: [ // H3
          "Introduction to Finance and Accounting"
        ],
        selectionReason: "Foundational finance concepts for better farm financial decision-making"
      }
    ]
  },

  {
    // ===== SCENARIO 3: RETAIL BUSINESS MANAGEMENT =====
    scenarioName: "Agricultural Input Retailer Business Improvement",
    basedOnPDF: "Last Mile Retailer (PDF Page 14)",

    // Interface Input Parameters
    projectParameters: {
      focusAreas: "Train agribusiness retailers in Tanzania to improve inventory management capacity for agricultural inputs and supplies. Strengthen finance and bookkeeping skills for better business operations and cash flow management. Enhance customer service and supplier relationship management.",

      targetStakeholder: "agribusiness_retailers", // Input dealers and supply stores

      businessContext: "Agribusiness retailers operating in rural and semi-urban Tanzania. Mixed literacy levels, limited digital infrastructure, seasonal business cycles. Serving smallholder farmers with agricultural inputs, tools, and supplies. Training must accommodate local languages and practical, hands-on learning approaches.",

      expectedOutcomes: "Improve inventory turnover and reduce stock losses by 25%. Enhance financial record-keeping and cash flow management. Strengthen supplier negotiation and farmer credit management capabilities. Build sustainable business practices for long-term profitability."
    },

    // H1-H2-H3 Course Recommendations
    recommendedCourses: [
      {
        learningPath: "Fundamentals of Retail Management", // H1
        category: "Business Relationships", // H2
        courses: [ // H3
          "Introduction to Business Relationships",
          "Customer Relationships",
          "Customer Care",
          "Supplier Relationships"
        ],
        selectionReason: "Essential relationship management for retail business success"
      },
      {
        learningPath: "Fundamentals of Retail Management", // H1
        category: "Inventory Management", // H2
        courses: [ // H3
          "Introduction to Inventory Management",
          "Inventory and Business Cycles",
          "Inventory Recordkeeping",
          "Inventory Management Methods"
        ],
        selectionReason: "Core inventory skills to reduce losses and improve turnover"
      },
      {
        learningPath: "Fundamentals of Retail Management", // H1
        category: "Cost Management", // H2
        courses: [ // H3
          "Introduction to Cost Management",
          "Profitability and Business Expansion",
          "Controlling Costs"
        ],
        selectionReason: "Financial management for sustainable retail operations"
      },
      {
        learningPath: "Internal Management", // H1
        category: "Staff Management", // H2
        courses: [ // H3
          "Introduction to Staff Management",
          "Recruiting and Hiring Staff",
          "Strategies for Retaining Staff"
        ],
        selectionReason: "Staff management skills for growing retail businesses"
      },
      {
        learningPath: "Growing Your Business", // H1
        category: "Marketing", // H2
        courses: [ // H3
          "Introduction to Marketing",
          "Vision for Growth",
          "Pricing Strategy",
          "Marketing Strategy"
        ],
        selectionReason: "Marketing and sales strategies for retail business growth and customer reach"
      },
      {
        learningPath: "Bookkeeping Essentials", // H1
        category: "Bookkeeping and Your Business", // H2
        courses: [ // H3
          "Introduction to Bookkeeping",
          "The Accounting Cycle"
        ],
        selectionReason: "Essential bookkeeping skills for retail financial management"
      },
      {
        learningPath: "Finance and Accounting", // H1
        category: "Finance and Accounting Basics", // H2
        courses: [ // H3
          "Introduction to Finance and Accounting",
          "Financial Statements"
        ],
        selectionReason: "Financial management fundamentals for business operations"
      },
      {
        learningPath: "Growing Your Business", // H1
        category: "Planning For Your Business", // H2
        courses: [ // H3
          "Introduction to Planning",
          "Budgeting"
        ],
        selectionReason: "Business planning and growth management for retailers"
      },
      {
        learningPath: "Finance and Accounting", // H1
        category: "Working with Credit", // H2
        courses: [ // H3
          "Introduction to Credit",
          "Working with Lenders"
        ],
        selectionReason: "Credit access and management for inventory financing"
      }
    ]
  },

  {
    // ===== SCENARIO 4: ADVANCED COOPERATIVE MANAGEMENT =====
    scenarioName: "Advanced Cooperative Management with Credit Access",
    basedOnPDF: "Advanced Cooperative Management (PDF Page 8)",

    // Interface Input Parameters
    projectParameters: {
      focusAreas: "Prepare professional cooperative managers and elected leaders for advanced business growth and commercial credit access. Build comprehensive planning, financial analysis, and risk management capabilities. Develop skills for scaling cooperative operations and accessing formal financial services.",

      targetStakeholder: "producer_organizations", // Professional managers and elected leaders

      businessContext: "Established cooperatives with professional management teams. Leaders with at least 10 years of formal education. Access to basic infrastructure and financial records. Ready to expand operations and seek commercial credit. Need sophisticated business planning and financial analysis skills.",

      expectedOutcomes: "Qualify cooperative for commercial bank loans and credit facilities. Implement comprehensive business planning processes including SWOT analysis and strategic objective setting. Develop advanced financial analysis capabilities for data-driven decision making. Build risk management systems for sustainable growth."
    },

    // H1-H2-H3 Course Recommendations
    recommendedCourses: [
      // FOUNDATIONAL COOPERATIVE CONTENT (inherited from earlier courses)
      {
        learningPath: "Fundamentals of Cooperatives", // H1
        category: "Understanding Cooperatives", // H2
        courses: [ // H3
          "Introduction to Cooperatives",
          "Cooperative Values and Principles",
          "Cooperative Governance"
        ],
        selectionReason: "Foundational cooperative concepts essential for advanced management"
      },
      {
        learningPath: "Fundamentals of Cooperatives", // H1
        category: "Leadership", // H2
        courses: [ // H3
          "Introduction to Leadership",
          "Managing Meetings",
          "Resolving Conflicts"
        ],
        selectionReason: "Leadership skills required for advanced cooperative management"
      },
      {
        learningPath: "Fundamentals of Cooperatives", // H1
        category: "Member Relations", // H2
        courses: [ // H3
          "Introduction to Member Relations",
          "Member Recruitment and Retention",
          "Member Engagement and Commitment",
          "Member Management"
        ],
        selectionReason: "Member relationship management for advanced cooperative leaders"
      },
      {
        learningPath: "Producer Organization Essentials", // H1
        category: "Operations", // H2
        courses: [ // H3
          "Introduction to Operations",
          "Collection from Farmers",
          "Receiving and Storage",
          "Delivery to Buyers"
        ],
        selectionReason: "Operational management skills for advanced cooperative operations"
      },
      {
        learningPath: "Internal Management", // H1
        category: "Internal Organization", // H2
        courses: [ // H3
          "Introduction to Internal Organization",
          "Recordkeeping",
          "Team Effectiveness"
        ],
        selectionReason: "Internal organizational management for advanced cooperative leadership"
      },
      // ADVANCED BUSINESS PLANNING
      {
        learningPath: "Growing Your Business", // H1
        category: "Planning For Your Business", // H2
        courses: [ // H3
          "Introduction to Planning",
          "Mission and Vision Statements",
          "SWOT Analysis",
          "Objective Setting",
          "Budgeting"
        ],
        selectionReason: "Comprehensive business planning for advanced cooperative management"
      },
      {
        learningPath: "Finance and Accounting", // H1
        category: "Working with Credit", // H2
        courses: [ // H3
          "Introduction to Credit",
          "Working with Lenders",
          "Credit for Customers"
        ],
        selectionReason: "Credit access skills for commercial lending relationships"
      },
      {
        learningPath: "Finance and Accounting", // H1
        category: "Financial Analysis and Planning", // H2
        courses: [ // H3
          "Introduction to Financial Analysis and Planning",
          "Balance Sheet Analysis",
          "Income Statement Analysis",
          "Cash Budgets",
          "Cash Reserves"
        ],
        selectionReason: "Advanced financial analysis for loan qualification and business expansion"
      },
      {
        learningPath: "Business Sustainability", // H1
        category: "Sustainability", // H2
        courses: [ // H3
          "Introduction to Sustainability",
          "Environmental Impacts",
          "Fair Labor Practices",
          "Diversity",
          "Community Initiatives"
        ],
        selectionReason: "Sustainability principles for advanced cooperative management and long-term viability"
      },
      {
        learningPath: "Internal Management", // H1
        category: "Staff Management", // H2
        courses: [ // H3
          "Introduction to Staff Management",
          "Recruiting and Hiring Staff",
          "Strategies for Retaining Staff"
        ],
        selectionReason: "Advanced staff management for professional cooperative managers"
      },
      {
        learningPath: "Growing Your Business", // H1
        category: "Marketing", // H2
        courses: [ // H3
          "Introduction to Marketing",
          "Marketing Strategy",
          "Pricing Strategy"
        ],
        selectionReason: "Marketing and growth strategies for scaling cooperative operations and market expansion"
      },
      {
        learningPath: "Growing Your Business", // H1
        category: "Managing Risk", // H2
        courses: [ // H3
          "Introduction to Managing Risk",
          "Using Contracts",
          "Working with Enablers"
        ],
        selectionReason: "Advanced risk management and stakeholder relationships for sustainable cooperative growth"
      }
    ]
  },

  {
    // ===== SCENARIO 5: COMPREHENSIVE BOOKKEEPING TRAINING =====
    scenarioName: "Producer Organization Financial Management",
    basedOnPDF: "Bookkeeping Essentials (PDF Page 9)",

    // Interface Input Parameters
    projectParameters: {
      focusAreas: "Train cooperative bookkeepers and financial managers in comprehensive financial recordkeeping systems. Build understanding of accounting cycles, source document management, and financial transaction recording. Develop skills for maintaining multiple ledger types and financial statement preparation.",

      targetStakeholder: "producer_organizations", // Financial staff of cooperatives

      businessContext: "Producer organization financial staff with no prior formal training in bookkeeping or accounting. Need systematic training in financial recordkeeping processes. Interactive learning environment with discussion, small group activities, and role-playing exercises. Must build confidence in explaining financial concepts to members.",

      expectedOutcomes: "Establish comprehensive recordkeeping system for all business transactions. Maintain accurate cash, inventory, expense, and farmer business ledgers. Understand importance of bookkeeping in the accounting cycle and financial statement preparation. Build capability to train other members in basic financial concepts."
    },

    // H1-H2-H3 Course Recommendations
    recommendedCourses: [
      {
        learningPath: "Bookkeeping Essentials", // H1
        category: "Bookkeeping and Your Business", // H2
        courses: [ // H3
          "Introduction to Bookkeeping",
          "The Accounting Cycle",
          "Importance of Financial Statements"
        ],
        selectionReason: "Foundation concepts for staff with no prior accounting training"
      },
      {
        learningPath: "Bookkeeping Essentials", // H1
        category: "Bookkeeping Ledgers", // H2
        courses: [ // H3
          "Cash Ledger",
          "Inventory Ledger",
          "Expense Ledger"
        ],
        selectionReason: "Essential ledgers for comprehensive business recordkeeping"
      },
      {
        learningPath: "Producer Organization Essentials", // H1
        category: "Bookkeeping for Producer Organizations", // H2
        courses: [ // H3
          "Introduction to Bookkeeping",
          "Cash Ledger",
          "Expense Ledger",
          "Farmer Business Ledger",
          "Inventory Ledger",
          "The Fixed Asset Ledger"
        ],
        selectionReason: "Specialized bookkeeping systems for producer organizations"
      }
    ]
  },

  {
    // ===== SCENARIO 6: ALP COACH DEVELOPMENT =====
    scenarioName: "ALP Coach Development Training",
    basedOnPDF: "Coaching and Trainer Development (New Content)",

    // Interface Input Parameters
    projectParameters: {
      focusAreas: "Develop comprehensive coaching competencies for ALP trainers and facilitators. Build foundational coaching skills including GROW model, SMART-EP goal setting, and professional coaching standards. Ensure effective coaching in agricultural contexts with cultural sensitivity and adult learning principles.",

      targetStakeholder: "coaches_and_trainers", // ALP coaches and facilitators

      businessContext: "ALP program implementation across diverse agricultural communities. Trainers and facilitators working with farmers, cooperatives, and agribusiness stakeholders. Need for coaching skills to support behavior change and skill development. Mixed educational backgrounds among coaches requiring comprehensive competency development.",

      expectedOutcomes: "Complete coaching competency including foundation principles, proven methodologies (GROW model, SMART-EP goals), and ALP-specific applications. Ability to manage change processes, adapt to cultural contexts, and use specialized coaching tools. Professional coaching standards aligned with agricultural development objectives."
    },

    // H1-H2-H3 Course Recommendations (Complete coaching curriculum)
    recommendedCourses: [
      {
        learningPath: "Fundamentals of ALP Coaching", // H1
        category: "Coaching Basics", // H2
        courses: [ // H3
          "1. Introduction to Coaching",
          "2. What Makes an Effective Coach"
        ],
        selectionReason: "Essential foundation for all coaching development covering core principles and effectiveness"
      },
      {
        learningPath: "Fundamentals of ALP Coaching", // H1
        category: "Coaching Skills", // H2
        courses: [ // H3
          "3. Setting SMART-EP Goals",
          "4. The GROW Model",
          "5. The 8 Coaching Competencies"
        ],
        selectionReason: "Core coaching methodologies using proven tools and professional standards"
      },
      {
        learningPath: "Fundamentals of ALP Coaching", // H1
        category: "Coaching for the ALP Context", // H2
        courses: [ // H3
          "6. Change Management",
          "7. Localization",
          "8. Coaching Tools"
        ],
        selectionReason: "ALP-specific coaching applications with cultural adaptation and specialized tools"
      }
    ]
  }
];

// Helper functions for interface integration
export const getScenariosByStakeholder = (stakeholderType) => {
  return simulatedProjectScenarios.filter(scenario =>
    scenario.projectParameters.targetStakeholder === stakeholderType
  );
};

export const getAllLearningPaths = () => {
  const paths = new Set();
  simulatedProjectScenarios.forEach(scenario => {
    scenario.recommendedCourses.forEach(course => {
      paths.add(course.learningPath);
    });
  });
  return Array.from(paths);
};

export const getAllCategories = () => {
  const categories = new Set();
  simulatedProjectScenarios.forEach(scenario => {
    scenario.recommendedCourses.forEach(course => {
      categories.add(course.category);
    });
  });
  return Array.from(categories);
};

// Statistics - Complete scenarios covering all 4 stakeholder types
export const scenarioStats = {
  totalScenarios: simulatedProjectScenarios.length,
  stakeholderTypes: {
    producer_organizations: getScenariosByStakeholder('producer_organizations').length,
    individual_farmers: getScenariosByStakeholder('individual_farmers').length,
    agribusiness_retailers: getScenariosByStakeholder('agribusiness_retailers').length,
    coaches_and_trainers: getScenariosByStakeholder('coaches_and_trainers').length
  },
  totalRecommendedPaths: simulatedProjectScenarios.reduce((sum, scenario) =>
    sum + scenario.recommendedCourses.length, 0),
  uniqueLearningPaths: getAllLearningPaths().length,
  uniqueCategories: getAllCategories().length,
  allStakeholdersCovered: true, // All 4 stakeholder types covered with realistic scenarios including coaching
  generatedAt: new Date().toISOString()
};

// Export for easy import in prototype interface
export default simulatedProjectScenarios;