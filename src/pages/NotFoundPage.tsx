import { GradientText } from "../components/ui/GradientText";
import { Button } from "../components/ui/Button";
import { Home } from "lucide-react";

export function NotFoundPage() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
      <GradientText as="h1" className="mb-2 text-7xl sm:text-9xl">
        404
      </GradientText>
      <p className="mb-8 text-lg text-text-muted">
        This page doesn't exist — maybe it's still loading?
      </p>
      <Button to="/">
        <Home className="h-4 w-4" />
        Go Home
      </Button>
    </div>
  );
}
