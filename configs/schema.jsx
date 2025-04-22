import { integer } from "drizzle-orm/gel-core";
import { boolean, json, pgTable, serial, varchar } from "drizzle-orm/pg-core";

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

export const USER_TABLE=pgTable('users',{
    id:serial().primaryKey(),
    name:varchar().notNull(),
    email:varchar().notNull(),
    isMember:boolean().default(false),
    customerId:varchar()

})

export const PAYMENT_RECORD_TABLE=pgTable('paymentRecord',{
    id:serial().primaryKey(),
    email:varchar().notNull(),
    customerId:varchar(),
    sessionId:varchar()
})