type SectionLabelProps = {
  number: string;
  label: string;
};

export function SectionLabel({ number, label }: SectionLabelProps) {
  return (
    <div className="section-label" aria-label={`Section ${number}: ${label}`}>
      <span className="section-label__number" aria-hidden="true">
        {number}
      </span>
      <span className="section-label__rule" aria-hidden="true" />
      <span className="section-label__text">{label}</span>
    </div>
  );
}
