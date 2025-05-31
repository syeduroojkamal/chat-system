"use client";

import { useUser } from "@clerk/nextjs";

export default function ClerkComponent() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) return <div>Loading...</div>;

  if (!isSignedIn || !user) return <div>You are not signed in</div>;

  const email = user.emailAddresses[0].emailAddress;

  return (
    <div className="flex justify-center items-center mb-16">
      <div className="p-4 border rounded-md shadow-md max-w-md space-y-2">
        <h2 className="text-xl font-bold mb-2">User Info</h2>
        <img
          src={user.imageUrl}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover"
        />
        <p>
          <strong>User ID (DB):</strong> {user.id}
        </p>
        <p>
          <strong>Full Name:</strong> {user.fullName}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Account Created:</strong> {user.createdAt?.toLocaleString()}
        </p>
        <p>
          <strong>Last Sign In:</strong> {user.lastSignInAt?.toLocaleString()}
        </p>
      </div>
    </div>
  );
}
