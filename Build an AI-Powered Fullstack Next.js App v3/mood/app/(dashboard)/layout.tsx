import { UserButton } from "@clerk/nextjs";

const DashboardLayout = ({ children }: any) => {
  return (
    <div className="h-screen w-screen relative bg-gradient-to-r from-purple-800 to-indigo-900">
      <aside className="absolute w-[250px] top-0 left-0 h-full bg-gradient-to-b from-purple-900 to-indigo-800 border-r border-white/30 shadow-lg">
        <div className="h-full flex flex-col items-center justify-center text-white text-2xl font-semibold">
          Mood
        </div>
      </aside>
      <div className="ml-[250px] h-full">
        <header className="h-[70px] bg-gradient-to-r from-purple-700 to-indigo-600 border-b border-white/30 shadow-md">
          <div className="h-full w-full px-6 flex items-center justify-end">
            <UserButton />
          </div>
        </header>
        <div className="h-[calc(100vh-70px)] overflow-auto p-6">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
