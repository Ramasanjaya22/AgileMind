import { databases } from "@/appwrite"

export const getTodosGroupedByColumn = async() =>{
    const data = await databases.listDocuments(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
        process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID!,
    )
    const 
}
