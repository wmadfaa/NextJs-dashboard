import { Badge } from "@/components/base";

function Home() {
  return (
    <div className="h-full grid place-items-center">
      <div className="grid grid-cols-3 gap-3">
        <Badge theme="dark">2</Badge>
        <Badge theme="primary">2</Badge>
        <Badge theme="yellow">2</Badge>
        <Badge theme="green">2</Badge>
        <Badge theme="red">2</Badge>
      </div>
      <div className="dark grid grid-cols-3 gap-3 bg-dark p-10">
        <Badge theme="dark">2</Badge>
        <Badge theme="primary">2</Badge>
        <Badge theme="yellow">2</Badge>
        <Badge theme="green">2</Badge>
        <Badge theme="red">2</Badge>
      </div>
    </div>
  );
}

export default Home;
