import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Segment, Grid, Divider, Header, Button, Icon } from 'semantic-ui-react'


const Login = ({...rest}) => {
  return (
    <Segment placeholder>
      <Grid columns={2} stackable textAlign='center'>
        <Divider vertical>Or</Divider>

        <Grid.Row verticalAlign='middle'>

          <Grid.Column>
            <Header icon>
              <Icon name='search' />
              Login
            </Header>
            <Button>Login</Button>
          </Grid.Column>

          <Grid.Column>
            <Header icon>
              <Icon name='world' />
            </Header>
            <Button 
              as={Link} 
              to='/public/login'
            >
              Register
            </Button>
          </Grid.Column>

        </Grid.Row>

      </Grid>
    </Segment>
  )
}

const mapStateToProps = (state, props) => {
  return {
    isLoggedIn: state.user.isLoggedIn()
  }
}

export default connect(mapStateToProps)(Login)
