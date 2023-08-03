import React, { Component } from 'react'
import OneNote from './OneNote';

export default class NoteList extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  showNoteItem = ()=>{
    return(
      this.props.noteData.map((value,key)=>(
        <OneNote
          key={key}
          noteTitle = {value.noteTitle}
          noteContent = {value.noteContent}
        />
      ))
    )
  }
  render() {
    console.log(this.props.noteData);
    return (
      <div className='col-md'>
        <div className="accordion" id="accordionPanelsStayOpenExample">
            {
            //  this.showNoteItem()
            }
        </div>
      </div>
    )
  }
}
