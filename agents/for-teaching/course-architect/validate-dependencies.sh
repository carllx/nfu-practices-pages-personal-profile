#!/bin/bash
# Dependency Validation Script for IDE Course Architect Agent
# Powered by BMAD™ Core

echo "🔍 Validating IDE Course Architect Dependencies..."
echo "=================================================="
echo ""

BASE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$BASE_DIR"

ERRORS=0
WARNINGS=0

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to check file existence
check_file() {
    local file=$1
    local description=$2
    if [ -f "$file" ]; then
        echo -e "${GREEN}✓${NC} $description: $file"
        return 0
    else
        echo -e "${RED}✗${NC} $description: $file ${RED}(NOT FOUND)${NC}"
        ((ERRORS++))
        return 1
    fi
}

# Function to check reference in file
check_reference() {
    local file=$1
    local reference=$2
    local description=$3
    if [ -f "$file" ]; then
        if grep -q "$reference" "$file"; then
            echo -e "${GREEN}  ✓${NC} Reference found: $description"
            return 0
        else
            echo -e "${YELLOW}  ⚠${NC} Reference not found: $description ${YELLOW}(WARNING)${NC}"
            ((WARNINGS++))
            return 1
        fi
    fi
}

echo -e "${BLUE}1. Checking Core Files${NC}"
echo "----------------------"
check_file "course-architect.md" "Agent Definition"
check_file "README.md" "Documentation"
echo ""

echo -e "${BLUE}2. Checking Task Files${NC}"
echo "-------------------"
check_file "tasks/design-ide-learning-module.md" "Task: Design IDE Learning Module"
check_file "tasks/evaluate-interaction-burden.md" "Task: Evaluate Interaction Burden"
check_file "tasks/define-content-feedback.md" "Task: Define Content Feedback"
echo ""

echo -e "${BLUE}3. Checking Template Files${NC}"
echo "-----------------------"
check_file "templates/ide-course-module-tmpl.yaml" "Template: IDE Course Module"
echo ""

echo -e "${BLUE}4. Checking Checklist Files${NC}"
echo "------------------------"
check_file "checklists/ide-course-design-checklist.md" "Checklist: IDE Course Design"
echo ""

echo -e "${BLUE}5. Checking Data Files${NC}"
echo "-------------------"
check_file "data/learning-theories-summary.md" "Data: Learning Theories Summary"
check_file "data/hci-devtool-principles.md" "Data: HCI DevTool Principles"
check_file "data/ide-platform-capabilities.md" "Data: IDE Platform Capabilities"
echo ""

echo -e "${BLUE}6. Validating Cross-References in Tasks${NC}"
echo "-------------------------------------"

echo "Checking design-ide-learning-module.md references:"
check_reference "tasks/design-ide-learning-module.md" "learning-theories-summary" "→ learning-theories-summary.md"
check_reference "tasks/design-ide-learning-module.md" "evaluate-interaction-burden" "→ evaluate-interaction-burden task"
check_reference "tasks/design-ide-learning-module.md" "define-content-feedback" "→ define-content-feedback task"
check_reference "tasks/design-ide-learning-module.md" "ide-course-module-tmpl" "→ ide-course-module-tmpl.yaml template"
check_reference "tasks/design-ide-learning-module.md" "ide-course-design-checklist" "→ ide-course-design-checklist.md"
check_reference "tasks/design-ide-learning-module.md" "hci-devtool-principles" "→ hci-devtool-principles.md"
echo ""

echo "Checking evaluate-interaction-burden.md references:"
check_reference "tasks/evaluate-interaction-burden.md" "hci-devtool-principles" "→ hci-devtool-principles.md"
echo ""

echo "Checking define-content-feedback.md references:"
# This task has no explicit dependencies in its current implementation
echo -e "${GREEN}  ✓${NC} No external dependencies required"
echo ""

echo -e "${BLUE}7. Validating Agent Definition Structure${NC}"
echo "--------------------------------------"

if [ -f "course-architect.md" ]; then
    echo "Checking YAML structure in course-architect.md:"
    
    # Check for key sections
    check_reference "course-architect.md" "activation-instructions:" "→ activation-instructions section"
    check_reference "course-architect.md" "agent:" "→ agent section"
    check_reference "course-architect.md" "persona:" "→ persona section"
    check_reference "course-architect.md" "commands:" "→ commands section"
    check_reference "course-architect.md" "dependencies:" "→ dependencies section"
    
    # Check for all defined commands
    echo ""
    echo "Checking command definitions:"
    check_reference "course-architect.md" "design-learning-flow" "→ design-learning-flow command"
    check_reference "course-architect.md" "define-interaction-patterns" "→ define-interaction-patterns command"
    check_reference "course-architect.md" "create-module-structure" "→ create-module-structure command"
    check_reference "course-architect.md" "specify-practice-strategy" "→ specify-practice-strategy command"
    check_reference "course-architect.md" "integrate-with-dev-workflow" "→ integrate-with-dev-workflow command"
    check_reference "course-architect.md" "define-content-feedback" "→ define-content-feedback command"
    check_reference "course-architect.md" "review-course-architecture" "→ review-course-architecture command"
fi
echo ""

echo -e "${BLUE}8. Checking BMAD™ Core Markers${NC}"
echo "----------------------------"
check_reference "tasks/design-ide-learning-module.md" "Powered by BMAD™ Core" "BMAD marker in design-ide-learning-module.md"
check_reference "tasks/evaluate-interaction-burden.md" "Powered by BMAD™ Core" "BMAD marker in evaluate-interaction-burden.md"
check_reference "tasks/define-content-feedback.md" "Powered by BMAD™ Core" "BMAD marker in define-content-feedback.md"
check_reference "templates/ide-course-module-tmpl.yaml" "Powered by BMAD™ Core" "BMAD marker in ide-course-module-tmpl.yaml"
check_reference "checklists/ide-course-design-checklist.md" "Powered by BMAD™ Core" "BMAD marker in ide-course-design-checklist.md"
check_reference "data/learning-theories-summary.md" "Powered by BMAD™ Core" "BMAD marker in learning-theories-summary.md"
check_reference "data/hci-devtool-principles.md" "Powered by BMAD™ Core" "BMAD marker in hci-devtool-principles.md"
check_reference "data/ide-platform-capabilities.md" "Powered by BMAD™ Core" "BMAD marker in ide-platform-capabilities.md"
echo ""

echo "=================================================="
echo -e "${BLUE}Validation Summary${NC}"
echo "=================================================="

if [ $ERRORS -eq 0 ] && [ $WARNINGS -eq 0 ]; then
    echo -e "${GREEN}✓ All checks passed!${NC}"
    echo "The agent dependency structure is valid and complete."
    exit 0
elif [ $ERRORS -eq 0 ]; then
    echo -e "${YELLOW}⚠ Validation completed with $WARNINGS warning(s)${NC}"
    echo "The agent is functional but some optional references are missing."
    exit 0
else
    echo -e "${RED}✗ Validation failed with $ERRORS error(s) and $WARNINGS warning(s)${NC}"
    echo "Please fix the missing files or references before using the agent."
    exit 1
fi

