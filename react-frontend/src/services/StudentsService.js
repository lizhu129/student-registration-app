import axios from "axios";

const STUDENT_API_BASE_URL = "http://localhost:8080/api/v1/students"

class StudentService {

    getStudents() {
        return axios.get(STUDENT_API_BASE_URL);
    }

    createStudent(student) {
        return axios.post(STUDENT_API_BASE_URL, student);
    }

    getStudentById(Id) {
        return axios.get(STUDENT_API_BASE_URL, Id);
    }

    updateStudent(student, Id) {
        return axios.put(STUDENT_API_BASE_URL + '/' + Id, student);
    }

    deleteStudent(Id) {
        return axios.delete(STUDENT_API_BASE_URL + '/' + Id);
    }

}

export default new StudentService()