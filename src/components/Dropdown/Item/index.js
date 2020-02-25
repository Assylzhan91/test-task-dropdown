import React from "react";
import styles from "./styles.css";

export const Item = ({ data }) => {

    const { id, parentId, name, children } = data;
    let showInnerBlock = (e)=>{
        let attrId = Number(e.target.dataset.attrId)
        let parentTag =  e.target.parentNode.childNodes

            for(let i = 0; i < parentTag.length; i++){
                if(parentTag[i].tagName !== 'BUTTON'){
                    parentTag[i].classList.toggle('hide')
                }
            }
    }


    return (
        <div id={id} className= {!Number.isInteger(id) ? "hide" : ''}>
            <button onClick={ e =>showInnerBlock(e)}
                    className="btn"
                    data-attr-id={id}
            >
            {id} {name}</button>

            {
                children &&
                children.map((i, n) => <Item data={i} key={n} />)
            }
        </div>
    );
};