import path from 'path'
import dotenv from 'dotenv'

// ----------------------------------------
// Config environment variables for testing
dotenv.config({
  path: path.resolve('./tests/config/.env')
})
