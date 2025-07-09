const employees = [
    {id:1,name:"Prakhar srivastava",age:22,department:"IT",salary:50000},
    {id:2,name:"Aman Kumar",age:23,department:"HR",salary:60000},
    {id:3,name:"Rohit Singh",age:24,department:"Finance",salary:70000},
    {id:4,name:"Sakshi Gupta",age:25,department:"Marketing",salary:80000},
    {id:5,name:"Neha Sharma",age:26,department:"Sales", salary:90000},
    {id:6,name:"Rahul Verma",age:27,department:"IT",salary:55000},
    {id:7,name:"Priya Singh",age:28,department:"HR",salary:65000},
    {id:8,name:"Vikash Kumar",age:29,department:"Finance",salary:75000}
];
 // Function to display all employees
 function displayEmployees() {
    const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
            document.getElementById('employeesDetails').innerHTML = totalEmployees;
    }
function calculateTotalSalaries() {
      const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
      alert(`Total Salaries: $${totalSalaries}`);
    }
  function displayHREmployees() {
     const hrEmployees = employees.filter(employee => employee.department === 'HR');
      const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
      document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}
function findEmployeeById(employeeId) {
      const foundEmployee = employees.find(employee => employee.id === employeeId);
      if (foundEmployee) {
      document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
      }
      else{
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
       }
   }