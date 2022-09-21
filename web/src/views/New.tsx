import { BaseSyntheticEvent, useState } from "react";

import {
  Alert,
  Button,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Collapse,
  Container,
  Stack,
  TextField,
} from "@mui/material";

import { Close, Check } from "@mui/icons-material";
import api from "../services/api";

type AlertColor = "success" | "info" | "warning" | "error";

const New = () => {
  const [title, setTitle] = useState<String>("");
  const [description, setDescription] = useState<String>("");

  const [alert, setAlert] = useState<boolean>(false);
  const [severity, setSeverity] = useState<AlertColor>("success");
  const [message, setMessage] = useState<String>("");

  const handleCancel = () => {
    window.location.href = "/";
  };

  const handleSave = () => {
    if (!title.trim() || !description.trim()) {
      setSeverity("error");
      setMessage("Há campos obrigatório em branco!");

      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 5000);
      return;
    }

    (async () =>
      await api.post("/tasks", { title, description }).then(() => {
        setSeverity("success");
        setMessage("Tarefa adicionada com sucesso!");

        setAlert(true);
        setTimeout(() => {
          setAlert(false);
          window.location.href = "/";
        }, 1000);
      }))();
  };

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          position: "absolute",
          top: 10,
          left: "30%",
          right: 0,
          maxWidth: "40%",
        }}
      >
        <Collapse in={alert}>
          <Alert severity={severity}>{message}</Alert>
        </Collapse>
      </Box>
      <Card sx={{ minWidth: 275, my: 9 }}>
        <CardHeader title="Nova tarefa" />
        <CardContent sx={{}}>
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
