"use client";
import { useChat } from "@ai-sdk/react";
import { useState } from "react";
import { Textarea } from "./textarea";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Messages } from "./messages";
import { toast } from "sonner";
import { ChatHeader } from "./chatHeader";
import { ProjectOverview } from "./project-overview";
import { defaultModel, modelID } from "../ai/providers";
import { UserButton, useUser } from "@clerk/nextjs";
import { CircleAlertIcon, Heart, MessageCircle, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Chat() {
  const { isSignedIn, user } = useUser();
  const [selectedModel, setSelectedModel] = useState<modelID>(defaultModel);
  const { messages, input, handleInputChange, handleSubmit, status, stop } =
    useChat({
      maxSteps: 5,
      body: {
        selectedModel,
      },
      onError: (error) => {
        toast.error(
          error.message.length > 0
            ? error.message
            : "An error occurred, please try again later.",
          { position: "top-center", richColors: true },
        );
      },
    });

  const isLoading = status === "streaming" || status === "submitted";

  return (
    <div className="flex h-screen w-full flex-col">
      {/* Fixed Header */}
      <div className="sticky top-0 z-10 w-full border-b border-zinc-200/50 bg-white/95 backdrop-blur-md dark:border-zinc-800/50 dark:bg-zinc-950/95">
        <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          {/* Logo Section */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              href="/"
              className="group flex items-center gap-2 transition-all duration-300 hover:scale-105 sm:gap-3"
            >
              <div className="relative">
                <Heart className="h-6 w-6 fill-current text-[#ff6154] group-hover:animate-pulse sm:h-7 sm:w-7" />
                <Sparkles className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 text-[#ff6154] group-hover:animate-bounce sm:-right-1 sm:-top-1 sm:h-3 sm:w-3" />
              </div>
              <div className="flex flex-col">
                <h1 className="bg-gradient-to-r from-[#ff6154] to-[#ff8a7a] bg-clip-text text-lg font-bold text-transparent sm:text-xl">
                  CherishX AI
                </h1>
                <div className="h-0.5 w-full rounded-full bg-gradient-to-r from-[#ff6154] to-[#ff8a7a] opacity-60"></div>
              </div>
            </Link>
          </div>

          {/* Navigation & User Section */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Clear Chats Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <button className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#ff6154]/10 to-[#ff8a7a]/10 px-2 py-1.5 text-xs font-medium text-zinc-700 transition-all hover:scale-105 hover:from-[#ff6154]/20 hover:to-[#ff8a7a]/20 dark:text-zinc-300 sm:gap-2 sm:px-3 sm:py-2 sm:text-sm">
                  <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">Clear Chats</span>
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <div className="flex flex-col items-center gap-4">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950"
                    aria-hidden="true"
                  >
                    <CircleAlertIcon className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                  <DialogHeader className="text-center">
                    <DialogTitle className="text-center text-lg font-semibold">
                      Clear All Chats?
                    </DialogTitle>
                    <DialogDescription className="text-center text-sm text-zinc-600 dark:text-zinc-400">
                      This action cannot be undone. All your chat history will
                      be permanently deleted.
                    </DialogDescription>
                  </DialogHeader>
                </div>
                <DialogFooter className="flex-col gap-2 sm:flex-row">
                  <DialogClose asChild>
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1 border-zinc-200 hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-800"
                    >
                      Cancel
                    </Button>
                  </DialogClose>
                  <Button
                    type="button"
                    className="flex-1 bg-red-600 text-white hover:bg-red-700"
                  >
                    Clear All Chats
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            {/* User Profile */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="hidden flex-col items-end md:flex">
                <span className="max-w-24 truncate text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {user?.firstName || "User"}
                </span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                  AI Assistant
                </span>
              </div>
              <div className="rounded-full">
                <div className="rounded-full bg-white dark:bg-zinc-950">
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox: "w-7 h-7 sm:w-8 sm:h-8",
                        userButtonPopoverCard: "shadow-xl border-0",
                        userButtonPopoverActionButton: "hover:bg-[#ff6154]/10",
                      },
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-hidden">
        {messages.length === 0 ? (
          <div className="flex h-full items-center justify-center px-4">
            <div className="w-full max-w-xl">
              <ProjectOverview />
            </div>
          </div>
        ) : (
          <div className="h-full overflow-y-auto">
            <Messages
              messages={messages}
              isLoading={isLoading}
              status={status}
            />
          </div>
        )}
      </div>

      {/* Fixed Input Area */}
      <div className="sticky bottom-0 z-10 border-t border-zinc-200/50 bg-white dark:border-zinc-800/50 dark:bg-black">
        <div className="mx-auto w-full max-w-4xl px-4 py-4 sm:px-6 sm:py-6">
          <form onSubmit={handleSubmit} className="w-full">
            <Textarea
              selectedModel={selectedModel}
              setSelectedModel={setSelectedModel}
              handleInputChange={handleInputChange}
              input={input}
              isLoading={isLoading}
              status={status}
              stop={stop}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
