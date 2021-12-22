package com.sms.demo.controller;

import com.sms.demo.model.Student;
import com.sms.demo.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

//@RestController
@Controller
@RequestMapping("/api/v1")
public class StudentController {
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
}
