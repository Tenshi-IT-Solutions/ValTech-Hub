import { integer } from "drizzle-orm/gel-core";
import { json, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const CourseList = pgTable('courseList',{
    id:serial('id').primaryKey(),
    courseID:varchar('courseID').notNull(),
    name:varchar('name').notNull(),
    category:varchar('category').notNull(),
    level:varchar('level').notNull(),
    includeVideo:varchar('includeVideo').notNull().default("Yes"),
    courseOutput:json('courseOutput').notNull(),
    createdBy:varchar('createdBy').notNull(),
    userName:varchar('userName').notNull(),
    userProfileImage:varchar('userProfileImage'),
    courseBanner:varchar('courseBanner').default('/placeholder.png'),
    publish:varchar('publish').default(false)
})


export const Chapters=pgTable('chapters',{
    id:serial('id').primaryKey(),
    courseID:varchar('courseID').notNull(),
    chapterID:integer('chapterID').notNull(),
    content:json('content').notNull(),
    videoID:varchar('videoID').notNull()
})