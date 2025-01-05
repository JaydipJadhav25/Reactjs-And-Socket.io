# Socket.IO React Chat Application

A simple React-based chat application using Socket.IO for real-time communication.

## Features

- Real-time messaging
- Room-based chat functionality
- Connection management (connect/disconnect)
- Message history display

## Components

### App Component

The main component handles all Socket.IO connections and chat functionality:

- Manages socket connection state
- Handles message sending and receiving
- Supports room-based messaging
- Displays message history

## Usage

1. Start the server (make sure it's running on `http://localhost:3000`)
2. Run the React application
3. Click "Create Connection" to establish Socket.IO connection
4. Enter a room ID (optional)
5. Type your message and click "Send"
6. Use "Close Connection" to disconnect from the server

## State Management

The application uses the following state variables:
- `message`: Current message input
- `replay`: Array of received messages
- `room`: Current chat room ID
- `connection`: Socket connection status

## Socket Events

- `message`: Emits messages to the server
- `replay`: Listens for incoming messages from the server

## Dependencies

- React
- Socket.IO Client
