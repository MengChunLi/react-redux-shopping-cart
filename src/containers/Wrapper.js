import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation'
import Paper from 'material-ui/Paper'
import { browserHistory } from 'react-router'
import { getAddedIdsLen } from '../reducers'
import TopBarContainer from './TopBarContainer'
import FontIcon from 'material-ui/FontIcon'
import BadgeCartTab from '../components/BadgeCartTab'
import './Wrapper.css'

class Wrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = { height: 700 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions.bind(this));
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  render() {
    const { selectedIndex, children, cartItemLen } = this.props
    const { height } = this.state
    return (
      <div className="container" style={{height: `${height}px`}}>
        <TopBarContainer />
        <div className="content" style={{height: `${height-106}px`}}>{children}</div>
        <Paper className="bottom">
          <BottomNavigation selectedIndex={selectedIndex}>
            <BottomNavigationItem onTouchTap={() => browserHistory.push('/')} icon={<FontIcon className="material-icons md-light">home</FontIcon>} label="home"/>
            <BottomNavigationItem onTouchTap={() => browserHistory.push('/cart')} icon={<BadgeCartTab color={selectedIndex === 1 ? "black" : "rgba(0, 0, 0, 0.54)"} cartItemLen={cartItemLen}/>} label="cart"/>
          </BottomNavigation>
        </Paper>
      </div>
    )
  }
}

Wrapper.PropTypes = {
  selectedIndex: PropTypes.number.isRequired,
  children: PropTypes.element.isRequired,
  cartItemLen: PropTypes.number.isRequired
}

const mapStateToProps = (state, ownProps) => ({
  selectedIndex: ownProps.selectedIndex,
  children: ownProps.children,
  cartItemLen: getAddedIdsLen(state)
})

export default connect(mapStateToProps)(Wrapper)