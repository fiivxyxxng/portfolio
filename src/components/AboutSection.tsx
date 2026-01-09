'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Code, Lightbulb, ScanSearch, Users } from 'lucide-react';

export function AboutSection() {
  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description:
        '유지보수가 쉽고 확장 가능하며 효율적인 코드를 지향하고 가독성 있는 코드를 작성하고자 합니다.',
    },
    {
      icon: ScanSearch,
      title: 'Research',
      description:
        '문제에 대해 끝까지 탐구하고 최적의 해결책을 찾기 위해 다양한 방법을 모색합니다.',
    },
    {
      icon: Users,
      title: 'Communication',
      description:
        '팀원들과 적극적으로 소통하고 지속적인 의견 공유를 통해 완성도 있는 결과를 도출합니다.',
    },
    {
      icon: Lightbulb,
      title: 'Challenging',
      description:
        '새로운 기술 도입을 적극적으로 시도하고 해보지 않은 영역에 도전하는 것을 좋아합니다.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto"></div>
        </motion.div>

        <div className="grid gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-3"
            >
              {[
                'Problem Solver',
                'Team Player',
                'Quick Learner',
                'Detail Oriented',
              ].map((trait) => (
                <span
                  key={trait}
                  className="px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-full text-sm border border-emerald-500/30"
                >
                  {trait}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-6 bg-black/50 border-white/10 hover:border-emerald-500/50 transition-all duration-300 group">
                  <div className="text-emerald-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-white text-lg mb-2">{feature.title}</h4>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
