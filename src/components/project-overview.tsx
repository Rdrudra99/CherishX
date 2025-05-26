import { Heart, Sparkles } from "lucide-react";
import NextLink from "next/link";

export const ProjectOverview = () => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-12">
      <div className="max-w-2xl space-y-8 text-center">
        {/* Logo/Brand Section */}
        <div className="space-y-4">
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="relative">
              <Heart className="h-8 w-8 animate-pulse fill-current text-[#ff6154]" />
              <Sparkles className="absolute -right-1 -top-1 h-4 w-4 animate-bounce text-[#ff6154]" />
            </div>
            <h1 className="bg-gradient-to-r from-[#ff6154] to-[#ff8a7a] bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              CherishX AI
            </h1>
          </div>

          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-[#ff6154] to-[#ff8a7a]"></div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold leading-tight text-gray-900 dark:text-gray-100 md:text-3xl">
            Your Personal Relationship Advisor
          </h2>

          <p className="mx-auto max-w-xl text-lg leading-relaxed text-gray-600 dark:text-gray-300 md:text-xl">
            Share your{" "}
            <span className="font-semibold text-[#ff6154]">
              relationship challenges
            </span>{" "}
            and get{" "}
            <span className="font-semibold text-[#ff6154]">
              personalized guidance
            </span>{" "}
            from CherishX AI.
          </p>

          <p className="text-base text-gray-500 dark:text-gray-400">
            Private conversations. Thoughtful advice. Real solutions for modern
            relationships.
          </p>
        </div>
      </div>
    </div>
  );
};
