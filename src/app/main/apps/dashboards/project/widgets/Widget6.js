import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import _ from "@lodash";
import { useEffect, memo, useState } from "react";
import ReactApexChart from "react-apexcharts";
import MenuItem from "@mui/material/MenuItem";

function Widget6(props) {
  const [currentRange, setCurrentRange] = useState(props.widget.currentRange);
  const [awaitRender, setAwaitRender] = useState(true);

  const widget = _.merge({}, props.widget);
  const theme = useTheme();

  function handleChangeRange(ev) {
    setCurrentRange(ev.target.value);
  }

  _.setWith(
    widget,
    "mainChart.options.theme.monochrome.color",
    theme.palette.secondary.main
  );

  useEffect(() => {
    setAwaitRender(false);
  }, []);

  if (awaitRender) {
    return null;
  }

  return (
    <Paper className="w-full rounded-20 shadow">
      <div className="flex items-center justify-between p-20 h-64 ">
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
      <div className="h-400 w-full">
        <ReactApexChart
          options={widget.mainChart.options}
          series={widget.mainChart.series[currentRange]}
          type={widget.mainChart.options.chart.type}
          height={widget.mainChart.options.chart.height}
        />
      </div>
      <div className="flex items-center p-8 border-t-1">
        <div className="flex flex-1 flex-col items-center justify-center p-16 border-r-1">
          <Typography className="text-32 font-medium mb-8 leading-none tracking-tighter">
            {widget.footerLeft.count[currentRange]}
          </Typography>
          <Typography className="text-13 font-normal" color="textSecondary">
            {widget.footerLeft.title}
          </Typography>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center p-16">
          <Typography className="text-32 font-medium mb-8 leading-none tracking-tighter">
            {widget.footerRight.count[currentRange]}
          </Typography>
          <Typography className="text-13 font-normal" color="textSecondary">
            {widget.footerRight.title}
          </Typography>
        </div>
      </div>
    </Paper>
  );
}

export default memo(Widget6);
