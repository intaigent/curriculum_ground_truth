# 🚀 Quick Start for Developers (10 minutes)

## Overview
You have **10 minutes** to significantly improve your curriculum recommendation system. This guide shows you exactly what to do.

---

## Current Problem (2 minutes to understand)

### Your Current System Logic
```
"Select 1-2 most valuable H2 categories per H1 learning path"
```

### Why This Fails
1. **Same logic for all stakeholders** (farmers get same recommendations as cooperatives)
2. **Arbitrary limits** ("1-2 H2s" misses essential content)
3. **No educational progression** (advanced content without basics)
4. **Incomplete training** (missing 60%+ of relevant curriculum)

### Real Example
**Input**: "Basic cooperative leadership training for managers"

**Your current output**:
```json
{
  "Fundamentals of Cooperatives": ["Leadership", "Understanding Cooperatives"]
}
// 1 H1, 2 H2s, ~6 courses
```

**What users actually need** (from ground truth):
```json
[
  {
    "learningPath": "Fundamentals of Cooperatives",
    "categories": ["Understanding Cooperatives", "Leadership", "Member Relations", "Governance"]
  },
  {
    "learningPath": "Producer Organization Essentials",
    "categories": ["Operations", "Collection from Farmers"]
  },
  {
    "learningPath": "Internal Management",
    "categories": ["Internal Organization"]
  }
]
// 3 H1s, 7 H2s, ~15 courses
```

**Gap**: Your system provides **40% of what's needed**

---

## The Solution (3 minutes to implement)

### Step 1: Copy the Enhanced Prompt
Open [`ENHANCED_RUBRIC_PROMPT.md`](ENHANCED_RUBRIC_PROMPT.md) in this directory.

Copy the entire **System Prompt** section and replace your current backend prompt.

### Step 2: Key Features You're Getting
✅ **Stakeholder-specific patterns** for each audience type
✅ **Content keyword mapping** rules
✅ **Educational progression** logic (Basic → Foundations → Advanced)
✅ **Ground truth examples** as templates
✅ **Validation checklist** for quality control

---

## Testing (5 minutes to validate)

### Step 1: Load Test Scenarios
```javascript
import { simulatedProjectScenarios } from '../ground_truth_data/simulated_project_scenarios.js';

// You have 5 validated test scenarios:
// 1. Basic Cooperative Leadership Training
// 2. Small-Scale Farmer Financial Literacy
// 3. Agricultural Input Retailer Business Improvement
// 4. Advanced Cooperative Management with Credit Access
// 5. Producer Organization Financial Management
```

### Step 2: Test One Scenario
```javascript
const testScenario = simulatedProjectScenarios[0]; // Basic Cooperative Leadership

console.log("Input:", testScenario.projectParameters);
console.log("Expected output:", testScenario.recommendedCourses);

// Run your enhanced system
const yourResult = callEnhancedPrompt(testScenario.projectParameters);
console.log("Your result:", yourResult);
```

### Step 3: Measure Accuracy
```javascript
const measureAccuracy = (yourResult, expectedResult) => {
  // Check H1 path accuracy
  const expectedH1s = expectedResult.map(r => r.learningPath);
  const yourH1s = yourResult.map(r => r.learningPath);
  const h1Accuracy = yourH1s.filter(h1 => expectedH1s.includes(h1)).length / expectedH1s.length;

  // Check H2 category coverage
  const expectedH2s = expectedResult.flatMap(r => r.category);
  const yourH2s = yourResult.flatMap(r => r.category || r.categories || []);
  const h2Coverage = yourH2s.filter(h2 => expectedH2s.includes(h2)).length / expectedH2s.length;

  console.log(`H1 Accuracy: ${(h1Accuracy * 100).toFixed(1)}%`);
  console.log(`H2 Coverage: ${(h2Coverage * 100).toFixed(1)}%`);

  return { h1Accuracy, h2Coverage };
};
```

---

## Expected Results

