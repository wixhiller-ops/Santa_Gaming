import Lightning from "./Lightning";
function LightningBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {/* Customize the effect via props */}
      <Lightning hue={220} speed={0.9} intensity={1.5} size={1.2} />
    </div>
  );
}
export default LightningBackground;