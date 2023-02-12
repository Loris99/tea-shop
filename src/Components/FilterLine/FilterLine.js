import classes from "./FilterLine.module.css"
import { filterOptions } from "../DashBoard/Data"

const FilterLine = (props) => {

    const filterTypeChange = (event) => {
        props.updateFilterType(event.target.value)
    }
    return (
        <div className={classes.filterLineContainer}>
            <span>DashBoard</span>
            <select
                name="Options"
                className={classes.dropDown}
                onChange={filterTypeChange}
            >
                {/* for thed dropddown */}
                {filterOptions.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>

        </div>

    )
}
export default FilterLine;