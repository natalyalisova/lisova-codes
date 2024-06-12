'use client'
import {ThemeProvider, useTheme} from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function AboutPage() {
    const theme = useTheme();
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="xl">
                <div className="flex min-h-screen flex-col items-center place-content-center p-24">
                    <Typography variant="h2" gutterBottom>
                        About me
                    </Typography>
                    <Typography variant="subtitle1">
                        Coming soon
                    </Typography>
                </div>
            </Container>
        </ThemeProvider>
    );
}
