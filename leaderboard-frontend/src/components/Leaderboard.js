import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/users/leaderboard')  // Adjust URL as needed
      .then((response) => {
        setLeaderboardData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching leaderboard data:', error);
      });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Total Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {leaderboardData && leaderboardData.length > 0 ? (
            leaderboardData.map((user, index) => (
              <TableRow key={user._id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.total_points}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3}>No users found</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Leaderboard;
