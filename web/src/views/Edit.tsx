import { BaseSyntheticEvent, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  Button,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Container,
  Stack,
  TextField,
} from "@mui/material";

import { Close, Check } from "@mui/icons-material";
import api from "../services/api";

const New = () => {
  const [title, setTitle] = useState<String>("");
  const [description, setDescription] = useState<String>("");

  const { id } = useParams();

  useEffect(() => {
    (async () =>
      await api.get(`/tasks/${id}`).then((res) => {
        const { title, description } = res.data.task;
        setTitle(title);
        setDescription(description);
      }))();
    // 🙈 ixii
    // eslint-disable-next-line
  }, []);

  const handleCancel = () => {
    window.location.href = "/";
  };

  const handleSave = () => {
    if (!title.trim() || !description.trim())
      return console.log(title, description);

    (async () =>
      await api.put(`/tasks/${id}`, { title, description }).then(() => {
        window.location.href = "/";
      }))();
  };

  return (
    <Container maxWidth="md">
      <Card sx={{ minWidth: 275, my: 6 }}>
        <CardHeader title="Nova tarefa" />
        <CardContent sx={{}}>
          <Box
            sx={{ display: "flex", flexWrap: "wrap" }}
            component="form"
            noValidate
            autoComplete="off"
          >
            <Stack
              component="form"
              sx={{ width: "100%" }}
              spacing={2}
              noValidate
              autoComplete="off"
            >
              <TextField
                required
                fullWidth
                autoFocus
                value={title}
                label="Título"
                variant="filled"
                onChange={(e: BaseSyntheticEvent) => setTitle(e.target.value)}
              />

              <TextField
                required
                multiline
                fullWidth
                label="Descrição"
                variant="filled"
                minRows={5}
                value={description}
                onChange={(e: BaseSyntheticEvent) =>
                  setDescription(e.target.value)
                }
              />
            </Stack>
          </Box>
        </CardContent>
        <CardActions>
          <Box sx={{ flexGrow: 1 }}>
            <Button
              variant="outlined"
              size="small"
              color="warning"
              onClick={handleCancel}
              startIcon={<Close />}
            >
              Cancelar
            </Button>
          </Box>
          <Button
            variant="outlined"
            size="small"
            color="success"
            onClick={handleSave}
            endIcon={<Check />}
          >
            Salvar
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default New;
