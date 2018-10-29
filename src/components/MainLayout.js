import React from 'react';
import Header from './Header/Header';
import SearchBar from "./searchbar/searchBar_comp";
import CheckBoxBar from "./searchbar/checkboxBar";
// import CustomSearchBar from "./searchbar/customSearch";
// import Footer from './Footer';

const MainLayout = (props) => ({
  render() {
    return (
      <div className="o-container">
        <Header />
        {/* <CustomSearchBar props={props} /> */}
        <SearchBar />
        {/* <CheckBoxBar /> */}
        {/* <main>{props.children}</main> */}
        {/* <Footer /> */}
      </div>
    );
  }
});

export default MainLayout;