import { Grid, Icon, IconButton, List } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Facebook, Instagram, LinkedIn, MailOutlined } from '@mui/icons-material';
import './styles.css'
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    
    <Grid container component='footer' sx={{minHeight:'50vh', p:6, bgcolor:'#919191'}}>
      <Grid item xs={12} sx={{height:'40vh'}} container justifyContent="space-between" alignContent="center"> 
        <Grid>
          <List sx={{display:'grid'}}>
            <Link 
              style={{textDecoration:'none', color:'black', fontWeight: 800,
                      marginBottom: 50}} 
              to='/contact'>
              Formularios
            </Link>
            <Link 
              style={{textDecoration:'none', color:'black', fontWeight: 800,
              marginBottom: 50}} 
              to='/about'>
              Sobre nosotros
            </Link>
            <Link 
              style={{textDecoration:'none', color:'black', fontWeight: 800, marginBottom: 50}} 
              to='/donations'>
              Hacé tu donación
            </Link>
          </List>
        </Grid>

        <Grid>
          <Grid container justifyContent="center" alignContent='center' sx={{mb:4}}>
            <IconButton href='https://www.instagram.com/adopcion.laplata/?hl=es' target='_blank'>
            <Typography sx={{mr: 2, fontWeight:'bold'}}>Instagram</Typography>
              <Instagram/>
            </IconButton>
          </Grid>

          <Grid container justifyContent="center" alignContent='center' sx={{mb:4}}>
            <IconButton href='https://www.instagram.com/adopcion.laplata/?hl=es' target='_blank'>
              <Typography sx={{mr: 2, fontWeight:'bold'}}>Facebook</Typography>
            <Facebook/>
            </IconButton>
          </Grid>

          <Grid container justifyContent="right" alignContent='center'>
            <IconButton href='mailto:adopcion.laplata@gmail.com' target='_blank'>

            <Typography sx={{mr: 2, fontWeight:'bold'}}>Mail</Typography>
              <MailOutlined/>
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}sx={{height:'10vh'}}> 
        <Grid container justifyContent="space-between">

          <Typography>Adopción La Plata - 2023</Typography>

          <Grid container sx={{mt:4}} alignContent='center'>
          <IconButton sx={{'&:hover':{bgcolor:'inherit'}, p:0}} href='https://www.linkedin.com/in/juanmanitta/' target='_blank'>
          <Typography sx={{color:'black'}}>
            Sitio realizado y donado por Juan Manitta
            </Typography>
            <LinkedIn/>
          </IconButton>
          </Grid>

        </Grid>
      </Grid>
    </Grid>
  )
}
