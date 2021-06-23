import React, { useState } from "react";
import { Link } from "react-router-dom";

const SuperAdmin=()=>{

    var productItems = [
        { cate: "Add Category", link:"/superadmin/create/category" },
        { cate: "Manage Categories", link:"/superadmin/manage/category"},
        {cate:"Pending Products",link:"/superadmin/products/pending"},
        {cate:"Pending Products by Id",link:"/superadmin/products/pendingbyid"}
      ];
    var userItems = [
        { cate: "Make Admin by Email", link:"/superadmin/make/admin" },
        { cate: " Remove Admin by Email", link:"/superadmin/remove/admin" },
        { cate: " Update Admin by ID", link:"/superadmin/update/adminbyid" },
        { cate: "Remove Admin by ID", link:"/superadmin/remove/adminbyid"},
        { cate: "Delete Admin by ID", link:"/superadmin/delete/adminbyid"}
      ];
    return(
        <div className="container p-4" style={{
            border: "10px solid #353839",
            marginTop:"10px",
        }}>
       <div>
         <div
           className="jumbotron text-center text-white"
           style={{ fontWeight:"20000px",
             backgroundColor:"#353839",
             paddingTop:"20px",
             paddingBottom:"20px",
             marginBottom:"20px"
           }}
         >
                    <h2 className="display-4 logo">Welcome to Super Admin area</h2>
                    <p className="lead"><b>Manage all your Products here</b></p>
                </div>
            </div>
            
         
            <div className="card">
                <h3 className="card-header">
                   Product Navigation
                </h3>
            
                <div class="row" >
                    {
                        productItems.map(item=>{
                            return(
                                <div class="col-lg-6">
                                    <div class="card">
                                        <div class="card-body">
                                                <h5 class="card-title">
                                                    <Link to={item.link} style={{color:"#353839",textDecoration:"none" }}><b>{item.cate}</b></Link>    
                                                </h5>  
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }           
                </div>
            </div>

            <div className="card"  style={{marginTop:"20px"}}>
                <h3 className="card-header">
                   Admin Navigation
                </h3>
            
                <div class="row" >
                    {
                        userItems.map(item=>{
                            return(
                                <div class="col-lg-6">
                                    <div class="card">
                                        <div class="card-body">
                                                <h5 class="card-title">
                                                    <Link to={item.link} style={{color:"#353839",textDecoration:"none" }}><b>{item.cate}</b></Link>    
                                                </h5>  
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }           
                </div>
            </div>
        </div>
    )
}

export default SuperAdmin;