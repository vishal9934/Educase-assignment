import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <div className="account">
        <h3 style={{ marginLeft: "18px" }}>Account Settings</h3>
      </div>

      <div className="display">
        <img
          src="https://thenounproject.com/api/private/icons/83403/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0"
          alt="https://thenounproject.com/api/private/icons/83403/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0"
        />
        <div className="detail">
          <p style={{ color: "black" }}>
            <b>Marry Doe</b>
          </p>
          <p style={{ color: "black" }}>Marry@Gmail.Com</p>
        </div>
      </div>
      <p className="par">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aspernatur
        esse, facere fugit quo suscipit iste obcaecati.
      </p>
    </div>
  );
};

export default Profile;
