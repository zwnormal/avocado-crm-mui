import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Form, useActionData, useLocation, useNavigation} from "react-router-dom";
import {Alert, Input} from "@mui/material";

export default function Login() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const from = params.get("from") || "/";
    const actionData = useActionData() as { error: string } | undefined;
    const navigation = useNavigation();

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Avocado
                </Typography>
                <Form method="post" replace>
                    {actionData && actionData.error ? (
                        <Alert severity="error" sx={{ mt: 2 }}>{actionData.error}</Alert>
                    ) : null}
                    <Input type="hidden" name="redirectTo" value={from} />
                    <TextField
                        margin="normal"
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        required
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        name="password"
                        required
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        disabled={navigation.state == "submitting"}
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Login
                    </Button>
                </Form>
            </Box>
        </Container>
    );
}
