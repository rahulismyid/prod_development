import React from 'react';
import Header from './Header/Header';
// import Footer from './Footer';

const MainLayout = props => ({
  render() {
    return (
      <div className="o-container">
        <Header />
        {/* <main>{props.children}</main> */}
        {/* <Footer /> */}
      </div>
    );
  }
});

export default MainLayout;