function Divider({ content }: { content: string }) {
  return (
    <div className="flex items-center gap-1">
      <div className="h-[2px] w-full bg-foreground/40" />
      <p className="text-sm text-foreground/80">{content}</p>
      <div className="h-[2px] w-full bg-foreground/40" />
    </div>
  );
}

export default Divider;
