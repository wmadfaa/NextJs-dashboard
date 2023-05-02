import { ProgressBar } from "@/components/base";

function Home() {
  return (
    <div className="h-full grid place-items-center">
      <div className="h-[600px]">
        <ProgressBar progress={Math.random()} mapProgress2Theme direction="vert" />
      </div>
    </div>
  );
}

export default Home;
