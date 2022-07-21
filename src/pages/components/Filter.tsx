import React, {useEffect} from "react";
import Select from 'react-select';
import {useDispatch} from "react-redux";
import {changeSortBy} from "../../redux/slices/moviesSlice";
import {options} from '../components/react_select'
import '../components/react_select/styles.scss'
import {useAppSelector} from "../../hook";
import Search from "./Search";


const Filter = () => {

    interface findOptionType {
        value: string,
        label: string,
    }

    const dispatch = useDispatch()

    const default_option = useAppSelector(state => state.moviesReducer.sort_by)

    const [selectedOption, setSelectedOption] = React.useState(options.find((item: findOptionType) => item.value === default_option));

    React.useEffect(() => {
        dispatch(changeSortBy(selectedOption.value))
    }, [selectedOption])

    return (
        <div className="filter">
            <div className="filter_container">
                <h1>Filter</h1>
                <Search />
                <Select
                    classNamePrefix='filter'
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                />
            </div>
        </div>
    )
}
export default Filter
