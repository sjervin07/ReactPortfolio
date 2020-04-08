import React, {Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Shannon Ervin</h2>
            <hr></hr>
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Initiative-taking and self-driven developer looking for an opportunity in the Full Stack Web Development field. I am a task--oriented, visual learner who loves working both independently and in a collaborative setting. I am skilled in Full Stack, including HTML, CSS, JavaScript, NODE.JS packages, REACT, SQL/Mongo, NOSQL, and React. I strive for excellence and am enthusiastic about the work that I do.</p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>  
                    (262) 676-3293
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                     sjervin07@gmail.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Contact;