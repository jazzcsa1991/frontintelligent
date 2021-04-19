import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { Button,Modal,ToggleButton,ButtonGroup} from 'react-bootstrap';
import NavBar from './navbar'


function Pagos() {
  const [list, setList] = useState([]);
  
  useEffect(() => {
    Axios({
      url: "https://intelligentest.herokuapp.com/api/pago",
    })
      .then((response) => {
          setList(response.data.data);})
      .catch((error) => {console.log(error);});
  }, [setList]);
  
  
  return(
    <div>
      <NavBar/>
      <div>
        {list.map((item,index) => (
            <div key={index}>
              <p><span style={{fontWeight:"bold"}}>Id:</span> {item.id} <span style={{fontWeight:"bold"}}>Contrato:</span> {item.id_contrato} <span style={{fontWeight:"bold"}}>Cliente:</span> {item.id_cliente} Fecha:{item.fecha} Monto:{item.monto} <span style={{fontWeight:"bold"}}>Activo:</span> {(item.activo?"true":"false")}</p>
             
            </div>
          ))}
            
        </div>
    </div>
  );
}
export default Pagos;
