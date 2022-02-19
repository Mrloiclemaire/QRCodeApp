import React from 'react';
import QR from "../QRCodes/QR"
import InputQR from '../QRCodes/InputQR';
import "./Admin.css"

const Admin = ({nbTables, setTable}) => {
    return (
        <div className='background'>
            <InputQR setTable={setTable}/>
            <QR nbTables={nbTables}/>
        </div>
    );
};

export default Admin;