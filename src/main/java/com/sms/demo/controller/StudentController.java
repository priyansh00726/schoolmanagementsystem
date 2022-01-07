package com.sms.demo.controller;

import com.sms.demo.model.Student;
import com.sms.demo.model.Teacher;
import com.sms.demo.service.StudentService;
import org.apache.tomcat.util.json.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.*;

//@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class StudentController {

/*
     // Uses Thymeleaf Engine
    @Autowired
    private final StudentService service;

    public StudentController(StudentService service) {
        this.service = service;
    }

    @GetMapping("/students")
    public String listStudents(Model model) {
        model.addAttribute("students", service.getAllStudents());
        return "api/v1/students";
    }

    @GetMapping("/students/new")
    public String registerStudent(Model model) {
        Student student = new Student();
        model.addAttribute("student", student);
        return "api/v1/register_student";
    }

    @PostMapping("/students")
    public String registerStudent(@ModelAttribute("student") Student student) {
        service.saveStudent(student);
        return "redirect:/api/v1/students";
    }

    @GetMapping("/students/edit/{id}")
    public String editStudentDetailsForm(Model model, @PathVariable("id") Long id) {
        Student student = service.getStudentById(id);
        model.addAttribute("student", student);
        return "api/v1/edit_student_details";
    }

    @PostMapping("/students/{id}")
    public String updateStudent(@PathVariable("id") Long id, @ModelAttribute("student") Student student) {
        Student existing_student = service.getStudentById(id);
        existing_student.setFields(student);
        service.updateStudent(existing_student);
        return "redirect:/api/v1/students";
    }

    @GetMapping("/students/{id}")
    public String deleteStudent(@PathVariable("id") Long id) {
        Student student = service.getStudentById(id);
        service.deleteStudent(student);
        return "redirect:/api/v1/students";
    }
*/


    @Autowired
    private final StudentService service;

    public StudentController(StudentService service) {
        this.service = service;
    }

    @GetMapping("/students")
    public List<Student> getAllStudents() {
        System.out.println("GET REQUEST");
        return service.getAllStudents();
    }

    @PostMapping("/students")
    public ResponseEntity<String> addNewStudent(@RequestBody Student student) {
        try {
            System.out.println("POST REQUEST");
            service.saveStudent(student);
            return ResponseEntity.ok(student.getF_name() + " is added as student.");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body("New Student can't be added.");
        }
    }

    @GetMapping("/students/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable("id") Long id) {
        System.out.println("GET REQUEST FOR ID");
        Student student = service.getStudentById(id);
        return ResponseEntity.ok(student);
    }

    @PutMapping("/students/{id}")
    public ResponseEntity<String> editStudentDetails(@PathVariable("id") Long id, @RequestBody Student student) {
        try {
            System.out.println("PUT REQUEST " + student.getF_name());
            service.updateStudent(student);
            return ResponseEntity.ok("Details of " + student.getF_name() + " are updated.");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body("Student details can't be modified.");
        }
    }

    @DeleteMapping("/students/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteStudentRecord(@PathVariable("id") Long id) {
        System.out.println("DELETE REQUEST");
        service.deleteStudent(service.getStudentById(id));
        Map<String, Boolean> map = new HashMap<>();
        map.put("Student deleted", true);
        return ResponseEntity.ok(map);
    }
}
