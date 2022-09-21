import { useEffect, useState, BaseSyntheticEvent } from "react";

import {
  Checkbox,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Typography,
  IconButton,
} from "@mui/material";

import { Edit, Delete } from "@mui/icons-material";

import api from "../services/api";

interface ITask {
  id: number;
  title: String;
  description: String;
  finished: boolean;
  createdAt: Date;
}

const Tasks = () => {
  const [tasks, setTasks] = useState<Array<ITask>>([]);

  useEffect(() => {
    (async () =>
      setTasks((await api.get("/tasks").then((res) => res.data)).tasks))();
  }, []);

  const handleFinish = (id: number, finish: boolean) => {
    (async () =>
      await api
        .put(`/tasks/${id}`, { finished: finish })
        .then(async () =>
          setTasks((await api.get("/tasks").then((res) => res.data)).tasks)
        ))();
  };

  const handleDelete = (id: number) => {
    (async () =>
      await api
        .delete(`/tasks/${id}`)
        .then(async () =>
          setTasks((await api.get("/tasks").then((res) => res.data)).tasks)
        ))();
  };

  const handleEdit = (id: number) => {
    window.location.href = `/edit/${id}`;
  };

  return (
    <List sx={{ width: "100%" }}>
      {tasks
        .map((tk, i) => (
          <ListItem
            key={i}
            secondaryAction={
              <>
                <IconButton
                  edge="end"
                  aria-label="comments"
                  size="small"
                  onClick={(e: BaseSyntheticEvent) => handleEdit(tk.id)}
                >
                  <Edit fontSize="small" />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="comments"
                  size="small"
                  onClick={(e: BaseSyntheticEvent) => handleDelete(tk.id)}
                >
                  <Delete fontSize="small" />
                </IconButton>
              </>
            }
            disablePadding
          >
            <ListItemButton
              dense
              onClick={(e: BaseSyntheticEvent) =>
                handleFinish(tk.id, !tk.finished)
              }
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={tk.finished}
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>

              <ListItemText
                primary={
                  <>
                    <Typography variant="h6">{tk.title}</Typography>
                  </>
                }
                secondary={
                  tk.description.length > 50
                    ? tk.description.substring(0, 50) + "..."
                    : tk.description
                }
              />
            </ListItemButton>
          </ListItem>
        ))
        .reverse()}
    </List>
  );
};

export default Tasks;
