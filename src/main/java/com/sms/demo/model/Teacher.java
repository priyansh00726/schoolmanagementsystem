package com.sms.demo.model;

import javax.persistence.*;

@Entity
@Table(name = "teachers")
public class Teacher {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "firstName")
    private String f_name;
    @Column(name = "lastName")
    private String l_name;
    @Column(name = "email")
    private String email;
    @Column(name = "mobile")
    private String mobile;
    @Column(name = "classTeacher")
    private boolean isClassTeacher;
    @Column(name = "classNum")
    private int classNum;
    @Column(name = "salary")
    private Double salary;

    public Teacher() {
    }

    public Teacher(String f_name,
                   String l_name,
                   String email,
                   String mobile,
                   boolean isClassTeacher,
                   int classNum,
                   Double salary) {
        this();
        this.f_name = f_name;
        this.l_name = l_name;
        this.email = email;
        this.mobile = mobile;
        this.isClassTeacher = isClassTeacher;
        this.classNum = classNum;
        this.salary = salary;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public boolean isClassTeacher() {
        return isClassTeacher;
    }

    public void setClassTeacher(boolean classTeacher) {
        isClassTeacher = classTeacher;
    }

    public int getClassNum() {
        return classNum;
    }

    public void setClassNum(int classNum) {
        this.classNum = classNum;
    }

    public Double getSalary() {
        return salary;
    }

    public void setSalary(Double salary) {
        this.salary = salary;
    }
}
