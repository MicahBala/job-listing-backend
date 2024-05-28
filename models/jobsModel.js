import mongoose from 'mongoose'

/**
 * @openapi
 * components:
 *  schemas:
 *    CreateJob:
 *      type: object
 *      required:
 *        - title
 *        - jobType
 *        - location
 *        - salaryRange
 *        - companyName
 *        - companyDesc
 *        - contactEmail
 *      properties:
 *        title:
 *          type: string
 *          default: Web Developer
 *        jobType:
 *          type: string
 *          default: full time
 *        description:
 *          type: string
 *          default: Web Dev with 5 years experience
 *        location:
 *          type: string
 *          default: Lagos- NG
 *        salaryRange:
 *          type: string
 *          default: '#2,000,000'
 *        companyName:
 *          type: string
 *          default: XYZ Company
 *        companyDesc:
 *          type: string
 *          default: The description of the company.
 *        contactEmail:
 *          type: string
 *          default: xyz@gmail.com
 *        contactPhone:
 *          type: string
 *          default: 00123456793
 *    GetAllJobs:
 *      type: object
 *      properties:
 *        title:
 *          type: string
 *        jobType:
 *          type: string
 *        description:
 *          type: string
 *        location:
 *          type: string
 *        salaryRange:
 *          type: string
 *        companyName:
 *          type: string
 *        companyDesc:
 *          type: string
 *        contactEmail:
 *          type: string
 *        contactPhone:
 *          type: string
 *    GetSingleJob:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *        title:
 *          type: string
 *        jobType:
 *          type: string
 *        description:
 *          type: string
 *        location:
 *          type: string
 *        salaryRange:
 *          type: string
 *        companyName:
 *          type: string
 *        companyDesc:
 *          type: string
 *        contactEmail:
 *          type: string
 *        contactPhone:
 *          type: string
 *    EditJob:
 *      type: object
 *      properties:
 *        title:
 *          type: string
 *        jobType:
 *          type: string
 *        description:
 *          type: string
 *        location:
 *          type: string
 *        salaryRange:
 *          type: string
 *        companyName:
 *          type: string
 *        companyDesc:
 *          type: string
 *        contactEmail:
 *          type: string
 *        contactPhone:
 *          type: string
 */

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  jobType: { type: String, required: true },
  description: { type: String },
  location: { type: String, required: true },
  salaryRange: { type: String, required: true },
  companyName: { type: String, required: true },
  companyDesc: { type: String, required: true },
  contactEmail: { type: String, required: true },
  contactPhone: { type: String },
})

export default mongoose.model('Job', jobSchema)
