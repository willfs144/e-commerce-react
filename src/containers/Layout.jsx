
import PropTypes from 'prop-types';

const Layout = ({ children }) => {

    return (
        <div className="Layout">
            {children}
        </div>
    );
}

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;