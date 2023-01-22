import Head from 'next/head';
import Employees from '../../data/data';
import { useRouter } from "next/router";

export default function editEmployee() {

	var router = useRouter();
	var id = router.query["id"] ?? 0;
	var employeeDatas = "";

	Employees.employees.forEach((element) => {
		if(element.id == id) {
			employeeDatas = element;
			return
		}
	})

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
	}

	return (
		<>
		<Head>
		<title>Update Employee</title>
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" />
		</Head>
		<form onSubmit={submitForm}>
			<section className="vh-50">
			  <div className="container h-50">
			    <div className="row d-flex justify-content-center align-items-center h-100">
			      <div className="col-xl-6 col-offset-3">
			        <h4 className="text-dark my-4 text-center">Update Employee</h4>
			        <div className="card">
			          <div className="card-body">

			            <div className="row align-items-center pt-4 pb-3">
			              <div className="col-md-12">
			                <input type="text" name="name" className="form-control" placeholder="Name" defaultValue={employeeDatas.name} />
			              </div>
			            </div>

			            <div className="row align-items-center py-3">

			              <div className="col-md-12">
			                <input type="text" name="designation" className="form-control" placeholder="Designation" defaultValue={employeeDatas.designation} />
			              </div>
			            </div>

			            <div className="row align-items-center py-3">

			              <div className="col-md-12">
			                <input type="email" name="email" className="form-control" placeholder="email address" defaultValue={employeeDatas.email} />
			              </div>
			            </div>

			            <div className="row align-items-center py-3">
			              <div className="col-md-12">
			                <input type="text" name="contact" className="form-control" placeholder="Phone number" defaultValue={employeeDatas.contact} />
			              </div>
			            </div>

			            <div className="py-4 d-grid gap-2">
			              <button type="submit" className="btn btn-lg btn-primary">Submit</button>
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
