import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Form, useActionData, useLocation, useNavigation} from "react-router-dom";
import {Alert, CircularProgress, Input} from "@mui/material";
import {blue} from "@mui/material/colors";

export default function Login() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const from = params.get("from") || "/";
    const actionData = useActionData() as { error: string } | undefined;
    const navigation = useNavigation();
    const submitting = navigation.state == "submitting";

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
                    <Box sx={{ m: 1, position: 'relative' }}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            disabled={submitting}
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Login
                        </Button>
                        {submitting && (
                            <CircularProgress
                                size={24}
                                sx={{
                                    color: blue[500],
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    marginTop: '-12px',
                                    marginLeft: '-12px',
                                }}
                            />
                        )}
                    </Box>
                </Form>
            </Box>
        </Container>
    );
}
