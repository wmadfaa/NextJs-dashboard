import { Switch } from "@/components/base";
import { useState } from "react";

function Home() {
  const [checked, setState] = useState<boolean>();
  return (
    <div className="h-full grid place-items-center">
      <Switch checked={checked} onChange={setState} />
    </div>
  );
}

export default Home;
