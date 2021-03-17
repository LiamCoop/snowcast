import React from "react";
import { Link } from "./Link";
import "./Links.css";

function SocialBar() {
    return (
        <div className="socialsDiv">
            <Link className="generic" link="" />
            <Link className="twitter" link="https://twitter.com/LiamCoopR" />
            <Link className="github" link="https://github.com/LiamCoopR" />
            <Link
                className="linkedin"
                link="https://www.linkedin.com/in/liamcoop/"
            />
            <Link className="mail" link="mailto:liamcoop@outlook.com" />
        </div>
    );
}

export default SocialBar;
