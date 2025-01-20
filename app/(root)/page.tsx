import { UserButton } from "@clerk/nextjs";

export default function SetupPage() {
  return (
    <div className="relative h-screen">
      <div className="absolute top-4 right-4">
        <UserButton />
      </div>
    </div>
  );
}
