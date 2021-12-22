package com.sms.demo.model;

import com.sun.istack.NotNull;

import javax.persistence.*;

@Entity
@Table(name = "students")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name = "id")
    private Long enroll_no;
    @Column(name = "firstName", nullable = false)
    private String f_name;
    @Column(name = "lastName")
    private String l_name;
    @Column(name = "email")
    private String email;
    @Column(name = "mobile")
    private String mobile;
    @Column(name = "class", nullable = false)
    private int class_num;

    public Student() {
    }

    public Student(String f_name, String l_name, String email, String mobile, int aClass) {
        this();
        this.f_name = f_name;
        this.l_name = l_name;
        this.email = email;
        this.mobile = mobile;
        this.class_num = aClass;
    }


    public Long getEnroll_no() {
        return enroll_no;
    }

    public void setEnroll_no(Long enroll_no) {
        this.enroll_no = enroll_no;
    }

    public String getF_name() {
        return f_name;
    }

    public void setF_name(String f_name) {
        this.f_name = f_name;
    }

    public String getL_name() {
        return l_name;
    }

    public void setL_name(String l_name) {
        this.l_name = l_name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public int getClass_num() {
        return class_num;
    }

    public void setClass_num(int class_num) {
        this.class_num = class_num;
    }

    public void setFields(@NotNull Student student) {
        this.setF_name(student.f_name);
        this.setL_name(student.l_name);
        this.setEmail(student.email);
        this.setMobile(student.mobile);
        this.setClass_num(student.class_num);
    }
}
