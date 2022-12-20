import React from 'react'
import { NoteData, Tag } from './App'
import NoteForm from './NoteForm'

type NewNotesProps={
    onSubmit:(data:NoteData)=>void
    onAddTag:(tag:Tag)=>void
    availableTags:Tag[]
}

const NewNotes = ({onSubmit,onAddTag,availableTags}:NewNotesProps) => {
  return (
    <>
    <h1 className='mb-4'>New Notes</h1>
    <NoteForm  onSubmit={onSubmit} onAddTag={onAddTag} availableTags={availableTags} />
    </>
  )
}

export default NewNotes