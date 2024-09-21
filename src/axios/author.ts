import { AuthorItem } from "../types/author"
import { graphQL } from "./client"

export const getAuthorsOfTheWeek = async() => {
    const {data} = await graphQL.get("/author/weekly")
    return data as AuthorItem[]
}