import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
import React from 'react';
import Grid from '@mui/material/Grid';

export default function Home() {
    const navigate = useNavigate();

    const handleRedirectLink = (page) => {
        navigate("./" + page);
    }

    return (
        <Box sx={{
            bgcolor: 'primary.light',
            minHeight: '100vh',
            overflow: 'hidden',
            p: { xs: 2, sm: 4 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            position: 'relative',
        }}>
            {/* Background visuals */}
            <Box sx={{
                position: 'absolute',
                top: '-10%',
                left: '-10%',
                width: '200px',
                height: '200px',
                bgcolor: 'secondary.light',
                borderRadius: '50%',
                opacity: 0.3,
                zIndex: 0,
            }} />
            <Box sx={{
                position: 'absolute',
                bottom: '-15%',
                right: '-15%',
                width: '300px',
                height: '300px',
                bgcolor: 'secondary.light',
                borderRadius: '50%',
                opacity: 0.3,
                zIndex: 0,
            }} />

            <Grid container spacing={4} sx={{ zIndex: 1, alignItems: 'center' }}>
                <Grid item xs={12} sm={6}>
                    <Box sx={{ textAlign: 'left', pl: { xs: 0, sm: 4 } }}>
                        <Typography variant="h2" sx={{
                            fontFamily: "'Baloo 2', cursive",
                            fontWeight: 800,
                            color: 'darkorange',
                            mb: 2,
                            fontSize: { xs: '2rem', sm: '3rem', md: '4rem' }
                        }}>
                            KathaKahani
                        </Typography>

                        <Typography variant="h6" sx={{
                            fontFamily: "'M PLUS Rounded 1c', sans-serif",
                            color: 'text.secondary',
                            mb: 3,
                            fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }
                        }}>
                            Different stories, every time.
                        </Typography>

                        <Button
                            variant="contained"
                            sx={{
                                fontFamily: "'M PLUS Rounded 1c', sans-serif",
                                fontWeight: 600,
                                borderRadius: 8,
                                background: "linear-gradient(45deg, #FF69B4 30%, #FF1493 90%)", // Gradient pink color
                                color: "white",
                                px: { xs: 6, sm: 8, md: 11 },
                                py: 1.5,
                                fontSize: { xs: "0.875rem", sm: "1rem", md: "1.25rem" },
                                boxShadow: '0 9px 12px -3px rgba(0, 0, 0, 0.1)',
                            }}
                            onClick={() => handleRedirectLink("prompt")}
                        >
                            Get Started
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <img
                            src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGZvdjNvN2FqZGM3aDI0YjFpMTc5Y2JqcHp5eDI5Y2dsdWx0aWF5MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4EALRFjyD5odO/giphy.gif"
                            alt="Owl"
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                                borderRadius: '16px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            }}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
