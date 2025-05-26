"use client";
import Link from "next/link";
import { UserButton, SignInButton, useUser } from "@clerk/nextjs";
import { Heart, Sparkles, MessageCircle, Settings } from "lucide-react";

export const ChatHeader = () => {
  const { isSignedIn, user } = useUser();

  return <></>;
};
