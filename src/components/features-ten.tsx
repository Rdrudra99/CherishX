import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowUp,
  Heart,
  MessageCircle,
  Sparkles,
  Brain,
  Zap,
  Shield,
  Clock,
} from "lucide-react";

export default function FeaturesSection() {
  return (
    <section>
      <div className="py-24">
        <div className="mx-auto w-full max-w-3xl px-6">
          <h2 className="text-balance text-3xl font-semibold text-foreground md:text-4xl">
            <span className="text-muted-foreground">
              Experience the future of
            </span>{" "}
            AI conversations
          </h2>
          <div className="mt-12 grid gap-12 sm:grid-cols-2">
            <div className="col-span-full space-y-4">
              <Card
                //
                className="overflow-hidden px-6 sm:col-span-2"
              >
                <div className="mask-b-from-75% mx-auto -mt-2 max-w-sm px-2 pt-8">
                  <AIAssistantIllustration />
                </div>
              </Card>
              <div className="max-w-md sm:col-span-3">
                <h3 className="text-lg font-semibold text-foreground">
                  Intelligent AI Chat Assistant
                </h3>
                <p className="mt-3 text-balance text-muted-foreground">
                  CherishX AI provides thoughtful, contextual responses with
                  persistent chat history and seamless conversation flow.
                </p>
              </div>
            </div>
            <div className="grid grid-rows-[1fr_auto] space-y-4">
              <Card className="p-6">
                <ChatHistoryIllustration />
              </Card>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Persistent Chat Memory
                </h3>
                <p className="mt-3 text-balance text-muted-foreground">
                  Your conversations are saved locally and restored when you
                  return, ensuring continuity in your AI interactions.
                </p>
              </div>
            </div>

            <div className="grid grid-rows-[1fr_auto] space-y-4">
              <Card className="overflow-hidden p-6">
                <SmartFeaturesIllustration />
              </Card>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Smart & Secure Experience
                </h3>
                <p className="mt-3 text-balance text-muted-foreground">
                  Fast responses, secure authentication, and intuitive interface
                  designed for seamless AI conversations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const ChatHistoryIllustration = () => {
  return (
    <Card aria-hidden className="p-4">
      <div className="mb-4 flex items-center gap-2">
        <div className="flex items-center gap-1.5">
          <Heart className="h-4 w-4 fill-current text-[#ff6154]" />
          <span className="text-sm font-semibold text-[#ff6154]">
            CherishX AI
          </span>
        </div>
        <div className="ml-auto">
          <MessageCircle className="h-4 w-4 text-muted-foreground" />
        </div>
      </div>

      <div className="space-y-3">
        <div className="rounded-lg bg-muted/50 p-2">
          <div className="mb-1 text-xs text-muted-foreground">Today</div>
          <div className="text-sm">How can I optimize my workflow?</div>
        </div>

        <div className="rounded-lg bg-muted/30 p-2">
          <div className="mb-1 text-xs text-muted-foreground">Yesterday</div>
          <div className="text-sm">Explain quantum computing basics</div>
        </div>

        <div className="rounded-lg bg-muted/20 p-2">
          <div className="mb-1 text-xs text-muted-foreground">Last week</div>
          <div className="text-sm">Help with project planning</div>
        </div>
      </div>

      <div className="mt-4 border-t pt-3">
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            All chats saved locally
          </span>
          <Shield className="h-3 w-3 text-green-500" />
        </div>
      </div>
    </Card>
  );
};

const SmartFeaturesIllustration = () => {
  return (
    <div aria-hidden className="relative">
      <Card className="p-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-yellow-500" />
              <span className="text-xs font-medium">Fast Response</span>
            </div>
            <div className="h-1 w-full rounded-full bg-yellow-100">
              <div className="h-1 w-4/5 rounded-full bg-yellow-500"></div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Brain className="h-4 w-4 text-purple-500" />
              <span className="text-xs font-medium">Smart AI</span>
            </div>
            <div className="h-1 w-full rounded-full bg-purple-100">
              <div className="h-1 w-full rounded-full bg-purple-500"></div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-green-500" />
              <span className="text-xs font-medium">Secure Auth</span>
            </div>
            <div className="h-1 w-full rounded-full bg-green-100">
              <div className="h-1 w-full rounded-full bg-green-500"></div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-blue-500" />
              <span className="text-xs font-medium">24/7 Available</span>
            </div>
            <div className="h-1 w-full rounded-full bg-blue-100">
              <div className="h-1 w-full rounded-full bg-blue-500"></div>
            </div>
          </div>
        </div>

        <div className="mt-4 border-t pt-3">
          <div className="text-center">
            <Sparkles className="mx-auto h-5 w-5 fill-current text-[#ff6154]" />
            <div className="mt-1 text-xs text-muted-foreground">
              Powered by Advanced AI
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

const AIAssistantIllustration = () => {
  return (
    <Card
      aria-hidden
      className="p-4 transition-transform duration-200 group-hover:translate-y-0"
    >
      <div className="max-w-3/4 ml-auto w-fit">
        <p className="mb-2 rounded-l-2xl rounded-t-2xl rounded-br border border-foreground/5 bg-foreground/5 p-4 text-sm">
          Hello! I'm CherishX AI. How can I help you today? I can assist with
          questions, creative tasks, problem-solving, and much more.
        </p>
        <span className="block text-right text-xs text-muted-foreground">
          Just now
        </span>
      </div>
      <div className="w-fit">
        <div className="mb-2 flex items-center gap-1.5">
          <Heart className="size-3.5 fill-[#ff6154] stroke-[#ff6154]" />
          <Sparkles className="size-3 fill-[#ff6154] stroke-[#ff6154]" />
        </div>
        <p className="mt-2 line-clamp-2 text-sm">
          What's the best way to learn a new programming language effectively?
        </p>
      </div>
      <div className="-mx-3 -mb-3 mt-3 space-y-3 rounded-lg border border-[#ff6154]/10 bg-gradient-to-r from-[#ff6154]/5 to-[#ff8a7a]/5 p-3">
        <div className="text-sm text-muted-foreground">Ask CherishX AI</div>

        <div className="flex justify-between">
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="size-7 rounded-2xl border-[#ff6154]/20 bg-transparent shadow-none hover:bg-[#ff6154]/10"
            >
              <MessageCircle className="h-3 w-3" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="size-7 rounded-2xl border-[#ff6154]/20 bg-transparent shadow-none hover:bg-[#ff6154]/10"
            >
              <Heart className="h-3 w-3" />
            </Button>
          </div>

          <Button
            size="icon"
            className="size-7 rounded-2xl bg-gradient-to-r from-[#ff6154] to-[#ff8a7a] hover:from-[#ff6154]/90 hover:to-[#ff8a7a]/90"
          >
            <ArrowUp strokeWidth={3} className="h-3 w-3" />
          </Button>
        </div>
      </div>
    </Card>
  );
};
