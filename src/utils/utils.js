import axios from "axios"

function getData(){
  return  axios.get("https://json-server-mocker-mahesh.herokuapp.com/trendingnews")
    
    
}
export {getData}
