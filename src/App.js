import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import Parallax from "./material-kit-react-master/Parallax";
import styles from "./material-kit-react-master/components.js";
import GridContainer from "./material-kit-react-master/GridContainer.js";
import GridItem from "./material-kit-react-master/GridItem.js";

const useStyles = makeStyles(styles);

export default function ImgMediaCard() {
  const classes = useStyles();
  return (
    <div /* className="app flex-row align-items-center" */>
      {/* ${process.env.PUBLIC_URL}/img/star.jpg */}
      {/* https://demos.creative-tim.com/material-kit-pro-react/static/media/bg4.199e9ec1.jpg */}
      <Parallax
        image={`https://demos.creative-tim.com/material-kit-pro-react/static/media/bg4.199e9ec1.jpg?fbclid=IwAR2P7ruxFHztVP1ISr37wXVCFd4hCMyMcYwtzDCzxOH_tadQE4ffEANQJ8Y`}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Welcome to IOT Platform</h1>
                <h3 className={classes.subtitle}>
                  Choose one of the portal to start the service.
                </h3>
              </div>
            </GridItem>

            <div className="row mt-3">
              <div className="col-sm-5">
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      component="img"
                      alt="IOT STORE"
                      image={`https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSg4HBG47xV2_D20xI0EMbFJWtrQJmPlHhRoRtlRMgJQNmafvDv`}
                      title="IOT STORE"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        IOT STORE
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Provide sensor purchase service
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>

              <div className="col-sm-5 ml-3">
                <Card>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      component="img"
                      alt="IOT MANAGE"
                      image={`https://cdn1.iconfinder.com/data/icons/business-264/100/25-512.png`}
                      title="IOT MANAGE"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        IOT MANAGE
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Manage sensors you own
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            </div>
          </GridContainer>
        </div>
      </Parallax>
    </div>
  );
}
