import React, { useEffect, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { GetEmployeeDetailsById } from "../api";

const EmployeeDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  const fetchEmployeeDetails = useCallback(async () => {
    try {
      const data = await GetEmployeeDetailsById(id);
      setEmployee(data);
    } catch (err) {
      alert("Error fetching employee details: ", err);
    }
  }, [id]);

  useEffect(() => {
    fetchEmployeeDetails();
  }, [fetchEmployeeDetails]);

  if (!employee) {
    return <div>Employee not found</div>;
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h2>Employee Details</h2>
        </div>
        <div className="card-body">
          <div className="row mb-3">
            <div className="col-md-3">
              <img
                src={employee.profileImage}
                alt={employee.name}
                className="img-fluid rounded"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="col-md-9">
              <h4>{employee.name}</h4>
              <p>
                <strong>Email:</strong> {employee.email}
              </p>
              <p>
                <strong>Phone:</strong> {employee.phone}
              </p>
              <p>
                <strong>Department:</strong> {employee.department}
              </p>
              <p>
                <strong>Salary:</strong> {employee.salary}
              </p>
              <p>
                <strong>Gender:</strong> {employee.gender}
              </p>{" "}
              {/* Display Gender */}
              <p>
                <strong>Courses:</strong>{" "}
                {employee.course ? employee.course.join(", ") : "None"}
              </p>{" "}
              {/* Display Courses */}
              <p>
                <strong>Created Date:</strong>{" "}
                {new Date(employee.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
          <button
            className="btn btn-primary"
            onClick={() => navigate("/employee")}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
