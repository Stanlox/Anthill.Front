import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

export const FormErrors = ({ formErrors }) =>
    <div className='formErrors' style={{color: "#D63301", backgroundColor: "#FFCCBA"}}>
        {Object.keys(formErrors).map((fieldName, i) => {
            if (formErrors[fieldName].length > 0) {
                return (
                    <div>
                        <i className="fa fa-exclamation-circle pr-1 mt-1" aria-hidden="true" style={{float:"left"}}></i>
                        <p key={i}>{fieldName} {formErrors[fieldName] }</p>
                    </div>
                )
            } else {
                return '';
            }
        })}
    </div>