"use client";

import { useChat } from "@ai-sdk/react";
import { useState } from "react";
import { Textarea } from "./textarea";

import { Messages } from "./messages";
import { toast } from "sonner";
import { ChatHeader } from "./chatHeader";
import { ProjectOverview } from "./project-overview";
import { defaultModel, modelID } from "../ai/providers";

export default function Chat() {
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
            : "An error occured, please try again later.",
          { position: "top-center", richColors: true },
        );
      },
    });

  const isLoading = status === "streaming" || status === "submitted";

  return (
    <div className="stretch flex h-dvh w-full flex-col justify-center">
      {messages.length === 0 ? (
        <div className="mx-auto w-full max-w-xl">
          <ProjectOverview />
        </div>
      ) : (
        <Messages messages={messages} isLoading={isLoading} status={status} />
      )}
      <form
        onSubmit={handleSubmit}
        className="mx-auto w-full max-w-xl bg-white px-4 pb-8 dark:bg-black sm:px-0"
      >
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
  );
}
