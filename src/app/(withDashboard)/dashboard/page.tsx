import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <div>
      {/* <h1 className="text-4xl text-center mt-10">Welcome To Dashboard Page</h1> */}
      {session?.user && (
        <>
          <h1 className="text-4xl text-center mt-10">
            Welcome To {session?.user?.name}
          </h1>
          <h1 className="text-2xl text-center mt-10">
            Logged-in user email: {session?.user?.email}
          </h1>
          <Image
            width={100}
            height={100}
            src={
              session?.user?.image ||
              "https://plus.unsplash.com/premium_photo-1677094310956-7f88ae5f5c6b"
            }
            alt="User Image"
            className="mx-auto rounded-full mt-10"
          />
        </>
      )}
    </div>
  );
};

export default DashboardPage;
