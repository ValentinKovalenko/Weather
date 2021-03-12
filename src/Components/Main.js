import React  from 'react'


const Main = ({ getWeather, changeLang }) => {


    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <form className="d-flex" onSubmit = { getWeather }>
                    <input className="form-control me-2"
                    name='city'
                    type="text"
                    placeholder="City name..."
                    
                    />
                    <button className="btn btn-outline-success" type="submit">Add</button>
                </form>
                <select onClick={changeLang}>
                    <option  value="en">EN</option>
                    <option  value="ua">UA</option>
                    <option  value="ru">RU</option>
                </select>
               </div>
        </nav>
    )
}
export default Main