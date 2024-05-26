import mongoose from 'mongoose'

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
