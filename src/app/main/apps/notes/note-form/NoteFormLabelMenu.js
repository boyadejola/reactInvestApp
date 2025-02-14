import _ from "@lodash";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Popover from "@mui/material/Popover";
import { useState } from "react";
import { useSelector } from "react-redux";

function NoteFormLabelMenu(props) {
  const labels = useSelector(({ notesApp }) => notesApp.labels.entities);

  const [anchorEl, setAnchorEl] = useState(null);

  function handleMenuClick(event) {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  }

  function handleMenuClose() {
    setAnchorEl(null);
  }

  function handleToggleLabel(id) {
    props.onChange(_.xor(props.note.labels, [id]));
  }

  return (
    <div>
      <IconButton
        className="w-32 h-32 mx-4 p-0"
        onClick={handleMenuClick}
        size="large"
      >
        <Icon fontSize="small">label</Icon>
      </IconButton>
      <Popover
        hideBackdrop
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        className="pointer-events-none"
        classes={{
          paper: "pointer-events-auto py-8 prevent-add-close",
        }}
      >
        <ClickAwayListener onClickAway={handleMenuClose}>
          <List className="p-0">
            {Object.entries(labels).map(([key, label]) => (
              <ListItem
                key={label.id}
                button
                dense
                onClick={() => handleToggleLabel(label.id)}
              >
                <Icon className="list-item-icon text-16" color="action">
                  {props.note.labels.includes(label.id)
                    ? "check_box"
                    : "check_box_outline_blank"}
                </Icon>
                <ListItemText
                  className="truncate px-8"
                  primary={label.name}
                  disableTypography
                />
              </ListItem>
            ))}
          </List>
        </ClickAwayListener>
      </Popover>
    </div>
  );
}

export default NoteFormLabelMenu;
