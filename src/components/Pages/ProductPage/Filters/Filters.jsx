import "./Filters.css";

const Filters = () => {
    return (
        <div className="container mt-4 mb-2">
            <div className="row mb-5">
                <h2> Men's Cloth</h2>
            </div>
            <div className="row">
                <div className="col">
                    <span className="fw-bold"> Filter by  </span>
                    <select name="size" id="size" className="option sizeOption">
                        <option disabled > Size </option>
                        <option> Large </option>
                        <option> Medium </option>
                        <option> Small </option>
                    </select>

                    <select name="color" id="color" className="colorOption option">
                        <option disabled> Color </option>
                        <option> Red </option>
                        <option> Blue </option>
                        <option> Black </option>
                    </select>
                </div>

                <div className="col text-end">
                    <span className="fw-bold"> Sort by  </span>
                    <select name="short" id="sort" className="option sizeOption">
                        <option> Newest </option>
                        <option> Oldest </option>
                        <option> High Price </option>
                        <option> Low Price </option>
                    </select>
                </div>
            </div>


        </div>
    )
}

export default Filters