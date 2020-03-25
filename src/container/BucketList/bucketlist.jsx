import React, { Component, Fragment } from 'react';

class BucketList extends Component {
    state = {
        order: 3
    }
    handlePlus = () => {
        this.setState ({
            order : this.state.order + 1
        })
    }
    handleMinus = () => {
        if (this.state.order > 0){
            this.setState ({
                order : this.state.order - 1
            })
        }
    }

    render() {
        return (
            <Fragment>             
                <div className="card">
                <p className="bucket-votes"></p>
                <div className="counter">
                    <p>Vote this to let others get inspired!</p>
                    <button className="vote" onClick={this.handlePlus}>VOTE</button>
                    <button className="unvote" onClick={this.handleMinus}>UNVOTE</button>
                    <div className="count">
                        <p>Total vote(s) : {this.state.order}</p>
                    </div>
                </div>
                </div>
            </Fragment>
        );
    }
}

export default BucketList;