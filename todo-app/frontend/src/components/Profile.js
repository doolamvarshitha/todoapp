import React, { useState, useEffect } from 'react';
import { getProfile, updateProfile } from '../utils/api';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
  });

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const fetchedProfile = await getProfile();
        setProfile(fetchedProfile);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(profile);
      setEditMode(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Profile</h2>
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <div>
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
          <button onClick={() => setEditMode(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
