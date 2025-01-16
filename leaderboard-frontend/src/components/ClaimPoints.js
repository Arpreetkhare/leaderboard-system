import React from "react";
import axios from "axios";

/**
 * ClaimPoints - A button to claim points for the selected user.
 * 
 * @param {string} selectedUser - The ID of the selected user.
 * 
 * @returns {JSX.Element} The Claim Points button.
 */
const ClaimPoints = ({ selectedUser }) => {
  const claimPoints = () => {
    if (!selectedUser) return alert("Please select a user first!");

    // Make the API request to claim points for the selected user
    axios.post("http://localhost:5000/api/history", { user_id: selectedUser })
      .then((res) => {
        alert(`Points awarded: ${res.data.points_awarded}`);
      })
      .catch((err) => {
        console.error("Error claiming points:", err);
        alert("Error claiming points. Please try again.");
      });
  };

  return (
    <div className="claim-points">
      <button onClick={claimPoints}>
        Claim Points {/* Static button text */}
      </button>
    </div>
  );
};

export default ClaimPoints;
