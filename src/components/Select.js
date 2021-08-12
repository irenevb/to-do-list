import React from "react";
import PropTypes from 'prop-types';

function Select({ options, func}) {
    const opciones= () => {
        return(
        options.map(op => (
            
            
                <React.Fragment>
                <option value={op.value}>{op.label}</option>
                </React.Fragment>
            
        )));
    }
    
    return(
        <div className="select">
        <select onChange={func} name="todos" className="filter-todo">
            {opciones()}
        </select>
        </div>
    );
};
Select.propTypes = {
    options: PropTypes.array,
    func: PropTypes.func
}

export default Select;
