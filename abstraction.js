class Employee{
    #name;
    #baseSalary;
    
    setName(val){
    this.#name = val;
    }
    setBaseSalary(val){
    this.#baseSalary = val;
    }
    getName(){
    return this.#name;
    }
    getSalary(){
        let bonus = 1000;
        return this.#baseSalary + bonus;
        }
        }
        
        var emp = new Employee();
        
        emp.setName("Marchilyn");
        emp.setBaseSalary(100);
        console.log(emp.getName());
        console.log(emp.getSalary());