'use client'
import React, { useEffect } from 'react';
import { AxiosReqInstance } from '../accounts/utils/axiosInstance';
import { ProfileInterface } from '@/types/interface';

export const Profile = () => {
  const protectedRoute = AxiosReqInstance();
  const[profile, setProfile] = React.useState<ProfileInterface | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
      const url = `${backendUrl}/api/profile/getProfile/`;
      try {
        const response = await protectedRoute.get(url);
        console.log('Profile Data:', response.data);
        setProfile(response.data);
      } catch (error) {
        console.error('Failed to fetch profile', error);
      }
    }
    fetchProfile();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
          <h1 className="text-3xl font-bold text-white">Profile Page</h1>
        </div>

        {/* Profile Content */}
        <div className="p-6">
          <div className="flex flex-col items-center space-y-6">
            {/* Profile Picture */}
            {profile?.profile_picture && (
              <img
                src={profile.profile_picture}
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
              />
            )}

            {/* Display Name */}
            <h2 className="text-2xl font-semibold text-gray-800">
              {profile?.Display_name || 'No Display Name'}
            </h2>

            {/* Email */}
            <p className="text-gray-600">
              <span className="font-medium">Email:</span> {profile?.user.email}
            </p>

            {/* Created At */}
            <p className="text-gray-600">
              <span className="font-medium">Joined:</span>{' '}
              {new Date(profile?.created_at).toLocaleDateString()}
            </p>

            {/* Updated At */}
            <p className="text-gray-600">
              <span className="font-medium">Last Updated:</span>{' '}
              {new Date(profile?.updated_at).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Edit Profile Button */}
        <div className="p-6 bg-gray-50">
          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};