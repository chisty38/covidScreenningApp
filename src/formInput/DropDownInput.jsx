import { useState, useEffect } from "react";
import "./formInput.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { DropdownButton, ButtonGroup, Dropdown } from 'react-bootstrap';
import './dropDownInput.css';

const DropDownInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, name, paramData, errorMessage, onSelect, id, disabled, ...inputProps } = props;
  const [chosenValue, setchosenValue] = useState();
  

  const handleFocus = (e) => {
    setFocused(true);
  };
  const DdlHandle= async (e)=> {
    setchosenValue(e);
    props.onSelectdropDownDataHandler(e);
}


  return (
    <div className="formInput" id="dropButtonDiv">
      {!props.showLabel && <label><h6>{label}</h6></label>}
      {['down'].map((direction) => (
        
                <DropdownButton
                {...inputProps}
                    onSelect={DdlHandle}
                    disabled ={props.disabled}
                    className={`${props.classStyle ? props.classStyle : 'btnDropDown'} `}
                    as={ButtonGroup}
                    key={direction}
                    id={`dropdown-button-drop-${direction}`}
                    drop={direction}
                    onBlur={handleFocus}
                    variant={"warning"}
                    title={`${ props.values ? props.values : chosenValue ? chosenValue : inputProps.placeholder} `}
                >
                    {props.showSearchBar &&
                    <input type="text" className="form-control" id="dropDownSeacrInput" 
                    data-toggle="tooltip" data-placement="left" title={"Search for employee" }
                    onChange={props.onChangeEmp} value ={props.empName}/>}

                    {(name === "leadOwner" || name === "closer" ? props?.employees?.filter((item) =>{
                        if (props?.empName == '') 
                            {
                                return item;
                            }
                        else if (item?.ItemName?.toLowerCase().includes(props?.empName?.toLowerCase())) 
                        {
                            return item;
                        }
                        }) :
                    label ==="VEHICLE TYPE" ? props?.vehicleType :
                    label ==="MAKE" || label === 'VEHICLE MAKE' ? props?.vehicleMake.filter((item) =>{
                        if (item?.VehicleType?.includes(props?.type)) 
                            {
                                return item;
                            }
                        }) :
                    label ==="MODEL" ? props?.vehicleModel.filter((item) =>{
                        if (item?.VehicleType?.includes(props?.type) && item?.VehicleMake?.includes(props?.make)) 
                        {
                            return item;
                        }
                    }) :
                    label ==="LEAD SOURCE" ? props?.leadSource.filter((item) =>{
                        if (item?.VehicleType?.includes(props?.type)) 
                            {
                                return item;
                            }
                        }) :
                    label ==="LENDER" ? props?.lender.filter((item) =>{
                        if (item?.VehicleType?.includes(props?.type)) 
                            {
                                return item;
                            }
                        }) :
                    inputProps.param).map((location) => (
                        <Dropdown.Item className="dropDownSection" eventKey={location?.ItemName} key={location?.ItemId}>{location?.ItemName == null ? "Select Assign To " : location?.ItemName} 
                        {name === "leadOwner" || name === "closer" ? <img className="emp-img" src={location?.PhotoUrl} /> :''}</Dropdown.Item>              
                    ))}
                </DropdownButton>
                
            ))}
            <span>{errorMessage}</span>
    </div>
  );
};

export default DropDownInput

//{dropDownInputs.map((input) => {
//    return (
//        <div className="formInput">
//    <label htmlFor="Location">
//        <h6>Location</h6>
//      </label>
//    <DropDownControl
//        dropDownDataHandler={(e) => {
//          //setDetails({ ...details, team: e });
//          setValues({ ...values, [e.target.name]: e.target.value });
//          //setError("");
//        }}
//        itemArrayParam={input.param}
//        caption={input.label}
//        required="true"
//        error={input.errorMessage}
//        classStyle="btn-locdropLoc"
//      />
//      </div>
      
//)})

//}