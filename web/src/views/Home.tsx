import {
  Card,
  CardContent,
  CardHeader,
  Container,
  IconButton,
} from "@mui/material";

import { Add } from "@mui/icons-material";

import Tasks from "../components/Tasks";

const Home = () => {
  const handleNewTask = () => {
    window.location.href = "/new";
  };

  return (
    <Container maxWidth="md">
      <Card sx={{ minWidth: 300, my: 6 }}>
        <CardHeader
          title="Lista de Tarefas"
          action={
            <IconButton aria-label="settings" onClick={handleNewTask}>
              <Add />
            </IconButton>
          }
        />
        <CardContent sx={{ m: 0, p: 0, maxHeight: "600px", overflow: "auto" }}>
          <Tasks />
        </CardContent>
      </Card>
    </Container>
  );
};

export default Home;
