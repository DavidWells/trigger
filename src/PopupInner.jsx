import React, {PropTypes} from 'react';

const PopupInner = React.createClass({
  propTypes: {
    hiddenClassName: PropTypes.string,
    className: PropTypes.string,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    children: PropTypes.any,
  },
  render() {
    const props = this.props;
    let className = props.className;
    if (!props.visible) {
      className += ' ' + props.hiddenClassName;
    }
    return (<div className={className}
                 onMouseEnter={props.onMouseEnter}
                 onMouseLeave={props.onMouseLeave}
                 style={props.style}>
      {props.children}
    </div>);
  },
});

export default PopupInner;
