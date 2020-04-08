import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmfUXTkPNpni3qRxWiimrYDibXyHepm7g7oXNL_bFIIZ_V2hCX&usqp=CAU) center / cover'}} >BurgerApp</CardTitle>
            <CardText>
              Users are able to select a burger or sandwich, buy and consume it. Utilized using MySQL and MongoDB Atlas.
            </CardText>
            <CardActions border>
            <Button href="https://github.com/sjervin07/BurgerApp.git" colored>Github</Button>
            <Button href="https://shannonsburgers.herokuapp.com/" colored>Deployed App</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmVDJvL4VV1fsPNmMEEMB0LwUq9v6tEbnAm8CmfdCIBPMjpb7Z&usqp=CAU) center / cover'}} >Workout Tracker</CardTitle>
            <CardText>
            This workout tracker utilizes MongoDB Atlas to start workouts and track them instance by instance.
            </CardText>
            <CardActions border>
            <Button href="https://github.com/sjervin07/Workout_Tracker.git" colored>Github</Button>
            <Button href="https://workout-tracker-shannon.herokuapp.com/" colored>Deployed App</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://ak5.picdn.net/shutterstock/videos/22941055/thumb/11.jpg) center / cover'}} >Day Planner</CardTitle>
            <CardText>
            Web application that is color coded based on present time and saves users data to local storage.
            </CardText>
            <CardActions border>
            <Button href="https://github.com/sjervin07/Day_Planner.git" colored>Github</Button>
            <Button href="https://sjervin07.github.io/Day_Planner/" colored>Deployed App</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://about.fb.com/wp-content/uploads/2019/03/newsroom-hero-image-password-security.png?fit=1440%2C988) center / cover'}} >Password Generator</CardTitle>
            <CardText>
            Random password generator. User is prompted to choose type of charcters and password length.
            </CardText>
            <CardActions border>
            <Button href="https://github.com/sjervin07/Password_Generator.git" colored>Github</Button>
            <Button href="https://sjervin07.github.io/Password_Generator/" colored>Deployed App</Button>>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#000000', height: '176px', background: 'url(https://s27363.pcdn.co/wp-content/uploads/2019/09/Yellowstone-National-Park.jpg.optimal.jpg) center / cover'}} >AnimalDex</CardTitle>
        <CardText>
        Project that allows users to pick national park and see which animals have been recently located in area.
        </CardText>
        <CardActions border>
          <Button  href="https://github.com/sjervin07/AnimalDex.git"colored>Github</Button>
          <Button href="https://sjervin07.github.io/AnimalDex/" colored>Deployed App</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
      </Card>

      <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#000000', height: '176px', background: 'url(https://cdn11.bigcommerce.com/s-jdhnct1/images/stencil/original/products/233/741/sports_marketing_background__14948.1446754476.jpg?c=2) center / cover'}} >REC-reate</CardTitle>
        <CardText>
        Project that allows users to find local fields and courts to gather and play recreational sports.
        </CardText>
        <CardActions border>
          <Button href="https://github.com/sjervin07/REC-reate.git" colored>Github</Button>
          <Button href="https://rec-reate.herokuapp.com/" colored>Deployed App</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
      </Card></div>
      )

    }
  }

  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Individual Projects</Tab>
          <Tab>Group Projects</Tab>
        </Tabs>

          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
    )
  }
}

export default Projects;