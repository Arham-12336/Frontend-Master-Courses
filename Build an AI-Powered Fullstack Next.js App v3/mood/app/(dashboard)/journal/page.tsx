import { getUserByClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";

const getEntries = async () => {
  const user = await getUserByClerkID();
  const entries = await prisma.journalEntry.findMany({
    where: {
      userId: user,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

const JournalPage = async () => {
  const entries = await getEntries();
  console.log("ENTRIES: ", entries);
  return <div>Journal Page</div>;
};

export default JournalPage;
