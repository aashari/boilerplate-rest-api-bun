#!/bin/bash

# API management script for Boilerplate REST API with Bun

# Function to display help
show_help() {
  echo "Usage: ./api.sh [command]"
  echo ""
  echo "Commands:"
  echo "  start       Start the API in the background"
  echo "  stop        Stop the API"
  echo "  restart     Restart the API"
  echo "  status      Check if the API is running"
  echo "  logs        Show API logs"
  echo "  mongo-up    Start MongoDB containers"
  echo "  mongo-down  Stop MongoDB containers"
  echo "  help        Show this help message"
  echo ""
}

# Function to start the API
start_api() {
  echo "Starting API in the background..."
  nohup bun run dev > app.log 2>&1 &
  echo "API started with PID: $!"
  echo "To view logs, run: ./api.sh logs"
}

# Function to stop the API
stop_api() {
  echo "Stopping API..."
  pkill -f "bun run dev" || echo "No API process found"
}

# Function to check API status
check_status() {
  if pgrep -f "bun run dev" > /dev/null; then
    echo "API is running"
    ps aux | grep "bun run dev" | grep -v grep
  else
    echo "API is not running"
  fi
}

# Function to show logs
show_logs() {
  if [ -f "app.log" ]; then
    tail -f app.log
  else
    echo "Log file not found. Start the API first."
  fi
}

# Function to start MongoDB
start_mongo() {
  echo "Starting MongoDB containers..."
  docker-compose up -d
  echo "MongoDB containers started"
}

# Function to stop MongoDB
stop_mongo() {
  echo "Stopping MongoDB containers..."
  docker-compose down
  echo "MongoDB containers stopped"
}

# Main script logic
case "$1" in
  start)
    start_api
    ;;
  stop)
    stop_api
    ;;
  restart)
    stop_api
    sleep 2
    start_api
    ;;
  status)
    check_status
    ;;
  logs)
    show_logs
    ;;
  mongo-up)
    start_mongo
    ;;
  mongo-down)
    stop_mongo
    ;;
  help|*)
    show_help
    ;;
esac 