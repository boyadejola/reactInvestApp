import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useDispatch } from "react-redux";
import TableHead from "@mui/material/TableHead";
import i18next from "i18next";

const rows = [
  {
    id: "driver",
    align: "center",
    disablePadding: false,
    label: "SUBJECT",
    sort: false,
  },
  {
    id: "vehisscle",
    align: "center",
    disablePadding: false,
    label: "STATUS",
    sort: false,
  },
  {
    id: "vehicle",
    align: "center",
    disablePadding: false,
    label: "LASTREPLY",
    sort: false,
  },
  {
    id: "emirates",
    align: "left",
    disablePadding: false,
    label: "ACTION",
    sort: false,
  },
];

function SupportTicket(props) {
  const dispatch = useDispatch();

  return (
    <TableHead>
      <TableRow className="h-48 sm:h-64">
        {rows.map((row, o) => {
          return (
            <TableCell
              className="p-4 md:p-16"
              key={o}
              align={row.align}
              padding={row.disablePadding ? "none" : "normal"}
              style={{ paddingLeft: row.id == "driver" ? 22 : "" }}
              // sortDirection={props.order.id === row.id ? props.order.direction : false}
            >
              {i18next.t(`navigation:${row.label}`)}
            </TableCell>
          );
        }, this)}
      </TableRow>
    </TableHead>
  );
}

export default SupportTicket;
