import { useSession } from "next-auth/react";

const Profile = () => {
  const { data: session } = useSession();

  return (
    <div>
      {session?.user && (
        <>
          <p>User ID: {session.user._id}</p>
          <p>Username: {session.user.username}</p>
          <p>Email: {session.user.email}</p>
          <p>Role: {session.user.role}</p>
        </>
      )}
    </div>
  );
};

export default Profile