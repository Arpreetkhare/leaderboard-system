# User Points Management System

## Overview
This project consists of two main parts:

1. **Backend (Express API)**: A REST API that manages users, points claiming, and leaderboard functionality.
2. **Frontend (React)**: A user interface that allows users to select a user, claim points, and view the leaderboard with rankings.

## Features
- **User Management**: Users can be added, and their points can be claimed.
- **Leaderboard**: Displays users ranked by total points in descending order.
- **Points Claiming**: Each user can claim points, which are added to their total points.
- **User Point History**: Every claim action is saved in the user's history.

  

## Backend Setup (Express API)


### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Arpreetkhare/leaderboard-system.git
   cd LEADERBOARD-PROJECT/leaderboard-backend

2. **Install Dependencies:**  
   ```bash
   npm install

3. **Start the Server:**
   ```bash
   npm start

 4. **local host**
    ```bash
    http://localhost:5000
    


## Frontend Setup (React)

### Installation

1. **got to frontend dir**
   ```bash
   cd leaderboard-frontend

2. **Install Dependencies:**
   ```bash
   npm install

3. **Start the Development Server:**
   ```bash
    npm start

4. **local host**
   ```bash
   http://localhost:3000



## API Endpoints

### Base URL
The backend server runs at: `http://localhost:5000`

### 1. Fetch All Users
**Endpoint:** `GET /api/users`

**Description:** Fetches a list of all users.

**Response Example:**
```json
[
  {
    "_id": "6787ed80b780dec627c24efb",
    "name": "Sanaki",
    "total_points": 12,
    "__v": 0
  },
  {
    "_id": "6787f1deb21c9847f4c98061",
    "name": "Sanki",
    "total_points": 42,
    "__v": 0
  }
]
```

## 2. Add a New User
**Endpoint:** `POST /api/users`

**Description:** Adds a new user to the system.

**Request Body:**
  ```json
  {
  "name": "User Name"
  }
```

**Response Example:**
  ```json
  {
  "user": {
    "_id": "6787f1deb21c9847f4c98061",
    "name": "User Name",
    "total_points": 0,
    "__v": 0
  }
}

```

### 3. Get Leaderboard  
**Endpoint:** `GET /api/users/leaderboard`  

**Description:** Fetches the leaderboard sorted by total points in descending order.  

**Response Example:**  
```json
[
  {
    "_id": "6787f1deb21c9847f4c98061",
    "name": "Sanki",
    "total_points": 42
  },
  {
    "_id": "6787f2ab63999239dbdc4b1c",
    "name": "Suraj",
    "total_points": 41
  }
]
```
### 4. Claim Points  
**Endpoint:** `POST /api/history`  

**Description:** Awards random points (1-10) to the selected user and saves the transaction in history.  

**Request Body:**  
```json
{
  "user_id": "6787ed80b780dec627c24efb"
}
```

**Response Example:**  
```json
{
  "user": {
    "_id": "6787ed80b780dec627c24efb",
    "name": "Sanaki",
    "total_points": 15
  },
  "points_awarded": 3
}
```





   
   

     

     
    

   

   


