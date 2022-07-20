import React, { useState } from "react";

export const Dropdown = ({ children, options }) => {
  const [isOpened, setIsOpened] = useState(false);

  const dropdownClickHandler = () => {
    setIsOpened((currState) => !currState);
  };

  return (
    <div onClick={dropdownClickHandler}>
      <div>{children}</div>
      {isOpened && (
        <div className="sc-oUDcU fwgiYd">
          {options?.map((option, index) => (
            <span key={`option-${index}`} className="sc-pQdCa jqrPXB">
              {/* <div className="sc-pXZzD ivUHTG"></div> */}
              <span>{option}</span>
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
