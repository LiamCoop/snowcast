import './button.scss';

//found this button on code-pen, thought it fit the project theme.
//Shoutout Sowmya Seshadri for this!
//https://codepen.io/sowmyaseshadri/pen/LYRjGpr?editors=1100
export function Button(){
    return (
        <div className="btn">
            <div className="btn-name">View Regions</div>
            <div className="snowflake-grid to-left">
                <div className="snowflake-item border-bottom border-right">
                    <div className="sub-items border-right border-bottom pull-down">
                    <div className="m-w-15 m-h-15 border-right border-bottom m-3"></div>
                    </div>
                </div>
                <div className="snowflake-item border-bottom border-left">
                    <div
                    className="sub-items border-right border-bottom r-90 pull-down-right"
                    >
                    <div className="m-w-15 m-h-15 border-right border-bottom m-3"></div>
                    </div>
                </div>
                <div className="snowflake-item border-top border-right">
                    <div className="sub-items border-right border-bottom r-270 pull-right">
                    <div className="m-w-15 m-h-15 border-right border-bottom m-3"></div>
                    </div>
                </div>
                <div className="snowflake-item border-top border-left">
                    <div className="sub-items border-right border-bottom r-180 pull-left">
                    <div className="m-w-15 m-h-15 border-right border-bottom m-3"></div>
                    </div>
                </div>
            </div>
            <div className="snowflake-grid to-right">
                <div className="snowflake-item border-bottom border-right">
                    <div className="sub-items border-right border-bottom pull-down">
                    <div className="m-w-15 m-h-15 border-right border-bottom m-3"></div>
                    </div>
                </div>
                <div className="snowflake-item border-bottom border-left">
                    <div
                    className="sub-items border-right border-bottom r-90 pull-down-right"
                    >
                    <div className="m-w-15 m-h-15 border-right border-bottom m-3"></div>
                    </div>
                </div>
                <div className="snowflake-item border-top border-right">
                    <div className="sub-items border-right border-bottom r-270 pull-right">
                    <div className="m-w-15 m-h-15 border-right border-bottom m-3"></div>
                    </div>
                </div>
                <div className="snowflake-item border-top border-left">
                    <div className="sub-items border-right border-bottom r-180 pull-left">
                    <div className="m-w-15 m-h-15 border-right border-bottom m-3"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}