import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import "./lineChart.css";
import {Chart} from 'chart.js/auto';

class LineChart extends Component {
  constructor() {
    super();
    this.state = {
      barChartData: {},
    };
    this.change0 = this.change0.bind(this);
    this.change1 = this.change1.bind(this);
  }

  componentDidMount() {
    this.change0();
  }

  change0() {
    this.setState({
      barChartData: {
        labels: ["January", "February", "March"],
        datasets: [
          {
            label: "3 Months",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [65, 59, 80],
          },
        ],
      },
    });
  }

  change1() {
    this.setState({
      barChartData: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "6 Months",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [49, 22, 23, 65, 43, 21],
          },
        ],
      },
    });
  }

  render() {
    return (
      <center>
        <div className="chart-container">
          {Object.keys(this.state.barChartData).length && (
            <Line data={this.state.barChartData} />
          )}
          <button onClick={this.change0}>Change to 3 months</button>
          <button onClick={this.change1}>Change to 6 months</button>
        </div>
      </center>
    );
  }
}

export default LineChart;
