import React from "react";

const Header = (props) => {
    return (
        <header>
            <nav className="nav">
                <div className="nav__logo">
                    <h1>Cashier-App</h1>
                </div>
                <div className="nav__search-container">
                    <form action="#" onSubmit={e => e.preventDefault()} autoComplete="off">
                        <input className="nav__search-input" type="search" id="q" placeholder="Search..."/>
                    </form>
                </div>
            </nav>
        </header>
    );
}

export default Header;