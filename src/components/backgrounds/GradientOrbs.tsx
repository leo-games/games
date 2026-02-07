export function GradientOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
      <div className="orb-1 absolute -top-32 -left-32 h-96 w-96 rounded-full bg-grad-purple/20 blur-[128px]" />
      <div className="orb-2 absolute top-1/3 -right-48 h-[500px] w-[500px] rounded-full bg-grad-blue/15 blur-[128px]" />
      <div className="orb-3 absolute -bottom-24 left-1/3 h-80 w-80 rounded-full bg-grad-fuchsia/15 blur-[128px]" />
    </div>
  );
}
