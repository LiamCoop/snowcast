import React from "react";

import { DayObj, ConditionsObj, Icon } from "../";

import "./DayButton.css";

function GetIcon(array: Array<ConditionsObj>): string {
    const map = array.reduce(
        (acc: Map<string, number>, e: ConditionsObj) =>
            acc.set(e.weather[0].icon, (acc.get(e.weather[0].icon) || 0) + 1),
        new Map()
    );
    const maxi = Math.max(...Array.from(map.values()));
    let icon = "";
    map.forEach((val: number, obj: string) => {
        if (val == maxi) icon = obj;
    });
    return icon;
}

export function DayButton(props: {
    day: DayObj;
    onClick: () => void;
    active: boolean;
}) {
    let daySnow = 0;
    props.day.list.map((time) => {
        daySnow += time.snow ? time.snow?.["3h"] : 0;
    });

    return (
        <button
            className={props.active ? "dayButtonActive" : "dayButtonInactive"}
            onClick={props.onClick}
        >
            <h1>{props.day.dateTime.split(" ")[0]}</h1>
            <Icon icID={GetIcon(props.day.list)} imgHeight={"60vh"} />
            <p>Snow: {Math.round(daySnow * 10) / 10}cm</p>
        </button>
    );
}
