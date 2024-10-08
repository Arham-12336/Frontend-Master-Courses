import { prisma } from "@/utils/db";
import { auth, currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const createNewUser = async () => {
  let match;
  const user = await currentUser();
  console.log("User : ", user);
  if (user) {
    match = await prisma.user.findUnique({
      where: {
        clerkId: user.id as string,
      },
    });
  }

  if (!match && user) {
    await prisma.user.create({
      data: {
        clerkId: user.id,
        email: user?.emailAddresses[0].emailAddress,
      },
    });
  }
  redirect("/journal");
};

const newUser = async () => {
  await createNewUser();
  return <div>...loading</div>;
};
export default newUser;
