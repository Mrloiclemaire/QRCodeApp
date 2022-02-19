
import {useState} from "react";
import {useEffect} from "react";
import axios from "axios";
import './QR.css';



const Qr =({nbTables})=> {

    const [Qr, setQr] = useState([]);
  
    useEffect(()=> {
      const getQR = async ()=> {

        const UrlsArray=[];
        
        for ( let i =0 ; i < nbTables; i ++ ){
          
        const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=table${i}`
          
        const imgQR = await axios(url)
        
        UrlsArray.push(imgQR.config.url) 
       
      }
        setQr(UrlsArray)
      }
    
      getQR();
    
    },[nbTables])

 
return (

    <div className="codes">
        {Qr.map((qrUrl,index)=>(
            <div key={index} className="QRcode">
                <h2>Table {index+1}</h2>
                <img src={qrUrl} alt={`table${index}`}></img>
            </div>
        ))}
    </div>

)
}



export default Qr;