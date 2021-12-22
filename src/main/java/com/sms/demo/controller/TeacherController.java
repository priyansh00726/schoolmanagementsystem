package com.sms.demo.controller;

import com.sms.demo.model.Teacher;
import com.sms.demo.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/api/v1")
public class TeacherController {

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
}
