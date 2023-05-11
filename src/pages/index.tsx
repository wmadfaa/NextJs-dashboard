import { Footer } from "@/components/layout";

function Home() {
  return (
    <Footer
      links={[
        { label: "Privacy Policy", href: "#" },
        { label: "License", href: "#" },
        { label: "API", href: "#" },
      ]}
    />
  );
}

export default Home;
