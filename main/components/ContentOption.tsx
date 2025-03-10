import { Plus } from "lucide-react";

export default ({ size }: { size: number }) => {
  return (
    <div className=" cursor-pointer border-[1px] p-2 rounded-full">
      <Plus size={size} />
    </div>
  );
};
