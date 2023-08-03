import React, { Component } from 'react';
import { useState } from "react";
function Action(props){

    const [noteTitle, setNoteTitle] = useState();
    const [noteContent, setNoteContent] = useState();
   
        return (
            < div className="col-4"   >
                <form>
                    <div className="card">
                        <div className='card-header d-flex'>
                            <h5 className="text-center title">Thêm ghi chú mới</h5>
                            <i className="close-btn fa fa-close align-self-center" aria-hidden="true"
                            />
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor='noteTitle'>Tiêu Đề</label>
                                <input type="text" className="form-control" name='noteTitle' required={true} aria-describedby="helpId" placeholder='Tiêu đề ghi chú'
                                onChange={(event)=>{setNoteTitle(event.target.value)}}
                                />
                            </div>
                            <div className="form-group" >
                                <label htmlFor='noteContent'>Nội dung</label>
                                <textarea className="form-control" name='noteContent' required={true} aria-describedby="helpId" placeholder='Nội dung ghi chú' 
                                onChange={(event)=>{setNoteContent(event.target.value)}}/>
                            </div>
                            <div className="form-group">
                                <button
                                    type="reset" className="btn btn-primary mt-3 float-end"
                                    onClick={()=>props.addNewNote(noteTitle,noteContent)}
                                >Lưu lại</button>
                            </div>
                        </div>
                    </div>
                </form >
            </div >
        )
    }

export default Action;
