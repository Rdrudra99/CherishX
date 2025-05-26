import { auth, currentUser } from "@clerk/nextjs/server";
import { GalleryVerticalEnd } from "lucide-react";
import Link from "next/link";

export default async function Page() {
  // Get the userId from auth() -- if null, the user is not signed in
  const { userId } = await auth();

  // Protect the route by checking if the user is signed in
  if (!userId) {
    return <div>Sign in to view this page</div>;
  }

  // Get the Backend API User object when you need access to the user's information
  const user = await currentUser();

  // Use `user` to render user details or create UI elements
  return (
    <div className="grid min-h-svh lg:grid-cols-[10fr_16fr]">
      <div className="bg-muted relative hidden w-full lg:block">
        <img
          src="/signin.jpeg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
      <div className="flex flex-col gap-4 p-6 md:p-10">
        {/* <div className="flex justify-center gap-2 md:justify-start">
          <Link href="#" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex h-6 w-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Acme Inc.
          </Link>
        </div> */}
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <div className="text-center">
              <h1 className="text-2xl font-bold tracking-tight">
                Welcome, {user?.firstName || "there"}!
              </h1>
              <p className="text-muted-foreground mt-2">
                You are signed in with Clerk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
