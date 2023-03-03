import React from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar, Doughnut } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";
// layout for this page
import Admin from "layouts/Admin";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";
import Header from "@components/Headers/Header.js";
import useData from "@hooks/useData";


const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'OPCR & IPCR Information',
    },
  },
};

const Dashboard = (props) => {
  const {
    data,
    error,
    isLoading,
    mutate
  } = useData(10000);
  
  const readyData = React.useMemo(() => {
    if (data) {
      return { ...data }
    } else if (isLoading) {
      return {
        totalSubmitted: 'Loading...',
        totalUsers: 'Loading...',
        graphData: null,
      }
    } else if (error) {
      return {
        totalSubmitted: 'Please reload the page!',
        totalUsers: 'Please reload the page!',
      }
    }
  }, [data, error, isLoading]);

  const graphMonthsData = React.useMemo(() => {
    if (data && data?.graphData) {
      const sorted = data.graphData.sort((a, b) => a.month.localeCompare(b.month));
      const groupedByMonth = sorted.reduce((acc, { month, count }) => {
        const monthKey = month.slice(0, 7); // extract year and month part of the string
        acc[monthKey] = { month: monthKey, count };
        return acc;
      }, {});

      const newGraphData = Array.from({ length: 12 }, (_, i) => {
        const month = `${new Date().getFullYear()}-${String(i + 1).padStart(2, '0')}`;
        return groupedByMonth[month] || { month, count: 0 };
      });

      return {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Total Submission For Each Month",
            data: newGraphData.map(datum => datum.count),
            maxBarThickness: 10,
          },
        ],
      }
    }
  }, [data])

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-light ls-1 mb-1">
                      Overview
                    </h6>
                    <h2 className="mb-0">OPCR / IPCR submissions for {new Date().getFullYear()}</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                  <Bar
                    data={graphMonthsData}
                    options={options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4">
            <div className="bg-white p-5 rounded">
              <Row className="align-items-center">
                <div className="col">
                  <h6 className="text-uppercase text-muted ls-1 mb-1">
                    System Information
                  </h6>
                  <h2 className="mb-0">Total submissions</h2>
                </div>
              </Row>
              <h1>{readyData.totalSubmitted}</h1>
              <p>Forms</p>
              <hr/>
              <Row className="align-items-center">
                <div className="col">
                  <h6 className="text-uppercase text-muted ls-1 mb-1">
                    
                  </h6>
                  <h2 className="mb-0">Total users</h2>
                </div>
              </Row>
              <h1>{readyData.totalUsers}</h1>
              <p>Users</p>
            </div>
          </Col>
        </Row>
      </Container>
      
    </>
  );
};

Dashboard.layout = Admin;

export default Dashboard;
