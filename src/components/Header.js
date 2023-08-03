import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header>
                {/* place navbar here */}
                <div className="p-5 mb-2 bg-light rounded-3">
                    <div className="container-fluid text-center">
                        <h1 className="display-5 fw-bold text-uppercase">Quản Lý Ghi Chú</h1>
                        <hr />
                        <p className="lead">Cách 2 - Dùng React Redux</p>
                        <button className='btn float-end' type='button' onClick={this.props.showAddForm}>Thêm Ghi Chú</button>
                    </div>
                </div>
            </header>
        )
    }
}
