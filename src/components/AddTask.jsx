import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import "./AddTask.scss"
import { SendOutlined } from "@ant-design/icons"
import { isEmpty } from "lodash"

import firebase from "../utils/firebase" 
import "firebase/firestore" 


const db = firebase.firestore(firebase)


export default function AddTaks() {
  let [task, set_task] = useState("")  


  function onSubmit(e) {
    e.preventDefault()
    
    if(isEmpty(task) == false) {
      db.collection("tasks").add({
        name: task,
        completed: false
      }).then(function() {
        console.log("Tarea creada")
      })
    }
  }
  
  return (
    <Form 
      className="add-task"
      onSubmit={onSubmit}
      onChange={(e)=> set_task(e.target.value)}
    >
      <input 
        type="text" 
        placeholder="Nueva tarea"
      />

      <Button type="submit">
        <SendOutlined />
      </Button>
    </Form>
  )
}
