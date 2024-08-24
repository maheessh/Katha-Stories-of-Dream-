import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { useNavigate } from "react-router-dom";
import React from 'react';

export default function Prompt() {
    const navigate = useNavigate();

    const [inputText, setInputText] = React.useState("");

    const submitInput = async (input) => {
        if (input.length === 0) {
            alert("Please write something!");
            return;
        }

        localStorage.setItem("story", undefined);
        localStorage.setItem("imageUrls", undefined);

        navigate("/story", { state: { story: input } });
    }

    return (
        <Box sx={{
            py: { xs: '10%', sm: '5%' },
            px: { xs: '5%', sm: '3%' },
            bgcolor: 'primary.light',
            minHeight: '100vh',
            overflowY: 'auto', // Ensures the content is scrollable
            display: 'flex',
            justifyContent: 'center'
        }}>
            <Grid container spacing={3} sx={{
                maxWidth: '1200px',
                bgcolor: 'background.paper',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                borderRadius: '16px',
                overflow: 'hidden',
                p: { xs: 2, sm: 3 }
            }}>
                <Grid item xs={12} sm={4} sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'secondary.light',
                    py: { xs: 2, sm: 3 }
                }}>
                    <img
                        src="https://media.giphy.com/media/0JWCkLbDhCQiajoqJo/giphy.gif"
                        alt="Owl"
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                            borderRadius: '16px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={8} sx={{
                    p: { xs: 2, sm: 4 },
                }}>
                    <Button
                        variant="contained"
                        size="small"
                        sx={{
                            mb: 2,
                            bgcolor: 'secondary.main',
                            color: 'primary.contrastText',
                            borderRadius: '50%',
                            p: 1,
                            minWidth: 0,
                            '&:hover': {
                                bgcolor: 'secondary.dark'
                            }
                        }}
                        onClick={() => navigate("../")}
                    >
                        <ArrowBackIosNewOutlinedIcon sx={{ fontSize: '1.2rem' }} />
                    </Button>

                    <TextField
                        id="story-input"
                        label="Story of ..."
                        InputLabelProps={{
                            style: { fontSize: '1.25rem', fontFamily: "'Baloo 2', cursive" }
                        }}
                        multiline
                        variant="filled"
                        rows={10}
                        sx={{
                            width: '100%',
                            '& .MuiInputBase-input': {
                                mt: '0.5em',
                                fontSize: '1.25rem',
                                fontFamily: "'M PLUS Rounded 1c', sans-serif",
                                color: 'text.primary'
                            },
                            bgcolor: 'secondary.light',
                            borderRadius: 2,
                            p: 1
                        }}
                        onChange={(e) => setInputText(e.target.value)}
                    />

                    <Box sx={{
                        mt: 3,
                        display: 'flex',
                        justifyContent: 'flex-end',
                    }}>
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                fontFamily: "'M PLUS Rounded 1c', sans-serif",
                                fontWeight: 700,
                                borderRadius: 4,
                                bgcolor: "secondary.main",
                                color: 'primary.contrastText',
                                px: { xs: 3, sm: 4 },
                                py: 1.5,
                                fontSize: "1rem",
                                boxShadow: '0 9px 12px -3px rgba(0, 0, 0, 0.1)',
                                '&:hover': {
                                    bgcolor: 'secondary.dark'
                                }
                            }}
                            onClick={() => submitInput(inputText)}
                        >
                            Create Story
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
