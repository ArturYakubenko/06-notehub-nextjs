import { QueryClient, dehydrate, HydrationBoundary } from "@tanstack/react-query";
import {fetchNotes} from '@/lib/api'
import NotesClient from '@/app/notes/Notes.client'

 const  Notes: React.FC = async () => {
    const queryClient = new QueryClient()
    
    await queryClient.prefetchQuery({
        queryKey: ["notes", 1, ""], // початкова сторінка 1, пустий пошук
        queryFn: () => fetchNotes(1, "", 12),
    })


    return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient />
    </HydrationBoundary>
    )
}

export default Notes