import React from 'react'
import { Grid, Typography, List } from '@mui/material';
import { AccountBalanceOutlined } from '@mui/icons-material';

export const Donaciones = () => {
  return (
    <Grid component='main' >
      <Grid component='section' className='section__donations-bg' sx={{p:{xs:2,md:6}, pt:{xs:7, md:6}}}>
        <Typography variant='h4' sx={{textAlign:'center', fontWeight:'bold', textShadow:'1px 1px 1px white'}}>
          OTRAS FORMAS DE <Typography sx={{color:'primary.main', fontSize:'3rem', fontWeight:'bold', textShadow:'1px 1px 1px black'}}>
             AYUDAR </Typography>
        </Typography>
        
        <Grid container justifyContent='space-around' sx={{mt:5, mb:10}}>
          <Grid item xs={12} md={5} sx={{mb:{xs:4,md:0},bgcolor:'white', p:7, boxShadow:10, borderRadius:2}}>
          <img style={{width:'40px'}} src="../../../../nosotros-dog-3.svg" alt="" />
          <Typography variant='h4' sx={{fontWeight:'bold', textAlign:'center'}}>Necesitamos</Typography>
          <List disablePadding sx={{mt:6}}>

            <Grid container justifyContent='space-around'>
              <Grid item xs={10}>
                <Typography component='li' sx={{listStyle:'disc', mb:2, fontSize:'1.1rem'}}>
                  Alimento balanceado
                </Typography>
              </Grid>

              <Grid item xs={2}>
                <img style={{width:'30px'}} src="../../../../dog-food-icon.svg" alt="" />
              </Grid>

            </Grid>
            <Grid container justifyContent='left'>
              <Grid item xs={10}>
                <Typography component='li' sx={{listStyle:'disc', mb:2, fontSize:'1.1rem'}}>
                  Collares, correas y arneses.
                </Typography>
              </Grid>

              <Grid item xs={2}>
                <img style={{width:'30px'}} src="../../../../donations-dog-collar.svg" alt="" />
              </Grid>

            </Grid>
            <Grid container justifyContent='left'>
              <Grid item xs={10}>
                <Typography component='li' sx={{listStyle:'disc', mb:2, fontSize:'1.1rem'}}>
                  Abrigos, matanas, camas.
                </Typography>
              </Grid>

              <Grid item xs={2}>
                <img style={{width:'30px'}} src="../../../../donations-dog-bed.svg" alt="" />
              </Grid>

            </Grid>
            <Grid container justifyContent='left'>
              <Grid item xs={10}>
                <Typography component='li' sx={{listStyle:'disc', mb:2, fontSize:'1.1rem'}}>
                  Desparacitantes, adultos y cachorros.
                </Typography>
              </Grid>

              <Grid item xs={2}>
                <img style={{width:'30px'}} src="../../../../donations-dog-pills.svg" alt="" />
              </Grid>

            </Grid>
            <Grid container justifyContent='left'>
              <Grid item xs={10}>
                <Typography component='li' sx={{listStyle:'disc', mb:2, fontSize:'1.1rem'}}>
                  Talco y pipeta para pulgas.
                </Typography>
              </Grid>

              <Grid item xs={2}>
                <img style={{width:'30px'}} src="../../../../donations-dog-pipeta.svg" alt="" />
              </Grid>

            </Grid>
            <Grid container justifyContent='left'>
              <Grid item xs={10}>
                <Typography component='li' sx={{listStyle:'disc', mb:2, fontSize:'1.1rem'}}>
                  Shampoo y juguetes.
                </Typography>
              </Grid>

              <Grid item xs={2}>
                <img style={{width:'30px'}} src="../../../../donations-dog-shampoo.svg" alt="" />
              </Grid>

            </Grid>
              

          </List>

          </Grid>

          <Grid item xs={12} md={5} sx={{ bgcolor:'white', p:6, boxShadow:12, borderRadius:2}}>
          <img style={{width:'40px'}} src="../../../../nosotros-dog-2.svg" alt="" />
          <Typography variant='h4' sx={{fontWeight:'bold', textAlign:'center'}}>Donaciones</Typography>
          <List disablePadding sx={{mt:6}}>

            <Grid container justifyContent='space-around'>
              <Grid item xs={10}>
                <Typography component='li' sx={{listStyle:'disc', mb:2, fontSize:'1.1rem'}}>
                  Alias: adopcion.laplata
                </Typography>
              </Grid>

              <Grid item xs={2}>
                <img style={{width:'70px'}} src="../../../../mercadopago.svg" alt="" />
              </Grid>

            </Grid>
            <Grid container justifyContent='left'>
              <Grid item xs={10}>
                <Typography component='li' sx={{listStyle:'disc', mb:4, fontSize:'1.1rem'}}>
                  Transferencia: adopcion.lp
                </Typography>
              </Grid>

              <Grid item xs={2}>
                <AccountBalanceOutlined/>
              </Grid>

            </Grid>

            <Grid container justifyContent='left'>
              <Grid item xs={12}>
                <Typography sx={{ mb:2, fontSize:'1.1rem'}}>
                  Cualquier ayuda economica, por mas pequeña que sea, nos sirve para seguir ayudando a los animales.
                  Cualquier ayuda nos sirve para cubrir los gastos y que nuestros amigos de 4 patas puedan ser felices.
                </Typography>
              </Grid>

            </Grid>
            

          </List>

          </Grid>
        </Grid>
          
        
        
      </Grid>
    </Grid>
  )
}
