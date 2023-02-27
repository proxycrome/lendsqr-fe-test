import React, { useState } from 'react'
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Link } from 'react-router-dom';
import details from '../assets/images/details.png'
import blacklist from '../assets/images/blacklist.png'
import activate from '../assets/images/activate.png'
import more from '../assets/images/more.png';

type ActionButtonProps = {
  id: string | undefined
}

const ActionsDropDown: React.FC<ActionButtonProps> = ({id}: ActionButtonProps): JSX.Element => {
  const [menu, setMenu] = useState<boolean>(false);

  console.log(id);
  
  const toggle = () => {
    setMenu((prevState) => !prevState);
  };

  return (
    <>
      <Dropdown
        isOpen={menu}
        toggle={toggle}
        className="d-inline-block"
      >
        <DropdownToggle
          tag={"a"}
          caret={false}
          className="btn header-item waves-effect"
          id="page-header-user-dropdown"
        >
          <div>
            <img src={more} alt="more"/>
          </div>
        </DropdownToggle>
        <DropdownMenu end>
          <>
            <DropdownItem
              tag={Link}
              to={`/dashboard/${id}`}
            >
              <div className="actions">
                <img src={details} alt="view details"/>
                <span>View Details</span>
              </div>
            </DropdownItem>
            <DropdownItem
              tag={Link}
              to={"#"}
            >
              <div className="actions">
                <img src={blacklist} alt="blacklist user"/>
                <span className="ml-3">Blacklist User</span>
              </div>
            </DropdownItem>
            <DropdownItem
              tag={Link}
              to={"#"}
            >
              <div className="actions">
                <img src={activate} alt="activate user"/>
                <span className="ml-3">Activate User</span>
              </div>
            </DropdownItem>
          </>
        </DropdownMenu>
      </Dropdown>
    </>
  )
}

export default ActionsDropDown;
