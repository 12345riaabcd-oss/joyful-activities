import { Button } from "@/components/ui/button";

interface Props {
  onGoHome: () => void;
}

const AffirmationScreen = ({ onGoHome }: Props) => (
  <div className="animate-fade-in-up space-y-8 text-center">
    <div className="space-y-4 py-8">
      <span className="text-5xl">🌸</span>
      <h1 className="text-[22px] font-heading font-semibold text-foreground">
        You Took a Beautiful Step
      </h1>
    </div>

    <div className="space-y-5 text-foreground font-body leading-relaxed px-4">
      <p className="text-lg">
        Reconnecting with what brings you joy — even in the smallest way — is an act of kindness toward yourself.
      </p>
      <p className="text-muted-foreground">
        You deserve moments of lightness and peace. Keep nurturing what makes your heart feel full. 💛
      </p>
    </div>

    <Button variant="calm" size="lg" onClick={onGoHome}>
      Back to Home
    </Button>
  </div>
);

export default AffirmationScreen;
