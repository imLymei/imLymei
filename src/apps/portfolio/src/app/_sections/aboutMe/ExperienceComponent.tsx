type ExperienceComponentProps = {
  employer: string;
  role: string;
  period?: string;
  description: string;
};

export default function ExperienceComponent({
  description,
  employer,
  role,
  period,
}: ExperienceComponentProps) {
  return (
    <li>
      <div>
        <p className="text-lg font-bold">{employer}</p>
        <div className="flex flex-col md:flex-row md:gap-2">
          <p>{role}</p>
          {period && <p className="text-violet-500">({period})</p>}
        </div>
      </div>
      <p className="text-neutral-500 md:pl-4">{description}</p>
    </li>
  );
}
