import React, { useState, useEffect, useCallback } from 'react';
import Tools from "../components/Tools";
import SimpleList from "../list/SimpleList";
import JustInfo from "./JustInfo";
import {
    MyContext,
    MyNewContext
} from './mycontexts';

function HomePage() {

    const [showLabel, setShowLabel] = useState(true);
    const [activeState, setActiveState] = useState("all");
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then((data) => {
                return data.json();
            })
            .then((data) => {
                setData(data);
            })
    }, []);


    const handleRefresh = () => {
        fetch('/data2.json')
            .then((data) => data.json())
            .then((data) => {
                setData(data);
            });
    }

    const onListChange = (evt) => {
        setActiveState(evt.target.value);
    };

    const handleDelete = (item) => {
        setData(data.filter((element) => element.id !== item.id));
    };

    const handleLabelClick = (arg) => {
        setActiveState(arg);
    };

    const handleAdd = (item) => {
        setData([item, ...data]);
    }


    const handleShowLabel = (evt) => {
        setShowLabel(evt.target.checked);
    }


    const newList = data.filter((item) => {
        if (activeState === "all") {
            return true;
        }
        if (activeState === "active") {
            return item.isActive === true;
        }
        if (activeState === "non-active") {
            return item.isActive === false;
        }
        return false;
    });

    const handleCLick = useCallback(
        () => {
            console.log("Click", activeState);
        }, [activeState]);


    return (
        (
            <div>
                <div>
                    <input checked={showLabel} type="checkbox" onChange={handleShowLabel} /> Show Label
                </div>
                <MyNewContext.Provider value={100}>
                    <MyContext.Provider value={showLabel}>
                        <Tools onAdd={handleAdd} labelValue={activeState} onAction={onListChange} count={data.length} onRefresh={handleRefresh}>
                            <SimpleList onLabelClick={handleLabelClick} data={newList} onAction={handleDelete} />
                        </Tools>
                        <JustInfo onClick={handleCLick} showLabel={showLabel} />
                    </MyContext.Provider>
                </MyNewContext.Provider>
            </div>
        )
    );
}


export default HomePage;

