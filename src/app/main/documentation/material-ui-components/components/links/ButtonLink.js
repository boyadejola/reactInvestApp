/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import Link from "@mui/material/Link";

export default function ButtonLink() {
  return (
    <Link
      component="button"
      variant="body2"
      onClick={() => {
        console.info("I'm a button.");
      }}
    >
      Button Link
    </Link>
  );
}
