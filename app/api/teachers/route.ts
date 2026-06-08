import { supabase } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // 获取所有教师
    const { data: teachers, error: teachersError } = await supabase
      .from('teachers')
      .select('*')
      .order('created_at', { ascending: true })

    if (teachersError) {
      return NextResponse.json(
        { error: teachersError.message },
        { status: 500 }
      )
    }

    // 获取所有评价
    const { data: reviews, error: reviewsError } = await supabase
      .from('reviews')
      .select('*')
      .order('created_at', { ascending: true })

    if (reviewsError) {
      return NextResponse.json(
        { error: reviewsError.message },
        { status: 500 }
      )
    }

    // 将评价按 teacher_id 分组并关联到教师
    const teachersWithReviews = teachers.map((teacher) => {
      const teacherReviews = reviews
        .filter((review) => review.teacher_id === teacher.id)
        .map(({ id, content, author }) => ({ id, content, author }))

      return {
        id: teacher.id,
        name: teacher.name,
        title: teacher.title,
        avatar: teacher.avatar,
        company: teacher.company,
        experience: teacher.experience,
        stats: {
          students: teacher.stats_students,
          employment: teacher.stats_employment,
          rating: teacher.stats_rating,
          awards: teacher.stats_awards,
        },
        introduction: teacher.introduction,
        expertise: teacher.expertise,
        courses: teacher.courses,
        highlights: teacher.highlights,
        links: {
          github: teacher.github,
          blog: teacher.blog,
          juejin: teacher.juejin,
        },
        projects: teacher.projects,
        achievements: teacher.achievements,
        reviews: teacherReviews,
      }
    })

    return NextResponse.json(teachersWithReviews)
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}