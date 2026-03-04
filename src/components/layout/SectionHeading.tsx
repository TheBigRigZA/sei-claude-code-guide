interface SectionHeadingProps {
  number: number;
  title: string;
  id?: string;
}

export default function SectionHeading({ number, title, id }: SectionHeadingProps) {
  return (
    <div id={id} className="flex items-center gap-4 scroll-mt-24 mb-8">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-500/15 text-sm font-bold text-accent-400">
        {number}
      </span>
      <h2 className="text-2xl font-display font-bold text-white sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}
