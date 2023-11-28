import { dataTypes } from "./types";

export const getProjectsData = async() =>{
    const file = await fetch("/data.json");
    const data:dataTypes = await file.json()

    console.log(data.projects)
    return data.projects

}
