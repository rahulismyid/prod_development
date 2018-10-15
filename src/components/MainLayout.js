import React from 'react';
import Header from './Header/Header';
import SearchBar from "./searchbar/searchBar_comp";
// import Footer from './Footer';

const MainLayout = props => ({
  render() {
    return (
      <div className="o-container">
        <Header />
        <SearchBar />
        {/* <main>{props.children}</main> */}
        {/* <Footer /> */}
      </div>
    );
  }
});

export default MainLayout;