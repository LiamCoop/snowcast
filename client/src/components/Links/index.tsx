import React from "react";
import "./Links.css";

export function Link(props: { className: string; link: string }) {
    return (
        <a
            className={"logo " + props.className}
            href={props.link}
            target="_blank"
        />
    );
}
