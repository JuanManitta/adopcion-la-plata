import React from 'react'
import { Grid, List, ListItemText } from '@mui/material';
import Typography from '@mui/material/Typography';

export const About = () => {
  return (
    <Grid component="main">
      <Grid container component="section" sx={{minHeight:{xs:'100vh', lg:'60vh'}, p:{xs:6, sm:10}}} justifyContent='space-between'>

        <Grid item xs={12} sm={12} md={5}>
          <Typography component="h1" variant='h4' sx={{textAlign:'center', fontWeight:'bold'}}>
            ¿Que es Adpoción La Plata?
          </Typography>
          <Typography component="p" variant='h6' sx={{textAlign:'justify', fontWeight:'500', mt:6}}>
          <b> ADOPCIÓN LA PLATA </b> es una organización sin fines de lucro que buscan <b> combatir el 
          abandono y maltrato animal </b> que se vive en nuestro país con la ayuda de distintas 
          personas que desean involucrarse en esta lucha y comparten el <b> respeto y amor por los animales.</b> <br />
          <br />
          La Plata / Buenos Aires/ Argentina.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={5}>
          <Typography component="h1" variant='h4' sx={{textAlign:'center', fontWeight:'bold', mt:{xs:8, sm:8, md:0}}}>
            Nuestros objetivos
          </Typography>
          <List disablePadding sx={{mt:6}}>
              <Typography component='li' sx={{listStyle:'disc', mb:2, fontSize:'1.1rem'}}>
                Luchar contra el abandono, el maltrato y la crueldad animal.
              </Typography>
              <Typography component='li' sx={{listStyle:'disc', mb:2, fontSize:'1.1rem'}}>
                Informar a la poblacion sobre la tenencia responsable de las mascotas.
              </Typography>
              <Typography component='li' sx={{listStyle:'disc', mb:2, fontSize:'1.1rem'}}>
                Fomentar la esterilizacion tanto en hembras como en machos y la importancia de la vacunacion en tiempo y forma.
              </Typography>
              <Typography component='li' sx={{listStyle:'disc', mb:2, fontSize:'1.1rem'}}>
                Asistir a animales en situacion de riesgo, recuperarlos y entregarlos en adopcion a dueños responsables.
              </Typography>
              <Typography component='li' sx={{listStyle:'disc', fontSize:'1.1rem'}}>
                Dar transito a animales antes de conseguirles un hogar.
              </Typography>
          </List>
        </Grid>
        <Grid gap={4} sx={{ display:{xs:'flex', md:'grid'}, position:{xs:'static', md:'absolute'}, left:{md:'48%'}, top:{md:'10%'},
        mt:{xs:'5rem'}}}>
          <img style={{width:'50px'}} src="../../../../nosotros-dog-1.svg" alt="" />
          <img style={{width:'50px'}} src="../../../../nosotros-dog-2.svg" alt="" />
          <img style={{width:'50px'}} src="../../../../nosotros-dog-3.svg" alt="" />
          <img style={{width:'50px'}} src="../../../../nosotros-dog-4.svg" alt="" />
          <img style={{width:'50px'}} src="../../../../nosotros-dog-5.svg" alt="" />
        </Grid>
      </Grid>

    </Grid>
  )
}
