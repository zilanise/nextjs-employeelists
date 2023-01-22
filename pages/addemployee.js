import Head from 'next/head';
import React, { useState } from 'react';
import Employees from '../data/data';
import fs from 'fs';
import path from 'path'

export default function addEmployee(props) {
	// const [emDetails, setemDetails] = useState({
	// 		emp_name:'',
	// 		emp_email:'',
	// 		emp_country:'',
	// 		emp_age:'',
	// });

	const submitForm = async (event) => {
		event.preventDefault();

		const name  = event.target.name.value ?? "";
		const designation  = event.target.designation.value ?? "";
		const email  = event.target.email.value ?? "";
		const contact  = event.target.contact.value ?? "";

		const prevDataLenght = Employees.employees[Employees.employees.length - 1]['id'];

		const employeeDetails = {
			"id": prevDataLenght+1, 
			"name":name,
			"designation": designation, 
			"email": email, 
			"contact": contact
		}

		let employeeDetail = Employees.employees.push(employeeDetails)
		addItem(Employees);
	}

	return (
		<>
		<Head>
		<title>Add Employee</title>
		<link
		  href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" />
		</Head>
		<form onSubmit={submitForm}>
			<section className="vh-50">
			  <div className="container h-50">
			    <div className="row d-flex justify-content-center align-items-center h-100">
			      <div className="col-xl-6 col-offset-3">
			        <h4 className="text-dark my-4 text-center">Add An Employee</h4>
			        <div className="card">
			          <div className="card-body">

			            <div className="row align-items-center pt-4 pb-3">
			              <div className="col-md-12">
			                <input type="text" name="name" className="form-control" placeholder="Name" />
			              </div>
			            </div>


			            <div className="row align-items-center py-3">

			              <div className="col-md-12">
			                <input type="text" name="designation" className="form-control" placeholder="Designation" />
			              </div>
			            </div>

			            <div className="row align-items-center py-3">

			              <div className="col-md-12">
			                <input type="email" name="email" className="form-control" placeholder="email address" />
			              </div>
			            </div>

			            <div className="row align-items-center py-3">

			              <div className="col-md-12">
			                <input type="text" name="contact" className="form-control" placeholder="Phone number" />
			              </div>
			            </div>

			            <div className="py-4 d-grid gap-2">
			              <button type="submit" className="btn btn-lg btn-primary">Add</button>
			            </div>

			          </div>
			        </div>

			      </div>
			    </div>
			  </div>
			</section>
		</form>
		</>
	)
}


function addItem(params) {
	fs.writeFile( '../data/data.json', params, function(err) {
		if(err) {
			alert(err);
		}
	})
}


