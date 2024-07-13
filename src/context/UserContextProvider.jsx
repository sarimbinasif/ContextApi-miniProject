import React from "react";
import PropTypes from "prop-types";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
    const [user, setUser] = React.useState(null);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

// Define prop types for the component
UserContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default UserContextProvider;
