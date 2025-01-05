# WebSocket Server Implementation

A simple WebSocket server implementation using Express.js and Socket.IO that supports room-based messaging.

## Features

- WebSocket connection handling
- Room-based messaging support
- CORS enabled for frontend integration
- Express.js REST API endpoints

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository
2. Navigate to the server directory
```bash
cd server
```
3. Install dependencies
```bash
npm install
```

## Dependencies

- express
- socket.io
- cors
- http

## Configuration

The server runs on port 3000 by default and accepts connections from:
- Frontend URL: http://localhost:5173 (Vite's default dev server)

## Running the Server

```bash
node index.js
```

## WebSocket Events

### Server Events
- `connection`: Handles new client connections
- `disconnect`: Handles client disconnections

### Client Events
- `message`: Receives messages from clients
  - Parameters: 
    - `message`: Message content
    - `room`: Room identifier

### Emitted Events
- `replay`: Broadcasts messages to room members

## API Endpoints

- `GET /`: Returns server status

## Example Usage

```javascript
// Client-side connection
const socket = io('http://localhost:3000');

// Send message to a room
socket.emit('message', {
    message: 'Hello Room!',
    room: 'room1'
});

// Listen for messages
socket.on('replay', (message) => {
    console.log('Received:', message);
});
```
