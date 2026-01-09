'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProjectsSection() {
  const projects = [
    {
      title: '덕스타 - 애니메이션 투표 플랫폼',
      description:
        'Next.js, TypeScript를 사용하여 구현된 애니메이션 투표 플랫폼입니다. 분기별 애니메이션에 투표하고 주간 차트 및 애니 시간표 확인, 리뷰 작성, 어워드 참여 등의 기능을 제공합니다. 프론트엔드 개발자로 참여하고 있습니다.',
      image: '/duckstar-preview.png',
      technologies: ['Next.js', 'TypeScript', 'Tailwind', 'TanStack Query'],
      github: 'https://github.com/duckstar-team/duckstar',
      live: 'https://duckstar.kr',
      featured: true,
    },
    {
      title: '무빙 - 이사 매칭 플랫폼',
      description:
        '고객과 이사 전문가 간 매칭을 도와주는 플랫폼입니다. 견적 요청, 알림 기능 및 OpenAI API를 연동한 AI 견적 기능을 구현하였습니다. 풀스택 개발로 참여하여 초기 프로젝트 구조 설계 및 AWS EC2 배포를 담당했습니다.',
      image: '/moving-preview.png',
      technologies: [
        'Next.js',
        'TypeScript',
        'Tailwind',
        'Server Sent Events',
        'AWS',
        'GitHub Actions',
        'OpenAI API',
      ],
      github: 'https://github.com/az0319h/6th-Moving-4Team-FE',
      live: 'https://moving-web.site/ko',
      featured: true,
    },
    {
      title: '독스루 - 문서 번역 챌린지 플랫폼',
      description:
        '개발 관련 영어 문서를 함께 번역하며 작업물에 대한 피드백을 주고 받는 플랫폼입니다. 어드민 페이지, 인증인가 및 소셜 로그인 기능을 구현했습니다.',
      image: '/docthru-preview.png',
      technologies: ['Next.js', 'JavaScript', 'Tailwind', 'TanStack Query'],
      github: 'https://github.com/JJOBO/6-Docthru-3team-FE',
      live: 'https://6-docthru-3team-fe-dev.vercel.app',
      featured: false,
    },
    {
      title: '공부의 숲 - 습관 관리 플랫폼',
      description:
        '스터디를 생성하고 타이머를 통해 집중 시간을 기록하며 습관 관리 형성을 도와주는 플랫폼입니다. 습관 생성, 수정, 삭제 및 습관 기록표 조회 기능을 구현했습니다.',
      image: '/studyforest-preview.png',
      technologies: ['Vite', 'JavaScript', 'CSS Modules', 'React Router'],
      github: 'https://github.com/JJOBO/6-StudyForest-1team-FE',
      live: 'https://studyfore.netlify.app',
      featured: false,
    },
    {
      title: '포트폴리오 웹사이트',
      description:
        '부드러운 애니메이션, 다크 테마, 최적화된 성능을 갖춘 모던 웹 기술로 구현한 반응형 포트폴리오 사이트입니다.',
      image: '/portfolio-preview.png',
      technologies: ['Next.js', 'Framer Motion', 'Tailwind', 'shadcn/ui'],
      github: 'https://github.com/fiivxyxxng/portfolio',
      live: '#',
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto"></div>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full group bg-black/50 border-white/10 overflow-hidden hover:border-emerald-500/50 transition-all duration-500">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300"></div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-emerald-500 transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-emerald-500 transition-all duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm border border-emerald-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-2xl text-white text-center mb-8">
            Other Projects
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="group bg-black/30 overflow-hidden border-white/10 hover:border-white/30 transition-all duration-300 h-full">
                <div className="relative">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300 group-hover:scale-105"></div>
                  <div className="absolute top-3 right-3 flex space-x-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-emerald-500 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-emerald-500 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="p-4">
                  <h4 className="text-lg text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
