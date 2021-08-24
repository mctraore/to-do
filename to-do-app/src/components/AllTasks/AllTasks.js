import React from 'react'
import DeleteButton from '../DeleteButton/DeleteButton'
const items = [{name: 'groom your room', finished: false, id: 1}, {name: 'go to the gym', finished: false, id: 2}];

const AllTasks = () => {
    return (
        <div className="all-tasks container">
            <h1>To Do App</h1>

            <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Enter to-do</label>
                <input type="email" class="form-control" id="to-do" placeholder="Clean my room"/>
                <button>Submit</button>
            </div>
            <table className="table">
                <thead>
                    <th>Task</th>
                    <th>Finished</th>
                    <th>Remove</th>
                </thead>
                <tbody>
                    {items.map(item => {
                        return <tr>
                                    <td>{item.name}</td>
                                    {item.finished ? <td>Done</td>:<td>Not Done</td>}
                                    <td><DeleteButton/></td>
                                </tr>})}
                </tbody>
            </table>

        </div>
    )
}

export default AllTasks
