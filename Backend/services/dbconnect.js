require('dotenv').config();

const Pool= require("pg").Pool

const pool= new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
})

const createUser= (req,res)=>{
    const {username,email,phone,location,password} = req.body

    pool.query('Insert into users (username,email,phone,location,password) Values ($1,$2,$3,$4,$5)', [username,email,phone,location,password],(err,result)=>{
        if(err){
            console.log(err);
        }
        res.status(200).json({
            message: "User Created Successfully",
            data:result.rows
        })
    })

   
}

const getUser=(req,res)=>{
    pool.query('select * from users', (err,result)=>{
        if(err){
            throw err;
        }
        res.json({
            rescode:1000,
            meaasge: "Records Fetched Successfully",
            data:result.rows
        })
    })
}
const getUserById=(req,res)=>{
    const id=parseInt(req.params.id);
    pool.query('select * from users where id=$1',[id], (err,result)=>{
        if(err){
            throw err;
        }
        res.status(200).json({
            meaasge: "Records Fetched Successfully",
            data:result.rows
        })
    })
}

const loginUser=(req,res)=>{
    const {username,password} = req.body
    pool.query('SELECT * FROM fn_loginUser($1, $2)',[username,password], (err,result)=>{
      // Assuming this is part of your login endpoint handling
if (result.rows[0].fn_loginuser.id > 0) {
    // Assuming your check for correct password happens here
    if (result.rows[0].fn_loginuser.password === req.body.password) {
      // Successful login
      res.status(200).json({
        rescode: 1000,
        message: "User Exist",
        data: result.rows[0].fn_loginuser
      });
    } else {
      // Incorrect password
      res.status(200).json({
        rescode: 1001,
        message: "Invalid password",
        data: []
      });
    }
  } else {
    // No user found
    res.status(200).json({
      rescode: 1001,
      message: "User does not Exist",
      data: []
    });
  }
  

       
    })
}
const updateUserName=(req,res)=>{
    const id=parseInt(req.params.id);
    const {username} = req.body
    pool.query('update users set username=$1 where id=$2',[username,id], (err,result)=>{
        if(err){
            throw err;
        }
        res.status(200).json({
            meaasge: "Records Updated Successfully",
        })
    })
}
const deleteUser=(req,res)=>{
    const id=parseInt(req.params.id);
    pool.query('delete from users where id=$1',[id], (err,result)=>{
        if(err){
            throw err;
        }
        res.json({
            message: "Records Deleted Successfully"
        })
    })
}
module.exports ={
    createUser,getUser,getUserById,updateUserName,deleteUser,loginUser
}