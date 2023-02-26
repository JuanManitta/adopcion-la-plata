import { Grid, TextField, Button, MenuItem, Typography, IconButton, List } from '@mui/material';
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Instagram, MailOutlined, WarningAmberOutlined } from '@mui/icons-material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const Contact = () => {

  const [isSending, setIsSending] = useState(false);



  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e:any) => {
    e.preventDefault();

    const inputs = form.current!.getElementsByTagName('input');

    let hasEmptyFields = false;
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value === '') {
        hasEmptyFields = true;
        break;
      }
    };
    if (hasEmptyFields) {
      toast.warn('Por favor, complete todos los campos');
      return;
    };
    setIsSending(true)
    if(form.current === null) return;
    emailjs.sendForm('service_wg11wcs', 'template_ro8cj8m', form.current, 'Wlsjc2dI_Tzc7s_vi')
      .then((result) => {
          toast.success('Formulario enviado con éxito');
          setIsSending(false)
      }, (error) => {
          toast.error('Ocurrio un error, escribinos al mail')
          setIsSending(false)
      });
  };

 
  

  const balconOptions = [
    {
      value: 'No tengo balcón',
      label: 'No tengo balcón',
    },
    {
      value: 'Balcón bien cerrado',
      label: 'Balcón bien cerrado',
    },
    {
      value: 'Balcón abierto, pero seguro',
      label: 'Balcón abierto, pero seguro',
    },
    {
      value: 'Balcón abierto, un poco peligroso',
      label: 'Balcón abierto, un poco peligroso',
    },
  ];

  const patioOptions = [
    {
      value: 'No tengo patio',
      label: 'No tengo patio',
    },
    {
      value: 'Patio bien cerrado',
      label: 'Patio bien cerrado',
    },
    {
      value: 'Patio abierto, pero seguro',
      label: 'Patio abierto, pero seguro',
    },
    {
      value: 'Patio abierto, un poco peligroso',
      label: 'Patio abierto, un poco peligroso',
    },
  ];

  const animalesOptions = [
    {
      value: 'No tengo animales',
      label: 'No tengo animales',
    },
    {
      value: 'Tengo perros',
      label: 'Tengo perros',
    },
    {
      value: 'Tengo gatos',
      label: 'Tengo gatos',
    },
    {
      value: 'Tengo perros y gatos',
      label: 'Tengo perros y gatos',
    },
    {
      value: 'Otros',
      label: 'Otros',
    },
  ];

  const animalesAmigablesOptions = [
    {
      value: 'Son todos muy amigables',
      label: 'Son todos muy amigables',
    },
    {
      value: 'Algunos si, otros no',
      label: 'Algunos si, otros no',
    },
    {
      value: 'No son muy amigables',
      label: 'No son muy amigables',
    },
    {
      value: 'No se como son con otros animales',
      label: 'No se como son con otros animales',
    },
  ];

  const vacunasYCastradosOptions = [
    {
      value: 'Todos mis animales',
      label: 'Todos mis animales',
    },
    {
      value: 'Ninguno de mis animales',
      label: 'Ninguno de mis animales',
    },
    {
      value: 'Algunos si, otros no',
      label: 'Algunos si, otros no',
    },
  ];

  const diasDeTransitoOptions = [
    {
      value: 'Al menos 7 días',
      label: 'Al menos 7 días',
    },
    {
      value: 'Entre 7 y 15 días',
      label: 'Entre 7 y 15 días',
    },
    {
      value: 'Menos de 7 días',
      label: 'Menos de 7 días',
    },
    {
      value: 'Todo lo necesario',
      label: 'Todo lo necesario',
    },
  ];



  
  return (
    <Grid component="main">
      <Grid container component="section" sx={{p:{xs:2, sm: 2, md: 8}}}>
        <Grid item xs={12}sm={12} md={6}>
          <Typography component="h1" variant='h4' sx={{fontWeight:'bold', textAlign:'center', mb:6, mt:{xs:6, md:0}}}>
            Formulario - Hogar de transito
          </Typography>
          <Grid container sx={{width:{xs:'90%', md:'70%'}, boxShadow:5, borderRadius:3, justifyContent:'center', margin: 'auto auto'}}>

            <Grid component='form'container ref={form} onSubmit={sendEmail} sx={{p:3, zIndex:0}}>
             <Grid item xs={12} sm={6} sx={{mb:2}}>
              <TextField type='text' fullWidth label='Nombre' name='nombre'/>
             </Grid>

             <Grid item xs={12} sm={6} sx={{mb:{xs:2,sm:0}}}>
              <TextField type='text' fullWidth label='Apellido' name='apellido'/>
             </Grid>

              <Grid item xs={12} sm={6} sx={{mb:2}}>
                <TextField type='number' fullWidth label='Telefono' name='telefono'/>
              </Grid>

              <Grid item xs={12} sm={6} sx={{mb:{xs:2,sm:0}}}>
                <TextField type='text' fullWidth label='Direccion' name='direccion'/>
              </Grid>

              <Grid item xs={12} sx={{mb:2}}>
                <TextField type='email' fullWidth label='Email' name='email'/>
              </Grid>

              <Grid item xs={12} sx={{mb:2}}>
                <TextField select type='text' fullWidth label='¿En dónde vivís?' name='donde_vive' defaultValue=''
                  >
                  <MenuItem value='Casa'>Casa</MenuItem>
                  <MenuItem value='Departamento'>Departamento</MenuItem>
                </TextField>
              </Grid>

              <Grid item xs={12} sx={{mb:2}}>
                <TextField select type='text' fullWidth label='¿Tenés balcón?' name='tiene_balcon' defaultValue='' >
                  {balconOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12} sx={{mb:2}}>
                <TextField select type='text' fullWidth label='¿Tenés patio?' name='tiene_patio' defaultValue='' >
                  {patioOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12} sx={{mb:2}}>
                <TextField select type='text' fullWidth label='¿Tenés otros animales?' name='otros_animales' defaultValue=''>
                  {animalesOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12} sx={{mb:2}}>
                <TextField select type='text' fullWidth label='¿Están vacunados y castrados?' name='vacunas_castrados' defaultValue=''>
                  {vacunasYCastradosOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12} sx={{mb:2}}>
                <TextField select type='text' fullWidth label='¿Son tus animales amigables?' name='animales_amigables' defaultValue=''>
                  {animalesAmigablesOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12} sx={{mb:2}}>
                <TextField select type='text' fullWidth label='¿Cuantos días podés dar hogar?' name='dias_transito' defaultValue=''>
                  {diasDeTransitoOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              


              <Button fullWidth variant='contained' type='submit' onClick={sendEmail} disabled={isSending}>
                Enviar
              </Button>
            </Grid>
          </Grid>

        </Grid>
        <Grid item xs={12} sm={12} md={6}>

        <Typography component="h1" variant='h4' sx={{fontWeight:'bold', textAlign:'center', mb:6, mt:{xs:6, md:0}}}>
            Requisitos para adoptar
          </Typography>
          <Grid container>
            <Grid item xs={12} sm={12} sx={{pl:{xs:3, sm:6}}}>
              <List disablePadding>
                  <Typography component='li' sx={{listStyle:'disc', mb:2}}>
                    Ser mayor de 21 años
                  </Typography>
                  <Typography component='li' sx={{listStyle:'disc', mb:2}}>
                    Vivir en La Plata o alrededores cercanos (No Capital Federal, y evitamos
                    zonas de sobre población de animales callejeros)
                  </Typography>
                  <Typography component='li' sx={{listStyle:'disc', mb:2}}>
                    Poder cubrir gastos veterinarios como <b>castracion (OBLIGATORIA)</b>,
                    vacunas, desparasitaciones, alimentacion saludable, identificacion, etc.
                  </Typography>
                  <Typography component='li' sx={{listStyle:'disc', mb:2}}>
                    Estar de acuerdo con el seguimiento por parte del voluntariado. Se realiza
                    por whatsapp, fotos y/o videos.
                  </Typography>
                  <Typography component='li' sx={{listStyle:'disc', mb:2}}>
                    En caso de vivir en una casa con patio, que el mismo esté totalmente cerrado y sea seguro.
                    En caso de vivir en departamento con balcón, que el mismo tenga proteccion y sea seguro.
                  </Typography>
                  <Typography component='li' sx={{listStyle:'disc', mb:2}}>
                    Ser mayor de 21 años
                  </Typography>
                  <Grid container justifyContent='left'>
                    <WarningAmberOutlined/>
                    <Typography component='li' sx={{mb:2, ml:2}}>
                   <b>Si cumplis con estos requisitos, escribinos </b>
                  </Typography>
                  </Grid>
              </List>
            </Grid>
          </Grid>

        <Typography component="h1" variant='h4' sx={{fontWeight:'bold', textAlign:'center', mt:3}}>
            Contacto
          </Typography>
          <Grid container>
            <Grid item xs={12} sm={12} sx={{p:3}}>
              <Typography >
                <IconButton>
                <MailOutlined fontSize='medium'/> 
                </IconButton>
                  adopcion.laplata@gmail.com
              </Typography>
              <Typography >
                <IconButton href='https://www.instagram.com/adopcion.laplata/' target='_blank' >
                    <Instagram fontSize='medium' />
                </IconButton>
                @adopcion.laplata
              </Typography>
            </Grid>
          </Grid>
        </Grid>


      </Grid>
      <ToastContainer
       position='bottom-left'
       autoClose={2000}
       />
    </Grid>
  )
}
