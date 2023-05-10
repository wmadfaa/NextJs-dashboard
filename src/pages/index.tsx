import { Radio } from "@/components/base";

function Home() {
  return (
    <div className="h-full grid place-items-center">
      <Radio name="test" label="label" helpText="help text" disabled />
    </div>
  );
}

export default Home;
