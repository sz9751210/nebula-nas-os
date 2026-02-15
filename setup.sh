#!/bin/bash

# Configuration
# Colors and styles
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
BOLD='\033[1m'
NC='\033[0m' # No Color

# Helper Functions
print_header() {
    clear
    echo -e "${BLUE}${BOLD}"
    echo "  _   _      _           _        N A S   O S  "
    echo " | \ | | ___| |__  _   _| | __ _             "
    echo " |  \| |/ _ \ '_ \| | | | |/ _\` |            "
    echo " | |\  |  __/ |_) | |_| | | (_| |            "
    echo " |_| \_|\___|_.__/ \__,_|_|\__,_|            "
    echo -e "${NC}"
    echo -e "${CYAN}  :: The Private Cloud OS for Everyone ::  ${NC}"
    echo -e "${BLUE}===============================================${NC}"
    echo ""
}

check_dependency() {
    if ! command -v $1 &> /dev/null; then
        echo -e "${RED}[x] Error: $1 is required but not installed.${NC}"
        return 1
    fi
    return 0
}

menu_option() {
    echo -e "${GREEN}[$1]${NC} $2"
}

# Actions
run_docker_compose() {
    echo -e "\n${YELLOW}>> Starting Nebula NAS OS in Docker...${NC}"
    if ! check_dependency docker; then return; fi
    
    echo "Building and starting services..."
    docker compose up --build -d
    
    if [ $? -eq 0 ]; then
        echo -e "\n${GREEN}✔ System is running!${NC}"
        echo -e "   - Frontend: ${BOLD}http://localhost:5173${NC}"
        echo -e "   - Backend:  ${BOLD}http://localhost:8080${NC}"
        echo -e "\n(Run 'docker compose logs -f' to see logs)"
    else
        echo -e "\n${RED}[!] Failed to start services.${NC}"
    fi
    read -p "Press Enter to continue..."
}

build_iso() {
    echo -e "\n${YELLOW}>> Initializing ISO Builder...${NC}"
    if ! check_dependency docker; then return; fi
    
    cd os-builder
    ./build.sh
    cd ..
    
    read -p "Press Enter to continue..."
}

dev_setup() {
    echo -e "\n${YELLOW}>> Installing Local Dependencies...${NC}"
    echo "This will install Go tools and Node modules locally."
    
    echo -e "\n${BLUE}[Backend]${NC} Tidy Go modules..."
    cd backend && go mod tidy && cd ..
    
    echo -e "\n${BLUE}[Frontend]${NC} Installing npm packages..."
    cd frontend && npm install && cd ..
    
    echo -e "\n${GREEN}✔ Development environment ready.${NC}"
    read -p "Press Enter to continue..."
}

# Main Loop
while true; do
    print_header
    
    echo -e "Select an operation:"
    menu_option "1" "🚀 Quick Start (Docker Experience)"
    menu_option "2" "💿 Build Installable ISO (Debian Live)"
    menu_option "3" "🛠️  Local Dev Setup (npm/go)"
    menu_option "4" "❌ Exit"
    
    echo ""
    read -p "Enter choice [1-4]: " choice
    
    case $choice in
        1) run_docker_compose ;;
        2) build_iso ;;
        3) dev_setup ;;
        4) echo -e "\nGoodbye!"; exit 0 ;;
        *) echo -e "${RED}Invalid option.${NC}"; sleep 1 ;;
    esac
done
