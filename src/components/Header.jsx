import React from "react";
import { useDispatch } from "react-redux"
import { productSearched } from "../store/productSlice"

const Header = () => {
    const dispatch = useDispatch()

    return (
        <header>
            <nav className="nav">
                <div className="nav__logo">
                    <h1>Cashier-App</h1>
                </div>
                <div className="nav__search-container">
                    <form onSubmit={e => e.preventDefault()} autoComplete="off">
                        <input
                            className="nav__search-input"
                            type="search"
                            id="keyword"
                            placeholder="Search..."
                            onChange={e => dispatch(productSearched({ keyword: e.target.value }))}
                        />
                    </form>
                </div>
            </nav>
        </header>
    );
}

export default Header;