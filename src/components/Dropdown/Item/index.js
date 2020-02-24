import React from "react";
import styles from "./styles.css";

export const Item = ({ data }) => {
    const { id, parentId, name, children } = data;
    let showInnerBlock = (e)=>{

    }
    return (
        <div>
            <button onClick={showInnerBlock} className="btn">{id} {name}</button>

            {
                children &&
                children.map((i, n) => <Item data={i} key={n} />)
            }
        </div>
    );
};