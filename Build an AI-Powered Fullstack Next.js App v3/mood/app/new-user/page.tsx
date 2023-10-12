import { prisma } from "@/utils/db";
import { auth, currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const createNewUser = async () => {
  const user = await currentUser();
  const match = await prisma.user.findMany({
    where: {
      clerkId: user.id as string,
    },
  });
  if (!match) {
    const newUser = await prisma.user.create({
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
