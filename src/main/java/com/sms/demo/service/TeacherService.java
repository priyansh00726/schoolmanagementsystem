package com.sms.demo.service;

import com.sms.demo.model.Teacher;

import java.util.List;

public interface TeacherService {
    List<Teacher> getAllTeachers();
    Teacher addNewTeacher(Teacher teacher);
    Teacher getTeacherById(Long id);
    Teacher updateTeacherDetails(Teacher teacher);
    void deleteTeacherRecord(Teacher teacher);
}
