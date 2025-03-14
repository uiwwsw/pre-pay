import { getNew } from "#/order/getNew";
import { FirebaseContext } from "@/FirebaseContext";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { format } from "date-fns";
import { Timestamp } from "firebase/firestore";
import { useContext, useMemo } from "react";
import { Table } from "rsuite";

export const Route = createFileRoute("/auth/notification")({
  component: RouteComponent,
});

function RouteComponent() {
  const { user } = useContext(FirebaseContext);
  const { data } = useQuery({
    enabled: !!user?.uid,
    queryKey: ["notification"],
    queryFn: () => getNew(user!.uid),
  });
  const tableData = useMemo(() => {
    console.log(data);
    if (!data) return [];

    const [orderData, rechargeData] = data;
    return orderData.concat(rechargeData).map((x) => ({
      ...x,
      amount: x.amount.toLocaleString() + "원",
      created: format(new Date(x.created.seconds * 1000), "yyyy-MM-dd HH:mm"),
    }));
  }, [data]);

  return (
    <Table height={400} data={tableData} className="text-black">
      <Table.Column width={60} align="center" fixed>
        <Table.HeaderCell>금액</Table.HeaderCell>
        <Table.Cell dataKey="amount" />
      </Table.Column>

      <Table.Column width={160} align="center">
        <Table.HeaderCell>일시</Table.HeaderCell>
        <Table.Cell dataKey="created" />
      </Table.Column>

      <Table.Column>
        <Table.HeaderCell>상호명</Table.HeaderCell>
        <Table.Cell dataKey="storeName" />
      </Table.Column>
    </Table>
  );
}
