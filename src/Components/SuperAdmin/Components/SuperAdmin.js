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
        <div  className="container p-4" style={{backgroundColor:"#ffe6f2"}}>
            <div className="container-fluid">
                <div className="jumbotron text-white text-center" style={{backgroundColor:"#ff99cc"}}>
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
                                                    <Link to={item.link} style={{color:"#FF69B4"}}><b>{item.cate}</b></Link>    
                                                </h5>  
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }           
                </div>
            </div>

            <div className="card">
                <h4 className="card-header">
                   Admin Navigation
                </h4>
            
                <div class="row" >
                    {
                        userItems.map(item=>{
                            return(
                                <div class="col-lg-6">
                                    <div class="card">
                                        <div class="card-body">
                                                <h5 class="card-title">
                                                    <Link to={item.link} style={{color:"#FF69B4"}}><b>{item.cate}</b></Link>    
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