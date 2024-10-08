import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ParetComponentExample from "@/app/components/ParetComponentExample";

export default function PracticePage() {
    return (
        <Container maxWidth="xl">
            <div className="flex flex-col min-h-full items-center justify-center dark:bg-black">
                <Typography variant="h1" gutterBottom sx={{
                    fontSize: {
                        xs: '2rem',
                        sm: '2.5rem',
                        md: '4rem',
                        lg: '5rem',
                    },
                }} className="text-primary-color dark:text-complementary-color">
                    Practice
                </Typography>
                <ParetComponentExample/>
            </div>
        </Container>
    );
}
