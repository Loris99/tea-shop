import LineChartBox from "../Charts/LineChartBox/LineChartBox";
import { useState, useEffect } from 'react';
import React from 'react';
import BarChartBox from "../Charts/BarChartBox/BarChartBox";
import AreaChartBox from "../Charts/AreaChartBox/AreaChartBox";
import classes from "./DashBoard.module.css"
import FilterLine from "../FilterLine/FilterLine";
import { lastMonthData } from "./Data"
import { lastYearData } from "./Data"
import { lastWeekData } from "./Data"
import { lastDayData } from "./Data"
import { data } from "./Data"
import { pieData } from "./Data"
import PieChartBox from "../Charts/PieChartBox/PieChartBox";

const moment = require('moment');
const DashBoard = (props) => {

    const [ChartData, setChartData] = useState([]); //initailize the data whhich will be sent to the charts
    const [pieChartData, setPieChartData] = useState([]);//initailize the data whhich will be sent to pie charts
    const [filterType, setFilterType] = useState('LastMonth');//choose he filter Type
    const [isDataKey, setIsDataKey] = useState("week");//set the data in the charts
    const filterTypeHanlde = {
        lastMonth: "week",
        lastWeek: "day",
        lastYear: "month",
        lastDay: "time"
    }
    //choose the type of data which will be displayed
    useEffect(() => {
        if (filterType === 'LastMonth') {
            setChartData([])
            FilterDataLastMonth();
            setIsDataKey(filterTypeHanlde.lastMonth)
        }
        else if (filterType === 'LastWeek') {
            setChartData([])
            FilterDataLastWeek();
            setIsDataKey(filterTypeHanlde.lastWeek)
        }
        else if (filterType === 'LastYear') {
            setChartData([])
            FilterDataLastYear();
            setIsDataKey(filterTypeHanlde.lastYear)

        }
        else if (filterType === 'LastDay') {
            setChartData([])
            FilterDataLastDay();
            setIsDataKey(filterTypeHanlde.lastDay)

        }

    }, [filterType])
    //default state
    useEffect(() => {
        FilterDataLastMonth();
    }, [])
    //update after choosing from dropdown list
    const updateFilterType = (chosenType) => {
        setFilterType(chosenType)
    }
    //to display data from the last day
    const FilterDataLastDay = () => {
        const format = 'HH:mm:ss'
        const morning = moment("08:00:00", format);
        const noon = moment("12:00:00", format);
        const evening = moment("18:00:00", format);
        const night = moment("00:00:00", format);
        const yesterday = moment().subtract(1, "d").format('YYYY-MM-DD')
        const tempLastDayData = [...lastDayData];
        const tempPieData = [...pieData];

        data.map((item, index) => {
            const itemDate = moment(new Date(item.datetime)).format('YYYY-MM-DD').toString();//get item date
            const itemTime = moment(new Date(item.datetime)).format("HH:mm:ss").toString();//get item time

            //check if item of dat a matches yesterday which mean it was during the last day
            if (moment(itemDate).isSame(yesterday)) {
                if (moment(itemTime).isBetween(morning, noon), "[)") {//check which period of day was it
                    if (item.name === "Black Tea") {
                        tempLastDayData[0].listofBlackTea_totalItems++; //add to the data to send to charts
                        tempLastDayData[0].listofBlackTea_totalPrice += item.price;
                        tempPieData[0].value++; //add to the data to send to pie chart
                    }
                    else if (item.name === "Green Tea") {
                        tempLastDayData[0].listOfGreenTea_totalItems++;
                        tempLastDayData[0].listOfGreenTea_totalPrice += item.price;
                        tempPieData[1].value++;

                    }
                    else if (item.name === "White Tea") {
                        tempLastDayData[0].listOfWhiteTea_totalItems++;
                        tempLastDayData[0].listOfWhiteTea_totalPrice += item.price;
                        tempPieData[2].value++;
                    }
                    else if (item.name === "Yellow Tea") {
                        tempLastDayData[0].listOfYellowTea_totalItems++;
                        tempLastDayData[0].listOfYellowTea_totalPrice += item.price;
                        tempPieData[3].value++;
                    }

                }
                //check if it's afternoon

                else if (moment(itemTime).isBetween(noon, evening), "[)") {
                    if (item.name === "Black Tea") {

                        tempLastDayData[1].listofBlackTea_totalItems++;
                        tempLastDayData[1].listofBlackTea_totalPrice += item.price;
                        tempPieData[0].value++;
                    }
                    if (item.name === "Green Tea") {
                        tempLastDayData[1].listOfGreenTea_totalItems++;
                        tempLastDayData[1].listOfGreenTea_totalPrice += item.price;
                        tempPieData[1].value++;
                    }
                    if (item.name === "White Tea") {
                        tempLastDayData[1].listOfWhiteTea_totalItems++;
                        tempLastDayData[1].listOfWhiteTea_totalPrice += item.price;
                        tempPieData[2].value++;
                    }
                    if (item.name === "Yellow Tea") {
                        tempLastDayData[1].listOfYellowTea_totalItems++;
                        tempLastDayData[1].listOfYellowTea_totalPrice += item.price;
                        tempPieData[3].value++;

                    }

                }
                //check if it's eve
                else if (moment(itemTime).isBetween(evening, night), "[)") {
                    if (item.name === "Black Tea") {

                        tempLastDayData[2].listofBlackTea_totalItems++;
                        tempLastDayData[2].listofBlackTea_totalPrice += item.price;
                        tempPieData[0].value++;
                    }
                    if (item.name === "Green Tea") {
                        tempLastDayData[2].listOfGreenTea_totalItems++;
                        tempLastDayData[2].listOfGreenTea_totalPrice += item.price;
                        tempPieData[1].value++;
                    }
                    if (item.name === "White Tea") {
                        tempLastDayData[2].listOfWhiteTea_totalItems++;
                        tempLastDayData[2].listOfWhiteTea_totalPrice += item.price;
                        tempPieData[2].value++;
                    }
                    if (item.name === "Yellow Tea") {
                        tempLastDayData[2].listOfYellowTea_totalItems++;
                        tempLastDayData[2].listOfYellowTea_totalPrice += item.price;
                        tempPieData[3].value++;

                    }

                }
                //check if nigth
                else if (moment(itemTime).isBetween(morning, night), "[)") {
                    if (item.name === "Black Tea") {

                        tempLastDayData[3].listofBlackTea_totalItems++;
                        tempLastDayData[3].listofBlackTea_totalPrice += item.price;
                        tempPieData[0].value++;
                    }
                    else if (item.name === "Green Tea") {
                        tempLastDayData[3].listOfGreenTea_totalItems++;
                        tempLastDayData[3].listOfGreenTea_totalPrice += item.price;
                        tempPieData[1].value++;
                    }
                    else if (item.name === "White Tea") {
                        tempLastDayData[3].listOfWhiteTea_totalItems++;
                        tempLastDayData[3].listOfWhiteTea_totalPrice += item.price;
                        tempPieData[2].value++;
                    }
                    else if (item.name === "Yellow Tea") {
                        tempLastDayData[3].listOfYellowTea_totalItems++;
                        tempLastDayData[3].listOfYellowTea_totalPrice += item.price;
                        tempPieData[3].value++;

                    }
                }
            }
        })
        setChartData(tempLastDayData); //update char data
        setPieChartData(tempPieData);//update pie chardata

    }
    //based on prev year data
    const FilterDataLastYear = () => {
        //get the year range
        const yearRange = moment().subtract(1, 'y').format('YYYY-MM-DD');
        const today = moment().format('YYYY-MM-DD');
        const tempLastYearData = [...lastYearData];
        const tempPieData = [...pieData];

        data.map((item, index) => {
            const itemDate = moment(new Date(item.datetime)).format('YYYY-MM-DD').toString();
            const itemDay = moment(new Date(item.datetime)).format("MMM");//get speific onth of item
            if (moment(itemDate).isBetween(yearRange, today), "[]") { //check if item is in the past year 

                tempLastYearData.map((dayDate, i) => {//if they are in the same month add to data

                    if (itemDay === tempLastYearData[i].month) {
                        if (item.name === "Black Tea") {
                            tempLastYearData[i].listofBlackTea_totalItems++;
                            tempLastYearData[i].listofBlackTea_totalPrice += item.price;
                            tempPieData[0].value++;

                        }
                        else if (item.name === "Green Tea") {
                            tempLastYearData[i].listOfGreenTea_totalItems++;
                            tempLastYearData[i].listOfGreenTea_totalPrice += item.price;
                            tempPieData[1].value++;
                        }
                        else if (item.name === "White Tea") {
                            tempLastYearData[i].listOfWhiteTea_totalItems++;
                            tempLastYearData[i].listOfWhiteTea_totalPrice += item.price;
                            tempPieData[2].value++;
                        }
                        else if (item.name === "Yellow Tea") {
                            tempLastYearData[i].listOfYellowTea_totalItems++;
                            tempLastYearData[i].listOfYellowTea_totalPrice += item.price;
                            tempPieData[3].value++;

                        }
                    }
                })
            }
        })
        setChartData(tempLastYearData);
        setPieChartData(tempPieData)
    }
    //filter on last week
    const FilterDataLastWeek = () => {

        const weekRange = moment().subtract(7, 'd').format('YYYY-MM-DD');
        const today = moment().format('YYYY-MM-DD');
        const tempLastWeekData = [...lastWeekData];
        const tempPieData = [...pieData];
        data.map((item, index) => {
            const itemDate = moment(new Date(item.datetime)).format('YYYY-MM-DD').toString();
            const itemDay = moment(new Date(item.datetime)).format("ddd");
            if (moment(itemDate).isBetween(weekRange, today), "[]") { //chek if it's in the past week rage then check the day
                tempLastWeekData.map((dayDat, i) => {

                    if (itemDay === tempLastWeekData[i].day) {
                        if (item.name === "Black Tea") {
                            tempLastWeekData[i].listofBlackTea_totalItems++;
                            tempLastWeekData[i].listofBlackTea_totalPrice += item.price;
                            tempPieData[0].value++;
                        }
                        if (item.name === "Green Tea") {
                            tempLastWeekData[i].listOfGreenTea_totalItems++;
                            tempLastWeekData[i].listOfGreenTea_totalPrice += item.price;
                            tempPieData[1].value++;
                        }
                        if (item.name === "White Tea") {
                            tempLastWeekData[i].listOfWhiteTea_totalItems++;
                            tempLastWeekData[i].listOfWhiteTea_totalPrice += item.price;
                            tempPieData[2].value++;
                        }
                        if (item.name === "Yellow Tea") {
                            tempLastWeekData[i].listOfYellowTea_totalItems++;
                            tempLastWeekData[i].listOfYellowTea_totalPrice += item.price;
                            tempPieData[3].value++;

                        }
                    }
                })
            }
        })
        setChartData(tempLastWeekData);
        setPieChartData(tempPieData);
    }

    //filter based on last month
    const FilterDataLastMonth = () => {
        const week4Range = moment().subtract(7, 'd').format('YYYY-MM-DD');//ranges
        const week3Range = moment().subtract(14, 'd').format('YYYY-MM-DD');
        const week2Range = moment().subtract(21, 'd').format('YYYY-MM-DD');
        const week1Range = moment().subtract(28, 'd').format('YYYY-MM-DD');
        const today = moment().format('YYYY-MM-DD');
        const tempLastMonthData = [...lastMonthData];
        const tempPieData = [...pieData];

        data.map((item, index) => {
            const itemDate = moment(new Date(item.datetime)).format('YYYY-MM-DD').toString();
            if (moment(itemDate).isBetween(week1Range, week2Range), "[]") {
                if (item.name === "Black Tea") {
                    tempLastMonthData[0].listofBlackTea_totalItems++;
                    tempLastMonthData[0].listofBlackTea_totalPrice += item.price;
                    tempPieData[0].value++;
                }
                if (item.name === "Green Tea") {
                    tempLastMonthData[0].listOfGreenTea_totalItems++;
                    tempLastMonthData[0].listOfGreenTea_totalPrice += item.price;
                    tempPieData[1].value++;
                }
                if (item.name === "White Tea") {
                    tempLastMonthData[0].listOfWhiteTea_totalItems++;
                    tempLastMonthData[0].listOfWhiteTea_totalPrice += item.price;
                    tempPieData[2].value++;
                }
                if (item.name === "Yellow Tea") {
                    tempLastMonthData[0].listOfYellowTea_totalItems++;
                    tempLastMonthData[0].listOfYellowTea_totalPrice += item.price;
                    tempPieData[3].value++;

                }

            }
            if (moment(itemDate).isBetween(week2Range, week3Range), "[]") {
                if (item.name === "Black Tea") {

                    tempLastMonthData[1].listofBlackTea_totalItems++;
                    tempLastMonthData[1].listofBlackTea_totalPrice += item.price;
                    tempPieData[0].value++;
                }
                if (item.name === "Green Tea") {
                    tempLastMonthData[1].listOfGreenTea_totalItems++;
                    tempLastMonthData[1].listOfGreenTea_totalPrice += item.price;
                    tempPieData[1].value++;
                }
                if (item.name === "White Tea") {
                    tempLastMonthData[1].listOfWhiteTea_totalItems++;
                    tempLastMonthData[1].listOfWhiteTea_totalPrice += item.price;
                    tempPieData[2].value++;
                }
                if (item.name === "Yellow Tea") {
                    tempLastMonthData[1].listOfYellowTea_totalItems++;
                    tempLastMonthData[1].listOfYellowTea_totalPrice += item.price;
                    tempPieData[3].value++;

                }

            }

            if (moment(itemDate).isBetween(week3Range, week4Range), "[]") {
                if (item.name === "Black Tea") {

                    tempLastMonthData[2].listofBlackTea_totalItems++;
                    tempLastMonthData[2].listofBlackTea_totalPrice += item.price;
                    tempPieData[0].value++;
                }
                if (item.name === "Green Tea") {
                    tempLastMonthData[2].listOfGreenTea_totalItems++;
                    tempLastMonthData[2].listOfGreenTea_totalPrice += item.price;
                    tempPieData[1].value++;
                }
                if (item.name === "White Tea") {
                    tempLastMonthData[2].listOfWhiteTea_totalItems++;
                    tempLastMonthData[2].listOfWhiteTea_totalPrice += item.price;
                    tempPieData[2].value++;
                }
                if (item.name === "Yellow Tea") {
                    tempLastMonthData[2].listOfYellowTea_totalItems++;
                    tempLastMonthData[2].listOfYellowTea_totalPrice += item.price;
                    tempPieData[3].value++;

                }

            }
            //check if the week4 of the month
            if (moment(itemDate).isBetween(week4Range, today), "[]") {
                if (item.name === "Black Tea") {

                    tempLastMonthData[3].listofBlackTea_totalItems++;
                    tempLastMonthData[3].listofBlackTea_totalPrice += item.price;
                    tempPieData[0].value++;
                }
                if (item.name === "Green Tea") {
                    tempLastMonthData[3].listOfGreenTea_totalItems++;
                    tempLastMonthData[3].listOfGreenTea_totalPrice += item.price;
                    tempPieData[1].value++;
                }
                if (item.name === "White Tea") {
                    tempLastMonthData[3].listOfWhiteTea_totalItems++;
                    tempLastMonthData[3].listOfWhiteTea_totalPrice += item.price;
                    tempPieData[2].value++;
                }
                if (item.name === "Yellow Tea") {
                    tempLastMonthData[3].listOfYellowTea_totalItems++;
                    tempLastMonthData[3].listOfYellowTea_totalPrice += item.price;
                    tempPieData[3].value++;
                }
            }
        })
        setChartData(tempLastMonthData);
        setPieChartData(tempPieData);
    }
    return (
        <>
            <FilterLine filterType={filterType} updateFilterType={updateFilterType} />

            <div className={classes.dashBoardContainer}>
                <div className={classes.boxContainer}>

                    <div className={classes.chartTitle}>Line Chart for Total number of Sales </div>
                    <LineChartBox isDataKey={isDataKey} filterType={filterType} ChartData={ChartData} />
                </div>
                <div className={classes.boxContainer}>
                    <div className={classes.chartTitle}>Stacked Bar Chart for Total number of items sold</div>
                    <BarChartBox isDataKey={isDataKey} filterType={filterType} ChartData={ChartData} />
                </div>
                <div className={classes.boxContainer}>
                    <div className={classes.chartTitle} >Area Chart for Total number of items sold</div>
                    <AreaChartBox isDataKey={isDataKey} filterType={filterType} ChartData={ChartData} />
                </div>
                <div className={classes.boxContainer}>
                    <div className={classes.chartTitle} >Pie Chart for Total number of items sold</div>
                    <PieChartBox pieChartData={pieChartData} filterType={filterType} />
                </div>
            </div></>
    )

}
export default DashBoard;