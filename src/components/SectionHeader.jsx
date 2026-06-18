export const SectionHeader = ({ label, title, highlight, description }) => {
  return (
    <div className="text-center mb-16 max-w-2xl mx-auto">
      {label && (
        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase rounded-full bg-primary/10 text-primary border border-primary/20">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
        {title}{" "}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {description && (
        <p className="text-muted-foreground text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
