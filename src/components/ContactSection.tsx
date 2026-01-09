'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import {
  Mail,
  MapPin,
  Phone,
  BookOpen,
  GraduationCap,
  Building,
} from 'lucide-react';
import { Badge } from './ui/badge';

export function ContactSection() {
  const education = [
    {
      title: '홍익대학교',
      institution: '컴퓨터공학과',
      period: '2021.03 - 2025.02',
      description: '컴퓨터공학 학사 학위 취득',
      icon: <GraduationCap className="w-5 h-5" />,
    },
    {
      title: '풀스택 엔지니어 부트캠프',
      institution: '코드잇 스프린트',
      period: '2025.01 - 2025.08',
      description: '프론트/백엔드 기술 스택 학습 및 팀 프로젝트 진행',
      icon: <BookOpen className="w-5 h-5" />,
    },
  ];

  const courses = [
    {
      title: '프론트엔드 개발(인턴)',
      institution: 'DigiForet',
      period: '2025.10 - 2025.11',
      description:
        'Babylon.js를 활용한 3D Model 업로드 및 뷰어 제공 플랫폼 클론 프로젝트 개발',
      skills: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Babylon.js'],
      icon: <Building className="w-5 h-5" />,
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'scx200800@gmail.com',
      href: 'mailto:scx200800@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+82 010-9906-7265',
      href: 'tel:+8201099067230',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Seoul, South Korea',
      href: 'https://www.google.com/maps/place/Seoul,+South+Korea/@37.566535,126.9780041,10z/data=!3m1!4b1!4m6!3m5!1s0x357ca3e925c2b3eb:0xf393a87a44aab82!8m2!3d37.566535!4d126.9780041!16zL20vMDJhY2d1?entry=ttu&g_ep=EgoyMDI1MDEwMi4wIKXMDSoASAFQAw%3D%3D',
    },
  ];

  return (
    <section id="education" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            Education & Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education & Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-2xl text-white"
              >
                Education
              </motion.h3>
              {education.map((edu, index) => (
                <motion.div
                  key={edu.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: (index + 1) * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card key={index} className="bg-gray-900/50 border-white/10">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3">
                          <div className="flex items-center h-8">
                            {edu.icon}
                          </div>
                          <div>
                            <CardTitle className="text-lg">
                              {edu.title}
                            </CardTitle>
                            <CardDescription className="text-base">
                              {edu.institution}
                            </CardDescription>
                          </div>
                        </div>
                        <Badge variant="outline">{edu.period}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-2">
                        {edu.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: (education.length + 1) * 0.1,
                  duration: 0.6,
                }}
                viewport={{ once: true }}
                className="text-2xl text-white"
              >
                Work Experience
              </motion.h3>
              {courses.map((course, index) => (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: (education.length + 2 + index) * 0.1,
                    duration: 0.6,
                  }}
                  viewport={{ once: true }}
                >
                  <Card key={index} className="bg-gray-900/50 border-white/10">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3">
                          <div className="flex items-center h-8">
                            {course.icon}
                          </div>
                          <div>
                            <CardTitle className="text-lg">
                              {course.title}
                            </CardTitle>
                            <CardDescription className="text-base">
                              {course.institution}
                            </CardDescription>
                          </div>
                        </div>
                        <Badge variant="outline">{course.period}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-3">
                        {course.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {course.skills.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            variant="secondary"
                            className="text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl text-white">Get In Touch</h3>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 bg-gray-900/50 rounded-lg border border-white/10 hover:border-emerald-500/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/30 transition-all duration-300">
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-16 pt-8 text-center"
        >
          <p className="text-gray-400">
            © 2026 Hayoung Oh. Built with Figma Make and Vite.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
