import PropTypes from 'prop-types'
import { PureComponent } from 'react'

export default class Options extends PureComponent {
  componentDidMount () {
    this.props.onChange(this.possiblePasswords(this.state))
  }

  componentWillUpdate (props, state) {
    this.props.onChange(this.possiblePasswords(state))
  }
}

Options.propTypes = {
  onChange: PropTypes.func.isRequired
}
