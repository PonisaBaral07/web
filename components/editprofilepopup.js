'use client'
import { useState } from 'react';

const EditProfilePopup = async ({ onClose }) => {
  const [profileData, setProfileData] = useState({});

  async function fetchProfile(){
    const response = await fetch (`http://localhost:3000/api/65d36d6b933e4ab6aba5ad6e`);
    const profile = await response.json();
    const setProfileData = profile;
  }

  fetchProfile();


  const handleSubmit = async (event) => {
    event.preventDefault();
    await editProfile(profileData); 
    onClose();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfileData({ ...profileData, [name]: value });
  };

  return (
    <div className="popup">
      <div className="popup_inner">
        <h2>Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={profileData.username || ''}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={profileData.email || ''}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Save Changes</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default EditProfilePopup;
