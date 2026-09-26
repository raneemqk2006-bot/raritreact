import { CardActions, CardContent, CardHeader, CardMedia, Container, Typography } from "@mui/material";
import {useMenu} from '../Hooks/useMenu';
export default function Menu(){
    const {menu} =useMenu();
    return<>
    <Container sx={{my: 4}}>
        <Grid container spacing={4}>
            {menu.map((item) =>{
               <Grid key={item.id}>
                <Card>
                    <CardHeader title={item.name}/>
                    <CardMedia component="img" src={item.image}/>
                    <CardContent>
                        <Typography>{item.name}</Typography>
                        <Typography>{item.description}</Typography>
                        <Typography>{item.price}$ - {item.quantity}</Typography>
                    </CardContent>  
                    <CardActions>
                        <Button>view</Button>
                        <Button>Buy</Button>
                    </CardActions>  
                </Card>
               </Grid>


            })}

        </Grid>
 

    </Container>
    </>
}