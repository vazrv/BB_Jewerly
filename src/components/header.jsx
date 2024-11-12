import React from "react";
import like from "@assets/icons/like.svg";

const Header = () => {
    return (
        <div className="container mx-auto py-4">
            <div className="flex">
                <nav>
                    <ul className="flex gap-4">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <h1>BB Jewerly</h1>
            <input type="Text" placeholder="Поиск" />
            <a href="" ><img src={like} alt="" /></a>

        </div>
    );
};

export default Header;
