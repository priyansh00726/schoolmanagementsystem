package com.sms.demo.controller;

import com.sms.demo.model.Teacher;
import com.sms.demo.model.Teacher;
import com.sms.demo.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class TeacherController {

/*
    // Uses Thymeleaf Engine
    @Autowired
    private final TeacherService service;

    public TeacherController(TeacherService service) {
        this.service = service;
    }

    @GetMapping("/teachers")
    public String getAllTeachers(Model model) {
        model.addAttribute("teachers", service.getAllTeachers());
        return "api/v1/teachers";
    }

    @GetMapping("/teachers/new")
    public String addNewTeacher(Model model) {
        Teacher teacher = new Teacher();
        model.addAttribute("teacher", teacher);
        return "api/v1/add_teacher";
    }

    @PostMapping("/teachers")
    public String addNewTeacher(@ModelAttribute("teacher") Teacher teacher) {
        if (teacher.getClassNum() != 0) teacher.setClassTeacher(true);
        service.addNewTeacher(teacher);
        return "redirect:/api/v1/teachers";
    }

    @GetMapping("/teachers/edit/{id}")
    public String editTeacherDetails(@PathVariable("id") Long id, Model model) {
        model.addAttribute("teacher", service.getTeacherById(id));
        return "api/v1/edit_teacher_details";
    }

    @PostMapping("/teachers/{id}")
    public String editTeacherDetails(@PathVariable("id") Long id, @ModelAttribute("teacher") Teacher teacher) {
        if (teacher.getClassNum() != 0) teacher.setClassTeacher(true);
        service.updateTeacherDetails(teacher);
        return "redirect:/api/v1/teachers";
    }

    @GetMapping("/teachers/{id}")
    public String deleteTeacherRecord(@PathVariable("id") Long id) {
        service.deleteTeacherRecord(service.getTeacherById(id));
        return "redirect:/api/v1/teachers";
    }

    @GetMapping("/teachers/view/{id}")
    public String viewTeacherDetails(@PathVariable("id") Long id, Model model) {
        model.addAttribute("teacher", service.getTeacherById(id));
        return "api/v1/view_teacher_details";
    }
*/


    @Autowired
    private final TeacherService service;

    public TeacherController(TeacherService service) {
        this.service = service;
    }

    @GetMapping("/teachers")
    public List<Teacher> getAllTeachers() {
        System.out.println("GET REQUEST");
        return service.getAllTeachers();
    }

    @PostMapping("/teachers")
    public ResponseEntity<String> addNewTeacher(@RequestBody Teacher teacher) {
        try {
            System.out.println("POST REQUEST");
            service.addNewTeacher(teacher);
            return ResponseEntity.ok(teacher.getF_name() + " is added as teacher.");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body("New Teacher can't be added.");
        }
    }

    @GetMapping("/teachers/{id}")
    public ResponseEntity<Teacher> getTeacherById(@PathVariable("id") Long id) {
        System.out.println("GET REQUEST FOR ID");
        Teacher teacher = service.getTeacherById(id);
        return ResponseEntity.ok(teacher);
    }

    @PutMapping("/teachers/{id}")
    public ResponseEntity<String> editTeacherDetails(@PathVariable("id") Long id, @RequestBody Teacher teacher) {
        try {
            System.out.println("PUT REQUEST " + teacher.getF_name());
            service.updateTeacherDetails(teacher);
            return ResponseEntity.ok("Details of " + teacher.getF_name() + " are updated.");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body("Teacher details can't be modified.");
        }
    }

    @DeleteMapping("/teachers/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteTeacherRecord(@PathVariable("id") Long id) {
        System.out.println("DELETE REQUEST");
        service.deleteTeacherRecord(service.getTeacherById(id));
        Map<String, Boolean> map = new HashMap<>();
        map.put("Teacher deleted", true);
        return ResponseEntity.ok(map);
    }
}
