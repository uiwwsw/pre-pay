import { FirebaseDocData } from "#/firebase/domain";
import { Log } from "#/log/domain";
import { getList } from "#/log/getList";
import { FirebaseContext } from "@/FirebaseContext";
import { SequentialAnimation } from "@/SequentialAnimation";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { format } from "date-fns";
import { useContext } from "react";
import { Placeholder, Table } from "rsuite";

export const Route = createFileRoute("/auth/history/")({
  component: RouteComponent,
});
function RenderLoading() {
  return (
    <div>
      <Placeholder.Grid rows={9} columns={4} active />
    </div>
  );
}
function RouteComponent() {
  const router = useRouter();
  const { user } = useContext(FirebaseContext);
  const { data, isLoading } = useQuery({
    enabled: !!user?.uid,
    queryKey: ["notification"],
    queryFn: () => getList(user!.uid),
    staleTime: 0,
    gcTime: 0,
  });

  return (
    <SequentialAnimation isLoading={isLoading}>
      <Table
        loading={isLoading}
        height={400}
        data={data}
        className="text-black bg-white"
        renderLoading={RenderLoading}
        onRowClick={(rowData: Log & FirebaseDocData) =>
          router.history.push(`/auth/history/detail/${rowData.id}`)
        }
      >
        <Table.Column width={100} align="center" fixed>
          <Table.HeaderCell>금액</Table.HeaderCell>
          <Table.Cell>
            {(rowData: Log & FirebaseDocData) =>
              rowData.amount.toLocaleString() + "원"
            }
          </Table.Cell>
        </Table.Column>
        <Table.Column width={100} align="center">
          <Table.HeaderCell>분류</Table.HeaderCell>
          <Table.Cell>
            {(rowData: Log & FirebaseDocData) =>
              rowData.recharge ? "충전" : "지출"
            }
          </Table.Cell>
        </Table.Column>

        <Table.Column width={160} align="center">
          <Table.HeaderCell>일시</Table.HeaderCell>
          <Table.Cell>
            {(rowData: Log & FirebaseDocData) =>
              format(
                new Date(rowData.created.seconds * 1000),
                "yyyy-MM-dd HH:mm"
              )
            }
          </Table.Cell>
        </Table.Column>

        <Table.Column align="center">
          <Table.HeaderCell>상호명</Table.HeaderCell>
          <Table.Cell dataKey="storeName" />
        </Table.Column>
        <Table.Column align="center">
          <Table.HeaderCell>확인</Table.HeaderCell>
          <Table.Cell>
            {(rowData: Log & FirebaseDocData) =>
              rowData.confirm ? (
                <span className="text-blue-700">확인</span>
              ) : (
                <span className="text-red-700">미확인</span>
              )
            }
          </Table.Cell>
        </Table.Column>
      </Table>
    </SequentialAnimation>
  );
}
