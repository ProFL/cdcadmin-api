import { Link } from '../react/ReactRouter.min.js'

export default React.createClass({
  render() {
    return <Link {...this.props} activeClassName="active"/>
  }
})