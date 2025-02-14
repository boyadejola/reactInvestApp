import Hidden from "@mui/material/Hidden";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import Paper from "@mui/material/Paper";
import { ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { selectMainTheme } from "app/store/fuse/settingsSlice";
import { setTodosSearchText } from "./store/todosSlice";

function TodoHeader(props) {
  const dispatch = useDispatch();
  const searchText = useSelector(({ todoApp }) => todoApp.todos.searchText);
  const mainTheme = useSelector(selectMainTheme);

  return (
    <ThemeProvider theme={mainTheme}>
      <div className="flex flex-1">
        <Paper className="flex items-center w-full h-48 sm:h-56 p-16 ltr:pl-4 lg:ltr:pl-16 rtl:pr-4 lg:rtl:pr-16 shadow">
          <Hidden lgUp>
            <IconButton
              onClick={(ev) => props.pageLayout.current.toggleLeftSidebar()}
              aria-label="open left sidebar"
              size="large"
            >
              <Icon>menu</Icon>
            </IconButton>
          </Hidden>

          <Icon color="action">search</Icon>

          <Input
            placeholder="Search"
            className="px-16"
            disableUnderline
            fullWidth
            value={searchText}
            inputProps={{
              "aria-label": "Search",
            }}
            onChange={(ev) => dispatch(setTodosSearchText(ev))}
          />
        </Paper>
      </div>
    </ThemeProvider>
  );
}

export default TodoHeader;
