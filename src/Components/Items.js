import React, { useEffect, useState } from 'react';
import { getList } from "./api";

const ListBox = {
    width: "10rem",
    height: "fit-content", 
    backgroundColor: "#fff",
    margin: "2rem",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    fontFamily: "Times New Roman", 
    padding: "1rem", 
    fontSize: "1.2rem",
    borderRadius:"8px"
}
const outerListBox = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: "2rem"
}

function Items() {

    const [list, setList] = useState([]);

    useEffect(() => {
        let mounted = true;
        getList()
            .then(items => {
                if (mounted) {
                    setList(items)
                }
            })
        return () => mounted = false;
    }, [])


    return (
        <div style={{ margin: "1rem" }}>
            <div style={outerListBox}>
                {
                    list.map((item, id) =>
                        <div key={id}>
                            <div style={ListBox}>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column"
                                    }}
                                >
                                    <div style={{ height: "3rem" }}>
                                        User NO.
                                        <span style={{ color: "#D10000" }}>
                                            {""} {item.id}
                                        </span>
                                    </div>
                                    <div style={{ height: "7.2rem" }}>
                                        Title:-
                                        <span style={{ color: "#D10000" }}>
                                            {""} {item.title}
                                        </span>
                                    </div>
                                    <div>
                                        Item NO.
                                        <span style={{ color: "#D10000" }}>
                                            {""} {item.id}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )}
            </div>
        </div>
    );
}

export default Items