### Success Metrics
- **≥85% H1 path accuracy** (selecting correct learning paths)
- **≥80% H2 category coverage** (including expected categories)
- **2-3x content volume** increase
- **Stakeholder-appropriate** recommendations

### Before vs. After Comparison

#### Scenario: Small Farmer Financial Training

**Before (Current System)**:
- 1 learning path
- 2 categories
- ~6 courses
- Generic financial content

**After (Enhanced System)**:
- 3 learning paths
- 6 categories
- ~18 courses
- Farmer-specific progression: Bookkeeping → Planning → Finance

#### Scenario: Retailer Business Improvement

**Before (Current System)**:
- 1-2 learning paths
- 2-4 categories
- ~8 courses
- No retail specialization

**After (Enhanced System)**:
- 4 learning paths
- 12 categories
- ~30 courses
- Retail-specific: Inventory + Customer Relations + Staff Management + Growth

---

## Troubleshooting

### If Accuracy < 80%:

#### Check 1: Stakeholder Pattern Compliance
```javascript
// Make sure your system includes the mandatory base patterns:
producer_organizations: ["Fundamentals of Cooperatives", "Producer Organization Essentials", "Internal Management"]
individual_farmers: ["Bookkeeping Essentials", "Planning for Your Business"]
agribusiness_retailers: ["Fundamentals of Retail Management", "Internal Management"]
```

#### Check 2: Educational Progression
```javascript
// Ensure proper sequences:
financial_progression: "Bookkeeping Essentials" → "Finance and Accounting" → "Working with Credit"
cooperative_progression: "Fundamentals of Cooperatives" → "Producer Organization Essentials"
```

#### Check 3: Content Volume
```javascript
// Target content volumes:
basic_training: "3-4 H1 paths, 8-12 H2 categories, ~15 courses"
comprehensive_training: "5-6 H1 paths, 12-18 H2 categories, ~30 courses"
```

### If System Doesn't Follow Instructions:

1. **Break down the prompt** into smaller sections
2. **Add emphasis** with CAPITAL LETTERS and bold formatting
3. **Test with simple scenarios** first
4. **Check prompt token limits** in your system

---

## Next Steps

### If Results Are Good (≥80% accuracy):
1. **Test remaining scenarios** to validate consistency
2. **Monitor production performance** for edge cases
3. **Refine keyword mappings** based on real user inputs
4. **Track user satisfaction** improvements

### If Results Need Improvement:
1. **Review** [`CURRENT_SYSTEM_PROBLEMS.md`](CURRENT_SYSTEM_PROBLEMS.md) for deeper understanding
2. **Consider** the complex implementation approach in [`../analysis/IMPLEMENTATION_COMPARISON.md`](../analysis/IMPLEMENTATION_COMPARISON.md)
3. **Check** the comprehensive guide in [`../archive/DEVELOPER_INSTRUCTION_GUIDE.md`](../archive/DEVELOPER_INSTRUCTION_GUIDE.md)

---

## Summary

### What You Did (10 minutes):
1. ✅ Understood why current system fails
2. ✅ Copied enhanced rubric prompt
3. ✅ Tested with validated scenarios
4. ✅ Measured accuracy improvement

### What You Got:
- **2-3x more comprehensive** recommendations
- **Stakeholder-appropriate** content selection
- **Educationally sound** progression logic
- **Validated against real curriculum data**

### Expected Impact:
- **Higher user satisfaction** (more relevant content)
- **Better learning outcomes** (proper skill progression)
- **Reduced support requests** (comprehensive training recommendations)

---

**Bottom Line**: You just improved your curriculum recommendation system with 10 minutes of work and a validated, data-driven approach.

*Need help? Check [`../ground_truth_data/README_ground_truth_usage.md`](../ground_truth_data/README_ground_truth_usage.md) for dataset details or [`../archive/DEVELOPER_INSTRUCTION_GUIDE.md`](../archive/DEVELOPER_INSTRUCTION_GUIDE.md) for comprehensive implementation guidance.*