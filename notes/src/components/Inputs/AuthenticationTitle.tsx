import {
  TextInput,
  PasswordInput,
  Paper,
  Title,
  Container,
  Button,
} from "@mantine/core";
import classes from "./AuthenticationTitle.module.css";

interface AuthenticationTitleProps {
  user: { username: string; password: string };
  setUser: React.Dispatch<
    React.SetStateAction<{ username: string; password: string }>
  >;
  onSubmit: () => void;
}

export function AuthenticationTitle({
  user,
  setUser,
  onSubmit,
}: AuthenticationTitleProps) {
  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Hello!
      </Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput
          label="Nickname"
          placeholder="Your nickname"
          required
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <Button fullWidth mt="xl" onClick={onSubmit}>
          Sign in
        </Button>
      </Paper>
    </Container>
  );
}
