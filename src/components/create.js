import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { Button,Modal} from 'react-bootstrap';
import Select from 'react-select'
import NavBar from './navbar'


const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);
    return {
      values,
      handleChange: (e) => {
        if(e.target.type==='checkbox'){
          console.log(e.target)
          setValues({
            ...values,
            [e.target.name]: e.target.checked,
           });
         }
         else{
           console.log(e.target)
           setValues({
             ...values,
             [e.target.name]: e.target.value,
           });
         }
       },
      reset: () => setValues(initialValues),
   };
 };

 function Create() {
    const [show, setShow] = useState(false);
    const [message,setMessage] = useState('')
    const {values,handleChange,reset } = useForm({cliente:'',activo:true,contrato:'',fecha:'',monto:''});
    const handleClose = () => {
        window.location.reload(false);
        setShow(false)};
    
    const fetchData = async (id_cliente, id_contrato,fecha,monto,activo=true,) => {
        try {
          const { data } = await Axios.post(
            "https://intelligentest.herokuapp.com/api/pago",
            {
              id_cliente,
              id_contrato,
              fecha,
              monto,
              activo
              
            }
          );
          setShow(true)
          console.log(data)
          setMessage(data.status)
        } catch (error) {
          setShow(true)
          console.log(error.request.response)
          setMessage(error.request.response)
          console.log("asfasfsdfsdfs")
        }
      };
    
 
    return(
      <div>
        <NavBar/>
        <div>
            <label style={{margin:5,fontWeight:'Bold'}}>Id_cliente: 
              <input 
                type='text'
                name='cliente'
                placeholder='id_cliente'
                onChange={handleChange}
                value={values.cliente}
              />
            </label>
            <label style={{margin:5,fontWeight:'Bold'}}>Id_contrato: 
                <input 
                  type='text'
                  name='contrato'
                  placeholder='id_contrato'
                  onChange={handleChange}
                  value={values.contrato}
                />
            </label>
            <label style={{margin:5,fontWeight:'Bold'}}>Fecha: 
                <input 
                  type='text'
                  name='fecha'
                  placeholder='fecha'
                  onChange={handleChange}
                  value={values.fecha}
                />
            </label>
            <label style={{margin:5,fontWeight:'Bold'}}>Monto: 
                <input 
                  type='text'
                  name='monto'
                  placeholder='monto'
                  onChange={handleChange}
                  value={values.monto}
                />
            </label>
            
            <Button variant="secondary" onClick={()=>{
              fetchData(values.cliente,values.contrato,values.fecha,values.monto)
            }}>
            Create
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Mensaje</Modal.Title>
              </Modal.Header>
              <Modal.Body>Mensaje: {message}</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
        </div>
      </div>
    );
}
export default Create;
