import AppBar from "@mui/material/AppBar";
import { ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import PoweredByLinks from "app/fuse-layouts/shared-components/PoweredByLinks";
import PurchaseButton from "app/fuse-layouts/shared-components/PurchaseButton";
import DocumentationButton from "app/fuse-layouts/shared-components/DocumentationButton";
import { memo } from "react";
import { useSelector } from "react-redux";
import { selectFooterTheme } from "app/store/fuse/settingsSlice";
import clsx from "clsx";
import { Typography } from "@mui/material";

function FooterLayout1(props) {
  const footerTheme = useSelector(selectFooterTheme);

  return (
    <ThemeProvider theme={footerTheme}>
      <AppBar
        id="fuse-footer"
        className={clsx("relative z-20 shadow-md", props.className)}
        color="default"
        style={{ backgroundColor: footerTheme.palette.background.paper }}
      >
        <Toolbar className="min-h-48 md:min-h-64 px-8 sm:px-12 py-0 flex justify-center items-center overflow-x-auto">
          <Typography
            color="inherit"
            className="opacity-75 leading-tight text-center"
          >
            Venax © 2023
          </Typography>
          {/* <div className="flex flex-grow flex-shrink-0">
            <PurchaseButton className="mx-4" />
            <DocumentationButton className="mx-4" />
          </div>

          <div className="flex flex-grow flex-shrink-0 px-12 justify-end">
            <PoweredByLinks />
          </div> */}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default memo(FooterLayout1);
