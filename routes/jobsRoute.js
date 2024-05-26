import express from 'express'
import Job from '../models/jobsModel.js'
import mongoose from 'mongoose'

const router = express.Router()

// Create a new Job
router.post('/', async (req, res) => {
  try {
    const {
      title,
      jobType,
      description,
      location,
      salaryRange,
      companyName,
      companyDesc,
      contactEmail,
      contactPhone,
    } = req.body

    if (
      !title ||
      !jobType ||
      !description ||
      !location ||
      !salaryRange ||
      !companyName ||
      !companyDesc ||
      !contactEmail
    ) {
      return res.status(400).json({ message: 'All fields are required' })
    }

    const newJob = {
      title,
      jobType,
      description,
      location,
      salaryRange,
      companyName,
      companyDesc,
      contactEmail,
      contactPhone,
    }

    const job = await Job.create(newJob)
    return res.status(201).send(job)
  } catch (error) {
    res.status(500).send({ status: 'Error', message: error.message })
  }
})

// Get All Jobs
router.get('/', async (req, res) => {
  try {
    const allJobs = await Job.find({})
    return res.status(200).json({
      status: 'Success',
      count: allJobs.length,
      data: allJobs,
    })
  } catch (error) {
    res.status(500).send({ status: 'Error', message: error.message })
  }
})

// Get a Single Job
router.get('/:jobId', async (req, res) => {
  try {
    const { jobId } = req.params
    if (!mongoose.Types.ObjectId.isValid(jobId)) {
      return res
        .status(400)
        .json({ status: 'Error', message: 'Invalid ID format' })
    }

    const job = await Job.findById(jobId)
    return res.status(200).json({ status: 'Success', data: job })
  } catch (error) {
    res.status(500).send({ status: 'Error', message: error.message })
  }
})

// Update a Job
router.put('/:jobId', async (req, res) => {
  try {
    const {
      title,
      jobType,
      location,
      salaryRange,
      CompanyName,
      companyDesc,
      conatctEmail,
      contactPhone,
    } = req.body

    const { jobId } = req.params

    if (!mongoose.Types.ObjectId.isValid(jobId)) {
      return res
        .status(400)
        .json({ status: 'Error', message: 'Invalid ID format' })
    }

    if (
      !title ||
      !jobType ||
      !location ||
      !salaryRange ||
      !CompanyName ||
      !companyDesc ||
      !conatctEmail ||
      !contactPhone
    ) {
      return res
        .status(400)
        .json({ status: 'Error', message: 'All fields are required' })
    }

    const result = await Job.findByIdAndUpdate(jobId, req.body, { new: true })

    if (!result) {
      return res.status(404).json({ status: 'Error', message: 'Job not found' })
    }

    return res
      .status(200)
      .json({ status: 'Success', message: 'Job updated successfully' })
  } catch (error) {
    res.status(500).send({ status: 'Error', message: error.message })
  }
})

// Delete a Job
router.delete('/:jobId', async (req, res) => {
  try {
    const { jobId } = req.params

    if (!mongoose.Types.ObjectId.isValid(jobId)) {
      return res
        .status(400)
        .json({ status: 'Error', message: 'Invalid ID format' })
    }

    const result = await Job.findByIdAndDelete(jobId)

    if (!result) {
      return res.status(404).json({ status: 'Error', message: 'Job not found' })
    }

    return res
      .status(200)
      .json({ status: 'Success', message: 'Job deleted successfully' })
  } catch (error) {
    return res.status(500).json({ status: 'Error', message: error.message })
  }
})

export default router
