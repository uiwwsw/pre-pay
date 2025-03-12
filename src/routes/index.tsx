import { getStores } from "#/store/getStores";
import { SequentialAnimation } from "@/SequentialAnimation";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useMemo } from "react";
import { SelectPicker } from "rsuite";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});
function RouteComponent() {
  const router = useRouter();
  const { data, isLoading } = useQuery({
    queryKey: ["store"],
    queryFn: getStores,
  });
  const storeList = useMemo(
    () => data?.map((x) => ({ value: x.name, label: x.name })) ?? [],
    [data]
  );
  const handleSubmit = (value: string | null) => {
    if (value) router.history.push(`/store/${value}`);
  };
  return (
    <SequentialAnimation isLoading={isLoading}>
      <SelectPicker
        onChange={handleSubmit}
        className="m-auto"
        placeholder="가게를 고르세요"
        data={storeList}
      />
    </SequentialAnimation>
  );
}
