const employees = [
    {id:1,name:"Prakhar Srivastava",age:22,department:"IT",salary:50000,spealization:"JavaScript"},
    {id:2,name:"Aman Kumar",age:23,department:"Js developer",salary:60000,spealization:"JavaScript"},
    {id:3,name:"Rohit Singh",age:24,department:"Finance",salary:70000,  spealization:"Financial Analyst"},
    {id:4,name:"Sakshi Gupta",age:25,department:"Marketing",salary:80000,   spealization:"Digital Marketing Specialist"},
    {id:5,name:"Neha Sharma",age:26,department:"Sales", salary:90000,   spealization:"Sales Manager"},
    {id:6,name:"Rahul Verma",age:27,department:"IT",salary:55000,   spealization:"Software Engineer"},
    {id:7,name:"Priya Singh",age:28,department:"HR",salary:65000,   spealization:"HR Manager"},
    {id:8,name:"Vikash Kumar",age:29,department:"Finance",salary:75000,   spealization:"Accountant"},
    {id:9,name:"Anjali Patel",age:30,department:"HR",salary:85000,   spealization:"Content Strategist"},
    {id:10,name:"Suresh Yadav",age:31,department:"Sales",salary:95000,   spealization:"Business Development Manager"}
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
   function FindJavaScript(){
     const jsEmployees= employees.filter(employee => employee.spealization ==="JavaScript");
     document.getElementById('employeesDetails').innerHTML = jsEmployees.map((employee,index)=>`<p>${employee.id}: ${employee.name}- ${employee.department}- ${employee.spealization}- $${employee.salary}</p>`).join('');


   }