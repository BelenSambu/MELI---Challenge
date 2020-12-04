import React from 'react';
import  { 
    Box,
    Card,
    CardContent,
    Divider,
    Grid,
    makeStyles,
  } from '@material-ui/core';
import './styles.css';
  
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column'
    },
    statsItem: {
      alignItems: 'center',
      display: 'flex'
    },
    statsIcon: {
      marginRight: theme.spacing(1)
    },
    card : {
        fontFamily: 'Proximanova-regular',
        width: "32%",
        margin: "5px",
        height: "500px;"
    },
    cardContent : {
        height: "280px",
        cursor: 'pointer'
    }
  }));
  

const ProductCard = ({item}) => { 

    const classes = useStyles();

    const redirectToProduct = (url) => {
      console.log("Link a producto");
    }

    return (
        <Card
          className={classes.card}
          onClick={redirectToProduct(item.link.url)} 
        >
          <CardContent
            className={classes.cardContent}
          >
            <Box
              display="flex"
              justifyContent="center"
              mb={3}
            >
              <img
                alt="Product"
                src={item.image_src}
                className="size_image_product"
              />
            </Box>
          </CardContent>
          <Box flexGrow={1} />
          <Divider />
          <Box p={2}>
            <Grid
              container
              justify="space-between"
              spacing={2}
            >
              <Grid
                className={classes.statsItem}
                item
              >
                <div>
                  {item.price.original_price ? <span style={{textDecoration: "line-through", color: 'rgb(113, 95, 95)'}}>${item.price.original_price}</span> : null}
                </div>
              </Grid>
            </Grid>
            <div>
                <div><span style={{fontWeight:"bold", fontSize: '1.2rem'}}>${item.price.price}</span> 
                    {item.price.discount ? <span style={{color:"#00a650", marginLeft: "5px"}}> {item.price.discount}% OFF</span> : null}
                </div>
                <p>
                    {item.free_shipping ? <span style={{color:"#00a650"}}>Envío gratis</span> : null}
                </p>
                <p style={{ fontSize: '0.9rem' }}>{item.title}</p>
            </div>
          </Box>
        </Card>
    )
}
 
export default ProductCard;