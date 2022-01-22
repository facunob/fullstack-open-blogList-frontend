import React, {useState, useImperativeHandle} from 'react';
import PropTypes from 'prop-types';

const Togglable = React.forwardRef(({ children, message }, ref) => {
    const [show, setShow] = useState(false);

    const toggleVisibility = () => {
        setShow(!show)
      }
    
      useImperativeHandle(ref, () => {
        return {
          toggleVisibility
        }
      })
    

    return (
        <>
            {
                show ? children : <button onClick={() => toggleVisibility()}>{message}</button>
            }
        </>
    );

})

export default Togglable;

Togglable.propTypes = {
  message: PropTypes.string.isRequired
}