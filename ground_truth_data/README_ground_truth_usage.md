# Ground Truth Data Usage Guide

## Overview
This directory contains validated ground truth datasets for testing and improving the ALP curriculum recommendation system. The data bridges the gap between PDF-based course outlines and the courseData.js H1-H2-H3 structure.

## Files in This Directory

### 1. **`comprehensive_ground_truth_dataset.js`** - Core Ground Truth Data
- **10 validated course mappings** (9 PDF + 1 coaching content)
- **65+ validated H1-H2 learning path combinations**
- **180+ specific course recommendations** at H3 level
- Each entry includes confidence levels and mapping rationales

### 2. **`simulated_project_scenarios.js`** - Test Scenarios
- **6 realistic project scenarios** for prototype interface testing
- Input parameters matched with expected H1-H2-H3 outputs
- Covers all four stakeholder types with different complexity levels

### 3. **`README_ground_truth_usage.md`** - This documentation

## Scenario Structure

Each scenario includes:

### Input Parameters (Interface Format)
```javascript
projectParameters: {
  focusAreas: "Detailed description of training objectives...",
  targetStakeholder: "producer_organizations|individual_farmers|agribusiness_retailers",
  businessContext: "Operating environment, constraints, literacy levels...",
  expectedOutcomes: "Specific, measurable training outcomes..."
}
```

### Output Recommendations (H1-H2-H3 Format)
```javascript
recommendedCourses: [
  {
    learningPath: "Learning Path Name", // H1 level
    category: "Category Name",          // H2 level
    courses: [                          // H3 level
      "Course Name 1",
      "Course Name 2"
    ],
    selectionReason: "Why these courses were selected"
  }
]
```

## Available Scenarios

### 1. **Basic Cooperative Leadership Training**
- **Target**: Producer Organizations (Cooperative leaders, <8 years education)
- **Focus**: Fundamental cooperative concepts, leadership, member relations
- **Courses**: Multiple learning paths covering foundational cooperative management

### 2. **Small-Scale Farmer Financial Literacy**
- **Target**: Individual Farmers (Smallholder farmers, 2-4 years education)
- **Focus**: Basic bookkeeping, budgeting, financial decision-making
- **Courses**: Essential financial literacy for farm profitability

### 3. **Agricultural Input Retailer Business Improvement**
- **Target**: Agribusiness Retailers (Input dealers, supply stores)
- **Focus**: Inventory management, customer service, financial management
- **Courses**: Comprehensive retail business management skills

### 4. **Advanced Cooperative Management with Credit Access**
- **Target**: Producer Organizations (Professional managers, 10+ years education)
- **Focus**: Business planning, financial analysis, credit access
- **Courses**: Complete foundational + advanced cooperative management

### 5. **Producer Organization Financial Management**
- **Target**: Producer Organizations (Financial staff, no prior training)
- **Focus**: Comprehensive bookkeeping, ledger management, accounting cycles
- **Courses**: Specialized financial recordkeeping for cooperatives

### 6. **ALP Coach Development Training**
- **Target**: ALP Coaches and Trainers (Mixed educational backgrounds)
- **Focus**: Complete coaching competency development, GROW model, SMART-EP goals
- **Courses**: Comprehensive coaching methodology and ALP-specific applications

## For Developers: Testing Your Enhanced System

### Quick Validation Test

```javascript
import { simulatedProjectScenarios } from './simulated_project_scenarios.js';

// Test your enhanced system against validated scenarios
simulatedProjectScenarios.forEach((scenario, index) => {
  console.log(`Testing Scenario ${index + 1}: ${scenario.scenarioName}`);

  // Run your enhanced recommendation system
  const yourResult = callYourEnhancedSystem(scenario.projectParameters);
  const expectedResult = scenario.recommendedCourses;

  // Measure accuracy
  const accuracy = measureAccuracy(yourResult, expectedResult);
  console.log(`Accuracy: ${accuracy}%`);

  if (accuracy >= 80) {
    console.log("✅ GOOD - Meeting success criteria");
  } else {
    console.log("❌ NEEDS IMPROVEMENT");
    logDifferences(yourResult, expectedResult);
  }
});
```

### Integration with Prototype Interface

```javascript
import { simulatedProjectScenarios, getScenariosByStakeholder } from './simulated_project_scenarios.js';

// Get all scenarios for a specific stakeholder type
const retailerScenarios = getScenariosByStakeholder('agribusiness_retailers');

// Use scenario data to populate interface
const handleLoadScenario = (scenarioIndex) => {
  const scenario = simulatedProjectScenarios[scenarioIndex];
  setProjectData(scenario.projectParameters);
  // Apply recommended course selections
  applyRecommendedCourses(scenario.recommendedCourses);
};
```

### Helper Functions Available

```javascript
// Filter scenarios by stakeholder type
getScenariosByStakeholder('producer_organizations') // Returns 4 scenarios

// Get all unique learning paths used
getAllLearningPaths() // Returns 7 unique paths

// Get all unique categories used
getAllCategories() // Returns 15 unique categories

// View statistics
console.log(scenarioStats);
```

## Statistics Summary

- **Total Scenarios**: 6
- **Stakeholder Distribution**:
  - Producer Organizations: 3 scenarios
  - Individual Farmers: 1 scenario
  - Agribusiness Retailers: 1 scenario
  - ALP Coaches and Trainers: 1 scenario
- **Course Coverage**:
  - All 4 stakeholder types covered with realistic, validated scenarios
  - 9 unique learning paths covered (including new Fundamentals of ALP Coaching)
  - Comprehensive business, cooperative management, and coaching content
  - All scenarios synchronized with comprehensive ground truth dataset

## Validation Status

✅ **All scenarios validated against:**
- `comprehensive_ground_truth_dataset.js` mappings
- `courseData.js` structure (H1-H2-H3 hierarchy)
- Prototype interface input format requirements
- PDF source content accuracy
- **Core stakeholder coverage for practical use**

## Usage Notes

1. **Realistic Data**: All scenarios based on actual PDF course outlines
2. **Interface Compatible**: Parameters match prototype input fields exactly
3. **Course Validated**: All recommended courses exist in courseData.js
4. **Stakeholder Aligned**: Scenarios cover all three interface stakeholder types
5. **Educational Range**: Scenarios span different education levels and experience
6. **Trainer Content**: Removed trainer development scenario until courseData.js includes proper trainer content

## Next Steps for Implementation

1. Import `simulated_project_scenarios.js` into prototype
2. Add scenario loading functionality to interface
3. Use scenarios for demo/testing purposes
4. Validate AI recommendations against ground truth scenarios
5. Use for model training and evaluation

---
**Generated**: 2024-09-20
**Source**: comprehensive_ground_truth_dataset.js + prototype interface analysis