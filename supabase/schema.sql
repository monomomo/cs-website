-- 路觅教育师资展示网站 - Supabase 数据库 Schema

-- 创建 teachers 表
CREATE TABLE teachers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  title TEXT NOT NULL,
  avatar TEXT DEFAULT '',
  company TEXT DEFAULT '',
  experience TEXT DEFAULT '',
  stats_students INTEGER DEFAULT 0,
  stats_employment TEXT DEFAULT '0%',
  stats_rating DECIMAL(2,1) DEFAULT 0.0,
  stats_awards INTEGER DEFAULT 0,
  introduction TEXT DEFAULT '',
  expertise TEXT[] DEFAULT '{}',
  courses TEXT[] DEFAULT '{}',
  highlights TEXT[] DEFAULT '{}',
  github TEXT DEFAULT '',
  blog TEXT DEFAULT '',
  juejin TEXT DEFAULT '',
  projects JSONB DEFAULT '[]',
  achievements JSONB DEFAULT '[]',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 创建 reviews 表
CREATE TABLE reviews (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  teacher_id UUID REFERENCES teachers(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  author TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 启用 Row Level Security (RLS)
ALTER TABLE teachers ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- 允许公开读取（教培网站无需登录）
CREATE POLICY "Allow public read teachers" ON teachers
  FOR SELECT USING (true);

CREATE POLICY "Allow public read reviews" ON reviews
  FOR SELECT USING (true);

-- 插入示例教师数据（6位）
INSERT INTO teachers (name, title, avatar, company, experience, stats_students, stats_employment, stats_rating, stats_awards, introduction, expertise, courses, highlights, github, blog, juejin, projects, achievements) VALUES

('张明', 'Python资深讲师', '/images/teachers/zhang-ming.jpg', '前阿里巴巴', '10年', 2847, '96%', 4.9, 23,
 '前阿里巴巴高级工程师，10年Python开发经验。擅长数据分析和Web开发，曾主导多个千万级用户产品的后端架构设计。教学风格注重理论与实践结合，让学员在项目中真正掌握技术核心。',
 ARRAY['Python', '数据分析', 'Django', '爬虫技术'],
 ARRAY['Python入门到精通', '数据分析实战', 'Django企业级开发'],
 ARRAY['企业级项目驱动教学', '注重代码规范', '一对一答疑辅导'],
 'https://github.com/zhangm', 'https://zhangm.dev', 'https://juejin.cn/u/zhangm',
 '[{"name": "淘宝用户行为分析系统", "description": "日活千万级用户行为数据挖掘", "role": "数据负责人"}, {"name": "菜鸟物流大数据平台", "description": "支撑双11亿级订单物流调度", "role": "核心开发"}]',
 '[{"type": "paper", "title": "顶会论文1篇"}, {"type": "patent", "title": "专利2项"}]'),

('李华', 'Java架构师', '/images/teachers/li-hua.jpg', '前京东', '12年', 3126, '98%', 4.8, 31,
 '曾任京东技术专家，主导过多个大型分布式系统的设计。对Java生态有深刻理解，擅长将复杂的技术概念用通俗易懂的方式讲解。拥有多年面试官经验，深谙大厂招人标准。',
 ARRAY['Java', 'Spring Boot', '微服务', '架构设计'],
 ARRAY['Java从入门到精通', 'Spring Cloud微服务架构', '性能优化与调优'],
 ARRAY['大型项目经验分享', '架构思维培养', '面试指导'],
 'https://github.com/lihua', 'https://lihua.tech', '',
 '[{"name": "京东物流智能调度系统", "description": "日均处理亿级订单调度", "role": "架构师"}, {"name": "京东金融风控平台", "description": "千亿级交易风控决策", "role": "技术负责人"}]',
 '[{"type": "paper", "title": "KDD顶会论文1篇"}, {"type": "speech", "title": "QCon演讲嘉宾"}]'),

('王芳', '前端技术导师', '/images/teachers/wang-fang.jpg', '前字节跳动', '8年', 1956, '95%', 4.9, 15,
 '前字节跳动高级前端工程师，对React和Vue生态都有深入研究。热爱前端教育事业，善于用生动的案例帮助学员理解抽象概念。参与过多个日活过亿产品的前端架构设计。',
 ARRAY['React', 'Vue.js', 'TypeScript', '前端架构'],
 ARRAY['React企业级实战', 'Vue3深入浅出', 'TypeScript从入门到实践'],
 ARRAY['大厂技术经验分享', '组件化思想培养', '性能优化实战'],
 'https://github.com/wangfang', '', 'https://juejin.cn/u/wangfang',
 '[{"name": "抖音创作者平台", "description": "日活过亿产品前端架构", "role": "前端负责人"}, {"name": "字节跳动数据可视化平台", "description": "企业级数据大屏", "role": "核心贡献者"}]',
 '[{"type": "speech", "title": "前端技术大会演讲3次"}]'),

('刘强', '算法与数据结构专家', '/images/teachers/liu-qiang.jpg', '前Google', '6年', 892, '100%', 5.0, 89,
 'ACM国际大学生程序设计竞赛金牌获得者，曾在Google和Microsoft实习。对算法有极深的研究，擅长将复杂算法用简单的方式讲解。培养了多名ACM竞赛获奖者和名校计算机研究生。',
 ARRAY['算法与数据结构', 'C++', 'Python', '竞赛辅导'],
 ARRAY['算法入门', '数据结构深入', 'LeetCode刷题指南', '竞赛算法专题'],
 ARRAY['竞赛级专业指导', '思路推导训练', '名校offer保障'],
 'https://github.com/liuqiang', 'https://liuqiang.cn', '',
 '[{"name": "LeetCode中国区题库建设", "description": "影响数百万开发者", "role": "核心贡献者"}, {"name": "ACM竞赛培训体系", "description": "培养52枚金牌选手", "role": "创始人"}]',
 '[{"type": "award", "title": "ACM-ICPC金牌"}, {"type": "award", "title": "IOI银牌"}, {"type": "paper", "title": "顶会论文2篇"}]'),

('陈静', 'AI与机器学习讲师', '/images/teachers/chen-jing.jpg', '前清华大学AI实验室', '8年', 1234, '97%', 4.9, 5,
 '清华大学计算机博士，曾在顶级AI实验室从事研究工作。对机器学习和深度学习有深刻理解，发表过多篇顶会论文。致力于将AI技术用通俗的方式传授给更多人。',
 ARRAY['机器学习', '深度学习', 'Python', 'AI应用'],
 ARRAY['机器学习入门', '深度学习实战', 'AI大模型应用开发'],
 ARRAY['学术级专业背景', '理论与实践并重', '科研思路培养'],
 'https://github.com/chenjing', 'https://chenjing.ai', 'https://www.zhihu.com/people/chenjing',
 '[{"name": "旷视科技人脸识别系统", "description": "支撑亿级人脸识别服务", "role": "研究员"}, {"name": "清华大学知识图谱项目", "description": "构建千万级实体知识图谱", "role": "核心成员"}]',
 '[{"type": "paper", "title": "NeurIPS/ICML论文5篇"}, {"type": "patent", "title": "专利3项"}]'),

('赵磊', '全栈开发工程师', '/images/teachers/zhao-lei.jpg', '前美团', '7年', 2103, '94%', 4.8, 50,
 '独立开发者出身，做过App、网页、小程序各种项目。擅长全栈技术，对前端到后端到数据库都有丰富经验。教学风格幽默风趣，深受学员喜爱。',
 ARRAY['Node.js', 'React', 'MongoDB', '全栈开发'],
 ARRAY['Node.js后端开发', 'React全栈实战', '小程序开发入门'],
 ARRAY['项目经验丰富的全栈', '幽默风趣的教学风格', '贴近实战的课程设计'],
 'https://github.com/zhaolei', '', 'https://juejin.cn/u/zhaolei',
 '[{"name": "外卖智能推荐系统", "description": "日均千万级订单推荐", "role": "全栈开发"}, {"name": "小程序生态应用", "description": "App Store教育类TOP50", "role": "创始人"}]',
 '[{"type": "award", "title": "开源项目Star 10k+"}, {"type": "award", "title": "开源框架贡献者"}]');

-- 插入学员评价
INSERT INTO reviews (teacher_id, content, author)
SELECT id, '张老师的课深入浅出，让我从零基础到能够独立完成项目只用三个月。', '王同学' FROM teachers WHERE name = '张明'
UNION ALL
SELECT id, '老师讲的内容都是实际工作中用得到的，不是纸上谈兵。', '李同学' FROM teachers WHERE name = '张明'
UNION ALL
SELECT id, '李老师讲的都是实际工作中用得到的内容，对找工作帮助很大。', '张同学' FROM teachers WHERE name = '李华'
UNION ALL
SELECT id, '听完老师的课后，我对微服务有了全新的认识。', '刘同学' FROM teachers WHERE name = '李华'
UNION ALL
SELECT id, '王老师的前端课是我听过最清晰的，每个知识点都讲得很透彻。', '陈同学' FROM teachers WHERE name = '王芳'
UNION ALL
SELECT id, '老师对前沿技术的把握很准，跟着她学不用担心学的是过时的内容。', '周同学' FROM teachers WHERE name = '王芳'
UNION ALL
SELECT id, '刘老师帮我从一个算法小白变成了能独立解题的选手，ACM拿了铜牌。', '赵同学' FROM teachers WHERE name = '刘强'
UNION ALL
SELECT id, '老师的算法课思路清晰，让我校招面试算法题再也不慌了。', '孙同学' FROM teachers WHERE name = '刘强'
UNION ALL
SELECT id, '陈老师的机器学习课让我终于理解了什么叫做"学习"，而不是只会调库。', '吴同学' FROM teachers WHERE name = '陈静'
UNION ALL
SELECT id, '跟着老师做项目，发了一篇论文，太感谢了！', '郑同学' FROM teachers WHERE name = '陈静'
UNION ALL
SELECT id, '赵老师的课特别有意思，学习过程一点都不枯燥。', '周同学' FROM teachers WHERE name = '赵磊'
UNION ALL
SELECT id, '老师从0到1带着做了一个完整的全栈项目，收获很大。', '钱同学' FROM teachers WHERE name = '赵磊';