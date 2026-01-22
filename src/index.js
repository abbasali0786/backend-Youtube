import mongoose from "mongoose";
import express from "express"
import { connectDB } from "./db/db.index.js";
import dotenv from "dotenv"

dotenv.config({
    path: './env'
})

connectDB()