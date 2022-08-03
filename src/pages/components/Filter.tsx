import React, {useEffect,useState} from "react";
import Select from 'react-select';
import {useDispatch} from "react-redux";
import {changeSortBy} from "../../redux/slices/moviesSlice";
import {options} from '../components/react_select'
import '../components/react_select/styles.scss'
import {useAppSelector} from "../../hook";
import Search from "./Search";
import {IOptions} from '../../types/types'


const Filter = () => {

    interface findOptionType {
        value: string,
        label: string,
    }

    const {search_value} = useAppSelector(state=>state.moviesReducer)

    const dispatch = useDispatch()

    const default_option = {
        value:'popularity.desc',
        label:'popularity.desc'
    }

    const [selectedOption, setSelectedOption] = useState<IOptions>(default_option);

    // options.find((item: findOptionType) => item.value === default_option)

    useEffect(() => {
        dispatch(changeSortBy(selectedOption.value))
    }, [selectedOption])

    return (
        <div className="filter">
            <div className="filter_container">
                <h1>Filter</h1>
                <Search />
                <Select
                    classNamePrefix={search_value ? 'sort-none' : 'filter'}
                    defaultValue={selectedOption}
                    // @ts-ignore
                    onChange={setSelectedOption}
                    options={options}
                />
            </div>
        </div>
    )
}
export default Filter
