import React from 'react';

import { Table } from 'reactstrap';

const QETAComponent = (props) => {
    const {
        quality,
        efficiency,
        timeliness,
        onAverageChange,
    } = props;

    const getResult = (value) => {
        value = value / 100;

        if (value > 0 && value <= 0.5) {
            return 1.00;
        } else if (value > 0.51 && value <= 0.89) {
            return 2.00;
        } else if (value > 0.9 && value <= 1.14) {
            return 3.00;
        } else if (value > 1.15 && value <= 1.29) {
            return 4.00;
        } else if (value > 1.30) {
            return 5.00;
        } else {
            return 0;
        }
    }

    const qetRaw = [
        quality ?? 0,
        efficiency ?? 0,
        timeliness ?? 0,
    ]
    const qet = qetRaw.map(getResult);

    const sum = (prev, curr) => {
        return prev + curr;
    }

    const countNonZero = (arr) => {
        let counter = 0;

        arr.forEach(el => {
            if (el > 0) counter += 1;
        });

        return counter;
    }

    const average = React.useMemo(() => {
        const length = countNonZero(qet);
        let result = 0;

        try {
            result = (qet.reduce(sum, 0) / length) || 0;
        } catch (err) {
            console.log(err);
            return result;
        }

        return result;
    }, [qet]);

    React.useEffect(() => {
        if (!isNaN(average) && average) {
            onAverageChange?.(average);
        }
    }, [average]);
    
    return (
        <>
            <Table bordered>
                <thead>
                    <tr>
                        <th>
                            Quality
                        </th>
                        <th>
                            Efficiency
                        </th>
                        <th>
                            Timeliness
                        </th>
                        <th>
                            Average
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr scope="row">
                        <td>
                            { qet[0] || "-" }
                        </td>
                        <td>
                            { qet[1] || "-" }
                        </td>
                        <td>
                            { qet[2] || "-" }
                        </td>
                        <th>
                            { !isNaN(average) && average ? parseFloat(average).toFixed(2) : "-" }
                        </th>
                    </tr>
                </tbody>
            </Table>
        </>
    );
}


export default QETAComponent;