import Image from "next/image";
export function StudioFallback({ loading = false }: { loading?: boolean }) {
  return (
    <div className="studio-fallback">
      <Image
        width={900}
        height={650}
        src="/studio-fallback.svg"
        unoptimized
        alt="Illustration of my desk with landscape and portrait monitors, laptop, microphone and server cabinet"
      />
      <span>
        {loading ? "Setting up the studio…" : "A quieter view of the studio."}
      </span>
    </div>
  );
}
