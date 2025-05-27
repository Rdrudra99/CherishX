"use client";
import { cn } from "@/lib/utils";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Heart,
  MessageCircle,
  Shield,
  Users,
  Lightbulb,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContentSection() {
  return (
    <section>
      <div className="bg-muted/50 py-24">
        <div className="mx-auto w-full max-w-3xl px-6">
          <div>
            <span style={{ color: "#ff6154" }}>AI Relationship Coach</span>
            <h2 className="mt-4 text-4xl font-semibold text-foreground">
              Personalized Guidance for Every Relationship
            </h2>
            <p className="mb-12 mt-4 text-lg text-muted-foreground">
              Navigate relationship challenges with confidence. CherishX AI
              provides personalized advice, communication tools, and insights to
              help you build stronger, healthier connections with those you
              love.
            </p>
          </div>

          <div className="space-y-6 border-foreground/5 [--color-border:color-mix(in_oklab,var(--color-foreground)10%,transparent)] sm:space-y-0 sm:divide-y">
            <div className="grid sm:grid-cols-5 sm:divide-x">
              <RelationshipInsightsIllustration className="sm:col-span-2" />
              <div className="mt-6 sm:col-span-3 sm:mt-0 sm:border-l sm:pl-12">
                <h3 className="text-xl font-semibold text-foreground">
                  Smart Relationship Insights
                </h3>
                <p className="mt-4 text-lg text-muted-foreground">
                  Get personalized analysis of your relationship patterns,
                  communication style, and areas for growth. Our AI identifies
                  key insights to help you understand and improve your
                  connections.
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-5 sm:divide-x">
              <div className="pt-12 sm:col-span-3 sm:border-r sm:pr-12">
                <h3 className="text-xl font-semibold text-foreground">
                  Private & Secure Conversations
                </h3>
                <p className="mt-4 text-lg text-muted-foreground">
                  Share your relationship challenges in a completely private
                  environment. Your conversations are encrypted and secure,
                  giving you the freedom to be open and honest about your
                  feelings.
                </p>
              </div>
              <div className="row-start-1 flex items-center justify-center pt-12 sm:col-span-2 sm:row-start-auto">
                <PrivacyIllustration className="pt-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type IllustrationProps = {
  className?: string;
  variant?: "elevated" | "outlined" | "mixed";
};

export const PrivacyIllustration = ({
  className,
  variant = "elevated",
}: IllustrationProps) => {
  return (
    <div className={cn("relative", className)}>
      <div
        className={cn(
          "-translate-x-1/8 absolute flex -translate-y-[110%] items-center gap-2 rounded-lg bg-background p-1",
          {
            "shadow-black-950/10 shadow-lg": variant === "elevated",
            "border border-foreground/10": variant === "outlined",
            "border border-foreground/10 shadow-md shadow-black/5":
              variant === "mixed",
          },
        )}
      >
        <Button
          size="sm"
          className="rounded-sm"
          style={{ backgroundColor: "#ff6154", borderColor: "#ff6154" }}
        >
          <Shield className="size-3" />
          <span className="text-sm font-medium">Private</span>
        </Button>
        <span className="block h-4 w-px bg-border"></span>
        <ToggleGroup type="multiple" size="sm" className="gap-0.5 *:rounded-md">
          <ToggleGroupItem value="heart" aria-label="Relationship focus">
            <Heart className="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="message" aria-label="Communication">
            <MessageCircle className="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="users" aria-label="Relationships">
            <Users className="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="lightbulb" aria-label="Insights">
            <Lightbulb className="size-4" />
          </ToggleGroupItem>
        </ToggleGroup>
        <span className="block h-4 w-px bg-border"></span>
        <Button size="icon" className="size-8" variant="ghost">
          <Clock className="size-3" />
        </Button>
      </div>
      <span>
        <span
          className="bg-secondary py-1 text-secondary-foreground"
          style={{ backgroundColor: "#ff6154", color: "white" }}
        >
          24/7 Available
        </span>{" "}
        for your relationship questions.
      </span>
    </div>
  );
};

export const RelationshipInsightsIllustration = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_50%,transparent_100%)]",
        className,
      )}
    >
      <ul className="mx-auto w-fit font-mono text-2xl font-medium text-muted-foreground">
        {["Communication", "Trust", "Intimacy", "Conflict", "Growth"].map(
          (item, index) => (
            <li
              key={index}
              className={cn(
                index == 2 &&
                  "text-foreground before:absolute before:-translate-x-[110%] before:content-['Focus']",
              )}
              style={index == 2 ? { color: "#ff6154" } : {}}
            >
              {item}
            </li>
          ),
        )}
      </ul>
    </div>
  );
};
