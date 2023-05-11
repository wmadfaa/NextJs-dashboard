import { Footer } from "@/components/layout";
import ThemeSwitch from "@/components/ThemeSwitch";

function Home() {
  return (
    <Footer
      links={[
        { label: "Privacy Policy", href: "#" },
        { label: "License", href: "#" },
        { label: "API", href: "#" },
      ]}
      actions={
        <>
          <ThemeSwitch theme="light" onChange={console.log} />
        </>
      }
    />
  );
}

export default Home;
