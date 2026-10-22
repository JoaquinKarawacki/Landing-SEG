export default function VideoInstitucional() {
  return (
    <section
      className="relative w-full h-[110vh] overflow-hidden bg-black"
      aria-hidden="true"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
