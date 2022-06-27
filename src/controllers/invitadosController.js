const controller = {};


controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM invitados', (err, invitados) => {
            if (err) {
                res.json(err);
               console.log(err)
            }
         
            console.log(invitados);
           
            res.render('invitados', {

                data: invitados,
                data2:'',
                data3:''
               
               
            })
           
        });
    });
};



controller.list2 = (req, res) => {

    res.render('confirma',{
        data2:'',
        data3:''
    });
  

}

controller.list3 = (req, res) => {
    const { nom } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT Campos FROM invitados WHERE Nombre=?', [nom], (err, invitados) => {
            if (err) {
                console.log("error: ", err);
              res.status(404)
            } 
            else if(JSON.stringify(invitados)=='[]'){
                res.status(404)
                console.log("vacio");
                res.json(invitados);
                
        }else{
           
            res.status(200)
            res.json(invitados);
            console.log(invitados);
           
        }
          
        });
    });
};


controller.consultaCampos2 = (req, res) => {
    const { nom } = req.params;
    req.getConnection((err, conn) => {
        conn.query('CALL consultarCampos(?)',[nom], (err, invitados) => {
            if (err) {
                res.json(err);
               console.log(err)
            }
         
            console.log(invitados);
            res.json(invitados);
           
           
        });
    });
};

controller.consultarCampos3 = (req, res) => {
    const { nom } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT NomInv FROM invitadoscampos WHERE Nombre=?', [nom], (err, invitados) => {
            if (err) {
                console.log("error: ", err);
              res.status(404)
            } 
            else if(JSON.stringify(invitados)=='[]'){
                res.status(404)
                res.json(invitados);
                console.log("vacio");
        }else{
           
            res.status(200)
            res.json(invitados);
            console.log(invitados);
           
        }
          
        });
    });
};

controller.confirmarAsis = (req, res) => {

    try {
        
    
        const Nombre = req.body.fname;
        const Asistencia = req.body.asistencia;
        const Descripcion = req.body.descripcion;
        const Mensaje = req.body.mensaje;

console.log(Nombre,Asistencia,Descripcion, Mensaje)

    req.getConnection((err, conn) => {
        

      const resul=  conn.query("CALL confirmarAsistencia('" + Nombre + "','" + Asistencia + "','" + Descripcion + "' ,'"+Mensaje+"')", (err, invitados) => {
            if (err) {
              console.log("error")
             
              res.status(404);
              let er = "Ya se ha realizado la confirmación anteriormente o no ha llenado los datos correctamente";
             
              res.render('confirma',{
                  
                data2:er,
                data3:''

              });
              
              console.log(er)
            }else{
         
            console.log(JSON.stringify(invitados));
           // res.json(invitados);
            let er = "Confirmación exitosa";
             
            res.render('confirma',{
                data2:'',
              data3:er
                

            });
         
        }
           
        });
    });

} catch (err) {
      console.log("error")  
}
};




module.exports = controller;

