import { Input, Select } from "@/components/base";

const options = [
  {
    label: "group 1",
    options: [
      { value: "chocolate", label: "Chocolate" },
      { value: "strawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" },
    ],
  },
  {
    label: "group 2",
    options: [
      { value: "chocolate 2", label: "Chocolate" },
      { value: "strawberry 2", label: "Strawberry" },
      { value: "vanilla 2", label: "Vanilla" },
    ],
  },
];

function Home() {
  return (
    <div className="h-full grid place-items-center">
      <Select options={options} isClearable isMulti />
      <Input name={"email"} placeholder="Hi" />
    </div>
  );
}

export default Home;
