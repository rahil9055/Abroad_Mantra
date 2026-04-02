const PlaceholderPage = ({ title }: { title: string }) => {
  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="font-heading text-4xl font-bold text-foreground mb-4">{title}</h1>
        <p className="text-muted-foreground text-lg">This page is coming soon. Stay tuned!</p>
      </div>
    </div>
  );
};

export default PlaceholderPage;
