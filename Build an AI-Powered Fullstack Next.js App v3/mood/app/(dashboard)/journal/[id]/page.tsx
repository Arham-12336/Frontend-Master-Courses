import Editor from "@/components/Editor";
import { getUserByClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";

const getEnrty = async (id: any) => {
  const user = await getUserByClerkID();
  const entry = await prisma.journalEntry.findUnique({
    where: {
      userId_id: {
        userId: user.id,
        id,
      },
    },
  });

  return entry;
};

const EntryPage = async ({ params }: any) => {
  const enrty = await getEnrty(params.id);
  return (
    <div>
      <Editor entry={enrty} />
    </div>
  );
};
export default EntryPage;
