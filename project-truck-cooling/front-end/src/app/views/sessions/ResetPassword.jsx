import { useState } from "react";
import { Box, Grid, TextField, Card, styled, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

// STYLED COMPONENTS
const FlexBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#00A3D9",
}));

const ContentBox = styled("div")(() => ({
  padding: "2rem",
  backgroundColor: "white",
  borderRadius: "8px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
}));

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handlePasswordSubmit = () => {
    if (newPassword === confirmPassword) {
      // Logika ketika password cocok
      alert("Password berhasil diubah!");
      navigate("/home"); // atau arahkan ke halaman login atau lainnya
    } else {
      alert("Password tidak cocok, silakan coba lagi.");
    }
  };

  return (
    <FlexBox>
      <Card>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12}>
            <ContentBox>
              <h2 style={{ textAlign: "center", color: "#00A3D9", fontSize: "30px", marginBottom: "-1rem", marginTop: "1rem" }}>
                Masukkan Password Baru
              </h2>
              <p style={{ textAlign: "center", color: "#70777E", fontSize: "14px", marginBottom: "2rem" }}>
              Password baru Anda harus unik dari yang digunakan sebelumnya.               </p>
              <TextField
                fullWidth
                type="password"
                label="New Password"
                variant="outlined"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                type="password"
                label="Confirm Password"
                variant="outlined"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                sx={{ mb: 4 }}
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handlePasswordSubmit}
                sx={{mb: "1.5rem"}}
              >
                Reset Password
              </Button>
            </ContentBox>
          </Grid>
        </Grid>
      </Card>
    </FlexBox>
  );
}