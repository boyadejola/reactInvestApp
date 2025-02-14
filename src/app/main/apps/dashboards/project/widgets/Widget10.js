import Icon from "@mui/material/Icon";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import clsx from "clsx";
import { memo } from "react";

function Widget10(props) {
  return (
    <Paper className="w-full rounded-20 shadow overflow-hidden">
      <div className="flex items-center justify-between p-20 h-64">
        <Typography className="text-16 font-medium">
          {props.widget.title}
        </Typography>
      </div>
      <div className="table-responsive">
        <Table className="w-full min-w-full">
          <TableHead>
            <TableRow>
              {props.widget.table.columns.map((column) => (
                <TableCell key={column.id}>
                  <Typography
                    color="textSecondary"
                    className="font-semibold whitespace-nowrap"
                  >
                    {column.title}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.widget.table.rows.map((row) => (
              <TableRow key={row.id} className="h-64">
                {row.cells.map((cell) => {
                  switch (cell.id) {
                    case "budget_type": {
                      return (
                        <TableCell key={cell.id} component="th" scope="row">
                          <Typography
                            className={clsx(
                              cell.classes,
                              "inline text-11 font-500 px-8 py-4 rounded-4"
                            )}
                          >
                            {cell.value}
                          </Typography>
                        </TableCell>
                      );
                    }
                    case "spent_perc": {
                      return (
                        <TableCell key={cell.id} component="th" scope="row">
                          <Typography
                            className={clsx(
                              cell.classes,
                              "flex items-center font-medium"
                            )}
                          >
                            {cell.value}
                            <Icon className="text-14 mx-4">{cell.icon}</Icon>
                          </Typography>
                        </TableCell>
                      );
                    }
                    default: {
                      return (
                        <TableCell key={cell.id} component="th" scope="row">
                          <Typography className={cell.classes}>
                            {cell.value}
                          </Typography>
                        </TableCell>
                      );
                    }
                  }
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Paper>
  );
}

export default memo(Widget10);
