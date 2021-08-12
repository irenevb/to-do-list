import React, {useContext} from "react";
import PropTypes from 'prop-types';
import {OptionsContext} from "./../contexts/options-context"

function Select({func}) {
    const Context = useContext(OptionsContext);
    // const options = Context.options;
    const opciones= () => {
        return(
        Context.options.map(op => (
            
            
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
    func: PropTypes.func
}

export default Select;
