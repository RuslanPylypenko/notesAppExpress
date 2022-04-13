import express from 'express'
import notesRoutes from './routes/noteRoutes'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(notesRoutes)

app.listen(PORT, () => console.log(`Running on port ${PORT}`))
