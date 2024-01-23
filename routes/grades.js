import {Router} from 'express';
import Grade from '../models/grades.js';
// import { ObjectId } from "mongodb";


const router = new Router();


//* Get a grade entry from a single id
router.get("/:id", async (req, res) => {
    // let collection = await db.collection("grades");
    // let query = { _id: new ObjectId(req.params.id) };
    // let result = await collection.findOne(query);
    const grade = await Grade.find({});
    res.status(200).json(grade);

    // if (!result) res.send("Not found").status(404);
    // else res.send(result).status(200);
  });

//   //* Post route (add a new id and/or grades)
  // router.post('/', async(req,res) => {
  //   const collection = await db.collection('grades');
  //   const newDocument = req.body;
  //   console.log(newDocument);

//     if(newDocument.student_id){
//       newDocument.learner_id = newDocument.student_id;
//       delete newDocument.student_id;
//     }

//       const result = await collection.insertOne(newDocument);
//       res.send(result).status(204);
//     // using .send before .status allows for an acknowledgment that the student was created
//     // if .status is before .send then there will not be an acknowledgment but it will be created
//   });

router.post ('/:id/post-new-grades', async(req,res)=>{
  const newGrade = await Grade.create(req.body);
  res.status(203).json(newGrade);
});

router.post('/new-student', async(req,res) =>{
  const newStudent = await Grade.create('New Student');
  res.status(203).json(newStudent);
});

  
// //* PATCH for scores array

// router.patch('/learner/:id',(req,res) => {
//   const scoreChange = scores.find((s,i) =>{
//     if (s.id == req.params.id) {
//       for (const key in req.body) {
//         scores[i][key] = req.body[key];
//       }
//       return true;
//     }
//   })
// } )


//   // Get a student's grade data
  router.get("/student/:id", async (req, res) => {
    // redirecting student to learner since "student" has been replaced by "learner" in data
    res.redirect(`/grades/learner/${req.params.id}`); 
  });

//   //* Get request to: /learner/:id
//   router.get('/learner/:id', async(req,res) =>{
//     const collection = await db.collection("grades");
//     const query = { learner_id: Number(req.params.id) };
//     const result = await collection.find(query).toArray();
  
//     if (!result) res.send("Not found").status(404);
//     else res.send(result).status(200);
//   });
  
//   // Get a class's grade data
//   router.get("/class/:id", async (req, res) => {
//     let collection = await db.collection("grades");
//     let query = { class_id: Number(req.params.id) };
//     let result = await collection.find(query).toArray();
  
//     if (result.length < 1)res.status(404).send("Not found");
//     else res.send(result).status(200);
//   });
  
  export default router;
