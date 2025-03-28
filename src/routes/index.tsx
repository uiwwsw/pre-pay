import { getAllStores } from "#/store/getAllStores";
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
    queryKey: ["all-stores"],
    queryFn: getAllStores,
  });
  const storeList = useMemo(
    () => data?.map((x) => ({ value: x.id, label: x.name })) ?? [],
    [data]
  );
  const handleSubmit = (value: string | null) => {
    if (value) router.history.push(`/store/${value}`);
  };
  return (
    <SequentialAnimation isLoading={isLoading}>
      <SelectPicker
        // appearance="primary"
        // color="violet"
        onChange={handleSubmit}
        placeholder="가게를 고르세요"
        data={storeList}
      />
    </SequentialAnimation>
  );
}
