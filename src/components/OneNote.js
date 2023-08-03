import React, { Component } from 'react'

export default class OneNote extends Component {
    render() {
        return (
            <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        {this.props.noteTitle}
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                    <div className="accordion-body">
                        {this.props.noteContent}
                    </div>
                </div>
            </div>
        )
    }
}
