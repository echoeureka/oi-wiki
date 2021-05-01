// Definition for Employee.
class Employee {
	id: number
	importance: number
	subordinates: number[]

	constructor(id: number, importance: number, subordinates: number[]) {
		this.id = (id === undefined) ? 0 : id;
		this.importance = (importance === undefined) ? 0 : importance;
		this.subordinates = (subordinates === undefined) ? [] : subordinates;
	}
}


function getImportance(employees: Employee[], id: number): number {
	for (const employee of employees) {
		if (employee.id === id) {
			if (employee.subordinates.length === 0) return employee.importance
			else {
				for (const subordinate of employee.subordinates) {
					employee.importance += getImportance(employees, subordinate)
				}
			}
			return employee.importance
		}
	}
	return 0
}
