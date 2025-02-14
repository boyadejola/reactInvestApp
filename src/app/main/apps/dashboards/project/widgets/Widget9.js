import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import _ from "@lodash";
import { memo, useState } from "react";
import ReactApexChart from "react-apexcharts";
import MenuItem from "@mui/material/MenuItem";

function Widget9(props) {
  const [currentRange, setCurrentRange] = useState(props.widget.currentRange);
  const widget = _.merge({}, props.widget);
  const theme = useTheme();

  function handleChangeRange(ev) {
    setCurrentRange(ev.target.value);
  }

  return (
    <Paper className="w-full rounded-20 shadow">
      <div className="flex items-center justify-between p-20 h-64">
        <Typography className="text-16 font-medium">{widget.title}</Typography>

        <Select
          value={currentRange}
          onChange={handleChangeRange}
          inputProps={{
            name: "currentRange",
          }}
          classes={{ select: "py-8" }}
          variant="filled"
        >
          {Object.entries(widget.ranges).map(([key, n]) => {
            return (
              <MenuItem key={key} value={key}>
                {n}
              </MenuItem>
            );
          })}
        </Select>
      </div>
      {["weeklySpent", "totalSpent", "remaining"].map((id) => (
        <div className="flex flex-wrap items-center w-full p-12" key={id}>
          <div className="flex flex-col w-full sm:w-1/2 p-8">
            <Typography className="text-13 font-semibold" color="textSecondary">
              {widget[id].title}
            </Typography>
            <div className="flex items-center">
              <Typography className="text-32 font-normal" color="textSecondary">
                $
              </Typography>
              <Typography className="text-32 mx-4 font-medium tracking-tighter">
                {widget[id].count[currentRange]}
              </Typography>
            </div>
          </div>
          <div className="flex w-full sm:w-1/2">
            <div className="h-64 w-full">
              <ReactApexChart
                options={{
                  ...widget[id].chart.options,
                  colors: [theme.palette.secondary.main],
                }}
                series={widget[id].chart[currentRange].series}
                type={widget[id].chart.options.chart.type}
                height={widget[id].chart.options.chart.height}
              />
            </div>
          </div>
        </div>
      ))}
      <Divider />
      <div className="flex flex-col w-full p-20">
        <Typography className="text-13 font-semibold" color="textSecondary">
          {widget.totalBudget.title}
        </Typography>
        <div className="flex items-center">
          <Typography className="text-32 font-normal" color="textSecondary">
            $
          </Typography>
          <Typography className="text-32 mx-4 font-medium tracking-tighter">
            {widget.totalBudget.count}
          </Typography>
        </div>
      </div>
    </Paper>
  );
}

export default memo(Widget9);
