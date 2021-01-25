import React from "react";

export function Link(props: { className: string; link: string }) {
    return (
        <a
            className={"logo " + props.className}
            href={props.link}
            target="_blank"
        ></a>
    );
}
