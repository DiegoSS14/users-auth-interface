import UserCard from "@/components/userCard";

export default function Home() {
  return (
    <main className="flex flex-col max-w-2xl min-h-screen m-auto p-5 gap-5">
      <h1 className="text-lg font-bold">List users</h1>
      <div 
        className="flex flex-col gap-3"
      >
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </main>
  );
}
