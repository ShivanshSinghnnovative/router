<template>
    <h1>JOBS</h1>
  <div >
    <router-link  v-for="job in Jobs" :key="job.id" :to="{ path: `/jobs/${job.id}` }">
    <button>{{ job.title }}</button>
  </router-link>
  </div>
  
  </template>
  <script>
  export default {
    name: 'JobPage',
  
    data() {
      return {
        Jobs: ([
          { title: "UxDesigner" , id: "1", details: "loream"},
        { title: "WebDeveloper" , id: "2", details: "loream" },
        { title: "NodeDeveloper" , id: "3", details: "Korean" }
      ]),
  
    }
  },
  
  
  }
  </script>
  <style>
  button{
    border: none;
    cursor: pointer;
    background-color: lightcyan;
    width: 80%;
    font-size: 25px;
    padding: 1rem;
    margin: 1rem;
  }
  </style>