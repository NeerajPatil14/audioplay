import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import BookIcon from '@material-ui/icons/Book';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import audio1 from './Audios/part1.mp3'
import image1 from "./Images/img1.jpg"
import audio2 from './Audios/part2.mp3'
import image2 from "./Images/img2.jpg"
import audio3 from './Audios/part3.mp3'
import image3 from "./Images/img3.jpg"
import audio4 from './Audios/part4.mp3'
import image4 from "./Images/img4.jpg"
import audio5 from './Audios/part5.mp3'
import image5 from "./Images/img5.jpg"
import audio6 from './Audios/part6.mp3'
import image6 from "./Images/img6.jpg"
import audio7 from './Audios/part7.mp3'
import image7 from "./Images/img7.jpg"
import audio8 from './Audios/part8.mp3'
import image8 from "./Images/img8.jpg"
import audio9 from './Audios/part9.mp3'
import image9 from "./Images/img9.jpg"
import audio10 from './Audios/part10.mp3'
import image10 from "./Images/img10.jpg"


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'In case of discrepancy contact - '}
      <Link color="inherit" href="mailto:neerajpatil14@gmail.com">
      neerajpatil14@gmail.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
    appbar: {background:'linear-gradient(90deg, rgba(212,0,0,1) 0%, rgba(85,0,0,1) 100%, rgba(121,9,9,1) 100%)'
    },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    position:"absolute",
    left:0,
    bottom:0,
    right:0,
  },
}));


export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
    <div>
      <CssBaseline />
      <AppBar position="relative" className={classes.appbar}>
        <Toolbar>
          <AudiotrackIcon className={classes.icon} />
          <BookIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Audio Books
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Marathi audio Book
            </Typography>
            <Typography component="h3" variant="h2" align="center" color="textPrimary" gutterBottom>
            कॉलेज लव्ह स्टोरी 
          </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
            </Typography>
            
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4} direction="column" >
            
              <Grid  xs={12} sm>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={image1}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                     कॉलेज लव्ह स्टोरी पार्ट १ 
                    </Typography>
                    <audio src={audio1} controls loop autoplay/>
                  </CardContent>
                  
                </Card>

                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={image2}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                     कॉलेज लव्ह स्टोरी पार्ट २
                    </Typography>
                    <audio src={audio2} controls loop autoplay/>
                  </CardContent>
                </Card>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={image3}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                     कॉलेज लव्ह स्टोरी पार्ट ३ 
                    </Typography>
                    <audio src={audio3} controls loop autoplay/>
                  </CardContent>
                  
                </Card>


                <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={image4}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                   कॉलेज लव्ह स्टोरी पार्ट ४ 
                  </Typography>
                  <audio src={audio4} controls loop autoplay/>
                </CardContent>
                
              </Card>

              <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={image5}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                     कॉलेज लव्ह स्टोरी पार्ट ५
                    </Typography>
                    <audio src={audio5} controls loop autoplay/>
                  </CardContent>
                  
                </Card>

                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={image6}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                     कॉलेज लव्ह स्टोरी पार्ट ६
                    </Typography>
                    <audio src={audio6} controls loop autoplay/>
                  </CardContent>
                  
                </Card>

                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={image7}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                     कॉलेज लव्ह स्टोरी पार्ट ७ 
                    </Typography>
                    <audio src={audio7} controls loop autoplay/>
                  </CardContent>
                  
                </Card>

                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={image8}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                     कॉलेज लव्ह स्टोरी पार्ट ८
                    </Typography>
                    <audio src={audio8} controls loop autoplay/>
                  </CardContent>
                  
                </Card>

                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={image9}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                     कॉलेज लव्ह स्टोरी पार्ट ९
                    </Typography>
                    <audio src={audio9} controls loop autoplay/>
                  </CardContent>
                  
                </Card>

                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={image10}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                     कॉलेज लव्ह स्टोरी पार्ट १०  
                    </Typography>
                    <audio src={audio10} controls loop autoplay/>
                  </CardContent>
                  
                </Card>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                <Typography variant="h6" align="center" gutterBottom>
                Disclaimer
              </Typography>
              <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
              
              This site is a fair use of a copyrighted work
              </Typography>
              <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
              
              The purpose and character of the use is for nonprofit educational purposes
              </Typography>
              <Typography variant="subtitle1" align="center" color="textSecondary" component="p">

                The purpose of this site is to reach every human being to make everyone listen to the wonderful thoughts of the books
              </Typography>
              <Copyright />
              </CardContent>
                  
              </Card>



              </Grid>
            
          </Grid>
        </Container>
      </main>
      </div>
      
      {/* End footer */}
    </React.Fragment>
  );
}