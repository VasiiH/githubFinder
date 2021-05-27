import React, { Component } from 'react'
import { FaGithub } from 'react-icons/fa'; // npm install react-icons --save
import PropTypes from 'prop-types'


export class Navbar extends Component {

    static defaultProps = {
        title :'GITHUB FINDER',
        icon: <FaGithub /> 
    }

    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.element.isRequired
    }
    render() {
        return (
            <nav className="navbar bg-primary">
                <h1>{this.props.icon} {this.props.title}</h1>
            </nav>
        )
    }
}

export default Navbar



