"use client";
import UserSelector from "@/src/components/UserSelector";
import { useUser } from "@clerk/nextjs";

export default function UserInfo() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) return <div>Loading...</div>;
  if (!isSignedIn || !user) return <div>You are not signed in</div>;

  const {
    id,
    fullName,
    firstName,
    lastName,
    emailAddresses,
    imageUrl,
    createdAt,
    lastSignInAt,
    externalAccounts,
  } = user;

  const email = emailAddresses[0]?.emailAddress;
  const provider = externalAccounts[0]?.provider;
  const providerUserId = externalAccounts[0]?.providerUserId;
  const tempName = fullName ? fullName : "";
  return (
    <>
      <UserSelector key={id} name={tempName} id={id} />
      <div className="flex justify-center items-center mb-16">
        <div className="p-4 border rounded-md shadow-md max-w-md space-y-2">
          <h2 className="text-xl font-bold mb-2">User Info</h2>
          <img
            src={imageUrl}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
          <p>
            <strong>Full Name:</strong> {fullName}
          </p>
          <p>
            <strong>First Name:</strong> {firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {lastName}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>User ID (DB):</strong> {id}
          </p>
          <p>
            <strong>Auth Provider:</strong> {provider}
          </p>
          <p>
            <strong>Provider User ID:</strong> {providerUserId}
          </p>
          <p>
            <strong>Account Created:</strong> {createdAt?.toLocaleString()}
          </p>
          <p>
            <strong>Last Sign In:</strong> {lastSignInAt?.toLocaleString()}
          </p>
        </div>
      </div>
    </>
  );
}
