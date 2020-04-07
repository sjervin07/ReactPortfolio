import React, {Component} from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button} from 'react-mdl';

class Projects extends Component {
  render() { 
    return (
      <div style={{width: '80%', margin: 'auto'}}>
      <Grid className="demo-grid-1">

      <Cell col={4}></Cell>
      <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
      <CardTitle expand style={{color: '#fff', background: 'url() bottom right 15% no-repeat #46B6AC'}}>BurgerApp</CardTitle>
      <CardText>
          Web application using handlebars and MySql.
      </CardText>
      <CardActions border>
          <Button href="https://github.com/sjervin07/BurgerApp.git" colored>Github</Button>
          <Button href="https://shannonsburgers.herokuapp.com/" colored>Deployed App</Button>
      </CardActions>
    </Card>

    <Cell col={4}></Cell>
      <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
      <CardTitle expand style={{color: '#fff', background: 'url() bottom right 15% no-repeat #46B6AC'}}>Notepad</CardTitle>
      <CardText>
          Notepad app that allows user to post, save and delete their notes.
      </CardText>
      <CardActions border>
          <Button href="https://github.com/sjervin07/Note_Taker.git" colored>Github</Button>
          <Button href="https://vast-escarpment-19295.herokuapp.com/" colored>Deployed App</Button>
      </CardActions>
    </Card>

    <Cell col={4}></Cell>
      <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
      <CardTitle expand style={{color: '#fff', background: 'url() bottom right 15% no-repeat #46B6AC'}}>Day Planner</CardTitle>
      <CardText>
          Web application that is color coded based on present time and saves users data to local storage.
      </CardText>
      <CardActions border>
          <Button href="https://github.com/sjervin07/Day_Planner.git" colored>Github</Button>
          <Button href="https://sjervin07.github.io/Day_Planner/" colored>Deployed App</Button>
      </CardActions>
    </Card>

    <Cell col={4}></Cell>
      <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
      <CardTitle expand style={{color: '#fff', background: 'url() bottom right 15% no-repeat #46B6AC'}}>Password Generator</CardTitle>
      <CardText>
      Random password generator, can choose characteristics and copy to clipboard.
      </CardText>
      <CardActions border>
          <Button href="https://github.com/sjervin07/Password_Generator.git" colored>Github</Button>
          <Button href="https://sjervin07.github.io/Password_Generator/" colored>Deployed App</Button>
      </CardActions>
    </Card>

    <Cell col={4}></Cell>
      <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
      <CardTitle expand style={{color: '#fff', background: 'url() bottom right 15% no-repeat #46B6AC'}}>AnimalDex-Project</CardTitle>
      <CardText>
          Project that allows users to pick national park and see which animals have been recently located in area.
      </CardText>
      <CardActions border>
          <Button  href="https://github.com/sjervin07/AnimalDex.git"colored>Github</Button>
          <Button href="https://sjervin07.github.io/AnimalDex/" colored>Deployed App</Button>
      </CardActions>
    </Card>

    <Cell col={4}></Cell>
      <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
      <CardTitle expand style={{color: '#fff', background: 'url() bottom right 15% no-repeat #46B6AC'}}>REC-reate</CardTitle>
      <CardText>
          Project that allows users to find local fields and courts to gather and play recreational sports.
      </CardText>
      <CardActions border>
          <Button href="https://github.com/sjervin07/REC-reate.git" colored>Github</Button>
          <Button href="https://rec-reate.herokuapp.com/" colored>Deployed App</Button>
      </CardActions>
    </Card>

    </Grid>
</div>
  
    )
  }
}
export default Projects;