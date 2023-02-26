import { Grid, IconButton, List, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logoMev from "../../assets/logo.png";
import Typography from '@mui/material/Typography';
import { Menu } from "@mui/icons-material";
import { useState } from "react";

export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate();

  

  const handleNavigate = (path: string) => {
    navigate(`${path}`, {
      replace: true,
    });
  };

  return (
    <Grid component="nav" container sx={{ p:{xs: 1, sm: 2}, boxShadow: 4, position:'sticky', top: 0, bgcolor:'#FBF7FD', zIndex:1 }}>
      <Grid sx={{ position: 'absolute', top: 8  }}>
        <IconButton sx={{boxShadow: 1}} >
          <img style={{ width: '90px', cursor:'pointer' }} src={logoMev} alt="logo" />
        </IconButton>
      </Grid>

      <Grid container justifyContent="flex-end" >
        <List disablePadding sx={{display:{xs: isOpen ? 'grid': 'none', sm:'flex'}, 
           position:{xs:'absolute', sm:'static'}, top:{xs:'95%'}, right:{xs: 0}, bgcolor:{xs:'#FBF7FD', sm:'none'}, p:{xs: 3, sm:0},
            borderRadius:2, boxShadow:{xs: 4, sm: 0}, }}>
          <ListItemText
            sx={{ cursor: 'pointer', pr: 4 }}
            onClick={() => handleNavigate('/')}>
            <Typography fontWeight='bold' 
              sx={{transition:'0.3s','&:hover':{color:'primary.main', transition: '0.3s'}}}> 
                Inicio
              </Typography>
            </ListItemText>
          <ListItemText
            sx={{ cursor: 'pointer', pr: 4}}
            onClick={() => handleNavigate('/about')}>
            <Typography fontWeight='bold' 
              sx={{transition:'0.3s','&:hover':{color:'primary.main', transition: '0.3s'}}}>
              Nosotros
            </Typography>
          </ListItemText>

          <ListItemText
            sx={{ cursor: 'pointer', pr: 4 }}
            onClick={() => handleNavigate('/contact')}>
            <Typography fontWeight="bold"
              sx={{transition:'0.3s','&:hover':{color:'primary.main', transition: '0.3s'}}}>
                Contactanos
              </Typography>
          </ListItemText>

          <ListItemText
            sx={{ cursor: 'pointer' }}
            onClick={() => handleNavigate('/donations')}>
            <Typography fontWeight="bold"
              sx={{transition:'0.3s','&:hover':{color:'primary.main', transition: '0.3s'}}}>
                Donaciones
              </Typography>
          </ListItemText>
        </List>
        <IconButton onClick={() => setIsOpen(!isOpen)} sx={{display:{xs:'block', sm:'none'}, p:0}}>
          <Menu fontSize="large"/>
        </IconButton>
      </Grid>
    </Grid>
  );
};