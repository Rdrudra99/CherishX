import Chat from "@/components/chat";
import React from "react";

const Page = () => {
  return (
    <div className="grid min-h-svh lg:grid-cols-[10fr_16fr]">
      <div className="bg-muted relative hidden w-full lg:block">
        <img
          src="/signup.jpeg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-1 items-center justify-center">
          <div className="flex w-full justify-center">
            <Chat />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
