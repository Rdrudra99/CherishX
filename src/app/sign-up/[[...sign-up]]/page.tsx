import { SignUp } from "@clerk/nextjs";
import { GalleryVerticalEnd } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="grid min-h-svh lg:grid-cols-[10fr_16fr]">
      <div className="bg-muted relative hidden w-full lg:block">
        <img
          src="/signup.jpeg"
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
          <div className="flex w-full max-w-xs justify-center">
            <SignUp />
          </div>
        </div>
      </div>
    </div>
  );
}
