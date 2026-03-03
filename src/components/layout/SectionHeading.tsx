interface SectionHeadingProps {
  number: number;
  title: string;
  id?: string;
}

export default function SectionHeading({ number, title, id }: SectionHeadingProps) {
  return (
    <div id={id} className="flex items-center gap-4 scroll-mt-24 mb-8">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500 text-sm font-bold text-white shadow-md shadow-brand-500/25">
        {number}
      </span>
      <h2 className="text-2xl font-bold text-surface-900 sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}
