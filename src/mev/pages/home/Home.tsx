import { Button, Fab, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import './styles.css'
import { Favorite, ArrowDropUp } from '@mui/icons-material';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';




export const Home = () => {

  const [showFab, setShowFab] = useState(false)
  const navigate = useNavigate();


  const handleFobNavigation = () => {
    const element = document.documentElement || document.body;
    element.scrollIntoView({ behavior: 'smooth' });
    navigate('/');
  }

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowFab(true);
    } else {
      setShowFab(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavNavigate = (path: string) => {
    navigate(path);
    
  }
  
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    speed: 3000,
    autoplaySpeed: 20,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Grid component="main">

      {/* HEADER */}
      <Grid component="section" container sx={{position:'relative'}}>

          <div className='section__background'></div>
          <div className="custom-shape-divider-bottom-1677060917">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="shape-fill"></path>
            </svg>
          </div>
      
        <Grid sx={{position:'absolute', top:'28%', left: '10%', maxWidth:{xs:'100%', sm:'40%'}}}>
          <Typography variant='h6' sx={{fontWeight:'bold', color:'white', textShadow: '1px 1px 2px grey'}}>
            Adopción <Favorite fontSize='small'/> La Plata
          </Typography>

          <Typography variant='h3' sx={{fontWeight:'bold', color:'white', textShadow: '1px 1px 2px grey',}}>
            Ellos esperan por tener un hogar.
          </Typography>
          <Typography variant='h6' sx={{fontWeight:'bold', color:'white', textShadow: '1px 1px 2px grey'}}>
            Nosotros queremos combatir el abandono y el maltrato animal, con amor y respeto.
          </Typography>
        </Grid>

        <Grid 
          container sx={{bgcolor: '#D4A8E6', position:'absolute', 
          top:'33%', left:'7%', width:{xs:'5px'}, height:{xs:'160px'}, boxShadow: 3,}}>
        </Grid>
      </Grid>

      {/* GRID MASCOTAS */}
      <Grid component="section" sx={{position:'relative', minHeight:'100vh', pt: '7rem', pl:2, pr:2}}>
        
          <Grid>
            <Typography component="h2" sx={{pb:9, fontSize:{xs: '2.2rem', sm:'3rem'}, textAlign:'center', fontWeight:'bold'}}>
              Ellos esperan tener una familia
            </Typography>
          </Grid>
          <Box display="grid" sx={{gridTemplateColumns:{xs:'repeat(4,1fr)', sm:'repeat(12,1fr)'}}}  gap={2} >
            <Box gridColumn="span 2" >
              <img className='img__shadow' style={{width:'100%', borderRadius:16}} src='../../../../grid-mascota-1.png' alt="" />
            </Box>
            <Box gridColumn="span 2" sx={{position: 'relative', top:'50px'}}>
              <img className='img__shadow' style={{width:'100%', borderRadius:16}} src='../../../../grid-mascota-2.png' alt="" />
            </Box>
            <Box gridColumn="span 2" sx={{position: 'relative', top:'20px'}}>
              <img className='img__shadow' style={{width:'100%', borderRadius:16}} src='../../../../grid-mascota-3.png' alt="" />
            </Box>
            <Box gridColumn="span 2" sx={{position: 'relative', top:{xs:'20px', sm:'130px'}}}>
              <img className='img__shadow' style={{width:'100%', borderRadius:16}} src='../../../../grid-mascota-4.png' alt="" />
            </Box>
            <Box gridColumn="span 2"sx={{position: 'relative',  top:{xs:'10px', sm:'50px'}}}>
              <img className='img__shadow' style={{width:'100%', borderRadius:16}} src='../../../../grid-mascota-5.png' alt="" />
            </Box>
            <Box gridColumn="span 2">
              <img className='img__shadow' style={{width:'100%', borderRadius:16}} src='../../../../grid-mascota-6.png' alt="" />
            </Box>
            <Box gridColumn="span 2" >
              <img className='img__shadow' style={{width:'100%', borderRadius:16}} src='../../../../grid-mascota-7.png' alt="" />
            </Box>
            <Box gridColumn="span 2" sx={{position: 'relative', top:'30px'}}>
              <img className='img__shadow' style={{width:'100%', borderRadius:16}} src='../../../../grid-mascota-8.png' alt="" />
            </Box>
            <Box gridColumn="span 2" sx={{position: 'relative', top:'30px'}}>
              <img className='img__shadow' style={{width:'100%', borderRadius:16}} src='../../../../grid-mascota-9.png' alt="" />
            </Box>
            <Box gridColumn="span 2" sx={{position: 'relative',  top:{xs:'30px', sm:'60px'}}}>
              <img className='img__shadow' style={{width:'100%', borderRadius:16}} src='../../../../grid-mascota-10.png' alt="" />
            </Box>
            <Box gridColumn="span 2" sx={{position: 'relative',  top:{xs:'25px', sm:'50px'}}}>
              <img className='img__shadow' style={{width:'100%', height:'240px', borderRadius:16}} src='../../../../grid-mascota-11.png' alt="" />
            </Box>
            <Box gridColumn="span 2" >
              <img className='img__shadow' style={{width:'100%', borderRadius:16}} src='../../../../grid-mascota-12.png' alt="" />
            </Box>
            <div className="custom-shape-divider-bottom-1677064595">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                  <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                  <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
              </svg>
          </div>
          </Box>
      </Grid>
      {/* PASOS PARA ADOPTAR */}
      <Grid component="section" sx={{position:'relative', minHeight:'100vh', backgroundColor:'white', p:{xs:0, sm: 10}}}> 
        <Grid display="flex" justifyContent="center">
          <Button variant='contained' size='large' sx={{mt:{xs: 8, sm:0}}} href='/contact' >
            <Typography fontWeight='bold'>Encontra tu mascota</Typography>
          </Button>
        </Grid>

        <Grid container sx={{mt:8, pl:5, pr: 5, mb:8}}> 
          <Grid item xs={12} sm={6}>
            <Typography variant='h3' sx={{fontWeight:'bold', textAlign:{xs:'center'}, mr:{xs:0,md:2}, fontSize:{xs: '2.2rem', sm:'3rem'}}}>
              Adoptar una mascota es muy sencillo
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} display='flex' alignItems='center'>
            <Typography variant='h6' sx={{textAlign:{xs:'center'}, mt:{xs:4, sm:0}}}>Al momento de adoptar asumis un acto de amor, 
              pero tambien de responsabilidad y compromiso, por lo tanto, es importante que estés capacitado para hacerlo.</Typography>

          </Grid>
        </Grid>
        <Box display="grid" sx={{gridTemplateColumns:{xs:'repeat(6,1fr)', sm:'repeat(12,1fr)', mt:5, p:2}}} gap={2}>

          <Box gridColumn="span 3">
            <Grid className='process__first' sx={{borderRadius: 8, boxShadow: 9}}>
            <Grid sx={{position:'absolute', bottom: 50, left: 10}}>
              <Typography variant='h1' sx={{fontWeight:'bold', color:'white', 
                textShadow: '1px 1px 1px black'}}>1</Typography>
              <Typography variant='h4' sx={{fontWeight:'bold', color:'white', 
                textShadow: '1px 1px 1px black', fontSize:{xs:'1.7rem', sm:'2.3rem'}}}>Encontrá tu mascota</Typography>
            </Grid>
            </Grid>
            
          </Box>
          <Box gridColumn="span 3">
            <Grid className='process__second' sx={{borderRadius: 8, boxShadow: 9, top:'60px'}}>
            <Grid sx={{position:'absolute', bottom: 50, left: 10}}>
              <Typography variant='h1' sx={{fontWeight:'bold', color:'white', textShadow: '1px 1px 1px black'}}>2</Typography>
              <Typography variant='h4' sx={{fontWeight:'bold', color:'white', textShadow: '1px 1px 1px black',
                  fontSize:{xs:'1.7rem', sm:'2.3rem'}}}>Comunicate con nosotros</Typography>
            </Grid>
            </Grid>
            
          </Box>
          <Box gridColumn="span 3">
            <Grid className='process__third' sx={{borderRadius: 8, boxShadow: 9}}>
            <Grid sx={{position:'absolute', bottom: 50, left: 10}}>
              <Typography variant='h1' sx={{fontWeight:'bold', color:'white', textShadow: '1px 1px 1px black'}}>3</Typography>
              <Typography variant='h4' sx={{fontWeight:'bold', color:'white', textShadow: '1px 1px 1px black', 
                fontSize:{xs:'1.7rem', sm:'2.3rem'}}}>Conocé a tu mascota</Typography>
            </Grid>
            </Grid>
            
          </Box>
          <Box gridColumn="span 3">
            <Grid className='process__fourth' sx={{borderRadius: 8, boxShadow: 9, top: '60px'}}>
            <Grid sx={{position:'absolute', bottom: 50, left: 10}}>
              <Typography variant='h1' sx={{fontWeight:'bold', color:'white', textShadow: '1px 1px 1px black'}}>4</Typography>
              <Typography variant='h4' sx={{fontWeight:'bold', color:'white', textShadow: '1px 1px 1px black', 
                fontSize:{xs:'1.7rem', sm:'2.3rem'}}}>Dale todo tu amor</Typography>
            </Grid>
            </Grid>
            
          </Box>

        </Box>
      </Grid>
      {/* HOGAR DE TRANSITO */}
      <Grid component="section" sx={{position:'relative', minHeight:'100vh', pt:15}}>
        <div className='section__transit-background'></div>
          <div className="custom-shape-divider-bottom-1677060917">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="shape-fill"></path>
            </svg>
          </div>

          <Grid container flexDirection='column' justifyContent='center' alignContent='center' 
          sx={{bgcolor:'white', width:{xs:'300px' , sm:'550px'}, height:{xs:'400px' ,sm:'450px'}, borderRadius: 5, boxShadow: 9, p:{xs:3,sm:6},
              position:'absolute', top:'22%', right:'5%'}}>
                <Typography variant='h6' textAlign="center" color='grey' sx={{fontSize:{xs:'0.9rem', sm: '1.2rem'}}}>Vos podes cambiarles la vida</Typography>
                <Typography variant='h3' textAlign="center" sx={{pt:2, fontWeight:'bold', fontSize:{xs:'1.7rem', sm: '3rem'}}}>Hogar de tránsito</Typography>
                <Typography variant='h6' textAlign="justify" 
                  sx={{pt:3, pb:5, fontSize:{xs:'1rem'}}}>Si no podes adoptar, <b>podes prestarles tu hogar </b> un pequeño periodo de tiempo
                  hasta que podamos encontrarles un hogar definitivo.
                </Typography>
                <Button variant='contained' color='primary' href='/contact'>
                  <Typography sx={{fontWeight:'bold'}}>Completá el formulario</Typography>
                </Button>

          </Grid>

      </Grid>
      {/* FORMAS DE AYUDAR */}
      <Grid container 
          justifyContent='center'
          component="section" sx={{position:'relative', minHeight:'100vh', pt:15}} >
            <Grid item xs={11} sm={6} sx={{p:{xs:4, sm:0}}}>
          <Typography variant='h3' sx={{fontWeight:'bold', mb:4, textAlign:'center', fontSize:{xs: '2.2rem', sm:'3rem'}}}>
            Muchas formas de ayudar
          </Typography>
          <Typography variant='h6' textAlign="justify">Si no podes adoptar,  existen muchas formas de ayudar a <b> nuestros amigos de cuatro patas. </b>
            Los <b> aportes economicos</b> nos ayudar a pagar los controles, estudios, veterinarios, traslados y alimento.
            Tambien podes ayudar donando <b> alimentos, medicamentos, desparasitantes, camas, juguetes, etc.</b>
          </Typography>
          <Grid container justifyContent="center" sx={{mt:3}}>
            <img style={{width:'50px', marginRight: '1rem'}} src="../../../../dog-food-icon.svg" alt="" />
            <img style={{width:'50px', marginRight: '1rem'}} src="../../../../dog-carrier.svg" alt="" />
            <img style={{width:'50px', marginRight: '1rem'}} src="../../../../dog-icon.svg" alt="" />
            <img style={{width:'50px', marginRight: '1rem'}} src="../../../../dog-vet-icon.svg" alt="" />
            <img style={{width:'50px'}} src="../../../../dog-vet-icon2.svg" alt="" />
          </Grid>

          <Grid container justifyContent="center" sx={{mt:6}}>
            <Button variant='contained' onClick={() => handleNavNavigate('donations')}>
              <Typography sx={{fontWeight:'bold'}}>QUIERO AYUDAR</Typography>
            </Button>
          </Grid>
          
            </Grid>

            <Grid sx={{position:'absolute', top:{xs: 0,sm:'50%'}, left:'5%'}}>
              <img style={{width:'50px', marginRight: '1rem'}} src="../../../../dog-pawn-front.svg" alt="" />
            </Grid>
            <Grid sx={{position:'absolute', top:{xs: '6%',sm:'55%'}, left:{xs: '20%',sm:'11%'}}}>
              <img style={{width:'50px', marginRight: '1rem'}} src="../../../../dog-pawn-front.svg" alt="" />
            </Grid>
            <Grid sx={{position:'absolute', top:'30%', left:'5%', display:{xs:'none', sm:'block'}}}>
              <img style={{width:'60px', marginRight: '1rem'}} src="../../../../dog-pawn-front.svg" alt="" />
            </Grid>
            <Grid sx={{position:'absolute', top:'35%', left:'11%', display:{xs:'none', sm:'block'}}}>
              <img style={{width:'60px', marginRight: '1rem'}} src="../../../../dog-pawn-front.svg" alt="" />
            </Grid>

            <Grid sx={{position:'absolute', top:'50%', right:'5%', display:{xs:'none', sm:'block'}}}>
              <img style={{width:'50px', marginRight: '1rem'}} src="../../../../dog-pawn-front.svg" alt="" />
            </Grid>
            <Grid sx={{position:'absolute', top:'55%', right:'11%', display:{xs:'none', sm:'block'}}}>
              <img style={{width:'50px', marginRight: '1rem'}} src="../../../../dog-pawn-front.svg" alt="" />
            </Grid>
            <Grid sx={{position:'absolute', top:'30%', right:'5%', display:{xs:'none', sm:'block'}}}>
              <img style={{width:'50px', marginRight: '1rem'}} src="../../../../dog-pawn-front.svg" alt="" />
            </Grid>
            <Grid sx={{position:'absolute', top:'35%', right:'11%', display:{xs:'none', sm:'block'}}}>
              <img style={{width:'50px', marginRight: '1rem'}} src="../../../../dog-pawn-front.svg" alt="" />
            </Grid>
      </Grid>
      
      <Grid component="section" sx={{position:'relative', minHeight:'100vh', pt:8, pb:15}} >
        <Grid container justifyContent="center">
           <Typography variant='h3' sx={{fontWeight:'bold', mb:8, textAlign:'center', fontSize:{xs: '2.2rem', sm:'3rem'}}}>
              Mirá como podes cambiar sus vidas
            </Typography>
        </Grid>
        <Grid sx={{p:6}}>
          <Slider {...settings}>
            <Grid>
              <img className='img__shadow' style={{width:'90%', borderRadius:15}} src="../../../../carousel1.png" alt="" />
            </Grid>
            <Grid>
              <img className='img__shadow' style={{width:'90%', borderRadius:15}} src="../../../../carousel2.png" alt="" />
            </Grid>
            <Grid>
              <img className='img__shadow' style={{width:'90%', borderRadius:15}} src="../../../../carousel3.png" alt="" />
            </Grid>
            <Grid>
              <img className='img__shadow' style={{width:'90%', borderRadius:15}} src="../../../../carousel4.png" alt="" />
            </Grid>
            <Grid>
              <img className='img__shadow' style={{width:'90%', borderRadius:15}} src="../../../../carousel5.png" alt="" />
            </Grid>
            <Grid>
              <img className='img__shadow' style={{width:'90%', borderRadius:15}} src="../../../../carousel6.png" alt="" />
            </Grid>
            <Grid>
              <img className='img__shadow' style={{width:'90%', borderRadius:15}} src="../../../../carousel7.png" alt="" />
            </Grid>
            <Grid>
              <img className='img__shadow' style={{width:'90%', borderRadius:15}} src="../../../../carousel8.png" alt="" />
            </Grid>
            <Grid>
              <img className='img__shadow' style={{width:'90%', borderRadius:15}} src="../../../../carousel9.png" alt="" />
            </Grid>
            <Grid>
              <img className='img__shadow' style={{width:'90%', borderRadius:15}} src="../../../../carousel10.png" alt="" />
            </Grid>
            <Grid>
              <img className='img__shadow' style={{width:'90%', borderRadius:15}} src="../../../../carousel11.png" alt="" />
            </Grid>
            <Grid>
              <img className='img__shadow' style={{width:'90%', borderRadius:15}} src="../../../../carousel12.png" alt="" />
            </Grid>
            <Grid>
              <img className='img__shadow' style={{width:'90%', borderRadius:15}} src="../../../../carousel13.png" alt="" />
            </Grid>           
          </Slider>
          
        </Grid>
      </Grid>
      <Grid sx={{position:'fixed', bottom:100, right: 70}} display={showFab ? 'block' : 'none'}>
        <Fab size='small' color='primary' onClick={handleFobNavigation}>
            <ArrowDropUp/>
        </Fab>
      </Grid>
    </Grid>
  )
}
