import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <Hero
        src="https://heroui.com/images/card-example-2.jpeg"
        alt="Abstract dark background for portfolio hero"
        title={"Hey, I'm Rodrigo Silva but you can call me Caliver!"}
        highlightWord="Caliver"
        subtitle={"I'm a full stack developer with 12+ years of experience and an aspiring software architect"}
        overlayStrength="medium"
        primaryCta={{ href: "/work", label: "See my work" }}
        secondaryCta={{ href: "/contact", label: "Contact me" }}
        scrollToId="home-content"
      />

      {/* Placeholder para próximas seções da home */}
      <div id="home-content" />
    </div>
  );
}
