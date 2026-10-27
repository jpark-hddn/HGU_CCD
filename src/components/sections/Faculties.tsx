import { getFaculty } from "@/lib/api/faculty";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FacultyDirectory } from "./FacultyDirectory";

export async function Faculties() {
  const faculty = await getFaculty();

  return (
    <section aria-labelledby="faculties" className="scroll-mt-4">
      <SectionHeading id="faculties" title="Faculties" />
      <FacultyDirectory faculty={faculty} />
    </section>
  );
}
